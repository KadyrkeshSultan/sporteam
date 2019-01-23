import Button from '@material-ui/core/Button'
import React from 'react'

const SignedOutLinks = () => {
  return (
      <React.Fragment>
        <Button href='/login' color="inherit">Войти</Button>
    </React.Fragment>
  )
}

export default SignedOutLinks
