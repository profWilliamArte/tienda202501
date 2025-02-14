import React, { useState } from "react";
import { TabView, TabPanel } from "primereact/tabview";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Checkbox } from "primereact/checkbox";
import { Dropdown } from "primereact/dropdown";

const Encuesta = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [formData, setFormData] = useState({
    personalInfo: {
      name: "",
      birthDate: "",
      ssnItin: "",
      email: "",
      phone: "",
      address: "",
      spouseName: "",
      spouseBirthDate: "",
      spouseSsnItin: "",
      spouseEmail: "",
      spousePhone: "",
    },
    maritalStatus: {
      status: "",
      dependents: [],
    },
    income: {},
    expenses: {},
    lifeEvents: {},
    consent: false,
  });

  const handleNext = () => {
    setActiveIndex((prevIndex) => prevIndex + 1);
  };

  const handlePrev = () => {
    setActiveIndex((prevIndex) => prevIndex - 1);
  };

  const handleSubmit = () => {
    console.log("Datos del formulario:", formData);
    alert("Formulario enviado");
  };

  return (
    <div className="container">
      <TabView activeIndex={activeIndex} onTabChange={(e) => setActiveIndex(e.index)} style={{fontSize: '10px', padding: '10px' }} className="">
        {/* Paso 1: Información personal */}
        <TabPanel header="Paso 1: Información Personal">
          <p>Información del Contribuyente</p>
          <InputText
            value={formData.personalInfo.name}
            onChange={(e) =>
              setFormData({
                ...formData,
                personalInfo: { ...formData.personalInfo, name: e.target.value },
              })
            }
            placeholder="Nombre"
            className="w-full mb-2"
          />
          <InputText
            value={formData.personalInfo.birthDate}
            onChange={(e) =>
              setFormData({
                ...formData,
                personalInfo: { ...formData.personalInfo, birthDate: e.target.value },
              })
            }
            placeholder="Fecha de nacimiento"
            className="w-full mb-2"
          />
          <InputText
            value={formData.personalInfo.ssnItin}
            onChange={(e) =>
              setFormData({
                ...formData,
                personalInfo: { ...formData.personalInfo, ssnItin: e.target.value },
              })
            }
            placeholder="SSN/ITIN"
            className="w-full mb-2"
          />
          {/* Repetir para correo, teléfono, dirección */}
          <h3>Información del Cónyuge</h3>
          <InputText
            value={formData.personalInfo.spouseName}
            onChange={(e) =>
              setFormData({
                ...formData,
                personalInfo: { ...formData.personalInfo, spouseName: e.target.value },
              })
            }
            placeholder="Nombre del cónyuge"
            className="w-full mb-2"
          />
          {/* Repetir para otros campos del cónyuge */}
        </TabPanel>

        {/* Paso 2: Estado civil e información familiar */}
        <TabPanel header="Paso 2: Estado Civil e Información Familiar">
          <p>Estado Civil</p>
          <Dropdown
            value={formData.maritalStatus.status}
            options={[
              { label: "Soltero", value: "single" },
              { label: "Casado", value: "married" },
              { label: "Divorciado", value: "divorced" },
            ]}
            onChange={(e) =>
              setFormData({
                ...formData,
                maritalStatus: { ...formData.maritalStatus, status: e.value },
              })
            }
            placeholder="Seleccione su estado civil"
            className="w-full mb-2"
          />
          <h3>Dependientes</h3>
          {/* Aquí puedes agregar campos dinámicos para dependientes */}
        </TabPanel>

        {/* Paso 3: Ingresos */}
        <TabPanel header="Paso 3: Ingresos">
          <p>Ingresos</p>
          <Checkbox
            checked={formData.income.salary}
            onChange={(e) =>
              setFormData({
                ...formData,
                income: { ...formData.income, salary: e.checked },
              })
            }
          />
          <label className="ml-2">¿Salarios o sueldos?</label>
          {/* Repetir para otras preguntas de ingresos */}
        </TabPanel>

        {/* Paso 4: Gastos */}
        <TabPanel header="Paso 4: Gastos">
          <p>Gastos</p>
          <Checkbox
            checked={formData.expenses.retirementContributions}
            onChange={(e) =>
              setFormData({
                ...formData,
                expenses: { ...formData.expenses, retirementContributions: e.checked },
              })
            }
          />
          <label className="ml-2">¿Aportaciones a cuenta de jubilación?</label>
          {/* Repetir para otras preguntas de gastos */}
        </TabPanel>

        {/* Paso 5: Acontecimientos importantes */}
        <TabPanel header="Paso 5: Acontecimientos Importantes">
          <p>Acontecimientos Importantes</p>
          <Checkbox
            checked={formData.lifeEvents.healthSavingsAccount}
            onChange={(e) =>
              setFormData({
                ...formData,
                lifeEvents: { ...formData.lifeEvents, healthSavingsAccount: e.checked },
              })
            }
          />
          <label className="ml-2">¿Tuvo una cuenta de ahorros para gastos médicos?</label>
          {/* Repetir para otras preguntas de acontecimientos importantes */}
        </TabPanel>

        {/* Paso 6: Consentimiento y firma */}
        <TabPanel header="Paso 6: Consentimiento y Firma">
          <p>Consentimiento</p>
          <Checkbox
            checked={formData.consent}
            onChange={(e) =>
              setFormData({
                ...formData,
                consent: e.checked,
              })
            }
          />
          <label className="ml-2">Certifico que la información es verdadera.</label>
          <Button
            label="Enviar"
            onClick={handleSubmit}
            disabled={!formData.consent}
            className="mt-3"
          />
        </TabPanel>
      </TabView>

      <div style={{ marginTop: "1rem", textAlign: "right" }}>
        <Button label="Anterior" onClick={handlePrev} disabled={activeIndex === 0} />
        {activeIndex < 5 ? (
          <Button label="Siguiente" onClick={handleNext} className="p-button-secondary ml-2" />
        ) : null}
      </div>
    </div>
  );
};

export default Encuesta;