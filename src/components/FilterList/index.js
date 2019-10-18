import React from "react";
import { Product } from "../";
import Select from 'react-select';

const FilterList = ({ filterlist }) => (
  <div className="row mt-3">
    {/* {
      <select
        // value={this.state.selectedValue}
        onChange={e => this.setState({ selectedValue: e.target.value })}
      >
        {
          <option key={filterlist.value} value={filterlist.value}>
            {filterlist.valueToOrderBy}
          </option>
        }
      </select>
    } */}
  </div>
);

export default FilterList;
