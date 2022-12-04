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
      <Typography variant="h2">
        {sectionNames ? t(`sections.${title}.name`) : title}
      </Typography>
      <Box
        sx={{
          height: '10px',
          width: '100px',
          background: '#F58700',
          position: 'absolute',
          bottom: 1,
          left: -10,
          zIndex: -10,
        }}
      />
    </Box>
  );
};
