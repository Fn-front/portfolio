'use client'

import { useState } from 'react'

const Animation = () => {
  const [animation, setAnimation] = useState<boolean>(false)

  return (
    <>
      <button className='c_starting_style_button' onClick={() => setAnimation((prev) => !prev)}>
        onClick!
      </button>
      <div className='c_starting_style'>
        <div
          className={`c_starting_style_item c_starting_style_item_ver_animation ${animation ? 'is_active' : ''}`}
        ></div>
      </div>
    </>
  )
}

export default Animation
