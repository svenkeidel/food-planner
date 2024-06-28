import {shuffleArray, choose, Recipe} from "./recipe";
import {onepotRecipes} from "./books/onepot";
import * as React from 'react';
import {Button, ButtonGroup, Container, Table, Row, Col} from 'react-bootstrap';
import {useState} from "react";
import {Amount, ingredients, sortByCategoryAndName} from "./units";
import {Ingredient} from "./ingredients";


export default function App() {
    let [currentIngredients, setIngredients] = useState([])
    return <Container>
        <Row>
            <Col>
                {Recipes(7, (recipes) => setIngredients(ingredients(recipes)))}
            </Col>
        </Row>
        <Row>
            <Col>
                {Ingredients(currentIngredients)}
            </Col>
        </Row>
    </Container>
}

function Recipes(n: number, onRecipesChanged: (recipes: Recipe[]) => void) {
    let [numRecipes, setNumRecipes] = useState(n)
    let [currentRecipes, setRecipies] = useState(() => {
        let shuffled = shuffleArray(onepotRecipes)
        onRecipesChanged(shuffled.slice(0,n))
        return shuffled
    })
    function onRegenerate(i: number) {
        let replacement = choose(numRecipes+1, currentRecipes.length-1)
        let newRecipes = Array.from(currentRecipes)

        let oldRecipe = currentRecipes[i]
        newRecipes[i] = currentRecipes[replacement]
        newRecipes[replacement] = oldRecipe

        onRecipesChanged(newRecipes.slice(0,numRecipes))
        setRecipies(newRecipes)
    }
    function onRemove(i: number) {
        let newRecipes = Array.from(currentRecipes)
        newRecipes.splice(i, 1)

        onRecipesChanged(newRecipes.slice(0,numRecipes - 1))
        setNumRecipes(numRecipes - 1)
        setRecipies(newRecipes)
    }

    return <Table>
        <thead>
            <tr>
                <th>Rezept</th>
                <th>Buch</th>
                <th>Seite</th>
                <th></th>
            </tr>
        </thead>
        <tbody>
        {
            currentRecipes.slice(0,numRecipes).map((recipe, idx, _) =>
                <tr key={idx}>
                    <td className="align-middle">{recipe.name}</td>
                    <td className="align-middle">{recipe.book}</td>
                    <td className="align-middle">{recipe.page}</td>
                    <td>
                        <ButtonGroup aria-label="Basic example">
                            <Button onClick={() => onRegenerate(idx)}><i className="bi bi-arrow-repeat"></i></Button>
                            <Button  onClick={() => onRemove(idx)}><i className="bi bi-x-circle"></i></Button>
                        </ButtonGroup>
                    </td>
                </tr>
            )
        }
        </tbody>
    </Table>
}

const Ingredients = (ingredients: Amount<Ingredient>[]) =>
     <Table>
        <thead>
        <tr>
            <th>Zutat</th>
            <th>Menge</th>
            <th>Abteilung</th>
        </tr>
        </thead>
        <tbody>
        {
            sortByCategoryAndName(ingredients)
                .filter((amount, idx, _) => amount.ingredient.stocked == false)
                .map((amount, idx, _) =>
                <tr key={idx}>
                    <td>{ amount.ingredient.name }</td>
                    <td>{ amount.amount } { amount.unit }</td>
                    <td>{ amount.ingredient.category }</td>
                </tr>
            )
        }
        </tbody>
    </Table>
