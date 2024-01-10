import React from 'react'
import Navi from './Navi'
import Categories from './Categories'
import ProductList from '../pages/ProductList'
import { GridRow, GridColumn, Grid, Image } from 'semantic-ui-react'
import { Route } from 'react-router-dom'
import ProductDetail from '../pages/ProductDetail'
import CartDetail from '../pages/CartDetail'
import { ToastContainer } from 'react-toastify'
import ProductAdd from '../pages/ProductAdd'; 


export default function Dashboard() {
  return (
    <div>
<ToastContainer style={{ position: "fixed", bottom: "5px", right: "5px", zIndex: 9999, fontSize: "14px" }} />


   <Grid>
    <GridRow>
      <GridColumn width={4}>
        <Categories/>
        </GridColumn>
   <GridColumn width={12}>
       <Route exact path="/" component={ProductList} />
       <Route exact path="/products" component={ProductList} />
       <Route path="/products/:id" component={ProductDetail} />
       <Route path="/cart" component={CartDetail} />
       <Route path="/product/add" component={ProductAdd} />
        </GridColumn>
        </GridRow>
   </Grid>
      
    </div>
  )
}
