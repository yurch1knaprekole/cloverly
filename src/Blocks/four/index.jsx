import Container from '@/components/Container';
import Text from '@/components/Text';
import Button from '@/components/Button';

import style from './style.module.scss';

const cards = [
  {
    title: 'Ecommerce',
    text: 'See how Cloverly partners are offsetting ecommerce shipments through Shopify, BigCommerce, Magento, and custom integrations.',
  },
  {
    title: 'Rideshare',
    text: 'Miles traveled and carbon emitted can be easily calculated and offset in real time with Cloverly.',
  },
  {
    title: 'Flights',
    text: 'Take off the carbon impact of aviation. With the Cloverly API, calculate and offset miles flown and impact generated.',
  },
  {
    title: 'Enterprise Resource Planning',
    text: 'Learn how enterprise software companies are using the Cloverly integration to offset their environmental effects.',
  },
  {
    title: 'Energy',
    text: 'Find out how the energy industry is using carbon offsets to make a difference and create a more sustainable world.',
  },
  {
    title: 'Supply Chain',
    text: 'Calculate offsets based on your supply chain, make a difference, and see how others are doing it, too.',
  },
  {
    title: 'Fintech',
    text: 'Cloverly can help identify carbon footprints based on financial transaction data and purchase the offsets needed to mitigate these effects.',
  },
  {
    title: 'Fleet',
    text: 'You track mileage and fuel economy for your vehicle fleet. So you already have the data the Cloverly API needs to calculate and offset the carbon impact.',
  },
];

export default function Block() {
  return (
    <Container className={style.block}>
      <Text variant="h4">Use Cases</Text>
      <Text variant="subtitle">Used in Every Environment, to Save the Environment</Text>
      <Text variant="text">
        There are many sources of carbon emissions, including some that we don't typically associate
        with environmental impacts. For example, even cloud computing requires physical servers
        powered by electricity. Below are a few common use cases for carbon offsetting.
      </Text>
      <div className={style.block__cards}>
        {cards.map((card) => (
          <Card key={card.title} {...card} />
        ))}
      </div>
      <Text variant="h4">Don't See Your Industry?</Text>
      <Text variant="text">
        Cloverly can accommodate a variety of use cases for many different carbon-producing
        activities. Even if you don't see your industry here or you're not sure what activities to
        offset, we can help. Reach out to Cloverly and let us get you on the path to net-zero carbon
        emissions.
      </Text>
      <Button variant="secondary">Contact Us</Button>
    </Container>
  );
}

function Card(props) {
  return (
    <div className={style.block__card}>
      <img src={`use-cases/${props.title.toLowerCase().replace(/\s|(\%20)/gm, '-')}.svg`} />
      <div>
        <Text variant="subtitle">{props.title}</Text>
        <Text variant="description">{props.text}</Text>
        <Button variant="ghost">Learn more</Button>
      </div>
    </div>
  );
}
