import React from 'react'

const VariableHeading = ({title, as, styles}) => {

  WithLabel.displayName = "WithLabel"
  
  const Heading = as
  return (
    <Heading className={styles}>{title}</Heading>
  )
}

export default VariableHeading