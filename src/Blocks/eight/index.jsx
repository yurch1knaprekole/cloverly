import Container from '@/components/Container';
import Text from '@/components/Text';
import Button from '@/components/Button';

import style from './style.module.scss';

export default function Block() {
  return (
    <Container className={style.block}>
      <Text variant="h4">Cloverly Blog</Text>
      <Text variant="subtitle">The Latest in the World of Sustainability</Text>

      <Button variant="ghost-outline">Read More</Button>
    </Container>
  );
}
