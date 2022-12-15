import { Typography } from '@mui/material';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { RiArrowDownSLine } from 'react-icons/ri';

type MainNavigationProps = {
  navigationElement: string;
  module: string;
};

export const MainNavigation = ({
  navigationElement,
  module,
}: MainNavigationProps) => {
  const { t } = useTranslation();

  return (
    <>
      <Link href={`/javascript${module}`} replace>
        <Typography
          sx={{
            fontSize: '16px',
            fontWeight: 500,
            marginY: '5px',
            color: '#f8f8f8',
            textAlign: 'left',
            cursor: 'pointer',
          }}
        >
          {t(`navigation.${navigationElement}`)}
        </Typography>
      </Link>
      <RiArrowDownSLine size={25} color="#f8f8f8" />
    </>
  );
};
