export interface Ingredient {
    name: string;
    category: string;
    stocked: boolean
}

// Categories
const gemueseObst = "Gemüse/Obst"
const fleisch = "Fleisch"
const haltbareLebensmittel = "Haltbare Lebensmittel"
const kuehlwaren = "Kühlwaren"

export const brokkoli: Ingredient = { name: "Brokkoli", category: gemueseObst, stocked: false }
export const zwiebel: Ingredient = { name: "Zwiebel", category: gemueseObst, stocked: false }
export const knoblauchzehe: Ingredient = { name: "Knoblauchzehe", category: gemueseObst, stocked: false }
export const getrockneteTomate: Ingredient = { name: "getrocknete Tomate", category: haltbareLebensmittel, stocked: false }
export const oel: Ingredient = { name: "Öl", category: haltbareLebensmittel, stocked: true }
export const kurzeNudeln: Ingredient = { name: "kurze Nudeln", category: haltbareLebensmittel, stocked: false }
export const bruehe: Ingredient = { name: "Brühe", category: haltbareLebensmittel, stocked: true }
export const milch: Ingredient = { name: "Milch", category: haltbareLebensmittel, stocked: true }
export const petersilie: Ingredient = { name: "gehackte Petersilie", category: gemueseObst, stocked: true }
export const feta: Ingredient = { name: "Feta", category: kuehlwaren, stocked: false }
export const champignon: Ingredient = { name: "Champignon", category: gemueseObst, stocked: false }
export const sahne: Ingredient = { name: "Sahne", category: kuehlwaren, stocked: false }
export const spinat: Ingredient = { name: "Spinat", category: kuehlwaren, stocked: false }
export const parmesan: Ingredient = { name: "Parmesan", category: kuehlwaren, stocked: false }
export const erbsen: Ingredient = { name: "Erbsen", category: kuehlwaren, stocked: false }
export const zucchini: Ingredient = { name: "Zucchini", category: gemueseObst, stocked: false }
export const speckwuerfel: Ingredient = { name: "Speckwürfel", category: kuehlwaren, stocked: false }
export const paprika: Ingredient = { name: "Paprika", category: gemueseObst, stocked: false }
export const hackfleisch: Ingredient = { name: "Hackfleisch", category: fleisch, stocked: false }
export const tomatenmark: Ingredient = { name: "Tomatenmark", category: haltbareLebensmittel, stocked: false }
export const paprikapulver: Ingredient = { name: "Paprikapulver", category: haltbareLebensmittel, stocked: true }
export const basilikum: Ingredient = { name: "Basilikum", category: gemueseObst, stocked: false }
export const kreuzkuemmel: Ingredient = { name: "Kreuzkümmel", category: haltbareLebensmittel, stocked: true }
export const moehre: Ingredient = { name: "Möhre", category: gemueseObst, stocked: false }
export const gefluegel: Ingredient = { name: "Geflügel", category: fleisch, stocked: false }
export const fruehlingszwiebel: Ingredient = { name: "Frühlingszwiebel", category: gemueseObst, stocked: false }
export const curry: Ingredient = { name: "Curry", category: haltbareLebensmittel, stocked: true }
export const kokosmilch: Ingredient = { name: "Kokosmilch", category: haltbareLebensmittel, stocked: false }
export const roteLinsen: Ingredient = { name: "rote Linsen", category: haltbareLebensmittel, stocked: false }
export const staudensellerie: Ingredient = { name: "Staudensellerie", category: gemueseObst, stocked: false }
export const gehackteTomaten: Ingredient = { name: "gehakte Tomaten", category: haltbareLebensmittel, stocked: false }
export const italienischeKrauter: Ingredient = { name: "italienische Kräuter", category: haltbareLebensmittel, stocked: true }
export const cocktailtomaten: Ingredient = { name: "Cocktailtomaten", category: gemueseObst, stocked: false }
export const pinienkerne: Ingredient = { name: "Pinienkerne", category: haltbareLebensmittel, stocked: false }
export const frischkaese: Ingredient = { name: "Frischkäse", category: kuehlwaren, stocked: false }
export const muskat: Ingredient = { name: "Muskat", category: haltbareLebensmittel, stocked: false }
export const oregano: Ingredient = { name: "Oregano", category: gemueseObst, stocked: false }
export const salami: Ingredient = { name: "Salami am Stück", category: kuehlwaren, stocked: false }
export const reibekaese: Ingredient = { name: "Reibekäse", category: kuehlwaren, stocked: false }
export const kuerbis: Ingredient = { name: "Kürbis", category: gemueseObst, stocked: false }
export const salbeiblaetter: Ingredient = { name: "Salbeiblätter", category: gemueseObst, stocked: false }
export const thunfisch: Ingredient = { name: "Thunfisch", category: haltbareLebensmittel, stocked: false }
export const cremeFraiche: Ingredient = { name: "Crème fraîche", category: kuehlwaren, stocked: false }
export const reis: Ingredient = { name: "Reis", category: haltbareLebensmittel, stocked: false }
export const kohlrabi: Ingredient = { name: "Kohlrabi", category: gemueseObst, stocked: false }
export const quinoa: Ingredient = { name: "Quinoa", category: haltbareLebensmittel, stocked: false }
export const cranberrys: Ingredient = { name: "Cranbabys", category: haltbareLebensmittel, stocked: false }
export const walnuesse: Ingredient = { name: "Walnüsse", category: haltbareLebensmittel, stocked: false }
export const zitrone: Ingredient = { name: "Zitrone", category: gemueseObst, stocked: false }
export const butter: Ingredient = { name: "Butter", category: kuehlwaren, stocked: true }
export const kidneyBohnen: Ingredient = { name: "Kidneybohnen", category: haltbareLebensmittel, stocked: false }
export const mais: Ingredient = { name: "Mais", category: haltbareLebensmittel, stocked: false }
export const avocado: Ingredient = { name: "Avocado", category: gemueseObst, stocked: false }
export const aubergine: Ingredient = { name: "Aubergine", category: gemueseObst, stocked: false }
export const krauterDerProvence: Ingredient = { name: "Kräuter der Provence", category: haltbareLebensmittel, stocked: true }
export const lachsilet: Ingredient = { name: "Lachsilet", category: kuehlwaren, stocked: true }
export const bulgur: Ingredient = { name: "Bulgur", category: haltbareLebensmittel, stocked: false }
export const grosseTomate: Ingredient = { name: "große Tomate", category: gemueseObst, stocked: false }
export const gurke: Ingredient = { name: "Gurke", category: gemueseObst, stocked: false }
export const zitronensaft: Ingredient = { name: "Zitronensaft", category: haltbareLebensmittel, stocked: false }
export const ajvar: Ingredient = { name: "Ajvar", category: haltbareLebensmittel, stocked: false }
export const minze: Ingredient = { name: "Stiele Minze", category: gemueseObst, stocked: false }
export const joghurt: Ingredient = { name: "Joghurt", category: kuehlwaren, stocked: false }
export const couscous: Ingredient = { name: "Couscous", category: haltbareLebensmittel, stocked: false }
export const harissa: Ingredient = { name: "Harissa", category: haltbareLebensmittel, stocked: false }
export const cashewnuesse: Ingredient = { name: "Cashewnüsse", category: haltbareLebensmittel, stocked: false }
export const ingwer: Ingredient = { name: "Ingwer", category: gemueseObst, stocked: false }
export const mango: Ingredient = { name: "Mango", category: gemueseObst, stocked: false }
export const wasser: Ingredient = { name: "Wasser", category: haltbareLebensmittel, stocked: true }
export const zucker: Ingredient = { name: "Zucker", category: haltbareLebensmittel, stocked: true }
export const zitronengrasPaste: Ingredient = { name: "Zitronengras Paste", category: haltbareLebensmittel, stocked: false }
export const lauch: Ingredient = { name: "Stange Lauch", category: gemueseObst, stocked: false }
export const kartoffeln: Ingredient = { name: "Kartoffeln", category: gemueseObst, stocked: false }
export const berglinsen: Ingredient = { name: "Berglinsen", category: haltbareLebensmittel, stocked: false }
export const wiener: Ingredient = { name: "Wiener Würstchen", category: kuehlwaren, stocked: false }
export const senf: Ingredient = { name: "Senf", category: haltbareLebensmittel, stocked: false }
export const balsamicoEssig: Ingredient = { name: "Balsamico Essig", category: haltbareLebensmittel, stocked: false }
