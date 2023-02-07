import { Box } from '@mui/material';
import { useState } from 'react';
import { Module } from '../../components/modules/module';
import { TopicOverview } from '../../components/topics/topic-overview';

import { Globals } from '../../utils/utils';

export default function JavaScriptHome() {
  const [isSearchActive, setIsSearchActive] = useState(false);

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
          {Globals.navigationElements.map((element) => (
            <Module
              key={element.topic}
              moduleIndex={element.index}
              moduleName={element.topic}
              moduleUrl={element.url}
            />
          ))}
        </Box>
      </Box>
      <Box
        sx={{
          width: '100%',
          // height: 'calc(100vh - 90px)',
          borderRadius: '20px',
          backgroundImage: 'linear-gradient(to bottom, #0E1320, #020204)',
          overflowY: 'scroll',
          padding: '25px 50px 0',
          position: 'sticky',
          top: 0,
          bottom: 0,
        }}
      ></Box>
    </Box>
  );
}
