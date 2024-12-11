import { useBlockProps } from '@wordpress/block-editor';
import { MdExpandMore, MdExpandLess } from "react-icons/md";

export default function Save( props ) {
  const { attributes: {
    accordions,
    allowMultipleOpen,
    openFirstByDefault
  }} = props;

  return (
    <div { ...useBlockProps.save() }
      data-allow-multiple-open={allowMultipleOpen}
      data-open-first-by-default={openFirstByDefault}>
      {accordions.map((accordion, index) => (
        <div key={index} data-id={accordion.id} className='accordion collapsed'>
          {
            accordion.title &&
              <>
                <div className="header">
                  <h3>{accordion.title} </h3>
                  <span className='icon'>
                    <MdExpandMore />
                    </span>
                </div>
                <p className='content'>{accordion.content}</p>
              </>
          }
        </div>
      ))}
    </div>
  );
}