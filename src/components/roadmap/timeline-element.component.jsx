import { VerticalTimelineElement }  from 'react-vertical-timeline-component';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHashtag } from '@fortawesome/free-solid-svg-icons'

const TimelineElement = ({ children, icon, date }) => (
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: '#250d2d', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  #250d2d' }}
    date={date}
    iconStyle={{ background: '#250d2d', color: '#fff' }}
    icon={<FontAwesomeIcon icon={faHashtag} />}
  >
    { children }
  </VerticalTimelineElement>
)

export default TimelineElement