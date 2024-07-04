import React from 'react';
import Accueil from './Pages/Accueil';
import Admin from './Pages/Admin';
import Cart from './Pages/Cart';
import ProductPage from './Pages/ProductPage';
import Products from './Pages/Products';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

class App extends React.Component{
    constructor(){
        super();
        this.state = {
            products: [],
            productsShown: [],
            cart : [],
            loading:true,
            low:0,
            high:1000,
            category:["Lifestyle","Running","Football","Basketball"],
            gender: ["Men","Women","Boys","Girls"],
            brand:["AirJordan","AirForce","AirMax","Jordan","Mercurial"],
            searchtag:""

        }
    }

    async componentDidMount (){
        const queryShoes = await fetch('http://localhost:1337/shoes', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        })
        const shoes = await queryShoes.json()
        this.setState({
            products:shoes,
            loading:false
        })
        
        if(localStorage.getItem('cart') != null){
            this.setState({cart:JSON.parse(localStorage.getItem('cart'))})          
        }
        
    }

    render(){
        return(
            <Router>
                <Switch>
                <Route exact path='/' render={(props) => (
                    <Accueil 
                        {...props} 
                        SearchProduct={this.SearchProduct} 
                        ChangeCategory={this.ChangeCategory} 
                        ChangePriceRange={this.ChangePriceRange} 
                        ChangeGender={this.ChangeGender} 
                        ChangeBrand={this.ChangeBrand} 
                        cart={this.state.cart} 
                        products={this.state.products}
                        loading={this.state.loading} 
                        addArticleToCart={this.addArticleToCart} 
                    />
                )} />
                <Route exact path='/Admin' render={(props) => (
                    <Admin 
                        {...props} 
                        SearchProduct={this.SearchProduct} 
                        addNewArticle={this.addNewArticle} 
                        ChangeCategory={this.ChangeCategory} 
                        ChangePriceRange={this.ChangePriceRange} 
                        ChangeGender={this.ChangeGender} 
                        ChangeBrand={this.ChangeBrand} 
                        cart={this.state.cart} 
                        products={this.state.products} 
                        loading={this.state.loading} 
                        addArticleToCart={this.addArticleToCart} 
                    />
                )} />
                <Route exact path='/Products' render={(props) => (
                    <Products 
                        {...props} 
                        SearchProduct={this.SearchProduct} 
                        ChangeCategory={this.ChangeCategory} 
                        searchval={this.state.searchtag} 
                        category={this.state.category} 
                        low={this.state.low} 
                        high={this.state.high} 
                        gender={this.state.gender} 
                        brand={this.state.brand} 
                        ChangePriceRange={this.ChangePriceRange} 
                        ChangeGender={this.ChangeGender} 
                        ChangeBrand={this.ChangeBrand} 
                        cart={this.state.cart} 
                        products={this.state.products} 
                        loading={this.state.loading} 
                        addArticleToCart={this.addArticleToCart} 
                    />
                )} />
                <Route exact path='/ProductPage/:id' render={(props) => (
                    <ProductPage 
                        {...props} 
                        SearchProduct={this.SearchProduct} 
                        ChangeCategory={this.ChangeCategory}
                        ChangePriceRange={this.ChangePriceRange} 
                        ChangeGender={this.ChangeGender} 
                        ChangeBrand={this.ChangeBrand} 
                        cart={this.state.cart} 
                        products={this.state.products} 
                        loading={this.state.loading} 
                        addArticleToCart={this.addArticleToCart}
                    />
                )} />
                <Route exact path='/Cart' render={(props) => (
                    <Cart 
                        {...props} 
                        SearchProduct={this.SearchProduct} 
                        ChangeCategory={this.ChangeCategory} 
                        ChangePriceRange={this.ChangePriceRange} 
                        ChangeGender={this.ChangeGender} 
                        ChangeBrand={this.ChangeBrand} 
                        makeOrder={this.makeOrder} 
                        cart={this.state.cart} 
                        loading={this.state.loading} 
                        addArticleToCart={this.addArticleToCart} 
                        deleteArticleFromCart={this.deleteArticleFromCart} 
                        EmptyCart={this.EmptyCart}
                    />
                )} />

                </Switch>
            </Router>
        )
    }
    addArticleToCart = (article) => {
        let newCart = this.state.cart
        newCart.push(article)
        this.setState({panier:newCart})
        localStorage.setItem('cart', JSON.stringify(this.state.cart));
    }

    deleteArticleFromCart = (position) => {
        let  newCart = this.state.cart;
        newCart.splice(position, 1);
        this.setState({cart: newCart});
        localStorage.setItem('cart', JSON.stringify(newCart));
    }

    EmptyCart = () =>{
        this.setState({cart:[]});
        localStorage.setItem('cart', JSON.stringify([]));
    }

    ChangePriceRange = (newlow,newhigh) => {
        this.setState({low:newlow})
        this.setState({high:newhigh})
    }
    ChangeGender = (newGenderArray) => {
        this.setState({gender:newGenderArray})
    }
    ChangeBrand = (newBrandArray) => {
        this.setState({brand:newBrandArray})
    }
    ChangeCategory = (newCategoryArray) => {
        this.setState({category:newCategoryArray})
    }
    SearchProduct = (SearchVal) => {
        this.setState({searchtag:SearchVal})

    }
}
export default App;