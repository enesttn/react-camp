import React, { useState } from "react";
import {
  DropdownMenu,
  DropdownItem,
  MenuMenu,
  MenuItem,
  Button,
  Dropdown,
  Menu,
  Container,
} from "semantic-ui-react";
import SignedOut from "./SignedOut";
import SignedIn from "./SignedIn";
import CartSummary from "./CartSummary";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useSelector } from 'react-redux';

export default function Navi() {
  const {cartItems} = useSelector(state=> state.cart)
  const [isAuthenticated, setIsAutenticated] = useState(true);
  const history = useHistory()
  function handleSignOut() {
    setIsAutenticated(false)
    history.push("/")
  }
  function handleSignIn(){
    setIsAutenticated(true)
  }
  return (
    <div>
      <Menu inverted fixed="top" size="large">
        <Container>
          <MenuItem name="home" />
          <MenuItem name="messages" />

          <MenuMenu position="right">
            {cartItems.length>0&&<CartSummary/>}
            {isAuthenticated ? <SignedIn signOut={handleSignOut}/> : <SignedOut signIn={handleSignIn} />}
          </MenuMenu>
        </Container>
      </Menu>
    </div>
  );
}
