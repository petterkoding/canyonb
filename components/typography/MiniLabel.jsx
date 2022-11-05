import React from 'react'

const MiniLabel = ({tag}) => {

  MiniLabel.displayName = "MiniLabel"

  return (
    <span className="text-orange-600 text-xs align-top ml-1 font-normal">
      {tag}
    </span>
  )
}

export default MiniLabel