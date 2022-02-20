import React from "react";
import StyledTag from "./style";
import PropTypes from "prop-types";

function CategoryTag({ category }) {
  return <StyledTag>{category}</StyledTag>;
}

CategoryTag.propTypes = {
  category: PropTypes.string,
};

export default CategoryTag;
