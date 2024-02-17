import React from 'react'

const Alert = (props) => {
  return (
    <div style={{height:60}}>
    {props.alert && <div class={`alert alert-${props.alert.type}`} role="alert">
        {props.alert.msg}
    </div>}
    </div>
  )
}

export default Alert
