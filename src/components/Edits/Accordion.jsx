import { useBlockProps } from '@wordpress/block-editor';
import {useState} from 'react';
import { MdExpandMore } from "react-icons/md";
import './Accordion.css';

const Accordion = (props) => {
  const { attributes: {
    accordions
  }} = props;

  const [open, setOpen] = useState([]);

  const toggleAccordion = (accordion) => () => {
    if (open.includes(accordion.id)) {
      setOpen(open.filter((id) => id !== accordion.id));
    } else {
      setOpen([...open, accordion.id]);
    }
  }

  return (
    <div { ...useBlockProps() }>
      {accordions.map((accordion, index) => (
          <div key={index} className='accordion' onClick={toggleAccordion(accordion)}>
            {
              accordion.title &&
              <>
                <div className="header">
                  <h2>{accordion.title} </h2>
                  <span className={`icon ${open.includes(accordion.id) ? 'expanded' : ''}`}> <MdExpandMore /></span>
                </div>
                {open.includes(accordion.id) && <p style={{ fontSize: '1rem' }}>{accordion.content}</p>}
              </>
            }
          </div>
      ))}
    </div>
  );
};

export default Accordion;