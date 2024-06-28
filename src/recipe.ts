import {Amount} from "./units";
import {Ingredient} from "./ingredients";

export interface Recipe {
    name: string;
    book: string;
    page: number;
    exclusivelyWeekend: boolean;
    cookingTime: number;
    prepTime: number;
    ingredients: Amount<Ingredient>[];
}

export const choose = (from: number, to: number) =>
    from + Math.floor(Math.random() * (to - from + 1))

export function shuffleArray<T>(array: T[]): T[] {
    for (let i = array.length - 1; i > 0; i--) {
        const j = choose(0, i);
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array
}
