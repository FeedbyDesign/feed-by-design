import React from 'react'
import browserHistory from "react-router/lib/browserHistory"

// onWheel={(e)=>{e.stopPropagation()}}

export default (props) => {

  const closeModal = () => {
    if (props.previousLocation === '/') {
      browserHistory.goBack()
    } else {
      browserHistory.push('/')
    }
  }

  return (
    <dialog
      onClick={()=>{closeModal()}}
      onWheel={(e)=>e.preventDefault()}
      css={{
        backgroundColor: `rgba(255, 255, 255, 0.5)`,
        padding: 0,
        border: `none`,
        width: `100vw`,
        height: `100vh`,
        // boxSizing: `border-box`,
        position: `fixed`,
          top: 0,
        display: `flex`,
        zIndex: 100,
        '>div': {
          // backgroundColor: `inherit`,
          margin: `auto`,
          // maxWidth: 500,
          // width: `90%`,
          // minHeight: `40%`,
          // color: `white`,
          // display: `flex`,
          // flexDirection: `column`,
          // justifyContent: `space-between`,
          // overflow: `auto`,
          // padding: 20,
        },
        ...props.style
      }}
      >
      <div
        onClick={(e)=>{e.stopPropagation()}}

      >
        {props.children}
      </div>
    </dialog>
  )
}
