import { useBlockProps } from '@wordpress/block-editor';
import { MdExpandMore, MdExpandLess } from "react-icons/md";


export default function Save( props ) {
  const { attributes: {
    accordions
  }} = props;

  return (
      <div { ...useBlockProps.save() }>
      {accordions.map((accordion, index) => (
            <div key={index} className='accordion'>
              {
                accordion.title &&
                  <>
                    <div className="header">
                      <h3>{accordion.title} </h3>
                      <span className='icon'> 
                        <MdExpandLess />
                        <MdExpandMore />
                        </span>
                    </div>
                    <p style={{ fontSize: '1rem' }}>{accordion.content}</p>
                  </>
              }
            </div>
        ))}
      </div>
  );
}