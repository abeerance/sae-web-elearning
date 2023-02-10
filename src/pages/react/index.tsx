import { gql, useQuery } from '@apollo/client';
import { Box } from '@mui/material';
import { useEffect, useState } from 'react';
import { Module } from '../../components/modules/module';
import { SubModuleDisplay } from '../../components/screens/sub-module-display';
import { TopicOverview } from '../../components/topics/topic-overview';
import { moduleName, moduleSchema, SubModuleDto } from '../../types/types';

// graphql query builder
const MODULE_QUERY = gql`
  query ReactModules {
    reactModules {
      id
      module
      moduleName
      moduleDescription
    }
  }
`;

export default function ReactModule() {
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [selectedSubModule, setSelectedSubModule] = useState<string>();
  const [selectedSubModuleContent, setSelectedSubModuleContent] =
    useState<any>();
  const { data } = useQuery(MODULE_QUERY);

  // content graphqlquery
  const CONTENT_QUERY = gql`
  query ${moduleSchema.react} {
    ${moduleName.react}(where: {module: "${selectedSubModule}"}){
      content{
        json
      }
    }
  }
`;

  // graphqlquery, variable for check if submodule selected, variable for submodule content
  const subModuleContent = useQuery(CONTENT_QUERY);
  const subModuleData = subModuleContent.data;
  const subModuleDataJSON = JSON.stringify(subModuleContent.data);

  useEffect(() => {
    if (subModuleDataJSON !== `{"reactModules":[]}` && subModuleData) {
      if (subModuleData.reactModules[0].content !== null) {
        setSelectedSubModuleContent(subModuleData.reactModules[0].content.json);
      }
    }
  }, [subModuleData, subModuleDataJSON]);

  return (
    <Box
      sx={{
        width: '100%',
        height: 'calc(100% - 90px)',
        display: 'grid',
        gridTemplateColumns: '500px 1fr',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Box sx={{ position: 'relative', overflowY: 'scroll' }}>
        <TopicOverview
          topicName="React"
          isSearchActive={isSearchActive}
          setIsSearchActive={setIsSearchActive}
        />
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            gap: '30px',
            overflowY: 'scroll',
            padding: '20px 40px 0 0',
          }}
        >
          {data ? (
            data.reactModules.map((subModule: SubModuleDto) => (
              <Module
                key={subModule.id}
                setSelectedSubModule={setSelectedSubModule}
                subModule={subModule}
              />
            ))
          ) : (
            <></>
          )}
        </Box>
      </Box>
      <Box
        sx={{
          width: '100%',
          borderRadius: '20px',
          backgroundImage: 'linear-gradient(to bottom, #0E1320, #020204)',
          overflowY: 'scroll',
          position: 'sticky',
          top: 0,
          bottom: 0,
        }}
      >
        <SubModuleDisplay
          schemaName={moduleSchema.react}
          moduleName={moduleName.react}
          subModuleName={selectedSubModule}
          content={selectedSubModuleContent}
        />
      </Box>
    </Box>
  );
}
