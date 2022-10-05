import React from 'react'
import useCollapse from 'react-collapsed'
import { Button } from 'rsuite'

const GalleryCollapsible = ({ inner, setInner, outline }) => {
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
      <div className='galleryCollapse' {...getCollapseProps()} >
        <li className='contextLi' >{outline.innerContext} </li>
        <li className='catalystLi' >{outline.innerCatalyst} </li>
        <li className='pointLi'>{outline.innerPoint} </li>
        <li className='climaxLi'>{outline.innerClimax} </li>
        <li className='denouementLi'>{outline.innerDenouement} </li>
      </div>
    </div>
  )

}

export default GalleryCollapsible;