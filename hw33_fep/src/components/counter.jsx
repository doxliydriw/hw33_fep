import { useState } from 'react'

function Counter({ id, onClick }) {
    const [count, setCount] = useState(0)

    function handleClick() {
    setCount(count + 1);
    onClick(id, count + 1);
  }

    return (
        <button onClick={handleClick}>
                    count of {id} is {count}
        </button>
    )
}

export default Counter