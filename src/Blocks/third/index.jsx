import Container from '@/components/Container';
import Text from '@/components/Text';
import Button from '@/components/Button';

import style from './style.module.scss';

export default function Block() {
  const cards = [
    {
      img: '/how-it-works/map.svg',
      title: 'Matching the Offset',
      text: 'The Cloverly API can find and match the best offset per transaction. If your customer orders a product in California, for example, we might partner with an improved forest management project in California to keep the benefit local.',
    },
    {
      img: '/how-it-works/analytics.svg',
      title: 'Transaction Transparency',
      text: `We believe in transparency and fully validated transactions. That's why every time you (or your customers) choose to offset an emission-producing activity with Cloverly, we provide real-time transactional data to show the location, type, and amount of carbon offset.`,
    },
    {
      img: '/how-it-works/solar-panel.svg',
      title: 'Verified Sources',
      text: `To effectively neutralize carbon emissions, we know that quality matters. That's why Cloverly works with reputable, internationally recognized suppliers who track and verify registered carbon offset projects.`,
    },
  ];

  return (
    <Container className={style.block}>
      <div className={style.block__info}>
        <Text variant="h4">How It Works</Text>
        <Text variant="subtitle">
          Connecting the Carbon Offset Infrastructure for a More Sustainable World
        </Text>
        <Text variant="text">
          Businesses and consumers count on Cloverly to offset their carbon footprint and create
          positive environmental change based on real-time business activities. Whether you
          implement our ready-to-use applications or install our API as part of a custom
          integration, Cloverly can help you go greener, faster.
        </Text>
        <Button variant="ghost-outline">Learn more</Button>
      </div>
      <div className={style.block__cards}>
        {cards.map((card) => (
          <Card key={card.title} {...card} />
        ))}
      </div>
    </Container>
  );
}

function Card(props) {
  return (
    <div>
      <img src={props.img} />
      <Text variant="subtitle">{props.title}</Text>
      <Text variant="description">{props.text}</Text>
    </div>
  );
}
