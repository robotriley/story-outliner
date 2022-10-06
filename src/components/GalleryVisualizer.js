import { useState } from 'react';
import { Drawer, Button } from 'rsuite';
import Collapse from 'rsuite/esm/Animation/Collapse';
import Collapsible from './Collapsible';
import GalleryVisualizerCollapsible from './GalleryVisualizerCollapsible';
import VisualizeExample from './example1/VisualizeExample';

const GalleryVisualizer = ({ outline } ) => {

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
          <h2>{outline.title ? outline.title : "My Outline" }</h2>
        </Drawer.Header>
        <Drawer.Body>
        <div id='visualizerDrawer'>
          <div id="bubbles">
          <div id='contextBubble'>
                <h5>{outline.context.text ? outline.context.text: "Context:"}</h5>
            {/* <p> { context } </p> */}
                <GalleryVisualizerCollapsible inner={outline.context} /> 
          </div>
          <div id='catalystBubble'>
                <h5>{outline.catalyst.text ? outline.catalyst.text : "Catalyst:"}</h5>
            {/* <p> { catalyst } </p> */}
                <GalleryVisualizerCollapsible inner={outline.catalyst} />
                
          </div>
          <div id='pointBubble'>
                <h5>{outline.point.text ? outline.point.text : "Point of No Return:"}</h5>
            {/* <p> { point } </p> */}
                <GalleryVisualizerCollapsible inner={outline.point} />
                
          </div>
          <div id='climaxBubble'>
                <h5>{outline.climax.text ? outline.climax.text : "Climax:"}</h5>
              {/* <p>{ climax }</p> */}
                <GalleryVisualizerCollapsible inner={outline.climax} />
          </div>
          <div id='denouementBubble'>
                <h5>{outline.denouement.text ? outline.denouement.text : "Denouement:"}</h5>
              {/* <p> {denouement} </p> */}
                <GalleryVisualizerCollapsible inner={outline.denouement} />
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
        appearance="subtle" 
        color="cyan" 
        onClick={() => handleOpen('right')}>Visualize
      </Button>
    </div>
  )
}

export default GalleryVisualizer;