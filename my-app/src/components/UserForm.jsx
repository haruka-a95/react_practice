import { useState } from "react";

export default function UserForm (){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [errors, setErrors] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();

        const newErrors = {};

        if (!name.trim()) {
            newErrors.name = '名前を入力してください';
        }

        if (!email.trim() || !email.includes('@')) {
            newErrors.email = '正しいメールアドレスを入力してください';
        }

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
        } else {
            setErrors({});
            alert('登録しました');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="名前" value={name} onChange={(e)=> setName(e.target.value)}/>
            {/* && 右側条件がtureのとき左側実行 */}
            {errors.name && <p style={{color: 'red'}}>{errors.name}</p>}
            <input type="text" placeholder="email" value={email} onChange={(e)=> setEmail(e.target.value)}/>
            {errors.email && <p style={{color: 'red'}}>{errors.email}</p>}

            <button type="submit">登録</button>
        </form>
    );
}