import { Box, Typography } from '@mui/material';
import Image, { StaticImageData } from 'next/image';

type ImageWrapperProps = {
  height: 'string';
  source: StaticImageData;
  description: string;
};

export const ImageWrapper = ({
  height,
  source,
  description,
}: ImageWrapperProps) => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Box
        sx={{
          width: 'auto',
          height: height,
          borderRadius: '20px',
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
          marginY: '2rem',
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
