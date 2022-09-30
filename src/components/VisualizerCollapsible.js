import React from 'react'
import useCollapse from 'react-collapsed'
import { Button } from 'rsuite'

const VisualizerCollapsible = () => {
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse()
  return (
    <div>
      <Button id="react-collapsed-toggle-:r1:" {...getToggleProps()} appearance="link" color='yellow' size="sm" >{isExpanded ? 'collapse' : 'expand'} </Button>
      <div {...getCollapseProps()} >
        <div>
          <label className='innerContextLabel'>Context</label> <br />
          <h6>input incoming</h6><br />
          <label className="innerCatalystLabel">Catalyst</label> <br />
          <br />
          <label className="innerPointOfNoReturnLabel" >Point of No Return</label> <br />
          <br />
          <label className="innerClimaxLabel" >Climax</label> <br />
          <br />
          <label className="innerDenouementLabel" >Denouement</label> <br />
          <br />
        </div>
      </div>
    </div>
  )

}

export default VisualizerCollapsible;