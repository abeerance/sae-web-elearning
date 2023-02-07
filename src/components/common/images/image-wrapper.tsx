import { Box, Typography } from '@mui/material';
import Image, { StaticImageData } from 'next/image';

type ImageWrapperProps = {
  source: StaticImageData;
  description: string;
  hasBottomDescription?: boolean;
  hasMinHeight?: boolean;
  height: string;
  width?: string;
  fixedWidth?: boolean;
};

export const ImageWrapper = ({
  source,
  description,
  hasBottomDescription,
  hasMinHeight,
  height,
  width,
  fixedWidth,
}: ImageWrapperProps) => {
  return (
    <Box
      sx={{
        marginY: '5rem',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        width: '100%',
        marginBottom: `${!hasBottomDescription && '5rem'}`,
      }}
    >
      <Box
        sx={{
          width: `${fixedWidth ? width : 1}`,
          height: height,
          maxHeight: '600px',
          minHeight: `${hasMinHeight && '600px'}`,
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
        (max-width: 1920px) 80vw,
        33vw"
          quality={100}
        />
      </Box>
      {hasBottomDescription ? (
        <Typography
          sx={{
            margin: '3rem 0 5rem',
            fontSize: '18px',
            color: '#a3adb9',
            textAlign: 'center',
          }}
        >
          {description}
        </Typography>
      ) : (
        <></>
      )}
    </Box>
  );
};
