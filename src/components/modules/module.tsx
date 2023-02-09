import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import { Dispatch, SetStateAction } from 'react';
import { capitalizeFirstLetter } from '../../utils/utils';

type ModuleProps = {
  moduleName: string;
  moduleIndex: number;
  setSelectedSubModule: Dispatch<SetStateAction<string | undefined>>;
};

export const Module = ({
  moduleName,
  moduleIndex,
  setSelectedSubModule,
}: ModuleProps) => {
  return (
    <>
      <Box
        component="button"
        sx={{
          width: '100%',
          height: '150px',
          display: 'flex',
          justifyContent: 'space-between',
          backgroundImage: 'linear-gradient(to right, #070A10, #131929)',
          padding: '15px',
          border: 'none',
          overflow: 'hidden',
          borderRadius: '15px',
          boxShadow: 'rgba(0, 0, 0, 0.1) 0px 3px 8px',
          cursor: 'pointer',
        }}
        onClick={() => setSelectedSubModule(moduleName)}
      >
        <Box
          sx={{
            width: '30%',
            height: '120px',
            borderRadius: '15px',
            overflow: 'hidden',
            position: 'relative',
          }}
        >
          {/* TODO: Implement real images and remove placeholder */}
          <Image
            alt="test"
            src={`https://source.unsplash.com/random/300x300&${moduleIndex}`}
            fill
            sizes="(max-width: 768px) 100vw,
            (max-width: 1200px) 50vw,
            33vw"
          />
        </Box>
        <Box
          sx={{
            width: '65%',
            height: '100%',
            overflow: 'hidden',
            display: '-webkit-box',
            WebkitBoxOrient: 'vertical',
            WebkitLineClamp: 5,
            textOverflow: 'ellipsis',
          }}
        >
          <Typography
            sx={{ color: '#F06B3E', fontSize: '17px', textAlign: 'left' }}
          >
            {capitalizeFirstLetter(moduleName)}
          </Typography>
          <Typography
            sx={{
              color: '#BBB9B9',
              marginTop: '5px',
              fontSize: '14px',
              textAlign: 'left',
            }}
          >
            This will be the module descritpioais odhoah dihasoi dhoasd
            hioahdohaoid hoiahdiohas aiosdjaoidjaiodj aoidjaiodjaojd
            adjsaodijaodjad asjdoaisjdoa
          </Typography>
        </Box>
      </Box>
    </>
  );
};
