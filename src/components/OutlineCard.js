import './Form.css';

const OutlineCard = ({ outline }) => {
  return (
    <div>
      <h2>{outline.title ? outline.title : "Title"} </h2>
      <ul className='contextLabel'>{outline.context.text ? outline.context.text : "Context"} </ul>
      <li className='contextLi' >{outline.context.innerContext} </li>
      <li className='catalystLi' >{outline.context.innerCatalyst} </li>
      <li className='pointLi'>{outline.context.innerPoint} </li>
      <li className='climaxLi'>{outline.context.innerClimax} </li>
      <li className='denouementLi'>{outline.context.innerDenouement} </li>
      <ul className='catalystLabel'>{outline.catalyst.text ? outline.catalyst.text : "Catalyst"} </ul>
      <li className='contextLi' >{outline.catalyst.innerContext} </li>
      <li className='catalystLi' >{outline.catalyst.innerCatalyst} </li>
      <li className='pointLi'>{outline.catalyst.innerPoint} </li>
      <li className='climaxLi'>{outline.catalyst.innerClimax} </li>
      <li className='denouementLi'>{outline.catalyst.innerDenouement} </li>
      <ul className='pointLabel' >{outline.point.text ? outline.point.text : "Point of No Return"} </ul>
      <li className='contextLi' >{outline.point.innerContext} </li>
      <li className='catalystLi' >{outline.point.innerCatalyst} </li>
      <li className='pointLi'>{outline.point.innerPoint} </li>
      <li className='climaxLi'>{outline.point.innerClimax} </li>
      <li className='denouementLi'>{outline.point.innerDenouement} </li>
      <ul className='climaxLabel'>{outline.climax.text ? outline.climax.text : "Climax"} </ul>
      <li className='contextLi' >{outline.climax.innerContext} </li>
      <li className='catalystLi' >{outline.climax.innerCatalyst} </li>
      <li className='pointLi'>{outline.climax.innerPoint} </li>
      <li className='climaxLi'>{outline.climax.innerClimax} </li>
      <li className='denouementLi'>{outline.climax.innerDenouement} </li>
      <ul className='denouementLabel' >{outline.denouement.text ? outline.denouement.text : "Denouement"} </ul>
      <li className='contextLi' >{outline.denouement.innerContext} </li>
      <li className='catalystLi' >{outline.denouement.innerCatalyst} </li>
      <li className='pointLi'>{outline.denouement.innerPoint} </li>
      <li className='climaxLi'>{outline.denouement.innerClimax} </li>
      <li className='denouementLi' >{outline.denouement.innerDenouement} </li>
      <hr></hr>
    </div>
  )
}

export default OutlineCard