import React from "react";

const Header = () => {
  return (
    <div className = "flex justify-between">
      <div className="absolute w-screen bg-gradient-to-b from-black px-2 py-2 z-10">
        <img
          className="w-48"
          src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
          alt="netflix logo"
        />
      </div>
      <div>
        <img src="https://occ-0-4344-2186.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABZBe7K0DPia9LvzIkQ4yzqX9NocZlAjS1MOyEuBQD1WmFuLKZwvq0bxc4n4_EV73khqgwed0PYLNml0V8LCymt31e7x-8jQ.png?r=229" alt="user logo" />
      </div>
    </div>
  );
};

export default Header;
