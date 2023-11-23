import { Stack, TextField } from '@mui/material'
import React from 'react'
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';


function SearchBar() {
  return (
    <Stack sx= {{
        margin: '24px',
        display: 'flex',
        flexDirection: 'row'
    }}>
    <TextField
        id="input-with-icon-textfield"
        label="ค้นหา"
        variant="outlined"
      />
      <SearchIcon />
    </Stack>
  )
}

export default SearchBar