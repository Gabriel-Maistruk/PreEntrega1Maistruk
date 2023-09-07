import { AppBar, Button,Toolbar } from '@mui/material';
import './Navbar.css';
import CartWidget from '../CartWidget/CartWidget';

const Navbar = () => {

    return ( <AppBar>
        <Toolbar className='toolbar-navbar'>
        <h1>SmartWater</h1>
        <Button sx={{color: 'white'}} variant="outlined">Home</Button>
        <Button sx={{color: 'white'}} variant="outlined">Products</Button>
        <Button sx={{color: 'white'}} variant="outlined">Form</Button>
        <div><CartWidget /></div>
        </Toolbar>
    </AppBar> );
}

export default Navbar;