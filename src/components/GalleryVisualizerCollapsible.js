import { React, useState } from 'react'
import useCollapse from 'react-collapsed'
import GalleryVisualizer from './GalleryVisualizer'
import { Button } from 'rsuite'

const GalleryVisualizerCollapsible = ({ inner }) => {
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
          <li className='contextLiVis'>{inner.innerContext}</li>
          {/* <label className="innerCatalystLabel">Catalyst:</label> <br /> */}
          <li className='catalystLiVis'>{inner.innerCatalyst}</li>
          {/* <label className="innerPointLabel" >Point of No Return:</label> <br /> */}
          <li className='pointLiVis'>{inner.innerPoint}</li>
          {/* <label className="innerClimaxLabel" >Climax:</label> <br /> */}
          <li className='climaxLiVis'>{inner.innerClimax}</li>
          {/* <label className="innerDenouementLabel" >Denouement:</label> <br /> */}
          <li className='denouementLiVis'>{inner.innerDenouement}</li>
        </ul>
      </div>
    </div>
  )

}

export default GalleryVisualizerCollapsible;