import React from 'react'

const VariableHeading = ({title, as, styles}) => {
  const Heading = as
  return (
    <Heading className={styles}>{title}</Heading>
  )
}

export default VariableHeading