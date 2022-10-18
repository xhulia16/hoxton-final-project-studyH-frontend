type Props={
    question: string
    name: string
    options: string[]
    }

export function Exercise({question, options, name }: Props){
    return(
        <>
        {question}
        {options.map(option=>(
         <label key={option}>
         <input  type="radio" name={name} value={option} required></input>
         <span>{option}</span>
        </label>
        ))}
        </>
    )
}