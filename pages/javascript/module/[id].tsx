import { Box } from '@mui/material';
import { Router, withRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { H1Text } from '../../../common/components/common/typography/h1-text';
import Tiptap from '../../../common/components/common/wysiwyg/tiptap';

type Props = {
  router: Router;
};

type PropsWithRouter = Props & {
  router: Router;
};

export type TopicFromApi = {
  id: number;
  url: string;
  content: string;
};

const Topic = withRouter<Props>(({ router }: PropsWithRouter) => {
  const [currentTopic, setCurrentTopic] = useState<any>(null);
  const [topicName, setTopicName] = useState<string>();
  const topic = router.asPath.split('/').at(-1);

  useEffect(() => {
    const getTopic = async () => {};
    getTopic();
  }, [setCurrentTopic, setTopicName]);

  return (
    <Box sx={{ width: '100%' }}>
      {currentTopic ? (
        <>
          <H1Text title={currentTopic.title} />
          <Tiptap content={currentTopic.content} />
        </>
      ) : (
        <></>
      )}
    </Box>
  );
});

export default Topic;
