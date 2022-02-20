import React from "react";
import PropTypes from "prop-types";
import StyledCurCat from "./style";

function CurrentCat({ content }) {
  return <StyledCurCat>{content}</StyledCurCat>;
}

CurrentCat.propTypes = {
  content: PropTypes.string,
};

export default CurrentCat;
