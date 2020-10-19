import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import EditForm from "./editForm"

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function MenuAppBar(props) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [ edit, setEdit] = React.useState(false);
  const [editingValue, setEditingValue] = React.useState("");
  const open = Boolean(anchorEl);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDelete = () => {
    setAnchorEl(null);
    console.log(props.data)
    const filteredData = props.data.filter(index=> index.version !== props.value)
    props.deleteData(filteredData)

  };

  const handleEdit = () => {
    setEditingValue(props.editingValue)
    setAnchorEl(null);
    setEdit(true);
  };

  const handleFormClose = ()=> {
      setEdit(false);
  }

  return (
    <div className={classes.root}>
        {console.log("edit", props.editingValue)}
        <IconButton 
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleMenu}
            color="inherit"
        >
            <MoreHorizIcon style={{ color:"#d0d3d8"}} />
        </IconButton>
            <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={open}
            onClose={handleClose}
            >
            <MenuItem onClick={handleEdit}>Edit</MenuItem>
            <EditForm open={edit} getInput={handleFormClose} editDatafunction={props.editDatafunction} editingValue={editingValue} value={props.value} data={props.data}/>
            <MenuItem onClick={handleDelete}>Delete</MenuItem>
        </Menu>
    </div>
  );
}
