import React from 'react'

const Footer = () => {
const date = new Date().getFullYear();
  return (
    <footer className ="footer">
    <p>Alex Develops &copy; {date}</p>
        
    </footer>
  )
}

export default Footer