import Container from '@/components/Container';
import Text from '@/components/Text';
import Button from '@/components/Button';

import style from './style.module.scss';

export default function Block() {
  return (
    <Container className={style.block}>
      <img src="partner-spotlight/image 10.png" />
      <div>
        <Text variant="h4">Partner Spotlight</Text>
        <Text variant="text">
          At the JOIN data conference, the team from Looker (now part of Google) used data provided
          by attendees to determine the carbon footprint of their travel to the conference and
          offset it with Cloverly.
        </Text>
        <Text variant="h4">“ ”</Text>
        <Text variant="text">
          We built a little Javascript application to let you select how much of your carbon
          footprint you wanted to offset and then got an estimated price via Cloverly, which
          provides a simple API for purchasing Renewable Energy Certificates (RECs). Once we had the
          estimate from Cloverly, which helpfully tells you not just cost, but also where the RECs
          you're purchasing will come from, we approved the purchase and executed it via the API.
        </Text>
        <div>
          <img src="public/partner-spotlight/image 11.png" />
          <div>
            <span>Daniel Mintz</span>
            <span>Chief Data Evangelist at Looker</span>
          </div>
        </div>
        <Button variant="ghost-outline">More Partners</Button>
      </div>
    </Container>
  );
}
