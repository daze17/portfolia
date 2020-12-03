import React from 'react'
import './Backdrop.css'

const Backdrop = ({ closeDrawer }) => (
  <div className="backdrop" onClick={closeDrawer} />
)

export default Backdrop
