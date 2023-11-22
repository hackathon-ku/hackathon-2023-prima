import { Stack, TextField } from '@mui/material'
import React from 'react'
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';


function SearchBar() {
  return (
    <Stack sx= {{
        margin: '24px'
    }}>
    <TextField
        id="input-with-icon-textfield"
        label="ค้นหารายวิชา"
        InputProps={{
          endAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ), sx: { borderRadius: 25}
        }}
        variant="outlined"
      />
    </Stack>
  )
}

export default SearchBar