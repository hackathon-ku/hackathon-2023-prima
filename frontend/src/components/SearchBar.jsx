import { Stack, TextField } from '@mui/material'
import React, { useState } from 'react'
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';


function SearchBar() {

  const [txt,setTxt] = useState('');
  const onKeyFunc =  (event) => {
    if(event.key === "Enter"){
      console.log("Yes man");
    }
}

  return (
    <Stack sx= {{
        margin: '24px'
    }}>
    <TextField
        id="input-with-icon-textfield"
        label="ค้นหา"
        value={txt}
        onChange={(event) => setTxt(event.target.value)}
        onKeyDown={onKeyFunc}
        InputProps={{
          endAdornment: (
            <InputAdornment position="start">
              <SearchIcon onClick={() => console.log(txt)} />
            </InputAdornment>
          ), sx: { borderRadius: 25}
        }}
        variant="outlined"
      />
    </Stack>
  )
}

export default SearchBar