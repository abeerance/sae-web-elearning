import { Box } from '@mui/material';

type DownloadButtonProps = {
  title: string;
  url: string;
  openTab?: boolean;
};

export const DownloadButton = ({
  title,
  url,
  openTab,
}: DownloadButtonProps) => {
  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <Box
        component="a"
        href={url}
        target={`${openTab && '_blank'}`}
        rel="noopener noreferrer"
        sx={{
          background: '#F58700',
          fontSize: `calc(18px + (20 - 18) * ((100vw - 300px) / (1600 - 300)))`,
          padding: '1.8rem 4rem',
          margin: '5rem',
          borderRadius: '10px',
        }}
      >
        {title}
      </Box>
    </Box>
  );
};
