import React from "react";

export const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer>
      {`Copyright `} &#169; {` new company ${year}`}
    </footer>
  );
};
