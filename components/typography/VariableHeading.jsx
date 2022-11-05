import React from 'react'

const VariableHeading = ({title, as, styles}) => {

  VariableHeading.displayName = "VariableHeading"

  const Heading = as
  return (
    <Heading className={styles}>{title}</Heading>
  )
}

export default VariableHeading