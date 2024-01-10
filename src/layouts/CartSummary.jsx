import React from 'react'
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';
import { Dropdown, DropdownDivider, DropdownItem, Label } from 'semantic-ui-react';


 export default function CartSummary() {
  const {cartItems} = useSelector(state=> state.cart)
  return (
    <div>
      <Dropdown item text="Sepetiniz">
        <Dropdown.Menu>
          {
            cartItems.map((cartItem)=>(
              <DropdownItem>
                {cartItem.product.productName}
                <Label>
                  {cartItem.quantity}
                </Label>
              </DropdownItem>
            ))
          }

   <DropdownDivider/> 
   <DropdownItem as={NavLink} to="/cart">Sepete Git</DropdownItem>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}
 
