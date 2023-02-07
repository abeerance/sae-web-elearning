import { Box, Typography } from '@mui/material';

type ModuleProps = {
  moduleName: string;
  moduleUrl: string;
};

export const Module = ({ moduleName, moduleUrl }: ModuleProps) => {
  return (
    <>
      <Box
        sx={{
          width: '100%',
          height: '150px',
          display: 'flex',
          justifyContent: 'space-between',
          background: '#fff',
          padding: '15px',
          border: 'none',
          overflow: 'hidden',
          borderRadius: '15px',
          boxShadow: 'rgba(0, 0, 0, 0.1) 0px 3px 8px',
          cursor: 'pointer',
        }}
      >
        <Box
          sx={{ width: '30%', borderRadius: '15px', background: 'orange' }}
        ></Box>
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
          <Typography sx={{ color: '#1A2238', fontSize: '17px' }}>
            Modulename
          </Typography>
          <Typography
            sx={{ color: '#BBB9B9', marginTop: '5px', fontSize: '14px' }}
          >
            This will be the module descritpioais odhoah dihasoi dhoasd
            hioahdohaoid hoiahdiohas aiosdjaoidjaiodj aoidjaiodjaojd
            adjsaodijaodjad asjdoaisjdoa
          </Typography>
        </Box>

        {/* <Link
          className="module-navigation"
          href={`/javascript/${moduleName}`}
          replace
        >
          <H2Text title={moduleName} moduleNames />
        </Link> */}
      </Box>
    </>
  );
};
