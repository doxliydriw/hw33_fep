import { useState } from 'react'

function Results(props) {
    const [id, setId] = useState()
    const [value, setValue] = useState()
    const [maxText, setMaxText] = useState("show the results")

    return (    
        <button onClick={() => [setId((id) => id = props.id), setValue((value) => value = props.value),
        setMaxText('the winner is')]}>
                   {maxText} {id}
        </button>
    )
}

export default Results