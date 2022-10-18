import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";

export function SingleExercise(){
    let { itemId } = useParams();
    const[singleExercise, setSingleExercise]=useState(null)

useEffect(()=>{
    fetch(`http://localhost:5000/exercise/${itemId}`)
    .then(resp=> resp.json())
    .then(data=> setSingleExercise(data) )
}, [])

console.log(singleExercise)

if(singleExercise===null){
    return(
        <h2>Loading...</h2>
    )
}
    return(
        <section className="single-exercise">
        <p>Question: {singleExercise.exercise}</p>
        <h2>Correct answer: {singleExercise.answer}</h2>
        </section>
    )
}