import { Typography } from '@mui/material';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { RiArrowDownSLine } from 'react-icons/ri';

type MainNavigationProps = {
  navigationElement: string;
  url: string;
};

export const MainNavigation = ({
  navigationElement,
  url,
}: MainNavigationProps) => {
  const { t } = useTranslation();

  return (
    <>
      <Typography
        sx={{
          fontSize: '16px',
          fontWeight: 500,
          marginY: '5px',
          color: '#242424',
        }}
      >
        <Link href={url}>{t(`navigation.${navigationElement}`)}</Link>
      </Typography>
      <RiArrowDownSLine size={25} color="#242424" />
    </>
  );
};
