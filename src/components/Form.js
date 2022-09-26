import React, { useState } from 'react'
import useCollapse from 'react-collapsed'
import 'rsuite/dist/rsuite.min.css';
import './Form.css';
import { Popover, Whisper } from 'rsuite';

const Collapsible = () => {
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse()
  return (
  <div>
    <button {...getToggleProps()} >{isExpanded ? 'collapse' : 'expand'} </button>
    <div {...getCollapseProps()} >
      <div className="content">
        <label htmlfor="contextInput"
          className="innerContextLabel">Context</label> <br></br>
        <input name="contextInput"
          placeholder='your text here'></input> <br /><br />
        <label htmlfor="catalystInput"
          className="innerCatalystLabel">Catalyst</label> <br></br>
        <input name="catalystInput"
          placeholder='your text here'></input> <br /><br />
        <label htmlfor="pointOfNoReturnInput"
          className="innerPointOfNoReturnLabel" >Point of No Return</label> <br></br>
        <input name="pointOfNoReturnInput"
          placeholder='your text here'></input> <br /><br />
        <label htmlfor="climaxInput"
          className="innerClimaxLabel" >Climax</label> <br></br>
        <input name="climaxInput"
          placeholder='your text here'></input> <br /><br />
        <label htmlfor="denouementInput"
          className="innerDenouementLabel" >Denouement</label> <br></br>
        <input name="denouementInput"
          placeholder='your text here'></input> <br /><br />
      </div>
    </div>
  </div>
  )

}

const Form = () => {
  
  return (
<div>
  <h1>Story Outliner</h1>
  <h6>by Riley Soloner</h6>
  <div className="mainFormDiv">

  <div name="mainOutlineForm">
          <Whisper followCursor speaker={<Popover arrow={false} >
            <p>The Introduction,
               The Exposition,
               The Status Quo, <br />
               Ordinary World,
               Protagonist's Comfort Zone, <br />
               The Set-Up,
               The Hook </p></Popover>}>
            <label htmlFor="context-input"
              className="contextLabel">
              Context
            </label>
          </Whisper>
            
            {/* </div> */}
    <input type="text"
           name="catalyst-input"
           placeholder="your text here">
    </input> <br />
      <Collapsible /> <br></br>
          <Whisper followCursor speaker={<Popover arrow={false} >
            This is a Popover that follows cursor</Popover>}>
            <label htmlFor="catalyst-input"
              className="catalystLabel">
              Catalyst
            </label>
          </Whisper>
    
    <input type="text"
           name="catalyst-input"
           placeholder="your text here">
    </input> <br />
      <Collapsible /> <br></br>
          <Whisper followCursor speaker={<Popover arrow={false} >
            This is a Popover that follows cursor</Popover>}>
          <label htmlFor="pointOfNoReturn-input"
            className='pointOfNoReturnLabel'>
              Point of No Return
            </label>
        </Whisper> 
    <input type="text"
           name="point-of-no-return-input"
           placeholder="your text here">
    </input> <br />
          <Collapsible /> <br></br>
    <label htmlFor="context-input"
           className="climaxLabel" >Climax
    </label> 
    <input type="text"
           name="climax-input"
           placeholder="your text here">
    </input> <br />
          <Collapsible /> <br></br>
    <label htmlFor="context-input"
           className="denouementLabel" >Denouement 
    </label> <br />
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