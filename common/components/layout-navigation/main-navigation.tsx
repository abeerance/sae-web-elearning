import { Typography } from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/router';
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
  const router = useRouter();
  const topic = router.asPath.split('/')[1];
  const url = `${topic}${module}`;

  return (
    <>
      <Link href={url} replace>
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
