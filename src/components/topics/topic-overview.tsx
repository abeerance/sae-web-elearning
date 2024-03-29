import { Box, Typography } from '@mui/material';
import React, { useRef } from 'react';
import { RiSearchLine } from 'react-icons/ri';
import useOnClickOutside from '../../hooks/use-on-click-outside';

type TopicOverviewProps = {
  topicName: string;
  isSearchActive: boolean;
  setIsSearchActive: React.Dispatch<React.SetStateAction<boolean>>;
};

export const TopicOverview = ({
  topicName,
  isSearchActive,
  setIsSearchActive,
}: TopicOverviewProps) => {
  const ref = useRef(null);
  const handleClickOutsideSearchbar = () => {
    const searchbarClasses = document.querySelector('.searchbar');
    searchbarClasses?.classList.remove('searchbar-active');
    setIsSearchActive(false);
  };
  useOnClickOutside(ref, handleClickOutsideSearchbar);

  return (
    <Box
      ref={ref}
      sx={{
        position: 'sticky',
        top: 0,
        left: 0,
        padding: '0 40px 0 0',
        background: '#030205',
        display: 'flex',
        justifyContent: 'space-between',
        paddingBottom: '20px',
        height: '60px',
        zIndex: 99999,
      }}
    >
      <Box
        sx={{
          width: '100%',
          height: '100%',
          position: 'relative',
          display: 'flex',
        }}
      >
        <Typography
          className="module-name"
          sx={{
            fontWeight: 700,
            fontSize: '30px',
            display: `${isSearchActive ? 'none' : 'auto'}`,
          }}
        >
          {topicName}
        </Typography>
        <Box
          className="searchbar"
          sx={{
            height: '40px',
            width: '40px',
            background: '#fff',
            display: 'flex',
            alignItems: 'center',
            padding: '20px 0',
            borderRadius: '10px',
            position: 'absolute',
            right: 0,
            top: 0,
            overflow: 'hidden',
            boxShadow: 'rgba(0, 0, 0, 0.1) 0px 3px 8px',
          }}
        >
          <Box
            component="button"
            sx={{
              width: '40px',
              height: '40px',
              dispaly: 'flex',
              border: 'none',
              background: '#fff',
              cursor: 'pointer',
            }}
            onClick={() => {
              const searchbarClasses = document.querySelector('.searchbar');
              if (!isSearchActive) {
                setIsSearchActive(true);
                searchbarClasses?.classList.add('searchbar-active');
              } else {
                setIsSearchActive(false);
                searchbarClasses?.classList.remove('searchbar-active');
              }
            }}
          >
            <RiSearchLine size={20} />
          </Box>
          <Box
            component="input"
            sx={{
              width: '100%',
              height: '40px',
              display: `${isSearchActive ? 'block' : 'none'}`,
              border: 'none',
              padding: '10px',
            }}
          ></Box>
        </Box>
      </Box>
    </Box>
  );
};
