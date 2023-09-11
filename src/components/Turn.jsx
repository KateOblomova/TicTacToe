import React from "react";

function Turn({ turn }) {
  return (
    <div className="turn">
      {turn === 0 ? <h2>Its your turn!</h2> : <h2>CPU is thinking</h2>}
    </div>
  );
}

export default Turn;
