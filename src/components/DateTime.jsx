import React, { useState, useEffect } from 'react'

const DateTime = () => {
  const [dateTime, setDateTime] = useState('')

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date()
      const dayName = now.toLocaleDateString('en-US', { weekday: 'short', timeZone: 'Asia/Kolkata' })
      const monthName = now.toLocaleDateString('en-US', { month: 'short', timeZone: 'Asia/Kolkata' })
      const day = String(now.getDate()).padStart(2, '0')
      const time = now.toLocaleTimeString('en-US', { 
        hour: '2-digit', 
        minute: '2-digit',
        hour12: true,
        timeZone: 'Asia/Kolkata'
      })
      
      setDateTime(`${dayName} ${monthName} ${day}    ${time}`)
    }

    updateDateTime()
    const interval = setInterval(updateDateTime, 1000)
    
    return () => clearInterval(interval)
  }, [])

  return (
    <div>{dateTime}</div>
  )
}

export default DateTime