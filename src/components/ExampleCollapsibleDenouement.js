import React from 'react'
import useCollapse from 'react-collapsed'
import { Button } from 'rsuite'

const ExampleCollapsibleDenouement = () => {
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
          <h5 className='innerContent'>Back on Yavin IV, the trumpets blare.</h5><br />
          <label htmlFor="catalystInput"
            className="innerCatalystLabel">Catalyst:</label> <br />
          <h5 className='innerContent'>Luke, Han and Chewbacca enter the throne room.</h5><br />
          <label htmlFor="pointOfNoReturnInput"
            className="innerPointOfNoReturnLabel" >Point of No Return:</label> <br />
          <h5 className='innerContent'>Leia awards Luke and Han medals of honor.</h5><br />
          <label htmlFor="climaxInput"
            className="innerClimaxLabel" >Climax:</label> <br />
          <h5 className='innerContent'>Our heroes turn and accept the applause of the rebels.</h5><br />
          <label htmlFor="denouementInput"
            className="innerDenouementLabel" >Denouement:</label> <br />
          <h5 className='innerContent'>Chewie, questioningly: "Where's MY medal?"</h5><br />
        </div>
      </div>
    </div>
  )

}
export default ExampleCollapsibleDenouement;
