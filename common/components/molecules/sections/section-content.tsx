import { Box } from '@mui/material';
import { Globals } from '../../../utils/utils';
import { H2Text } from '../../atoms/typography/h2-text';
import { SectionSubTopic } from '../../atoms/typography/section-sub-topic';

export const SectionContent = () => {
  return (
    <>
      {Globals.sectionContents.map((topic) => (
        <Box key={topic.name}>
          <H2Text title={topic.name} sectionNames />
          {topic.subTopics.map((subTopic, index) => (
            <SectionSubTopic
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
