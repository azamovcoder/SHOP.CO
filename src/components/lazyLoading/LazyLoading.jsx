import "./LazyLoading.scss";

import React, { memo } from "react";

const LazyLoading = () => {
  return (
    <div className="lazy">
      <span className="loader"></span>
    </div>
  );
};

export default memo(LazyLoading);
