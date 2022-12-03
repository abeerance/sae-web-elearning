import { Box } from '@mui/material';
import { Globals } from '../../../utils/utils';
import { H2Text } from '../../common/typography/h2-text';
import { SubTopic } from '../../sub-topic/sub-topic';

export const Section = () => {
  return (
    <>
      {Globals.sectionContents.map((topic) => (
        <Box key={topic.name}>
          <H2Text title={topic.name} sectionNames />
          {topic.subTopics.map((subTopic, index) => (
            <SubTopic
              key={index}
              index={index}
              subTopic={subTopic}
              topic={topic.name}
            />
          ))}
        </Box>
      ))}
    </>
  );
};
