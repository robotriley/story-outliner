import React, { useState } from 'react'
import 'rsuite/dist/rsuite.min.css';
import './Form.css';
import { Popover, Whisper } from 'rsuite';
import { Drawer, Button, Placeholder } from 'rsuite';
import Collapsible from './Collapsible';

const Form = () => {
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState();

  const handleOpen = key => {
    setOpen(true);
    setPlacement(key);
  };
  
  return (
<div>
  <div className='titles'>
    <h1>Story Outliner</h1>
    <h6>by Riley Soloner</h6>

  </div>
      <Drawer className='drawer'
              placement={placement}
              open={open}
              keyboard={true}
              size={'md'}
              onClose={() => setOpen(false)}>
        <Drawer.Header>
          <h2>About</h2>
        </Drawer.Header>
        <Drawer.Body>
  <div className='insideDrawer'>
            <img id='About1' src="./About1.png" alt="About1"></img>
            <img id='About2' src="./About2.png" alt="About2"></img>
            
          </div>
        </Drawer.Body>
      </Drawer>
      
      <Button appearance="ghost" color="red" onClick={() => handleOpen('top')}>About</Button>
      
  <div className="mainFormDiv">

  <div name="mainOutlineForm">
          <Whisper followCursor 
                   speaker={<Popover className='contextPopover' arrow={false} >
            <p>The Introduction, Exposition, The Status Quo, <br />
               Ordinary World, Protagonist's Comfort Zone, <br />
               The Set-Up
            </p></Popover>}>
            <label htmlFor="context-input"
              className="contextLabel">
              Context
            </label>
          </Whisper>
            
            {/* </div> */}
    <input type="text"
           name="catalyst-input"
           placeholder="your text here">
    </input>
      <Collapsible /> <br />
          <Whisper followCursor 
                   speaker={<Popover className='catalystPopover' arrow={false} >
                     <p>Inciting Incident, Exciting Incident, Rising Action, <br />
                     Call to Adventure, The Problem, The Hook, Disturbance
            </p></Popover>}>
            <label htmlFor="catalyst-input"
              className="catalystLabel">
              Catalyst
            </label>
          </Whisper>
    <input type="text"
           name="catalyst-input"
           placeholder="your text here">
    </input> <br />
      <Collapsible /> <br />
          <Whisper followCursor
                   speaker={<Popover className='pointOfNoReturnPopover' arrow={false} >
            <p>New and Unplanned Direction, "You Can't Go Home Again," <br />
               Crossing the Threshold, No Way Out 
            </p></Popover>}>
          <label htmlFor="pointOfNoReturn-input"
            className='pointOfNoReturnLabel'>
              Point of No Return
            </label>
        </Whisper> 
    <input type="text"
           name="point-of-no-return-input"
           placeholder="your text here">
    </input> <br />
      <Collapsible /> <br />
          <Whisper followCursor
                   speaker={<Popover className='climaxPopover' arrow={false} >
            <p>
            Main Event, The Highest Point of Tension, Decisive Moment, <br />
            The Release, Pivotal Moment, Peak of the Story <br />
            Biggest Obstacle
            </p></Popover> }>
    <label htmlFor="context-input"
           className="climaxLabel" >Climax
    </label> 
        </Whisper>
    <input type="text"
           name="climax-input"
           placeholder="your text here">
    </input> <br />
      <Collapsible /> <br />
        <Whisper followCursor
            speaker={<Popover className='denouementPopover' arrow={false} >
          <p>
            The Lasting Image, Resolution, Conclusion, <br />
            The Falling Action, Closure, Final Outcome, <br />
            The Tie-Up, The Button, The End! 
          </p>
        </Popover> }>
    <label htmlFor="context-input"
           className="denouementLabel" >Denouement 

    </label>
        </Whisper>
    <input type="text"
           name="denouement-input"
           placeholder="your text here">
    </input> <br />
          <Collapsible /> <br></br>
  </div>
  </div>
</div>
  )
}

export default Form;