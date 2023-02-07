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
        height: '100%',
        display: 'grid',
        gridTemplateColumns: '500px 1fr',
        overflowY: 'scroll',
      }}
    >
      <Box
        sx={{
          background: '#F9F9F9',
          position: 'relative',
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
            background: '#F9F9F9',
            padding: '40px',
          }}
        >
          {Globals.navigationElements.map((element) => (
            <Module
              key={element.topic}
              moduleName={element.topic}
              moduleUrl={element.url}
            />
          ))}
        </Box>
      </Box>
      <Box
        sx={{
          width: '100%',
          height: '100%',
          background: '#FFF',
          overflowY: 'scroll',
          padding: '25px 50px',
        }}
      ></Box>
    </Box>
  );
}
