
import React from 'react';
import { Route } from 'react-router-dom';
import { Header } from './components';
import { Home, Cart } from './Pages';
import axios from 'axios';
import { setPizzas } from './redux/actions/pizzas';
// import store from './redux/store';
import { connect } from 'react-redux';






// function App() {
//   const [stPizza, setPizza] = React.useState([]);

// React.useEffect(() => {

// axios.get('http://localhost:3000/db.json').then(({data}) => {
//   setPizza(data.pizzas);
// })
// },[]);


//   return (
//     <div>
//         <div className="wrapper">
//       <Header />
//       <div className="content">
//       <Route path='/' render={() => <Home items={stPizza }/>} exact/>
//         <Route path='/cart' component={Cart} exact/>
//       </div>
//     </div>
//     </div>
//   );
// }
class App extends React.Component {
  componentDidMount() {
    axios.get('http://localhost:3000/db.json').then(({ data }) => {
      this.props.setPizzas(data.pizzas);
    })
  }

  render() {
    return (

      <div className="wrapper">
        <Header />
        <div className="content">
          <Route path='/' render={() => <Home items={this.props.items} />} exact />
          <Route path='/cart' component={Cart} exact />
        </div>
      </div>

    );
  }
}
const mapStateToProps = (state) => {
  return {
    items: state.pizzas.items
  }
};

const mapDispatchToProps ={
  
    setPizzas,
    
  
}

export default connect(mapStateToProps, mapDispatchToProps )(App);
