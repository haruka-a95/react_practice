import { useState } from "react";
import CounterButton from './CounterButton';

export default function Counter (){
    const [count, setCount] = useState(0);

    const increment = () => setCount(count + 1);

    return (
        <div>
            <h2>合計：{count}</h2>
            <CounterButton onClick={increment} />
            <CounterButton onClick={increment} />
            <CounterButton onClick={increment} />
        </div>
    );
}