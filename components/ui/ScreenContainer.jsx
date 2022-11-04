import React from 'react'

// add media queries?

const ScreenContainer = ({children}) => {
  return (
    <div className="max-w-7xl mx-auto w-full h-auto">
        {children}
    </div>
  )
}

export default ScreenContainer