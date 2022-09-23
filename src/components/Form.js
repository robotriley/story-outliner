import React, { useState } from 'react'

const Form = () => {
  const [isShown, setIsShown] = useState(false)
  return (
<div>
  <h1>Story Outliner</h1>
  <h6>by Riley Soloner</h6>
  <div className="mainFormDiv">

  <form name="mainOutlineForm">
    <label htmlFor="context-input"
           className="contextLabel"
           onMouseEnter={() => setIsShown(true)}
           onMouseLeave={() => setIsShown(false)}>
            Context
            </label> <br />
          {isShown && <div className='contextDefinition'><p>The Introduction, <br /> The Exposition, <br />
            The Status Quo, <br /> Ordinary World, <br />
            The Protagonist's Comfort Zone, <br />
            The Set-Up, <br /> The Hook </p> </div>}
    <input type="text"
           name="context-input"
           placeholder="your text here">
    </input> <br />
    <button>v</button> <br />
    <label htmlFor="context-input"
           className="catalystLabel">Catalyst
    </label> <br />
    <input type="text"
           name="catalyst-input"
           placeholder="your text here">
    </input> <br />
    <button>v</button> <br />
    <label htmlFor="context-input"
           className="pointOfNoReturnLabel" >Point of No Return
    </label> <br />
    <input type="text"
           name="point-of-no-return-input"
           placeholder="your text here">
    </input> <br />
    <button>v</button> <br />
    <label htmlFor="context-input"
           className="climaxLabel" >Climax
    </label> <br />
    <input type="text"
           name="climax-input"
           placeholder="your text here">
    </input> <br />
    <button>v</button> <br />
    <label htmlFor="context-input"
           className="denouementLabel" >Denouement 
    </label> <br />
    <input type="text"
           name="denouement-input"
           placeholder="your text here">
    </input> <br />
    <button>v</button> <br />
  </form>
  </div>
</div>
  )
}

export default Form;