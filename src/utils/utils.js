// utils.js
export const formatNumber = (value) => {
    return (value == null ? "0" : parseFloat(value).toLocaleString('es-VE', {
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    }).replace(',', '.'));
};

export const formatCurrency = (value) => {
    if (value == null) {
        return "0,00";
    }
    const numberValue = parseFloat(value);
    const formattedValue = numberValue.toLocaleString('es-VE', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });
    return `${formattedValue.replace(',', '.')}`;
};

export const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('es-ES'); // Format dd/mm/yyyy
};
export const formatTime = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit', second: '2-digit' }); // Formato HH:mm:ss
};