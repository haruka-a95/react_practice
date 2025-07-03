import { useEffect } from "react";
import { useState } from "react";

export default function UserList() {

    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((res)=> res.json())
            .then((data)=>{
                setUsers(data);
                setLoading(false);
            });
    }, [])//[]で初回だけ実行

    if (loading) {
        return <p>読み込み中...</p>;
    }


    return(
        <ul>
            {users.map(user => (
                <li key={user.id}>
                {user.name} ({user.email})
                </li>
            ))}
        </ul>

    );
}