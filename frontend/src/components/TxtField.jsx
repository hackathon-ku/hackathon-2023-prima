import { TextField } from '@mui/material'
import { React } from 'react'

function TxtField({label}) {
  return (
    <TextField id="outlined-basic" label={label} variant="outlined" sx={{
        width: '100%',
        mt: '3%',
        '& .MuiOutlinedInput-root': {
            '&:hover fieldset': {
                borderColor: '#104946',
            },
        },
    }} InputLabelProps={{
        style: {
            color: 'grey',
        }
    }}
    />
  )
}

export default TxtField