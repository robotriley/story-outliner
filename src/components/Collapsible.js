import React from 'react'
import useCollapse from 'react-collapsed'
import { Button } from 'rsuite'

const Collapsible = ({ inner, setInner }) => {
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse()

  const handleChange = (e) => {
    let {name, value} = e.target
    setInner({
      ...inner,
      [name]: value
    })
  }

  return (
    <div>
      <Button id="react-collapsed-toggle-:r1:" {...getToggleProps()}
              appearance="link"
              color='yellow'
              size="sm"
              >
        {isExpanded ? 'collapse' : 'expand'}
      </Button>
      {/* catalyst
      pointOfNoReturn
      climax
      denouement*/}
      <div {...getCollapseProps()} >
        <div className="content">
          <label htmlFor="contextInput"
            className="innerContextLabel">Context</label> <br />
          <input onChange={handleChange}
            name="context"
                 placeholder='your text here'></input><br /><br />
          <label htmlFor="catalystInput"
            className="innerCatalystLabel">Catalyst</label> <br />
          <input name="catalyst" onChange={handleChange}
            placeholder='your text here'></input> <br /><br />
          <label htmlFor="pointOfNoReturnInput"
            className="innerPointOfNoReturnLabel" >Point of No Return</label> <br />
          <input name="pointOfNoReturn" onChange={handleChange}
            placeholder='your text here'></input> <br /><br />
          <label htmlFor="climaxInput"
            className="innerClimaxLabel" >Climax</label> <br />
          <input name="climax" onChange={handleChange}
            placeholder='your text here'></input> <br /><br />
          <label htmlFor="denouementInput"
            className="innerDenouementLabel" >Denouement</label> <br />
          <input name="denouement" onChange={handleChange}
            placeholder='your text here'></input> <br /><br />
        </div>
      </div>
    </div>
  )

}

export default Collapsible;