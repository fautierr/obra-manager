export type ProjectOptions = {
  id: number
  name: string
  description: string
  showIf: (count: number) => boolean
  img?: string
}
export const projectCreationOptions: ProjectOptions[] = [
  {
    id: 1,
    name: 'Explorar un proyecto de ejemplo',
    description:
      'Conocé la app con un proyecto ya armado, luego podes editarlo y adaptarlo a tus necesidades.',
    showIf: (count: number) => count === 0,
    img: '/assets/images/opt-1-1.webp',
  },
  {
    id: 2,
    name: 'Crear un proyecto rápido',
    description:
      'Definí solo nombre y descripción, y completá los detalles más adelante.',
    img: '/assets/images/opt-2-1.webp',
    showIf: () => true,
  },
  {
    id: 3,
    name: 'Crear un proyecto desde cero',
    description:
      'Cargá nombre, descripción, categorías y materiales ahora mismo.',
    img: '/assets/images/opt-3-1.webp',
    showIf: () => true,
  },
  {
    id: 4,
    name: 'Duplicar un proyecto existente',
    description: 'Usá la estructura de otro proyecto como base con sus datos.',
    img: '/assets/images/opt-4-1.webp',
    showIf: (count: number) => count > 0,
  },
]
