import React from 'react'
import Button from './Button'
import Tasks from './Tasks'

export const Header = ({setShow,show}) => {
  return (
    <header className='header'>
        <h1>Task Tracker</h1>
        <Button text={!show?'Add':'Close'} color ={!show?'green':'red'} onClick={()=>setShow(!show)}/>
    </header>
  )
}
