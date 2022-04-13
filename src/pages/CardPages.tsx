import InfiniteScroll from "react-infinite-scroll-component";
import CardComponent from "../components/CardComponent";
import axios from "axios";
import { Pokedex, Result } from '../interfaces/pokedex';
import { CircularProgress } from "@mui/material";
import { useMemo } from 'react';
import { 
    useState, useEffect, Dispatch, SetStateAction, forwardRef,
    useImperativeHandle, ForwardRefRenderFunction, ChangeEvent
    } from 'react';

type Props = {
    onAmount: Dispatch<SetStateAction<number>>,
    onTotal: Dispatch<SetStateAction<number>>,
    total: number,
    amount: number
}

type OnFilterPokemon = {
    filterpokemon: (data:ChangeEvent<HTMLInputElement>) => void;
}

const CardPages:ForwardRefRenderFunction<OnFilterPokemon, Props> =({ onAmount, onTotal, total, amount}, ref) => {
    const [pokedexState, setPokedexState] = useState<Pokedex>();
    const [pokedexFiltered, setPokedexFiltered] = useState<Result[]>();
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
    useEffect(() => {
        if(pokedexState?.results)
            setPokedexFiltered(pokedexState.results);
    }, [pokedexState]);

    const filteredMemo = useMemo(() => (data:string) => {
        setPokedexFiltered( 
            pokedexState?.results.filter(
                p => p.name.toLowerCase().includes(data)
            )
        );
    },[pokedexState]);
    
    useImperativeHandle(ref,
        () => ({
                filterpokemon(data:ChangeEvent<HTMLInputElement>){
                    filteredMemo(data.target.value.toLocaleLowerCase())
                }
            }),
        [filteredMemo],
    )

    const hasMoreRule = () => {
        if(pokedexFiltered?.length === 0)
            return false;
        else if(amount === total)
            return false;
        else
            return true;
    }

    return (
        <>
            <InfiniteScroll
                dataLength={pokedexState?.results.length || 0}
                next={fetch}
                hasMore={ hasMoreRule()}
                loader={<CircularProgress />}
                style={{display: 'flex', flexWrap:'wrap', justifyContent:'space-around'}}
            >
                {
                    pokedexFiltered?.map(r => 
                        <CardComponent key={r.url} {...r}/>
                    )
                }
            </InfiniteScroll> 
        </>
    )
}
export default forwardRef( CardPages);