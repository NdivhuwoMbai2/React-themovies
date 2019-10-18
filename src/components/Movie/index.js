import React from 'react'
import './styles.css'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { addTodo } from "../../actions/moviecreators";

 const Product = ({ product, addTodo }) => (
   <div key={product.id} className="col-sm-6 col-md-3">
     <div className={"product " + (product.compare ? "compare" : "")}>
       <img src={product.imageUrl} alt={product.name} />
       <div className="image_overlay" />
       <div className="view_details" onClick={() => addTodo(product)}>
         {"Remove"}
       </div>
       <div className="stats">
         <div className="stats-container">
           <span className="product_price">{product.price}</span>
           <span className="product_name">{product.name}</span>
           <p>{product.description}</p>
         </div>
       </div>
     </div>
   </div>
 );
 const SomeButton = ({ children, onClick }) => (
   <button onClick={onClick}>{children}</button>
 );

// SomeButton.propTypes = {
//   children: PropTypes.node,
//   onClick: PropTypes.func
// };

// class Product extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       name: ""
//     };
//   }
//   handleChange() {
//     // dispatches actions to add todo
//     this.props.addTodo(this.state.input);
//     alert("id ont know");
//     // sets state back to empty string
//     this.setState({ input: "" });
//   }
//   updateInput() {
    
//   }
//   render() {
//     return (
//       <div>
//         <input
//           onChange={e => this.updateInput(e.target.value)}
//           value={this.state.input}
//         />
//         <button className="add-todo" onClick={this.handleAddTodo}>
//           Add Todo
//         </button>
//       </div>
//     );
//   }
// }
export default connect(
  null,
  { addTodo }
)(Product);
