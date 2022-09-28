import { useState } from 'react';
import { Drawer, Button } from 'rsuite';

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
          <img id="blankArc" src='./blankArcBlackBg.png' alt="blank arc"></img>
          <div id='contextBubble'>
            <h6>Context:</h6>
            <p> { context } </p> 
          </div>
          <div id='catalystBubble'>
            <h6>Catalyst:</h6>
            <p> { catalyst } </p>
          </div>
          <div id='pointOfNoReturnBubble'>
            <h6>Point of No Return:</h6>
              <p> {pointOfNoReturn} </p>
          </div>
          <div id='climaxBubble'>
            <h6>Climax:</h6>
              <p> {climax} </p>
          </div>
          <div id='denouementBubble'>
            <h6>Denouement:</h6>
              <p> {denouement} </p>
          </div>
        </div>
        </Drawer.Body>
      </Drawer>
      
      <Button appearance="subtle" color="blue" onClick={() => handleOpen('right')}>Visualize</Button>
    </div>
  )
}

export default Visualize;