import { useState } from 'react';
import { Drawer, Button } from 'rsuite';
import Collapse from 'rsuite/esm/Animation/Collapse';
import Collapsible from './Collapsible';
import VisualizerCollapsible from './VisualizerCollapsible';

const Visualize = ({handleChange, context="", catalyst="", pointOfNoReturn="", climax="", denouement=""} ) => {

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
          <h2>Story Arc Visualizer</h2>
        </Drawer.Header>
        <Drawer.Body>
        <div id='visualizerDrawer'>
          <div id="bubbles">
          <div id='contextBubble'>
            <h5>Context:</h5>
            <p> { context } </p>
            <VisualizerCollapsible /> 
          </div>
          <div id='catalystBubble'>
            <h5>Catalyst:</h5>
            <p> { catalyst } </p>
            <VisualizerCollapsible />
          </div>
          <div id='pointOfNoReturnBubble'>
            <h5>Point of No Return:</h5>
              <p> {pointOfNoReturn} </p>
              <VisualizerCollapsible />
          </div>
          <div id='climaxBubble'>
            <h5>Climax:</h5>
              <p> {climax} </p>
              <VisualizerCollapsible />
          </div>
          <div id='denouementBubble'>
            <h5>Denouement:</h5>
              <p> {denouement} </p>
              <VisualizerCollapsible />
              </div>
          </div>
            <img id="blankArc" src='./blankArcDarkGreyBg.png' alt="blank arc"></img>
        </div>
        </Drawer.Body>
      </Drawer>
      
      <Button appearance="subtle" color="blue" onClick={() => handleOpen('right')}>Visualize</Button>
    </div>
  )
}

export default Visualize;