import React, { Component, PropTypes } from "react";
import { bindActionCreators } from "redux";
import { Compare, ProductList, FilterList } from "../../components";
//import * as productActions from "../../actions/product";
// import * as movieActions from "../../actions/moviecreators";
import * as contactAction from "../../actions/moviecreators";
import { connect } from "react-redux";
import Details from "../../components/Details";
import Movie from "../../components/Movie";


class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: null,
      products: [],
      filters: [],
      movies: [],
      details: {},
      selectedValue: "Nothing selected"
    };
    this.props.movie.compare = false;
  }
  componentDidMount() {
    this.fetchMovies();
    
  }

  handleSelectChange (selectedValue)  {
    this.setState({
      selectedValue: selectedValue
    });
  };
  render() {


    return (
      <div className="home mt-5">
        <div className="row">
          <div className="col-12">
            <h2 className="mb-3">Top 5 Old school movies</h2>
          </div>
        </div>
        {console.log(this.state.filters)}
        {<FilterList filters={this.state.filters}></FilterList>} 
        {<ProductList products={this.state.movies}></ProductList>}
        {typeof this.props.movie.movies === "undefined" ? (
          "For more details about the movie select the from the list above"
        ) : (
          <Details movies={this.props.movie.movies} />
        )}
      </div>
    );
  }
  fetchMovies() {
    fetch(`http://demo9595712.mockable.io/getTopFiveMovies`)
      .then(response => response.json())
      .then(data =>
        this.setState({
          movies: data.components[1].items,
          filters: data.components[0].items,
          selectedValue: "Nothing selected"
        })
      )
      .catch(error => this.setState({ error, isLoading: false }));
  }
}

const mapStateToProps = (state) => {  
    return {
      movie: state.movie,
      moviedata: state.contacts,

    };  
};

const mapDispatchToProps = (dispatch, ownProps) => {
  console.log(dispatch);
  return {
    product: dispatch(contactAction.addTodo()),
    //options: dispatch(contactAction.mapFilters())
    // moviedata: dispatch(contactAction.getProducts())
  };
};

export default connect(mapStateToProps,mapDispatchToProps )(Home)
