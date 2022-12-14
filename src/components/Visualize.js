import { useState } from 'react';
import { Drawer, Button, ButtonToolbar, ButtonGroup } from 'rsuite';
import Collapse from 'rsuite/esm/Animation/Collapse';
import Collapsible from './Collapsible';
import VisualizerCollapsible from './VisualizerCollapsible';


const Visualize = ({ 
        context = "",
        catalyst = "",
        point = "",
        climax = "",
        denouement = "",
        innerContext,
        innerCatalyst,
        innerPoint,
        innerClimax,
        innerDenouement,
        title=""} ) => {

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
          <h2>{title ? title : "My Outline" }</h2>
          {/* <VisualizeExample /> */}
        </Drawer.Header>
        <Drawer.Body>
        <div id='visualizerDrawer'>
          <div id="bubbles">
          <div id='contextBubble'>
            <h5>{ context ? context: "Context:"}</h5>
            {/* <p> { context } </p> */}
                <VisualizerCollapsible inner={innerContext} /> 
          </div>
          <div id='catalystBubble'>
                <h5>{catalyst ? catalyst : "Catalyst:"}</h5>
            {/* <p> { catalyst } </p> */}
                <VisualizerCollapsible inner={innerCatalyst}
                />
          </div>
          <div id='pointBubble'>
                <h5>{point ? point : "Point of No Return:"}</h5>
            {/* <p> { point } </p> */}
                <VisualizerCollapsible inner={innerPoint}
                />
          </div>
          <div id='climaxBubble'>
                <h5>{climax ? climax : "Climax:"}</h5>
              {/* <p>{ climax }</p> */}
                <VisualizerCollapsible inner={innerClimax} />
          </div>
          <div id='denouementBubble'>
                <h5>{denouement ? denouement : "Denouement:"}</h5>
              {/* <p> {denouement} </p> */}
                <VisualizerCollapsible inner={innerDenouement} />
              </div>
          </div>
            <img
              id="blankArc"
              src='./blankArcDarkGreyBg.png'
              alt="blank arc">
            </img>
        </div>
        </Drawer.Body>
      </Drawer>
      
      <Button
        appearance="link" 
        color="cyan" 
        size='sm'
        onClick={() => handleOpen('right')}>Visualize
      </Button>
    </div>
  )
}

export default Visualize;