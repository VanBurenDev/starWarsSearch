import React from 'react'
import Selector from './Selector'

export default function Form(props) {
  return (
    <form 
      onSubmit = { props.handleNameSubmit}
    >
      <label htmlFor='characterName'>
        Enter query
      </label>

      <input 
        name='characterName' 
        id='characterName'
        onChange={props.handleUpdateNameField}
      ></input>
      <button type='submit'>Enter</button>
      <Selector handleUpdateSelector={props.handleUpdateSelector}/>
    </form>
  )
}
