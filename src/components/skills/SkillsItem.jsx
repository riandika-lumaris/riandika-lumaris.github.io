import ScrollAnimation from 'react-animate-on-scroll';
import Col from 'react-bootstrap/Col';
import './SkillsItem.css';

function SkillsItem({ children }) {
  return (
    <Col md={3} className="my-2">
      <ScrollAnimation animateIn="fadeInUp">
        <div className="text-center py-4 skills rounded">
          { children }
        </div>
      </ScrollAnimation>
    </Col>
  )
}

export default SkillsItem;