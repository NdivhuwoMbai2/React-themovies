import React from 'react'
import './styles.css'

const Details = ({ movies }) => (
  <div className="row compare">
    <div className="col-12 mt-5 text-center">
      <table className="table">
        <thead className="thead-default">
          <tr>
            <th>
              {console.log(this.state)}
              {/* <span className="product_price">{content.title}</span> */}
              <p>{movies.synopsis}</p>
            </th>
            <th>
              <img
                src={movies.imageUrl}
                width="500px"
                height="500px"
                alt={movies.name}
              />
            </th>
          </tr>
          <tr></tr>
        </thead>
        <tbody>
          <tr className="price">
            <th scope="row">Type</th>
            <td key={movies.id} className="text-center">
              {movies.type}
            </td>
          </tr>
          <tr className="colors">
            <th scope="row">rank</th>
            <td key={movies.id}>{movies.rank}</td>
          </tr>
          <tr className="colors">
            <th scope="row">synopsis</th>
            <td key={movies.id}>{movies.synopsis}</td>
          </tr>
          <tr className="colors">
            <th scope="row">releaseDate</th>
            <td>{movies.releaseDate}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);

export default Details
