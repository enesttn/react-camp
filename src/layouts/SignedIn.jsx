import React from 'react'
import { Dropdown, DropdownItem, DropdownMenu, MenuItem,Image } from 'semantic-ui-react'

export default function SignedIn({signOut}) {
  return (
    <div>
    <MenuItem>
    <Image avatar spaced="right" src="https://cdn.dsmcdn.com/ty323/product/media/images/20220205/14/44920998/381049681/1/1_org_zoom.jpg"></Image>
    <Dropdown pointing="top left" text='Enes'>
    <DropdownMenu>
        <DropdownItem text="Bilgilerim" icon="info"/>
        <DropdownItem onClick={signOut} text="Çıkış Yap" icon="sign-out"/>
    </DropdownMenu>
    </Dropdown>
    </MenuItem>
    </div>
  )
}
