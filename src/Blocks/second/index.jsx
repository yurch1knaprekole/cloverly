import Container from '@/components/Container';
import Button from '@/components/Button';
import Text from '@/components/Text';

import style from './style.module.scss';

export default function Block() {
  return (
    <Container className={style.block}>
      <Text variant="h4">Cloverly API</Text>
      <Text variant="subtitle">Offset Your Carbon Footprint in Real Time</Text>
      <Text variant="text">
        Cloverly's powerful API calculates the impact of common carbon-intensive activities in real
        time and uses verified, quality carbon offset projects to neutralize them. Ready to get
        started? Create an account to integrate the Cloverly API for free, or contact us for custom
        solutions.
      </Text>
      <div>
        <Button variant="primary">Get Started</Button>
        <Button variant="secondary">Let's Talk</Button>
      </div>
      <img src="cloverly-api/world-map.svg" />
    </Container>
  );
}
