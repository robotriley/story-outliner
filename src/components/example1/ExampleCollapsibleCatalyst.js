import React from 'react'
import useCollapse from 'react-collapsed'
import { Button } from 'rsuite'

const ExampleCollapsibleCatalyst = () => {
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
          <h5 className='innerContent'>Droids captured by Jawas, sold to Uncle Owen and Luke.</h5><br />
          <label htmlFor="catalystInput"
            className="innerCatalystLabel">Catalyst:</label> <br />
          <h5 className='innerContent'>While cleaning R2, Luke sees Leia's plea for help.</h5><br />
          <label htmlFor="pointInput"
            className="innerPointLabel" >Point of No Return:</label> <br />
          <h5 className='innerContent'>"Ben" Kenobi rescues Luke and tells him of the Jedi Knights.</h5><br />
          <label htmlFor="climaxInput"
            className="innerClimaxLabel" >Climax:</label> <br />
          <h5 className='innerContent'>Luke receives his father's lightsaber.</h5><br />
          <label htmlFor="denouementInput"
            className="innerDenouementLabel" >Denouement:</label> <br />
          <h5 className='innerContent'>Luke refuses Obi Wan's offer to accompany him to Alderaan.</h5><br />
        </div>
      </div>
    </div>
  )

}
export default ExampleCollapsibleCatalyst;
