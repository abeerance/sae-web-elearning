import { gql, useQuery } from '@apollo/client';
import { Box } from '@mui/material';
import { useState } from 'react';
import { Module } from '../../components/modules/module';
import { SubModuleDisplay } from '../../components/screens/sub-module-display';
import { TopicOverview } from '../../components/topics/topic-overview';
import { moduleName, moduleSchema, SubModuleDto } from '../../types/types';

// graphql query builder
const MODULE_QUERY = gql`
  query JavaScriptModules {
    javaScriptModules {
      id
      module
      moduleName
      moduleDescription
    }
  }
`;

export default function JavaScriptModule() {
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [selectedSubModule, setSelectedSubModule] = useState<string>();
  const { data } = useQuery(MODULE_QUERY);

  return data !== undefined ? (
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
      <Box
        sx={{
          position: 'relative',
          overflowY: 'scroll',
        }}
      >
        <TopicOverview
          topicName="JavaScript"
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
            data.javaScriptModules.map((subModule: SubModuleDto) => (
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
          schemaName={moduleSchema.js}
          moduleName={moduleName.js}
          subModuleName={selectedSubModule}
        />
      </Box>
    </Box>
  ) : (
    <></>
  );
}
