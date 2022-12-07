import Container from '@/components/Container';
import Text from '@/components/Text';
import Button from '@/components/Button';

import style from './style.module.scss';

export default function Block() {
  return (
    <Container className={style.block}>
      <div>
        <Text variant="h4">For Developers, By Developers</Text>
        <Text variant="subtitle">Simple Integration.</Text>
        <Text variant="subtitle">RESTful API.</Text>
        <Text variant="text">
          The Cloverly API calculates and offsets carbon emissions on a per-transaction basis. We
          can determine the amount of carbon emitted and offset that quantity by purchasing carbon
          offsets in real time. Explore our developer docs to find the right endpoints for your
          application, and sign up for free to get the Cloverly sandbox keys.
        </Text>
        <div>
          <Button variant="primary">Get API Keys</Button>
          <Button>Developer Docs</Button>
        </div>
      </div>
      <img src="api.svg" />
    </Container>
  );
}
