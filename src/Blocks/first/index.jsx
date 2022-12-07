import Button from '@/components/Button';
import Companies from './Companies';
import style from './block.module.scss';
import Container from '../../components/Container';
import Text from '@/components/Text';

export default function Block() {
  return (
    <Container style={{ backgroundColor: `var(--background-color)`, color: '#fff' }}>
      <div className={style.block}>
        <div className={style.block__wrapper}>
          <div className={style.block__content}>
            <h1>Helping the World Go Carbon Neutral</h1>
            <h3>
              Our Sustainability-as-a-Service platform calculates and purchases carbon offsets to
              neutralize the environmental impact of everyday activities like ecommerce deliveries,
              ridesharing, flights, and more.
            </h3>
            <div>
              <Button>Get Started</Button>
              <Button variant="secondary">Let's Talk</Button>
            </div>
          </div>
          <img src="/first-block/pics.svg" />
        </div>
        <Companies />
      </div>
    </Container>
  );
}
