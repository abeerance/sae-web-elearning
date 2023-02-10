import { gql, useQuery } from '@apollo/client';
import { RichText } from '@graphcms/rich-text-react-renderer';
import { Box, Typography } from '@mui/material';
import { t } from 'i18next';
import Image from 'next/image';
import Link from 'next/link';

type SubModuleDisplayProps = {
  schemaName: string;
  moduleName: string;
  subModuleName: string | undefined;
};

export const SubModuleDisplay = ({
  schemaName,
  moduleName,
  subModuleName,
}: SubModuleDisplayProps) => {
  // Needed for dynamic graphql query

  // graphql query builder
  const MODULE_QUERY = gql`
    query  ${schemaName} {
      ${moduleName}(where: { module: "${subModuleName}" }) {
        module
        content {
          json
        }
      }
    }
  `;

  // call query
  const { loading, error, data } = useQuery(MODULE_QUERY);
  // queryCheck if the dynamic array is not empty
  const queryCheck = JSON.stringify(data);

  if (loading) return <h1>Loading...</h1>;

  if (error) return <h1>{`Error! ${error}`}</h1>;

  if (moduleName === undefined) return <></>;

  if (data && queryCheck !== `{"${moduleName}":[]}`) {
    const content = data;
    console.log(content);
    return (
      <Box
        sx={{
          width: '100%',
          height: '100%',
        }}
      >
        <Box
          sx={{
            height: '100%',
            borderRadius: '30px',
            boxShadow: 'rgba(0, 0, 0, 0.1) 0px 10px 50px',
            overflowY: 'scroll',
            padding: '20px 30px',
          }}
        >
          <Box
            sx={{
              height: '100%',
              overflowY: 'scroll',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <RichText
              content={data.javaScriptModules[0].content.json}
              renderers={{
                h1: ({ children }) => (
                  <Box sx={{ width: '100%' }}>
                    <Typography
                      variant="h1"
                      sx={{
                        marginBottom: '20px',
                        textAlign: 'left',
                        fontSize: '40px',
                        fontWeight: 500,
                        color: '#F06B3E',
                      }}
                    >
                      {children}
                    </Typography>
                  </Box>
                ),
                h2: ({ children }) => (
                  <Box sx={{ width: '100%' }}>
                    <Typography
                      variant="h2"
                      sx={{
                        margin: '5rem 0 1rem 0',
                        textAlign: 'left',
                        fontSize: '35px',
                        fontWeight: 500,
                        color: '#F06B3E',
                      }}
                    >
                      {children}
                    </Typography>
                  </Box>
                ),
                p: ({ children }) => (
                  <Typography
                    sx={{
                      margin: '1rem 0',

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
                    <Typography
                      component="a"
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
                ul: ({ children }) => (
                  <Box component="ul" sx={{ width: '100%', margin: '5rem 0' }}>
                    {children}
                  </Box>
                ),
                li: ({ children }) => {
                  return (
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        position: 'relative',
                        marginBottom: '1.5rem',
                      }}
                    >
                      <Box
                        sx={{
                          background: '#f58700',
                          height: '30px',
                          width: '30px',
                          position: 'absolute',
                          top: 8,
                          left: 0,
                          borderRadius: '5px',
                        }}
                      />
                      <Typography
                        sx={{
                          fontSize: '35px',
                          zIndex: 200,
                          fontWeight: 700,
                          position: 'relative',
                          left: 20,
                          cursor: 'pointer',
                          textDecoration: 'none',
                          color: '#f8f8f8',
                        }}
                      >
                        <Link
                          href={`${
                            children &&
                            // @ts-expect-error: TODO
                            children.props.content[0].children[0].text
                          }`}
                        >
                          {t(
                            `topics.${
                              // @ts-expect-error: TODO
                              children.props.content[0].children[0].text
                            }`,
                          )}
                        </Link>
                      </Typography>
                    </Box>
                  );
                },
              }}
            />
          </Box>
        </Box>
      </Box>
    );
  } else {
    return <></>;
  }
};
