import Container from '@/components/Container';
import Text from '@/components/Text';
import Button from '@/components/Button';

import style from './style.module.scss';

export default function Block() {
  return (
    <Container className={style.block}>
      <Text variant="subtitle">What Activities Will You Offset?</Text>
      <Text variant="h3">What Activities Will You Offset?</Text>

      <Button variant="primary">Try Cloverly</Button>
    </Container>
  );
}
