import { gql } from '@apollo/client';
import { RichText } from '@graphcms/rich-text-react-renderer';
import { RichTextContent } from '@graphcms/rich-text-types';
import { Box, Typography } from '@mui/material';
import apolloClient from '../../apollo-client';
import Tiptap from '../../common/components/common/wysiwyg/tiptap';
import Image, { StaticImageData } from 'next/image';

export async function getServerSideProps() {
  const { data } = await apolloClient.query({
    query: gql`
      query JavaScriptModules {
        javaScriptModules {
          module
          content {
            json
          }
        }
      }
    `,
  });

  return {
    props: {
      modules: data.javaScriptModules[0],
      content: data.javaScriptModules[0].content.json,
    },
  };
}

export default function JavaScriptModule({
  modules,
  content,
}: {
  modules: {};
  content: RichTextContent;
}) {
  console.log(content);
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        maxWidth: '100%',
      }}
    >
      <RichText
        content={content}
        renderers={{
          h1: ({ children }) => (
            <Box sx={{ width: '100%' }}>
              <Typography
                variant="h1"
                sx={{ marginBottom: '3rem', textAlign: 'left' }}
              >
                {children}
              </Typography>
            </Box>
          ),
          h2: ({ children }) => (
            <Box sx={{ width: '100%' }}>
              <Typography
                variant="h2"
                sx={{ margin: '5rem 0 2rem 0', textAlign: 'left' }}
              >
                {children}
              </Typography>
            </Box>
          ),
          p: ({ children }) => (
            <Box sx={{ width: '100%' }}>
              <Typography
                sx={{
                  margin: '1rem 0',
                  lineHeight: '3rem',
                  fontSize:
                    'calc(18px + (20 - 18) * ((100vw - 300px) / (1600 - 300)))',
                  textAlign: 'left',
                }}
              >
                {children}
              </Typography>
            </Box>
          ),
          // @ts-expect-error: TODO
          img: ({
            src,
            altText,
            width,
            height,
          }: {
            src: string;
            altText: string;
            width: number;
            height: number;
          }) => (
            <Box
              sx={{
                width: `${width}px`,
                height: `${height}px`,
                borderRadius: '10px',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              <Image src={src} alt={altText} fill quality={100} />
            </Box>
          ),
        }}
      />
    </Box>
  );
}
