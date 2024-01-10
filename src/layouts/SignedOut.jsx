import React from 'react'
import { Button } from 'semantic-ui-react'

export default function SignedOut({signIn}) {
  return (
    <div>
        <Button style={{marginTop:"3px"}} onClick={signIn} inverted color='purple' >Giriş Yap</Button>
        <Button inverted color='olive' style={{marginLeft:"0.5em"}}>Kayıt ol</Button>
    </div>
  )
}
