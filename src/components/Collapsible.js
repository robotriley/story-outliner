import React from 'react'
import useCollapse from 'react-collapsed'
import { Button } from 'rsuite'

const Collapsible = () => {
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse()
  return (
    <div>
      <Button {...getToggleProps()} appearance="subtle" size="xs" color="white" >{isExpanded ? 'collapse' : 'expand'} </Button>
      <div {...getCollapseProps()} >
        <div className="content">
          <label htmlfor="contextInput"
            className="innerContextLabel">Context</label> <br />
          <input name="contextInput"
            placeholder='your text here'></input><br /><br />
          <label htmlfor="catalystInput"
            className="innerCatalystLabel">Catalyst</label> <br />
          <input name="catalystInput"
            placeholder='your text here'></input> <br /><br />
          <label htmlfor="pointOfNoReturnInput"
            className="innerPointOfNoReturnLabel" >Point of No Return</label> <br />
          <input name="pointOfNoReturnInput"
            placeholder='your text here'></input> <br /><br />
          <label htmlfor="climaxInput"
            className="innerClimaxLabel" >Climax</label> <br />
          <input name="climaxInput"
            placeholder='your text here'></input> <br /><br />
          <label htmlfor="denouementInput"
            className="innerDenouementLabel" >Denouement</label> <br />
          <input name="denouementInput"
            placeholder='your text here'></input> <br /><br />
        </div>
      </div>
    </div>
  )

}

export default Collapsible;