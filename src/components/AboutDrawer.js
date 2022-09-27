import { useState } from 'react';
import { Drawer, Button } from 'rsuite';

const AboutDrawer = () => {
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
          <h2>Using Story Outliner</h2>
        </Drawer.Header>
        <Drawer.Body>
        <div>
          <div className='drawerWords1'>
            <h4>A diagram of a narrative arc:</h4>
              <h4>Each "point" within the story is<br />
                its own arc within the larger narrative.</h4>
          </div>
          <div className='drawerImages1'>
            <img id='AboutImg' src="./About1.png" alt="About1"></img>
            <img id='AboutImg' src="./About2.png" alt="About2"></img>
          </div>
          <br />
            <div className='drawerWords2'>
              <h4>Use Story Outliner to break <br /> your story down to its essential points.</h4>
              <h4>Start your next story based project<br />
                with a simply laid out plan.</h4>
            </div>
          <div className='drawerImages2'>
            <img id='AboutImg' src="./About3.png" alt="About1"></img>
            <img id='AboutImg' src="./About4.png" alt="About2"></img>
          </div>
        </div>
        </Drawer.Body>
      </Drawer>
      
      <Button appearance="subtle" color="red" onClick={() => handleOpen('left')}>About</Button>
    </div>
  )
}

export default AboutDrawer;