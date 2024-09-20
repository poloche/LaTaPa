import React from "react";

export const Team = (props) => {
  return (
    <div id="team" className="text-center">
      <div className="container">
        <div className="col-md-8 col-md-offset-2 section-title">
          <h2>Meet me</h2>
          <p>
            As the founder of LatAm Talent Partners, I am passionate about bridging the gap between businesses and top-tier talent in Latin America. With years of experience in strategic sales and business development, my focus is on fostering meaningful connections and building long-lasting relationships that drive success for both clients and candidates. I believe in the power of collaboration and am dedicated to helping companies scale efficiently by providing access to exceptional remote professionals, while ensuring every partnership is rooted in trust, transparency, and mutual growth.
          </p>
        </div>
        <div id="row" className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-md-6 col-md-offset-3 team">
                  <div className="thumbnail">
                    {" "}
                    <img src={d.img} alt="..." className="team-img" />
                    <div className="caption">
                      <h4>{d.name}</h4>
                      <p>{d.job}</p>
                    </div>
                  </div>
                </div>
              ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};
