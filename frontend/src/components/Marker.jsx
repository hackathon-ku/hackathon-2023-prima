import React from 'react';
import { IconButton } from '@mui/material';
import PlaceIcon from '@mui/icons-material/Place';
import { useNavigate } from 'react-router-dom';
import MapDetail from '../pages/MapDetail';

const Marker = ({data}) => {

    const navigation = useNavigate()
    return (
        <IconButton style={{ position: 'absolute', left: data.x, top: data.y }} onClick={() => {navigation(`/pages/MapDetail/${data.id}`)}}>
        <PlaceIcon fontSize='large' color='error'/>
        </IconButton>
    );
};

export default Marker;