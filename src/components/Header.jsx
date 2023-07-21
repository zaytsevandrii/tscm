import React from 'react'
import Button from './Button'
import Tasks from './Tasks'

export const Header = () => {
  return (
    <header className='header'>
        <h1>Task Tracker</h1>
        <Button text='Add' color = 'green'/>
    </header>
  )
}
