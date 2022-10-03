import { useState } from 'react';
import { Drawer, Button } from 'rsuite';
import Collapse from 'rsuite/esm/Animation/Collapse';
import Collapsible from './Collapsible';
import ExampleCollapsibleContext from './ExampleCollapsibleContext';
import ExampleCollapsibleCatalyst from './ExampleCollapsibleCatalyst';
import ExampleCollapsiblePoint from './ExampleCollapsiblePoint';
import ExampleCollapsibleClimax from './ExampleCollapsibleClimax';
import ExampleCollapsibleDenouement from './ExampleCollapsibleDenouement';
import VisualizerCollapsible from './VisualizerCollapsible';

const VisualizeExample = () => {

  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState();

  const handleOpen = key => {
    setOpen(true);
    setPlacement(key);
  };
  return (
    <div>
   <Drawer
              placement={placement}
              open={open}
              keyboard={true}
              size={'full'}
              onClose={() => setOpen(false)}>
        <Drawer.Header>
          <h2>Star Wars (1977) </h2>
        </Drawer.Header>
        <Drawer.Body>
        <div id='visualizerDrawer'>
          <div id="bubbles">
          <div id='contextBubble'>
            <h5>Context:</h5>
                <p> A narrow escape in space </p>
                <ExampleCollapsibleContext /> 
          </div>
          <div id='catalystBubble'>
            <h5>Catalyst:</h5>
                <p> A purchase leads to adventure </p>
                <ExampleCollapsibleCatalyst />
          </div>
          <div id='pointOfNoReturnBubble'>
            <h5>Point of No Return:</h5>
            <p> Belly of the beast </p>
                <ExampleCollapsiblePoint />
          </div>
          <div id='climaxBubble'>
            <h5>Climax:</h5>
              <p> Dogfight </p>
                <ExampleCollapsibleClimax />
          </div>
          <div id='denouementBubble'>
            <h5>Denouement:</h5>
              <p> Big Ceremony </p>
                <ExampleCollapsibleDenouement />
              </div>
          </div>
            <img id="blankArc" src='./blankArcDarkGreyBg.png' alt="blank arc"></img>
        </div>
        </Drawer.Body>
      </Drawer>
      
      <Button className='exampleButton1' appearance="link" color="red" onClick={() => handleOpen('bottom')}>show me an example</Button>
    </div>
  )
}

export default VisualizeExample;