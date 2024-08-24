'use client'

import { useState } from 'react'

const Transition = () => {
  
  const [transitionNot, setTransitionNot] = useState<boolean>(false)

  return (
    <>
      <button className="c_starting_style_button" onClick={() => setTransitionNot((prev) => !prev)}>onClick!</button>
      <div className="c_starting_style">
        <div className={`c_starting_style_item c_starting_style_item_ver_transition ${transitionNot ? 'is_active' : ''}`}></div>
      </div>
    </>
  )
}

export default Transition;