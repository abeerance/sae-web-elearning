import { gql } from '@apollo/client';
import { RichText } from '@graphcms/rich-text-react-renderer';
import { RichTextContent } from '@graphcms/rich-text-types';
import { Box, Link, Typography } from '@mui/material';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import apolloClient from '../../../apollo-client';

export default function JavaScriptTopic({
  content,
}: {
  content: RichTextContent;
}) {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const checkLoading = () => {
      if (content) {
        setLoading(false);
      }
    };
    checkLoading();
  }, [setLoading, content]);

  return !loading ? (
    <Box
      className="content-container"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        maxWidth: '1600px',
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
                sx={{ margin: '5rem 0 1rem 0', textAlign: 'left' }}
              >
                {children}
              </Typography>
            </Box>
          ),
          p: ({ children }) => (
            <Typography
              sx={{
                margin: '1rem 0',
                lineHeight: '3rem',
                fontSize:
                  'calc(18px + (20 - 18) * ((100vw - 300px) / (1600 - 300)))',
                textAlign: 'left',
                width: '100%',
              }}
            >
              {children}
            </Typography>
          ),
          a: ({ children, openInNewTab, href, rel }) => (
            <Box
              component="span"
              sx={{
                display: 'flex',
                justifyContent: 'center',
                margin: '5rem auto',
              }}
            >
              <Link
                sx={{
                  background: '#F58700',
                  fontSize: `calc(18px + (20 - 18) * ((100vw - 300px) / (1600 - 300)))`,
                  padding: '1.8rem 4rem',
                  textDecoration: 'none',
                  borderRadius: '10px',
                  color: '#f8f8f8',
                }}
                href={href}
                target={openInNewTab ? '_blank' : '_self'}
                rel={rel || 'noopener noreferrer'}
              >
                {children}
              </Link>
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
                marginTop: '5rem',
                marginBottom: '5rem',
              }}
            >
              <Image
                src={src}
                alt={altText}
                fill
                quality={100}
                sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
              />
            </Box>
          ),
        }}
      />
    </Box>
  ) : (
    <></>
  );
}

export async function getServerSideProps({
  resolvedUrl,
}: {
  resolvedUrl: string;
}) {
  const moduleName = resolvedUrl.split('/')[2];
  const { data } = await apolloClient.query({
    query: gql`
      query JavaScriptModules {
        javaScriptModules(where: { module: "${moduleName}" }) {
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
      content: data.javaScriptModules[0].content.json,
    },
  };
}
