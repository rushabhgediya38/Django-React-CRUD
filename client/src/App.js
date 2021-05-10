import 'bootstrap/dist/css/bootstrap.min.css'
import ShowProduct from './components/ShowProducts'
import AddProduct from './components/AddProducts'
import ProductDetail from './components/ProductDetail'
import ProductUpdate from './components/UpdateProduct'
import ProductDelete from './components/DeleteProduct'
import NavBarMenu from './components/NavbarMenu'
import './App.css'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
function App() {
  return (
    <div className='App'>
      <Router>
        <NavBarMenu />
        <Switch>
          <Route exact path='/'>
            <ShowProduct />
          </Route>
          <Route exact path='/add'>
            <AddProduct />
          </Route>
          <Route exact path='/:id'>
            <ProductDetail />
          </Route>
          <Route exact path='/:id/update'>
            <ProductUpdate />
          </Route>
          <Route exact path='/:id/delete'>
            <ProductDelete />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
