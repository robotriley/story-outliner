import { React, useState } from 'react'
import useCollapse from 'react-collapsed'
import { Button } from 'rsuite'

const VisualizerCollapsible = ({ innerContext, innerCatalyst }) => {
  // const [contextContext, setContextContext] = useState("hello")

  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse()
  
  if (!innerContext)
  return <div></div>

  return (
    <div>
      <Button id="react-collapsed-toggle-:r1:" {...getToggleProps()}
              appearance="link"
              color='yellow'
              size="sm"
              >
        {isExpanded ? 'collapse' : 'expand'}
      </Button>
      <div {...getCollapseProps()} >
        <div>
          <label className='innerContextLabel'>Context</label> <br />
          <h6>{innerContext.context}</h6>
          <label className="innerCatalystLabel">Catalyst</label> <br />
          <h6>{innerContext.catalyst}</h6>
          <label className="innerPointOfNoReturnLabel" >Point of No Return</label> <br />
          <h6>{innerContext.pointOfNoReturn}</h6>
          <label className="innerClimaxLabel" >Climax</label> <br />
          <h6>{innerContext.climax}</h6>
          <label className="innerDenouementLabel" >Denouement</label> <br />
          <h6>{innerContext.denouement}</h6>
        </div>
      </div>
    </div>
  )

}

export default VisualizerCollapsible;