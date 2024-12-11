import { __ } from '@wordpress/i18n';
import { PanelBody, TextControl, TextareaControl, Button } from '@wordpress/components';
import { InspectorControls } from '@wordpress/block-editor';

const AccordionInspector = (props) => {
  const { attributes, setAttributes } = props;
  const { accordions } = attributes;

  const insertAccordionRow = () => {
    const newAccordion = [...accordions, { 
      id: Date.now(),
      title: '',
      content: ''
    }];

    setAttributes({ accordions: newAccordion });
  }

  const addAccordion = (id, key, value) => {
    const updatedAccordions = accordions.map((accordion) => {
      if (accordion.id === id) {
        return { ...accordion, [key]: value };
      }
      return accordion;
    });

    setAttributes({ accordions: updatedAccordions });
  };

  const removeAccordionItem = (id) => {
    return () => {
      const updatedAccordions = accordions.filter((accordion) => accordion.id !== id);
      setAttributes({ accordions: updatedAccordions });
    };
  }

  return (
    <InspectorControls>
      <PanelBody title='Accordions'>
        {
          accordions.map((accordion, index) => (
            <div key={index} style={{ marginTop: index !== 0 ? '1rem' : '0' }}>
              <TextControl
                __next40pxDefaultSize
                __nextHasNoMarginBottom
                label="Title"
                help="Accordion title"
                value={accordion.title}
                onChange={(value) => addAccordion(accordion.id, 'title', value)}
              />
              
              <TextareaControl
                __next40pxDefaultSize
                __nextHasNoMarginBottom
                label="Content"
                help="Accordion content"
                value={accordion.content}
                onChange={(value) => addAccordion(accordion.id, 'content', value)}
              />

              <div
                style={{ 
                  marginLeft: 'auto',
                  width: 'fit-content',
                }}
              >
                <Button 
                  isDestructive
                  size='small'
                  onClick={removeAccordionItem(accordion.id)}>
                  Remove
                </Button>
              </div>
            </div>
          ))
        }

        <Button
          variant="primary"
          onClick={ insertAccordionRow }
          style={{ marginTop: '1rem' }}
        >
          { __( 'Add Item' ) }
        </Button>
      </PanelBody>
    </InspectorControls>
  );
};


export default AccordionInspector;