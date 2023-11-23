import React from 'react';
import { IconButton } from '@mui/material';
import PlaceIcon from '@mui/icons-material/Place';
import { useNavigate } from 'react-router-dom';

const Marker = ({ position }) => {

    const navigation = useNavigate()
    return (
        <IconButton style={{ position: 'absolute', left: position.x , top: position.y , width:"1%" , height:"1%" }} onClick={() => {navigation("/pages/MapDetail")}}>
        <PlaceIcon fontSize='large' color='error'/>
        </IconButton>
    );
};

export default Marker;