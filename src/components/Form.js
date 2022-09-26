import React, { useState } from 'react'

import 'rsuite/dist/rsuite.min.css';
import './Form.css';
import { Popover, Whisper } from 'rsuite';
import Collapsible from './Collapsible';

const Form = () => {
  
  return (
<div>
  <div className='titles'>
    <h1>Story Outliner</h1>
    <h6>by Riley Soloner</h6>
  </div>
  <div className="mainFormDiv">

  <div name="mainOutlineForm">
          <Whisper followCursor speaker={<Popover arrow={false} >
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
          <Whisper followCursor speaker={<Popover arrow={false} >
            <p>Inciting Incident, Exciting Incident, Rising Action, Call to Adventure, <br />
               The Problem, The Hook, Disturbance
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
          <Whisper followCursor speaker={<Popover arrow={false} >
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
          <Whisper followCursor speaker={<Popover arrow={false} >
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
        <Whisper followCursor speaker={<Popover arrow={false} >
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