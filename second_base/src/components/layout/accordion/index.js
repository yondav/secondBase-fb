import Base from './accordion.base';
import Section from './accordion.section';

export const activeSetter = ({ active, setActive }, eventKey) => {
  let list = [...active];
  let isActive = list.find(key => key === eventKey);

  isActive ? list.splice(list.indexOf(isActive), 1) : list.push(eventKey);

  setActive(list);
};

const Accordion = { Base, Section };

export default Accordion;
