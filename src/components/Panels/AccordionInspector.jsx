import { __ } from '@wordpress/i18n';
import { 
  PanelBody,
  PanelRow,
  TextControl,
  TextareaControl,
  Button,
  ToggleControl,
  __experimentalDivider as Divider
} from '@wordpress/components';
import { InspectorControls } from '@wordpress/block-editor';

const AccordionInspector = (props) => {
  const { attributes, setAttributes } = props;
  const { accordions, allowMultipleOpen, openFirstByDefault } = attributes;

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
              { index !== 0 && <Divider /> }
              <TextControl
                __next40pxDefaultSize
                __nextHasNoMarginBottom
                label={__("Title")}
                placeholder={__("Accordion title")}
                value={accordion.title}
                onChange={(value) => addAccordion(accordion.id, 'title', value)}
              />
              
              <TextareaControl
                __next40pxDefaultSize
                __nextHasNoMarginBottom
                label={__("Content")}
                placeholder={__("Accordion content")}
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
                  { __( 'Remove' ) }
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

      <PanelBody 
        initialOpen={false}
        title='Additional Settings'>
          <PanelRow>
            <ToggleControl
              __nextHasNoMarginBottom
              label={__( 'Allow multiple open' )}
              checked={ allowMultipleOpen }
              help={__('Allow multiple accordions to be open at the same time')}
              onChange={ (value) => setAttributes({ allowMultipleOpen: value }) }
            />
          </PanelRow>
          
          <PanelRow>
            <ToggleControl
              __nextHasNoMarginBottom
              label={__( 'Open first accordion by default' )}
              checked={ openFirstByDefault }
              help={__('Open the first accordion by default')}
              onChange={ (value) => setAttributes({ openFirstByDefault: value }) }
            />
          </PanelRow>
      </PanelBody>
    </InspectorControls>
  );
};

export default AccordionInspector;