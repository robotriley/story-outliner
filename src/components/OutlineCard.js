import './Form.css';
import GalleryCollapsible from './GalleryCollapsible';
import GalleryVisualizer from './GalleryVisualizer';
import { Divider } from 'rsuite'

const OutlineCard = ({ outline }) => {
  return (
    <div>
      <h2 className='galleryTitle'>
        {outline.title ? outline.title : "Title"}
        <GalleryVisualizer outline={outline}/> 
      </h2>
      <h6 className='contextLabel'>
          {outline.context.text ? outline.context.text : "Context"}
      </h6>
      <GalleryCollapsible outline={outline.context} />
      
      <h6 className='catalystLabel'>
      {outline.catalyst.text ? outline.catalyst.text : "Catalyst"}
      </h6>
      <GalleryCollapsible outline={outline.catalyst} />
      
      <h6 className='pointLabel'>
      {outline.point.text ? outline.point.text : "Point of No Return"}
      </h6>
      <GalleryCollapsible outline={outline.point} />
      
      <h6 className='climaxLabel'>
      {outline.climax.text ? outline.climax.text : "Climax"}
      </h6>
      <GalleryCollapsible outline={outline.climax} />
      
      <h6 className='denouementLabel'>
      {outline.denouement.text ? outline.denouement.text : "Denouement"}
      </h6>
      <GalleryCollapsible outline={outline.denouement} />
      <Divider />
    </div>
  )
}

export default OutlineCard