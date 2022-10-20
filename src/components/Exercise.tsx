type Props={
    question: string
    name: string
    options: string[]
    item: any
    }

export function Exercise({question, options, name, item }: Props){
    return(
        <>
        {question}
        {options.map(option=>(
         <label   onClick={() => {
            const button = document.getElementById(
              item.alternative1.toString()
            );
            if (button) {
              button.disabled = false;
            }
          }} key={option}>
         <input type="radio" name={name} value={option} required></input>
         <span>{option}</span>
        </label>
        ))}
        </>
    )
}