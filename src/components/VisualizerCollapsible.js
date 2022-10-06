import { React, useState } from 'react'
import useCollapse from 'react-collapsed'
import GalleryVisualizer from './GalleryVisualizer'
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
        <ul>
          {/* <label className='innerContextLabel'>Context:</label> <br /> */}
          <li className='contextLiVis'>{inner.context ? inner.context: "Context"}</li>
          {/* <label className="innerCatalystLabel">Catalyst:</label> <br /> */}
          <li className='catalystLiVis'>{inner.catalyst ? inner.catalyst: "Catalyst"}</li>
          {/* <label className="innerPointLabel" >Point of No Return:</label> <br /> */}
          <li className='pointLiVis'>{inner.point ? inner.point: "Point of No Return"}</li>
          {/* <label className="innerClimaxLabel" >Climax:</label> <br /> */}
          <li className='climaxLiVis'>{inner.climax ? inner.climax: "Climax"}</li>
          {/* <label className="innerDenouementLabel" >Denouement:</label> <br /> */}
          <li className='denouementLiVis'>{inner.denouement ? inner.denouement: "Denouement"}</li>
        </ul>
      </div>
    </div>
  )

}

export default VisualizerCollapsible;