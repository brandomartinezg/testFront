import { ChangeEvent, useRef, useState } from "react";
import CardPages from "./CardPages";
import './Home.scss';

const Home = () => {
    const [amount, setAmount] = useState(20);
    const [total, setTotal] = useState(0);
    type CardPagesHandle = React.ElementRef<typeof CardPages>
    const cardRef = useRef<CardPagesHandle>(null);
    const onFilterPokemon = (data:ChangeEvent<HTMLInputElement>) => {
        if(cardRef)
            cardRef?.current?.filterpokemon(data);
    }
    return (
        <>
            <div className="amountPokemon">{`${amount} de ${total}`}</div>
            <input
                className="filterpokemon"
                type='text'
                name="filter"
                placeholder="Buscar"
                onChange={onFilterPokemon}
            />
            <CardPages onAmount={setAmount} onTotal={setTotal} total={total} amount={amount} ref={cardRef}/>
        </>
    )
}

export default Home;
