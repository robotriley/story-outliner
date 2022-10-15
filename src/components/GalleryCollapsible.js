import React from 'react'
import useCollapse from 'react-collapsed'
import { Button } from 'rsuite'
import ArrowDownLineIcon from '@rsuite/icons/ArrowDownLine';
import UnvisibleIcon from '@rsuite/icons/Unvisible';

const GalleryCollapsible = ({ inner, setInner, outline }) => {
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse()

  return (
    <div>
      <Button id="react-collapsed-toggle-:r1:" {...getToggleProps()}
              appearance="link"
              color='yellow'
              size="xs"
              >
        {isExpanded ? <UnvisibleIcon /> : <ArrowDownLineIcon />}
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