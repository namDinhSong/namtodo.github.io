import React from 'react'
import PropTypes from 'prop-types'
import './style.scss'
Button.propTypes = {
    name:PropTypes.string
}
function Button(props) {
    const {name} = props
  return (
    <div className='contain'>
        <button>{name}</button>
    </div>
  )
}



export default Button
