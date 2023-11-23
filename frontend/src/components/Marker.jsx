import React from 'react';
import { IconButton } from '@mui/material';
import PlaceIcon from '@mui/icons-material/Place';
import { useNavigate } from 'react-router-dom';
import MapDetail from '../pages/MapDetail';

const Marker = ({ position }) => {

    const navigation = useNavigate()
    return (
        <IconButton style={{ position: 'absolute', left: position.x, top: position.y }} onClick={() => {navigation("/pages/MapDetail")}}>
        <PlaceIcon fontSize='large' color='error'/>
        </IconButton>
    );
};

export default Marker;