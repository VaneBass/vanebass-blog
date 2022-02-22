import React from "react";
import StyledTag from "./style";
import PropTypes from "prop-types";
import category from "../../data/data";

function CategoryTag({ catname, setCurrentCat }) {
  return (
    <StyledTag onClick={() => setCurrentCat(catname)}>
      {category[catname]}
    </StyledTag>
  );
}

CategoryTag.propTypes = {
  category: PropTypes.string,
};

export default CategoryTag;
