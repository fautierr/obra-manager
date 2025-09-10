type ConcreteType = 'H17' | 'H21' | 'H24'

interface CalculateInput {
  categoryId: number
  ancho?: number // en metros
  largo?: number
  profundidad?: number
  concreteType?: ConcreteType // para cimientos
}

interface FoundationResult {
  cemento?: number // bolsas de 50 kg
  arena?: number // m³
  piedra?: number // m³
}

export function calculateMaterials(input: CalculateInput) {
  switch (input.categoryId) {
    case 1: // Cimientos
      return calculateFoundation({
        ancho: input.ancho!,
        largo: input.largo!,
        profundidad: input.profundidad!,
        concreteType: input.concreteType!,
      })
    // case 2: return calculateWalls(input)
    // case 3: return calculateSlab(input)
    default:
      throw new Error('Categoría no soportada')
  }
}

function calculateFoundation({
  ancho,
  largo,
  profundidad,
  concreteType,
}: {
  ancho: number
  largo: number
  profundidad: number
  concreteType: ConcreteType
}): { result: FoundationResult; recommendationBuy: FoundationResult } {
  // Volumen en m³
  const volumen = ancho * largo * profundidad

  // Dosificaciones base (por m³ de hormigón)
  const ratios: Record<
    ConcreteType,
    { cemento: number; arena: number; piedra: number }
  > = {
    H17: { cemento: 7.5, arena: 0.6, piedra: 0.9 },
    H21: { cemento: 10.2, arena: 0.75, piedra: 1.1 },
    H24: { cemento: 11.5, arena: 0.8, piedra: 1.2 },
  }

  const r = ratios[concreteType]

  // Aplicamos fórmula con 10% de desperdicio
  const cemento = Math.ceil(volumen * r.cemento * 1.1) // redondeo bolsas
  const arena = +(volumen * r.arena * 1.1).toFixed(2)
  const piedra = +(volumen * r.piedra * 1.1).toFixed(2)

  const result: FoundationResult = { cemento, arena, piedra }

  // Recomendación de compra (redondeando hacia arriba)
  const recommendationBuy = {
    cemento: Math.ceil(result.cemento || 0), // bolsas
    arena: Math.ceil(result.arena || 0), // bolsones m³
    piedra: Math.ceil(result.piedra || 0), // bolsones m³
  }

  console.log('📊 Cálculo exacto:', result)
  console.log('🛒 Recomendación de compra:', recommendationBuy)

  console.log(`📊 Resultados para cimiento ${concreteType}`)
  console.log(result)

  return { result, recommendationBuy }
}
/*
    calculateMaterials({
  categoryId: 1,
  ancho: 0.30,
  largo: 10,
  profundidad: 0.50,
  concreteType: "H21",
});

*/
