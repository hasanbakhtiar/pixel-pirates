import { useState } from "react";

const Count = () => {
    const [countOne, setCountOne] = useState(0);
    const [countTwo] = useState(10);


    const increment = () => {
        setCountOne(countOne + 1);

    }


    return (
        <>
            <p>{countOne}</p>
            <p>{countTwo}</p>
            <button className="btn btn-success" onClick={increment}>+1</button>
        </>
    )
}

export default Count