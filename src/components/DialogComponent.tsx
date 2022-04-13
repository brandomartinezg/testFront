import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import { Move } from '../interfaces/pokemon';
import sword from '../icon/sword-svgrepo-com.svg';
import './DialogComponent.scss';
interface Props {
    open: boolean,
    handleClose: () => void,
    title: string,
    moves: Move[]
}


export const DialogComponent = ({open, title, handleClose, moves}: Props) => {
  return (
    <Dialog
        open={open}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>
            {`${title.toUpperCase()}`}
        </DialogTitle>
        <DialogContent className='dialog-box'>
            <DialogContentText></DialogContentText>
            <DialogContentText className={'dialog-content-text'} id="alert-dialog-slide-description" component={'span'}>
                {
                    moves.map(m => (
                        <div className='pokemon-move' key={m.move.url}>
                            <img className='sword-img' src={sword} alt='sword' />
                            {m.move.name}
                        </div>
                    ))
                }
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cerrar</Button>
        </DialogActions>
      </Dialog>
  )
}

