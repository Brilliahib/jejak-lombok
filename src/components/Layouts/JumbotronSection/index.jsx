import React from "react";

const Jumbotron = () => {
  return (
    <div
      className="jumbotron w-full h-screen flex justify-center items-center"
      style={{
        marginTop: "-4rem",
      }}
    >
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
      >
        <source
          src="https://www.visitfinland.com/dam/jcr:81fce74a-0194-456c-9ae8-6f05fbb732f8/Visit_Finland_00b_main_winter_hero_video_1920x1080_final_short_wksdmh-q_auto.mp4"
          type="video/mp4"
        />
      </video>
      <div className="jumbotron-content relative z-10">
        <h1 className="text-6xl font-black text-white text-center drop-shadow-md">
          Explore <br />
          Lombok
        </h1>
      </div>
    </div>
  );
};

export default Jumbotron;
