import axios from "axios";
import { useEffect, useMemo, useState } from "react"

const UseMemoApp = () => {
    const [count, setCount] = useState<number>(0);
    const [email, setEmail] = useState<string>("");
    const [user, setUser] = useState([]);
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(res => setUser(res.data))
            .catch(err => console.log(err))
    }, [])

    const userRow = () => {
        console.log("userRow runnig");
        return user.map(item => (
            <li onClick={() => { setEmail(item.email) }} key={item.id}>{item.name}</li>
        ))
    }

    const userRowsMemo = useMemo(() => userRow(), [email])

    return (
        <div>

            {email}
            <ul>{userRowsMemo}</ul>


            <hr />

            {count}
            <button onClick={() => {
                setCount(count + 1);
                console.log("counter running");

            }}>+</button>
        </div>
    )
}

export default UseMemoApp