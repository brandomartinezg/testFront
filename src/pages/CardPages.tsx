import CardComponent from "../components/CardComponent";
import InfiniteScroll from "react-infinite-scroll-component";
import { useState, useEffect, Dispatch, SetStateAction} from 'react';
import axios from "axios";
import { Pokedex } from "../interfaces/pokedex";
import { CircularProgress } from "@mui/material";
interface Props{
    onAmount: Dispatch<SetStateAction<number>>,
    onTotal: Dispatch<SetStateAction<number>>,
    total: number
}

const CardPages = ({ onAmount, onTotal, total}:Props) => {
    
    const [pokedexState, setPokedexState] = useState<Pokedex>();
    useEffect(() => {
        axios.get<Pokedex>('https://pokeapi.co/api/v2/pokemon?limit=20&offset=0').then(
            resp => {
                setPokedexState(resp.data);
                onTotal(resp.data.count);
            }
        ).catch(
            error =>{
                console.log(error)
            }
        )
    }, [onTotal]);
    
    const fetch = () => {
        if(pokedexState)
            axios.get(pokedexState.next).then(
                resp => {
                    const copy = {...pokedexState};
                    const { data } = resp;
                    setPokedexState({
                        count: data.count,
                        next: data.next,
                        previous: data.previous,
                        results: copy.results.concat( data.results)
                    });
                    onAmount(prev => prev+20 <= total ? prev+20 : total);
                }
            ).catch(
                error => {
                    console.log(error);
                }
            )
        
    }

    return (
        <>
            <InfiniteScroll
                dataLength={pokedexState?.results.length || 0}
                next={fetch}
                hasMore={true}
                loader={<CircularProgress />}
                style={{display: 'flex', flexWrap:'wrap', justifyContent:'space-around'}}
            >
                {
                    pokedexState?.results?.map(r => 
                        <CardComponent key={r.url} {...r}/>
                    )
                }
            </InfiniteScroll> 
        </>
    )
}
export default CardPages;