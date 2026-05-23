import React from "react";

const Bannar = () => {
  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(/mat.jpg)",
        }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">
              Book Your Favorite Sports Facility Anytime
            </h1>
            <p className="mb-5">
              Easily explore and book sports facilities such as football,
              badminton, and tennis courts with a seamless booking experience.
            </p>
            <button className="btn btn-primary">Explore Facilities </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bannar;
