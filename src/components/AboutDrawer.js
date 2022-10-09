import { useState } from 'react';
import { Drawer, Button, ButtonToolbar, ButtonGroup } from 'rsuite';
import LinkedinIcon from '@rsuite/icons/legacy/Linkedin';
import GlobalIcon from '@rsuite/icons/Global';

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
        <Drawer.Header id="aboutHeader" >
          <h2>Using Story Outliner</h2>
          {/* <Button appearance="ghost" color="yellow">show me an example</Button> */}
        </Drawer.Header>
        <Drawer.Body>
        <div>

          <div className='drawerWords1'>
            <h4>A diagram of a narrative arc:</h4>
              <h4>Each "point" in the story is<br />
                an arc within the larger narrative.</h4>
          </div>

          <div className='drawerImages1'>
              <img id='AboutImg' src="./about1DarkGrayBgNewColors.png" alt="About1"></img>
              <img id='AboutImg' src="./about2DarkGrayBgNewColors.png" alt="About2"></img>
          </div>
          <br />
            <div className='drawerWords2'>
              <h4>Use Story Outliner to break <br /> your story to its essential points.</h4>
              <h4>Start your next story based project<br />
                with a simply laid out plan.</h4>
            </div>
          <div className='drawerImages2'>
              <img id='AboutImg' src="./about3DarkGrayBgNewColors.png" alt="About1"></img>
              <img id='AboutImg' src="./about4DarkGrayBgNewColors.png" alt="About2"></img>
          </div>
          <div className='credits'>
            {/* <h6>Built by: Riley Soloner</h6> */}
            <ButtonToolbar>
              <ButtonGroup>
            <Button color="cyan" 
                  appearance='ghost'
                  target="_blank"
                  href="https://www.linkedin.com/in/riley-soloner/">
              <LinkedinIcon />
            Riley Soloner
            </Button>
            <Button color="cyan" 
                  appearance='ghost'
                  target="_blank"
                  href="https://github.com/robotriley/">
              <ion-icon name="logo-github"></ion-icon>
               Github
            </Button>
                </ButtonGroup>
              </ButtonToolbar>
          </div>
        </div>
        </Drawer.Body>
      </Drawer>
      
      <Button
        appearance="link"
        size='sm'
        color="red"
        onClick={() => handleOpen('left')}>About</Button>
    </div>
  )
}

export default AboutDrawer;