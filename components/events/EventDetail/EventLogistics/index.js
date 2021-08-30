import { AddressIcon } from '../../../UI/icons/address-icon';
import { DateIcon } from '../../../UI/icons/date-icon';

import { LogisticsItem } from '../LogisticsItem';
import { Container, ImageContainer, List } from './styles.js';

export function EventLogistics(props) {
  const { date, address, image, imageAlt } = props;

  const humanReadableDate = new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
  const addressText = address.replace(', ', '\n');

  return (
    <Container>
      <ImageContainer>
        <img src={`/${image}`} alt={imageAlt} />
      </ImageContainer>
      <List>
        <LogisticsItem icon={DateIcon}>
          <time>{humanReadableDate}</time>
        </LogisticsItem>
        <LogisticsItem icon={AddressIcon}>
          <address>{addressText}</address>
        </LogisticsItem>
      </List>
    </Container>
  );
}

