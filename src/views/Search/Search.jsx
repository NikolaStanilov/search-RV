import "./Search.css";
import SingleRV from "../../components/SingleRV/SingleRV";
import React from "react";
import PropTypes from "prop-types";

/**
 *
 * @param {{ filteredRV: [], setSearch: Function, listRV: {}}} RVDataAndSetFunction
 */
const Search = ({ filteredRV, setSearch, listRV }) => {

  return (
    <div className="search">
      <h4>Search for your RV</h4>
      <form>
        <input
          type="text"
          onChange={(e) => setSearch(e.target.value)}
          className="rv-input"
        />
      </form>

      {filteredRV && filteredRV.length > 0 ? (
        filteredRV.map(({ id, attributes, relationships }) => {
          const imageId = relationships.primary_image.data.id;
          const imageUrl = listRV.included.filter(
            (el) => el.id === imageId && el.type === "images"
          )[0].attributes.url;

          return (
            <SingleRV key={id} attributes={attributes} imageUrl={imageUrl} />
          );
        })
      ) : (
        <p>There are no results for this search criteria</p>
      )}
    </div>
  );
};

Search.propTypes = {
  filteredRV: PropTypes.array,
  setSearch: PropTypes.func,
  listRV: PropTypes.object
};
export default Search;
