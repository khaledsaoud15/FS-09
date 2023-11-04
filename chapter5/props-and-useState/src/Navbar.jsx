import React from "react";

const Navbar = ({ prp, styles }) => {
  console.log(prp, styles);
  return (
    <div>
      <h1 style={styles}>{prp}</h1>
    </div>
  );
};

export default Navbar;
