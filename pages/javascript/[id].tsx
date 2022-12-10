import { Directus, OneItem } from '@directus/sdk';
import { Box } from '@mui/material';
import { Router, withRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { H1Text } from '../../common/components/common/typography/h1-text';
import Tiptap from '../../common/components/common/wysiwyg/tiptap';

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
  const [currentTopic, setCurrentTopic] = useState<OneItem<any>>();

  const directus = new Directus<TopicFromApi>(
    'https://sae-web-elearning.directus.app',
  );

  const topicId = router.asPath.split('/').at(-1);

  useEffect(() => {
    const getTopic = async () => {
      if (topicId) {
        const topics = directus.items('javascript');
        const topic = await topics.readOne(topicId);
        setCurrentTopic(topic);
      }
    };
    getTopic();
  }, [setCurrentTopic]);

  return currentTopic ? (
    <Box sx={{ width: '100%' }}>
      <H1Text title={currentTopic.title} />
      <Tiptap content={currentTopic.content} />
    </Box>
  ) : (
    <></>
  );
});

export default Topic;
