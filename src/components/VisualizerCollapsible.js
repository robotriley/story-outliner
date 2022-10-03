import { React, useState } from 'react'
import useCollapse from 'react-collapsed'
import { Button } from 'rsuite'

const VisualizerCollapsible = ({ inner }) => {
  // const [contextContext, setContextContext] = useState("hello")

  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse()
  
  if (!inner)
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
          <label className='innerContextLabel'>Context:</label> <br />
          <h6 className='innerContent'>{inner.context}</h6>
          <label className="innerCatalystLabel">Catalyst:</label> <br />
          <h6 className='innerContent'>{inner.catalyst}</h6>
          <label className="innerPointOfNoReturnLabel" >Point of No Return:</label> <br />
          <h6 className='innerContent'>{inner.pointOfNoReturn}</h6>
          <label className="innerClimaxLabel" >Climax:</label> <br />
          <h6 className='innerContent'>{inner.climax}</h6>
          <label className="innerDenouementLabel" >Denouement:</label> <br />
          <h6 className='innerContent'>{inner.denouement}</h6>
        </div>
      </div>
    </div>
  )

}

export default VisualizerCollapsible;