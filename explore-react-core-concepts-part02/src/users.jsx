import { useEffect, useState } from "react"

export default function Users() {
    // declared an state
    const [users, setUsers] = useState([]);
    // to load data using useEffect function with dependency array
    useEffect(() => {
        // loading data
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [])

    return (
        <div>
            <h3>users : {users.length} </h3>
        </div>
    )
}