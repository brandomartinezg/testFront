import { useState } from "react";
import CardPages from "./CardPages";


const Home = () => {
    const [amount, setAmount] = useState(10);
    const [total, setTotal] = useState(0);
    return (
        <>
            <div>{`${amount} de ${total}`}</div>
            <CardPages onAmount={setAmount} onTotal={setTotal}/>
        </>
    )
}

export default Home;
