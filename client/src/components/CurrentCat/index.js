import React from "react";
import PropTypes from "prop-types";
import StyledCurCat from "./style";
import category from "../../data/data";

function CurrentCat({ currentCat }) {
  return (
    <StyledCurCat>
      当前分类： {currentCat ? category[currentCat] : "全部博客"}
    </StyledCurCat>
  );
}

CurrentCat.propTypes = {
  content: PropTypes.string,
};

export default CurrentCat;
