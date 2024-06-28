import {Ingredient} from "./ingredients";
import {Recipe} from "./recipe";

export interface Amount<Ingredient> {
    ingredient: Ingredient,
    amount: number;
    unit: string
}


export function ingredients(recipes: Recipe[]): Amount<Ingredient>[] {
    let ingredients = new Map<Ingredient, Amount<[]>>()
    for(let recipe of recipes) {
        for(let amount of recipe.ingredients) {
            let sum= ingredients.get(amount.ingredient)
            if(sum === undefined) {
                ingredients.set(amount.ingredient, {
                    ingredient: [],
                    amount: amount.amount,
                    unit: amount.unit
                })
            } else {
                if(amount.unit === sum.unit) {
                    ingredients.set(amount.ingredient, {
                        ingredient: [],
                        amount: amount.amount + sum.amount,
                        unit: sum.unit
                    })
                } else {
                    throw new Error("Units of ingredient "+ amount.ingredient.name + "do not agree")
                }
            }
        }
    }
    return Array.from(ingredients.entries()).map<Amount<Ingredient>>(
        function(entry, _num, _arr) {
            return {
                ingredient: entry[0],
                amount: entry[1].amount,
                unit: entry[1].unit
            }
        }
    )
}

export const sortByCategoryAndName = (amounts: Amount<Ingredient>[]): Amount<Ingredient>[] =>
    amounts.sort((in1, in2) => {
        if (in1.ingredient.category < in2.ingredient.category)
            return -1
        else if (in1.ingredient.category > in2.ingredient.category)
            return 1
        else // in1.category == in2.category
            return in1.ingredient.name.toUpperCase() < in2.ingredient.name.toUpperCase() ? -1 : 1
    })


export function gram(ingredient: Ingredient, amount: number): Amount<Ingredient> {
    return {
        ingredient: ingredient,
        amount: amount,
        unit: "g"
    }
}

export function milliliter(ingredient: Ingredient, amount: number): Amount<Ingredient> {
    return {
        ingredient: ingredient,
        amount: amount,
        unit: "ml"
    }
}

export function tableSpoon(ingredient: Ingredient, amount: number): Amount<Ingredient> {
    return {
        ingredient: ingredient,
        amount: amount,
        unit: "EL"
    }
}

export function teeSpoon(ingredient: Ingredient, amount: number): Amount<Ingredient> {
    return {
        ingredient: ingredient,
        amount: amount,
        unit: "TL"
    }
}


export function piece(ingredient: Ingredient, amount: number): Amount<Ingredient> {
    return {
        ingredient: ingredient,
        amount: amount,
        unit: "Stück"
    }
}

export function can(ingredient: Ingredient, amount: number): Amount<Ingredient> {
    return {
        ingredient: ingredient,
        amount: amount,
        unit: "Dose"
    }
}


export function spice(ingredient: Ingredient): Amount<Ingredient> {
    return {
        ingredient: ingredient,
        amount: 1,
        unit: "Prise"
    }
}