import React from 'react'
import './styles.css'

function Sidebar({children, onClose, isOpen, toCart}) {

  return (
    <div 
    className='sidebar'
    style={{transform:isOpen? 'translateX(0)':'translateX(100%)'}}
    >
        <div className='close-button' onClick={toCart}>
            <button onClick={onClose} className='close-button'>X</button>
        </div>
        {children}
    </div>
  )
}

export default Sidebar