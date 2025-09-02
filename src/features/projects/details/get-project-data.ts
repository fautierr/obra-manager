// data/projectData.ts
export const getProjectData = async () => {
  await new Promise((res) => setTimeout(res, 2000)) // simula el delay
  return {
    name: 'Casa CKAZ',
    location: 'Ciudad de México',
    status: { key: 'pending', label: 'Pendiente', color: 'warning' },
    startDate: '01-01-2025',
    endDate: '31-01-2025',
    clientName: 'Juan Pérez',
    clientEmail: 'juanperez@example.com',
    architect: 'Alaniz López',
    builder: 'Constructora XYZ',
    notes: 'Tener en cuenta las condiciones climáticas',
  }
}
