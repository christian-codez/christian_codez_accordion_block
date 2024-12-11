import './editor.scss';
import AccordionInspector from './components/Panels/AccordionInspector';
import Accordion from './components/Edits/Accordion';

export default function Edit(props) {
  return (
    <>
      <AccordionInspector { ...props } />
      <Accordion { ...props } />
    </>
  );
}
