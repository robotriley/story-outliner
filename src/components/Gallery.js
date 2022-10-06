import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import 'rsuite/dist/rsuite.min.css';
import './Form.css';
import { Button } from 'rsuite';
// import { Drawer, Button, Placeholder } from 'rsuite';
// import GalleryVisualizer from './GalleryVisualizer';
import OutlineCard from './OutlineCard'

const Gallery = () => {

const [outlines, setOutlines] = useState(null)

const showOutlines = () => {
  return(
    outlines.map((outline) => {
      return(
        <OutlineCard key={outline.id} outline={outline} />
      )
    })
  )
}

  useEffect(() => {
    getTroll()
  }, [])

  const getTroll = async () => {
    let req = await fetch('http://localhost:3000/outlines')
    let res = await req.json()
    setOutlines(res)
  }

  return (
    
<div className="main">
  <div className='titles'>
    <img id="favicon"
         src='./favicon.ico'
         alt="favicon"></img>
    
    <h1>Outline Gallery</h1>
  </div>
  <div id="buttonBar">
       <Button appearance="subtle" color="orange"> <Link to="/">Back to Main</Link></Button>
  </div>
      <div className='mainGalleryDiv'>{outlines ? showOutlines().reverse() : null}
      </div>
  </div>
  )
}

export default Gallery;