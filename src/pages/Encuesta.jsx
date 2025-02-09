import React, { useState } from "react";
import { Steps, Step } from "react-step-builder";

const Encuesta = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    fechaNacimiento: "",
    ssOrItin: "",
    correoElectronico: "",
    telefono: "",
    direccion: "",
    estadoCivil: "",
    dependientes: [],
    ingresos: {},
    gastos: {},
    acontecimientos: {},
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    console.log("Datos enviados:", formData);
    alert("Encuesta enviada con éxito");
  };

  return (
    <div className="multi-step-form">
      <h2>Encuesta Fiscal</h2>
      <Steps>
        {/* Paso 1: Información Personal */}
        <Step>
          <h3>Paso 1: Información Personal</h3>
          <label>
            Nombre:
            <input
              type="text"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
            />
          </label>
          <label>
            Fecha de Nacimiento:
            <input
              type="date"
              name="fechaNacimiento"
              value={formData.fechaNacimiento}
              onChange={handleChange}
            />
          </label>
          <label>
            SS o ITIN:
            <input
              type="text"
              name="ssOrItin"
              value={formData.ssOrItin}
              onChange={handleChange}
            />
          </label>
          <label>
            Correo Electrónico:
            <input
              type="email"
              name="correoElectronico"
              value={formData.correoElectronico}
              onChange={handleChange}
            />
          </label>
          <label>
            Teléfono:
            <input
              type="tel"
              name="telefono"
              value={formData.telefono}
              onChange={handleChange}
            />
          </label>
          <label>
            Dirección:
            <input
              type="text"
              name="direccion"
              value={formData.direccion}
              onChange={handleChange}
            />
          </label>
        </Step>

        {/* Paso 2: Estado Civil y Dependientes */}
        <Step>
          <h3>Paso 2: Estado Civil y Dependientes</h3>
          <label>
            Estado Civil:
            <select
              name="estadoCivil"
              value={formData.estadoCivil}
              onChange={handleChange}
            >
              <option value="">Selecciona una opción</option>
              <option value="soltero">Soltero</option>
              <option value="casado">Casado</option>
              <option value="divorciado">Divorciado</option>
              <option value="viudo">Viudo</option>
            </select>
          </label>
          <label>
            ¿Tienes dependientes?
            <input
              type="checkbox"
              name="tieneDependientes"
              checked={formData.dependientes.length > 0}
              onChange={(e) => {
                if (!e.target.checked) {
                  setFormData({ ...formData, dependientes: [] });
                }
              }}
            />
          </label>
          {formData.tieneDependientes && (
            <div>
              <h4>Agregar Dependiente</h4>
              <input
                type="text"
                placeholder="Nombre"
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    dependientes: [
                      ...formData.dependientes,
                      { nombre: e.target.value },
                    ],
                  })
                }
              />
            </div>
          )}
        </Step>

        {/* Paso Final: Resumen y Envío */}
        <Step>
          <h3>Resumen y Envío</h3>
          <p>Revisa tus datos antes de enviar:</p>
          <pre>{JSON.stringify(formData, null, 2)}</pre>
          <button onClick={handleSubmit}>Enviar Encuesta</button>
        </Step>
      </Steps>
    </div>
  );
};

export default Encuesta;