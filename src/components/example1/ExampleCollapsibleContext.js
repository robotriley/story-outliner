import React from 'react'
import useCollapse from 'react-collapsed'
import { Button } from 'rsuite'

const ExampleCollapsibleContext = () => {
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse()

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
        <div className="content">
          <label htmlFor="contextInput"
            className="innerContextLabel">Context:</label> <br />
          <h5 className='innerContent'>An Imperial Star Destroyer captures a Rebel Cruiser.</h5><br />
          <label htmlFor="catalystInput"
            className="innerCatalystLabel">Catalyst:</label> <br />
          <h5 className='innerContent'>Darth Vader boards the Cruiser.</h5><br />
          <label htmlFor="pointOfNoReturnInput"
            className="innerPointLabel" >Point of No Return:</label> <br />
          <h5 className='innerContent'>Princess Leia loads secret data into R2D2.</h5><br />
          <label htmlFor="climaxInput"
            className="innerClimaxLabel" >Climax:</label> <br />
          <h5 className='innerContent'>Leia captured, R2D2 & C-3PO blast off in an escape pod. </h5><br />
          <label htmlFor="denouementInput"
            className="innerDenouementLabel" >Denouement:</label> <br />
          <h5 className='innerContent'>R2 & 3PO's escape pod careens toward Tatooine.</h5><br />
        </div>
      </div>
    </div>
  )

}
export default ExampleCollapsibleContext;
