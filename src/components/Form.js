import React, { useState } from 'react'
import useCollapse from 'react-collapsed'

const Collapsible = () => {
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse()
  return ( <div>
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
    </div> <br></br>
  </div>
  )

}

const Form = () => {
  const [isShown, setIsShown] = useState(false)
  // const [isExpanded, setIsExpanded] = useState(true)

  // const toggleExpanded = () => {
  //   setIsExpanded((isExpanded) => !isExpanded)
  // }
  return (
<div>
  <h1>Story Outliner</h1>
  <h6>by Riley Soloner</h6>
  <div className="mainFormDiv">

  <div name="mainOutlineForm">
    <label htmlFor="context-input"
           className="contextLabel"
           onMouseEnter={() => setIsShown(true)}
           onMouseLeave={() => setIsShown(false)}>
           Context
           </label> <br />
           {isShown && <div className='contextDefinition'>
           <p>The Introduction, <br />
              The Exposition, <br />
              The Status Quo, <br />
              Ordinary World, <br />
              Protagonist's Comfort Zone, <br />
              The Set-Up, <br />
              The Hook </p>
            </div>}
    <input type="text"
           name="context-input"
           placeholder="your text here">
    </input> <br />
      <Collapsible /> <br></br>

    <label htmlFor="context-input"
           className="catalystLabel">Catalyst
    </label> <br />
    <input type="text"
           name="catalyst-input"
           placeholder="your text here">
    </input> <br />
          <Collapsible /> <br></br>
    <label htmlFor="context-input"
           className="pointOfNoReturnLabel" >Point of No Return
    </label> <br />
    <input type="text"
           name="point-of-no-return-input"
           placeholder="your text here">
    </input> <br />
          <Collapsible /> <br></br>
    <label htmlFor="context-input"
           className="climaxLabel" >Climax
    </label> <br />
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