import React from "react";

import Contribution from "./Contribution/Contribution";

function SingleContribution({ contributions }) {
  return (
    <div className="individualContribution">
      {contributions.map((contribution) => (
        <Contribution key={contribution.id} contribution={contribution} />
      ))}
    </div>
  );
}

export default SingleContribution;
