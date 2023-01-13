import React from 'react'

function FilterMenuItem({name, id, onFilter}) {
  return (
    <div>
        <button id={id} onClick={()=> onFilter(id)}>
            
        </button>
        {name}
    </div>
  )
}

export default index