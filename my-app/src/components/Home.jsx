import { useState } from "react";

export default function Home(){
    const [name, setName] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`こんにちは、${name}さん`);
    }

    return (
        <>
        <h1>HOME</h1>
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="名前"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <button type="submit">送信</button>
            </form>
        </>
  );
}