import { InputAdornment, TextField } from '@mui/material';
import { useState } from 'react';
import { RiSearchLine } from 'react-icons/ri';

interface State {
  keyword: string;
}

export const SearchBar = () => {
  const [values, setValues] = useState<State>({
    keyword: '',
  });
  const handleChange = () => {
    // TODO: Implement handleChange
  };

  return (
    <TextField
      id="outlined-start-adornment"
      placeholder="Search"
      onChange={handleChange}
      sx={{
        width: '100%',
        background: '#f8f8f8',
        borderRadius: '5px',
        color: '#000',
        marginY: '30px',
      }}
      InputProps={{
        sx: { fontSize: '16px' },
        startAdornment: (
          <InputAdornment position="start">
            <RiSearchLine size={20} />
          </InputAdornment>
        ),
      }}
    />
  );
};
