import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import { Drawer, Button, ButtonToolbar, ButtonGroup } from 'rsuite';
import 'rsuite/dist/rsuite.min.css';
import './Form.css';
import OutlineCard from './OutlineCard'

const GalleryDrawer = ({outlines, setOutlines}) => {
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState();

  const handleOpen = key => {
    setOpen(true);
    setPlacement(key);
  };

  

  const showOutlines = () => {
    return (
      outlines.map((outline) => {
        return (
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
    <div>
   <Drawer
              placement={placement}
              open={open}
              keyboard={true}
              size={'full'}
              onClose={() => setOpen(false)}>
        <Drawer.Header id="aboutHeader" >
          <h2>Outline Gallery</h2>
        </Drawer.Header>
        <Drawer.Body>
        <div>
            <div className='mainGalleryDiv'>{outlines ? showOutlines().reverse() : null}
            </div>
        </div>
        </Drawer.Body>
      </Drawer>
      <Button appearance="ghost"
              color="orange"
              onClick={() => handleOpen('top')}>Gallery</Button>
    </div>
  )
}

export default GalleryDrawer;