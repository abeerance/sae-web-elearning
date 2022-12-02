import { InputAdornment, TextField } from '@mui/material';
import { useState } from 'react';

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
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.5 16.5L13.5834 13.5833M15.6667 8.58333C15.6667 12.4954 12.4954 15.6667 8.58333 15.6667C4.67132 15.6667 1.5 12.4954 1.5 8.58333C1.5 4.67132 4.67132 1.5 8.58333 1.5C12.4954 1.5 15.6667 4.67132 15.6667 8.58333Z"
                stroke="#667085"
                stroke-width="1.66667"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </InputAdornment>
        ),
      }}
    />
  );
};
