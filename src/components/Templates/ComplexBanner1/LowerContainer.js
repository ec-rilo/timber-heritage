import styled from 'styled-components';
import EventContainer from './EventContainer';
import meetingImg from './meeting.webp';
import timberImg from './timber.webp';
import trolleyImg from './trolley.webp';

const LowerContainer = ({ className }) => {
  return (
    <section className={className}>
      <EventContainer
        category='Meeting'
        content="THA Board Meeting - Location: Ming Tree Realty, Eureka or via Zoom."
        src={meetingImg}
        alt="Leader talking to a group of people during a meeting."
        date="February 23rd"
        time="7:00pm"
        fadeType="fade-down-right"
        link="https://add.eventable.com/events/61fc5afc7bbe9bad0b149deb/61fc5afff89dfc41ff384706"
      />
      <EventContainer
        category='Conference'
        content="Redwood Region Logging Conference - Ukiah. THA will provide historic train rides each day."
        src={timberImg}
        alt="Many piles of large logs spanning across acres of land."
        date="February 18, 19, 20"
        time="10:00am"
        fadeType="fade-down-left"
        link="https://add.eventable.com/events/61fc5afc7bbe9bad0b149deb/61fc5ff2f858890d252fa1e0"
      />
      <EventContainer
        category='Trolly Rides'
        content="Trolley Rides at Friday Night Market Old Town, Eureka."
        src={trolleyImg}
        alt="THA Member driving a trolley through Eureka, CA."
        date="February 10th - 12th"
        time="6:00pm"
        fadeType="fade-up"
        link="https://add.eventable.com/events/61fc5afc7bbe9bad0b149deb/61fc60ce34aa5070f7f72d88"
      />
    </section>
  );
};

const StyledLowerContainer = styled(LowerContainer)`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  gap: 100px;
  padding: 0 15px;
`;

export default StyledLowerContainer;
