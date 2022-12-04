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
          fontSize: '18px',
          fontWeight: 500,
          marginY: '8px',
          color: '#f8f8f8',
        }}
      >
        <Link href={url}>{t(`navigation.${navigationElement}`)}</Link>
      </Typography>
      <RiArrowDownSLine size={25} color="#f8f8f8" />
    </>
  );
};
