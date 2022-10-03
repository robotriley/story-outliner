import React from 'react'
import useCollapse from 'react-collapsed'
import { Button } from 'rsuite'

const ExampleCollapsiblePoint = () => {
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
          <h5 className='innerContent'>Luke discovers his home and family destroyed.</h5><br />
          <label htmlFor="catalystInput"
            className="innerCatalystLabel">Catalyst:</label> <br />
          <h5 className='innerContent'>Luke and Obi Wan meet Han and Chewbacca. They fly towards planet Alderaan</h5><br />
          <label htmlFor="pointOfNoReturnInput"
            className="innerPointOfNoReturnLabel" >Point of No Return:</label> <br />
          <h5 className='innerContent'>The Death Star destroys Alderaan and captures the Millenium Falcon.</h5><br />
          <label htmlFor="climaxInput"
            className="innerClimaxLabel" >Climax:</label> <br />
          <h5 className='innerContent'>Luke, Chewbacca and Han rescue Leia. Obi-Wan sacrifices himself.</h5><br />
          <label htmlFor="denouementInput"
            className="innerDenouementLabel" >Denouement:</label> <br />
          <h5 className='innerContent'>The rest of the group escapes to a rebel base on Yavin IV.</h5><br />
        </div>
      </div>
    </div>
  )

}
export default ExampleCollapsiblePoint;
