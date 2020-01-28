import React from "react";
import EachWash from "./EachWash.js";

const WashesList = props => {
  return (
    <div>
      <p>
        {props.washes.map(eachwash => (
          <EachWash eachwash={eachwash} />
        ))}
      </p>
    </div>
  );
};

export default WashesList;
