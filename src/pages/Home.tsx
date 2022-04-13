import { useState } from "react";
import CardPages from "./CardPages";
import './Home.scss';


const Home = () => {
    const [amount, setAmount] = useState(20);
    const [total, setTotal] = useState(0);
    return (
        <>
            <div className="amountPokemon">{`${amount} de ${total}`}</div>
            <CardPages onAmount={setAmount} onTotal={setTotal} total={total}/>
        </>
    )
}

export default Home;
