import CardHeader from '@mui/material/CardHeader';
import Card from '@mui/material/Card';
import { Result } from '../interfaces/pokedex';
import { Button, CardContent } from '@mui/material';
import axios from 'axios';
import { useMemo, useState } from 'react';
import { Pokemon } from '../interfaces/pokemon';
import { DialogComponent } from './DialogComponent';
import './CardComponent.scss';
import { useCallback } from 'react';

const CardComponent = ({name, url}:Result) => {
    const [info, setInfo] = useState<Pokemon>();
    const [openDialog, setOpenDialog] = useState(false);
    const onSelect = useCallback( () => {
        axios.get<Pokemon>(url).then(
            resp => {
                setInfo(resp.data);
                setOpenDialog(true);
            }
        )
        .catch(error => {
            console.log(error);
        })
    },[url])
    const handleClose =useCallback( () => {
        setOpenDialog(!openDialog);
    },[setOpenDialog, openDialog])

    const CardContentMemo = useMemo(() => () => {
        return(
            <CardContent className='card-content-all'>
                <Button className="showMore" onClick={onSelect}>Ver mas</Button>
                {info && <img className='img-pokemon' src={info.sprites.front_default} alt='pokemon'/>}
                {info  && <DialogComponent open={openDialog} handleClose={handleClose} title={name} moves={info.moves} />}
            </CardContent>
        )
    },[handleClose, onSelect, info, name, openDialog])

    return (
        <Card className='cardContainer' >
            <CardHeader
                title={`${name.toUpperCase()}`}
                className='cardContainer-header'
            />
            <CardContentMemo/>
        </Card>
    )
}

export default CardComponent;
