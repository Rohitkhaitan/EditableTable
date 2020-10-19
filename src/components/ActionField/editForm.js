import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import InputForm from '../Table/inputForm';
import './index.css';

export default function DialogSelect(props) {
  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
    props.getInput();
  };
  const editingValue = props.editingValue
  return (
    <div>
      <Dialog disableBackdropClick disableEscapeKeyDown open={props.open} onClose={handleClose}>
        <DialogTitle>Edit Table</DialogTitle>
        <DialogContent>
          <InputForm  
            editmode={true}
            closePopup={handleClose}
            editingDatafunction={props.editDatafunction}
            editingData={props.data}
            data={props.data.filter(data=> data.version!== editingValue.version)}
            startDate={editingValue["start date"]||""}
            releaseDate ={editingValue["release date"]||""}
            version= {editingValue.version||""}
            description= {editingValue.description||""}
            progress= {editingValue.progress||""}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          {/* <Button onClick={handleClose} color="primary">
            Ok
          </Button> */}
        </DialogActions>
      </Dialog>
    </div>
  );
}
