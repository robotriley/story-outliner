import React from 'react'
import useCollapse from 'react-collapsed'
import { Button } from 'rsuite'

const ExampleCollapsibleClimax = () => {
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
          <h5 className='innerContent'>The Rebels discuss the Death Star's hidden weakness</h5><br />
          <label htmlFor="catalystInput"
            className="innerCatalystLabel">Catalyst:</label> <br />
          <h5 className='innerContent'>Luke joins the rogue squadron in an X-Wing starfighter.</h5><br />
          <label htmlFor="pointOfNoReturnInput"
            className="innerPointOfNoReturnLabel" >Point of No Return:</label> <br />
          <h5 className='innerContent'>The Rebels suffer heavy losses. Only Luke is left to take the final shot.</h5><br />
          <label htmlFor="climaxInput"
            className="innerClimaxLabel" >Climax:</label> <br />
          <h5 className='innerContent'>Obi Wan: "use the Force, Luke!" Luke destroys the Death Star. Kaboom!</h5><br />
          <label htmlFor="denouementInput"
            className="innerDenouementLabel" >Denouement:</label> <br />
          <h5 className='innerContent'>Luke and Han fly back to Yavin IV.</h5><br />
        </div>
      </div>
    </div>
  )

}
export default ExampleCollapsibleClimax;
