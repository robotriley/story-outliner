import React, { useState, useEffect } from 'react'
import 'rsuite/dist/rsuite.min.css';
import './Form.css';
import { Popover, Whisper, Button } from 'rsuite';
// import { Drawer, Button, Placeholder } from 'rsuite';
import Collapsible from './Collapsible';
import AboutDrawer from './AboutDrawer';
import Visualize from './Visualize';

const Form = () => {
  const [title, setTitle] = useState("")
  const [context, setContext] = useState("")
  const [catalyst, setCatalyst] = useState("")
  const [point, setPoint] = useState("")
  const [climax, setClimax] = useState("")
  const [denouement, setDenouement] = useState("")
  
  const [innerContext, setInnerContext] = useState({
    context: "",
    catalyst: "",
    point: "",
    climax: "",
    denouement: ""
  })
  const [innerCatalyst, setInnerCatalyst] = useState({
    context: "",
    catalyst: "",
    point: "",
    climax: "",
    denouement: ""
  })
  const [innerPoint, setInnerPoint] = useState({
    context: "",
    catalyst: "",
    point: "",
    climax: "",
    denouement: ""
  })
  const [innerClimax, setInnerClimax] = useState({
    context: "",
    catalyst: "",
    point: "",
    climax: "",
    denouement: ""
  })
  const [innerDenouement, setInnerDenouement] = useState({
    context: "",
    catalyst: "",
    point: "",
    climax: "",
    denouement: ""
  })
  
  const handleContextChange = (e) => {
    setContext(e.target.value)
  }
  const handleCatalystChange = (e) => {
    setCatalyst(e.target.value)
  }
  const handlePointChange = (e) => {
    setPoint(e.target.value)
  }
  const handleClimaxChange = (e) => {
    setClimax(e.target.value)
  }
  const handleDenouementChange = (e) => {
    setDenouement(e.target.value)
  }

  const handleTitleChange = (e) => {
    setTitle(e.target.value)
  }

  useEffect(() => {
    document.title = "Story Outliner"
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault()
    fetch('http://localhost:3000/outlines', {
      method: "POST",
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        title: title,
        context: {
          text: context,
          innerContext: innerContext.context,
          innerCatalyst: innerContext.catalyst,
          innerPoint: innerContext.point,
          innerClimax: innerContext.climax,
          innerDenouement: innerContext.denouement
        },
        catalyst: {
          text: catalyst,
          innerContext: innerCatalyst.context,
          innerCatalyst: innerCatalyst.catalyst,
          innerPoint: innerCatalyst.point,
          innerClimax: innerCatalyst.climax,
          innerDenouement: innerCatalyst.denouement
        },
        point: {
          text: point,
          innerContext: innerPoint.context,
          innerCatalyst: innerPoint.catalyst,
          innerPoint: innerPoint.point,
          innerClimax: innerPoint.climax,
          innerDenouement: innerPoint.denouement
        },
        climax: {
          text: climax,
          innerContext: innerClimax.context,
          innerCatalyst: innerClimax.catalyst,
          innerPoint: innerClimax.point,
          innerClimax: innerClimax.climax,
          innerDenouement: innerClimax.denouement
        },
        denouement: {
          text: denouement,
          innerContext: innerDenouement.context,
          innerCatalyst: innerDenouement.catalyst,
          innerPoint: innerDenouement.point,
          innerClimax: innerDenouement.climax,
          innerDenouement: innerDenouement.denouement
        }
      })
    })
    alert("thank you for submitting")
  }

  return (
    
<div id="main">
  <div className='titles'>
    <img id="favicon"
         src='./favicon.ico'
         alt="favicon"></img>
    
    <h1>Story Outliner</h1>

  </div>
  <div id="buttonBar">
  <AboutDrawer />
        <Visualize
        context={context}
        catalyst={catalyst}
        point={point}
        climax={climax}
        denouement={denouement}
        innerContext={innerContext}
        innerCatalyst={innerCatalyst}
        innerPoint={innerPoint}
        innerClimax={innerClimax}
        innerDenouement={innerDenouement}
        title={title}
        />
  </div>
  <div className="mainFormDiv"
        onSubmit={handleSubmit}>
    
    {/* TITLE INPUT */}
      <input type="text"
             placeholder="Title of Story"
             onChange={handleTitleChange}>
             </input> <br />

  <div name="mainOutlineForm">
          <Whisper followCursor 
                   speaker={<Popover className='contextPopover' arrow={false} >
            <h6>The Introduction, Exposition, The Status Quo, <br />
               Ordinary World, Protagonist's Comfort Zone, <br />
               The Set-Up
            </h6></Popover>}>
            <label htmlFor="context-input"
              className="contextLabel">
              Context
            </label>
          </Whisper>
            
            {/* CONTEXT INPUT */}
    <input type="text"
           name="context-input"
           placeholder="your text here"
           onChange={handleContextChange}>
    </input>
          <Collapsible inner={innerContext} setInner={setInnerContext} />
          <Whisper followCursor 
                   speaker={<Popover className='catalystPopover' arrow={false} >
                     <h6>Inciting Incident, Exciting Incident, Rising Action, <br />
                     Call to Adventure, The Problem, The Hook, Disturbance
            </h6></Popover>}>
            <label htmlFor="catalyst-input"
              className="catalystLabel">
              Catalyst
            </label>
          </Whisper>

          {/* CATALYST INPUT */}
    <input type="text"
           name="catalyst-input"
           placeholder="your text here"
           onChange={handleCatalystChange}
           >
    </input> <br />
      <Collapsible inner={innerCatalyst} setInner={setInnerCatalyst}
      />
          <Whisper followCursor
                   speaker={<Popover className='pointPopover' arrow={false} >
            <h6>New and Unplanned Direction, "You Can't Go Home Again," <br />
               Crossing the Threshold, No Way Out 
            </h6></Popover>}>
          <label htmlFor="point-input"
            className='pointLabel'>
              Point of No Return
            </label>
        </Whisper> 

        {/* POINT OF NO RETURN INPUT */}
    <input type="text"
           name="pointInput"
           placeholder="your text here"
          onChange={handlePointChange}>
    </input> <br />
      <Collapsible inner={innerPoint} setInner={setInnerPoint} />
          <Whisper followCursor
                   speaker={<Popover className='climaxPopover' arrow={false} >
            <h6>Main Event, The Highest Point of Tension, Decisive Moment, <br />
            The Release, Pivotal Moment, Peak of the Story, <br />
            Biggest Obstacle
            </h6></Popover> }>
    <label htmlFor="climax-input"
           className="climaxLabel" >Climax
    </label> 
        </Whisper>

        {/* CLIMAX INPUT */}
    <input type="text"
           name="climax-input"
           placeholder="your text here"
           onChange={handleClimaxChange}>
    </input> <br />
      <Collapsible inner={innerClimax} setInner={setInnerClimax} />
        <Whisper followCursor
            speaker={<Popover className='denouementPopover' arrow={false} >
          <h6>The Lasting Image, Resolution, Conclusion, <br />
            The Falling Action, Closure, Final Outcome, <br />
            The Tie-Up, The Button, The End! 
          </h6>
        </Popover> }>
    <label htmlFor="context-input"
           className="denouementLabel" >Denouement 

    </label>
        </Whisper>

        {/* DENOUEMENT INPUT */}
    <input type="text"
           name="denouement-input"
           placeholder="your text here"
           onChange={handleDenouementChange}>
    </input> <br />
          <Collapsible inner={innerDenouement} setInner={setInnerDenouement} /> <br></br>
  </div>
  </div>
    <div id="buttonBar">
      <Button appearance="primary" color="green" onClick={handleSubmit}>submit to database</Button>
    </div>
</div>
  )
}

export default Form;