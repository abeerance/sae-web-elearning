import { Box, Typography } from '@mui/material';
import Image, { StaticImageData } from 'next/image';

type ImageWrapperProps = {
  height: string;
  source: StaticImageData;
  description: string;
};

export const ImageWrapper = ({
  height,
  source,
  description,
}: ImageWrapperProps) => {
  return (
    <Box
      sx={{
        marginTop: 'rem',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        width: '100%',
      }}
    >
      <Box
        sx={{
          width: 1,
          height: height,
          borderRadius: '10px',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <Image
          src={source}
          alt={description}
          fill
          sizes="(max-width: 768px) 100vw,
    (max-width: 1200px) 50vw,
    33vw"
        />
      </Box>
      <Typography
        sx={{
          margin: '3rem 0 5rem',
          fontFamily: `'Ubuntu', sans-serif`,
          fontSize: '18px',
          fontStyle: 'italic',
          color: '#a3adb9',
        }}
      >
        {description}
      </Typography>
    </Box>
  );
};
