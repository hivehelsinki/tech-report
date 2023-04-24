import React from 'react';

const Description = () => {
  return (
    <div className="mt-7">
      <label className="font-semibold text-hdark">Describe your problem</label>
      <div className="mt-5 flex flex-col space-y-4">
        <p className="text-sm">
          Please try to give a synthetic and meaningful description!
          <br></br>
          <span className="text-sm font-light italic">
            ex. “When I try to install node.js via brew a pop up notifies me
            that the CLI needs to be reinstalled.”
          </span>
        </p>
        <textarea className="border px-2 py-1 outline-none" />
      </div>
    </div>
  );
};

export default Description;
