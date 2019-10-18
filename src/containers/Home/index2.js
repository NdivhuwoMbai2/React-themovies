import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {Compare, ProductList,FilterList} from '../../components'
import * as productActions from '../../actions/product'
import * as movieActions from '../../actions/moviecreators'
import {connect} from 'react-redux'

class Home extends Component { 
  componentDidMount() {
    this.fetchFilters();
    this.fetchMovies();
    this.props.actions;

    let { dispatch } = this.props

    let action = movieActions.addTodo('Use Redux')
    dispatch(action)
  }
  constructor(props) {
    super(props);
    this.state = {
      filters: [],
      movies: []
    };
    const { products, movies, actions } = this.props;
    console.log(this.boundActionCreators)
  }

  render() {

    // and we have our plain action creator function from above
    const doAddToDoItem = payload => ({ type: 'TODO_ADDED', payload })

    // we'd simply need to make a new function that did both things:
    const boundActionCreator = text => doAddToDoItem;

    const compareProducts = this.state.movies.filter(product => product.compare);
    
    return (
    
     <div className="home mt-5">
       <div className="row">
         <div className="col-12">
           <h2 className="mb-3">Compare Products</h2>
         </div>
       </div>
       <FilterList filterlist={this.state.filters} />
       <ProductList products={this.state.movies} />
        
    </div>);
    //)
  }
  compare(product) {
    console.log(product);
  }
  fetchFilters() {
    fetch(`http://demo9595712.mockable.io/getTopFiveMovies`)
      .then(response => response.json())
      .then(data =>
        this.setState({
          filters: data.components[0].items
        })
      )
      .catch(error => this.setState({ error, isLoading: false }));
  }
  fetchMovies() {
    fetch(`http://demo9595712.mockable.io/getTopFiveMovies`)
      .then(response => response.json())
      .then(data =>
        this.setState({
          movies: data.components[1].items
        })
      )
      .catch(error => this.setState({ error, isLoading: false }));
  }
}


export default connect(
  dispatch => ({
    actions: bindActionCreators(Home, movieActions, productActions, dispatch)

  }))(Home);

  
