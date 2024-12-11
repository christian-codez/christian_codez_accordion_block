import { useBlockProps } from '@wordpress/block-editor';
import {useEffect, useState} from 'react';
import { MdExpandMore } from "react-icons/md";

const Accordion = (props) => {
  const { attributes } = props;
  const { accordions, allowMultipleOpen, openFirstByDefault } = attributes;
  const [open, setOpen] = useState([]);

  useEffect(() => {
    if(openFirstByDefault) {
      setOpen([accordions[0].id]);
      return;
    }

    setOpen([]);
  }, [openFirstByDefault]);

  useEffect(() => {
    if(!allowMultipleOpen) {
      setOpen([]);
    }
  }, [allowMultipleOpen]);

  const toggleAccordion = (accordion) => () => {
    if(!allowMultipleOpen) {
      setOpen(open.includes(accordion.id) ? [] : [accordion.id]);
      return;
    }

    if (open.includes(accordion.id)) {
      setOpen(open.filter((id) => id !== accordion.id));
    } else {
      setOpen([...open, accordion.id]);
    }
  }

  return (
    <div { ...useBlockProps() }>
      {accordions.map((accordion, index) => (
          <div key={index} className={`accordion ${open.includes(accordion.id) ? '' : 'collapsed'}`}>
            {
              accordion.title &&
              <>
                <div className="header" onClick={toggleAccordion(accordion)}>
                  <h3>{accordion.title} </h3>
                  <span className={` icon ${open.includes(accordion.id) ? 'expanded' : ''} `}> <MdExpandMore /></span>
                </div>
                {open.includes(accordion.id) && <p className='content'>{accordion.content}</p>}
              </>
            }
          </div>
      ))}
    </div>
  );
};

export default Accordion;