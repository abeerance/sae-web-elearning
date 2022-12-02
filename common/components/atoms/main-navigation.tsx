import { Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { RiArrowDownSLine } from 'react-icons/ri';

type MainNavigationProps = {
  navigationElement: string;
};

export const MainNavigation = ({ navigationElement }: MainNavigationProps) => {
  const { t } = useTranslation();

  return (
    <>
      <Typography sx={{ fontSize: '18px', fontWeight: 500, marginY: '8px' }}>
        {t(`navigation.${navigationElement}`)}
      </Typography>
      <RiArrowDownSLine size={25} />
    </>
  );
};
