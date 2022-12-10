import { Box, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

type H2TextProps = {
  title: string;
  sectionNames?: boolean;
  hasMarginTop?: boolean;
  marginTop?: string;
};

export const H2Text = ({
  title,
  sectionNames,
  hasMarginTop,
  marginTop,
}: H2TextProps) => {
  const { t } = useTranslation();

  return (
    <Box
      sx={{
        position: 'relative',
        marginBottom: '35px',
        marginTop: `${hasMarginTop ? marginTop : 0}`,
      }}
    >
      <Typography variant="h2" sx={{ position: 'relative', zIndex: 50 }}>
        {sectionNames ? t(`sections.${title}.name`) : title}
      </Typography>
      <Box
        sx={{
          height: '25px',
          width: '25px',
          background: '#F58700',
          position: 'absolute',
          top: 0,
          left: 0,
          zIndex: 10,
        }}
      />
    </Box>
  );
};
