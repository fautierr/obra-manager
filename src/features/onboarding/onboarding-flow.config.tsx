import {
  CategoriesModule,
  MaterialsModule,
  ProjectDataModule,
} from './onboarding.module'

export type ProjectStepKey =
  | 'option1_exampleProject'
  | 'option2_quickProject_data'
  | 'option3_createFromScratch_data'
  | 'option3_createFromScratch_categories'
  | 'option3_createFromScratch_materials'

export type FlowButton = {
  label: string
  action: 'next' | 'prev' | 'create' | 'backToOptions'
  step?: ProjectStepKey
}

export type FlowStep = {
  key: ProjectStepKey
  title: string
  subtitle: string
  // component: React.FC
  component: React.ReactNode
  buttons: FlowButton[]
}

export type FlowOption = {
  id: number
  name: string
  description: string
  image: string
  showIf: (count: number) => boolean
  steps: FlowStep[]
}

export const onboardingIntro = {
  title: '¡Comencemos!',
  subtitle:
    'Elegí una opción para crear tu proyecto, luego podrás actualizar sus datos si así lo deseas.',
}

export const onboardingFlow: FlowOption[] = [
  {
    id: 1,
    name: 'Explorar un proyecto de ejemplo',
    description:
      'Ves un proyecto cargado de ejemplo. Luego podés crear el tuyo.',
    image: '/assets/images/opt-1.webp',
    showIf: (count: number) => count === 0,
    steps: [
      {
        key: 'option1_exampleProject',
        title: 'Proyecto de ejemplo',
        subtitle:
          'Ves un proyecto cargado de ejemplo. Luego podés crear el tuyo.',
        component: <p>Proyecto de ejemplo renderizado aquí</p>,
        buttons: [
          { label: 'Volver a opciones', action: 'backToOptions' },
          { label: 'Crear proyecto', action: 'create' },
        ],
      },
    ],
  },
  {
    id: 2,
    name: 'Crear un proyecto rápido',
    description:
      'Definí solo nombre y descripción, y completá los detalles más adelante.',
    image: '/assets/images/opt-2.webp',
    showIf: () => true,
    steps: [
      {
        key: 'option2_quickProject_data',
        title: 'Crear proyecto rápido',
        subtitle: 'Definí solo nombre y descripción.',
        component: <p>Formulario rápido de proyecto aquí</p>,
        buttons: [
          { label: 'Volver a opciones', action: 'backToOptions' },
          { label: 'Crear proyecto', action: 'create' },
        ],
      },
    ],
  },
  {
    id: 3,
    name: 'Crear un proyecto desde cero',
    description:
      'Cargá nombre, descripción, categorías y materiales ahora mismo.',
    image: '/assets/images/opt-3.webp',
    showIf: () => true,
    steps: [
      {
        key: 'option3_createFromScratch_data',
        title: 'Crear un proyecto desde cero',
        subtitle: 'Elegi un nombre y la descripción para tu proyecto.',
        component: <ProjectDataModule />,
        buttons: [
          { label: 'Volver a opciones', action: 'backToOptions' },
          {
            label: 'Cargar categorías',
            action: 'next',
            step: 'option3_createFromScratch_categories',
          },
        ],
      },
      {
        key: 'option3_createFromScratch_categories',
        title: 'Categorias de tu proyecto',
        subtitle: 'Seleccioná las que aplican a tu proyecto.',
        component: <CategoriesModule />,
        buttons: [
          {
            label: 'Volver a datos',
            action: 'prev',
            step: 'option3_createFromScratch_data',
          },
          {
            label: 'Cargar materiales',
            action: 'next',
            step: 'option3_createFromScratch_materials',
          },
        ],
      },
      {
        key: 'option3_createFromScratch_materials',
        title: 'Nos queda un solo paso',
        subtitle: 'Cargá los materiales para completar tu proyecto.',
        component: <MaterialsModule />,
        buttons: [
          {
            label: 'Volver a categorías',
            action: 'prev',
            step: 'option3_createFromScratch_categories',
          },
          { label: 'Crear proyecto', action: 'create' },
        ],
      },
    ],
  },
]
