import { Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

type MainNavigationProps = {
  navigationElement: string;
};

export const MainNavigation = ({ navigationElement }: MainNavigationProps) => {
  const { t } = useTranslation();
  console.log(navigationElement);

  return (
    <>
      <Typography sx={{ fontSize: '18px', fontWeight: 500, marginY: '8px' }}>
        {t(`navigation.${navigationElement}`)}
      </Typography>
      <svg
        width="24"
        height="29"
        viewBox="0 0 24 29"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M6 10.875L12 18.125L18 10.875" stroke="#F8F8F8" />
      </svg>
    </>
  );
};
