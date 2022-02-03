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
        date="Febuary 23rd"
        time="7:00pm"
        fadeType="fade-down-right"
      />
      <EventContainer
        category='Conference'
        content="Redwood Region Logging Conference - Ukiah."
        src={timberImg}
        date="Febuary 12th"
        time="10:00am"
        fadeType="fade-down-left"
      />
      <EventContainer
        category='Trolly Rides'
        content="Trolley Rides at Friday Night Market Old Town, Eureka."
        src={trolleyImg}
        date="Febuary 10rd"
        time="6:00pm"
        fadeType="fade-up"
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
