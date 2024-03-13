import React from 'react'
import { BannerTwo } from './BannerTwo'
import "../Style/BannerTen.css";

export const BannerTen = () => {
  return (
    <section className="return-node">
    <div className="call-node">
      <div className="call-node-child" />
      <div className="array-node1">
        <div className="group-div">
          <div className="frame-child2" />
          <div className="map-node">
            <img
              className="mask-group-icon11"
              loading="lazy"
              alt=""
              src="/mask-group-12.png"
            />
          </div>
          <div className="queue-node1">
            <h2 className="our-rankings">Our Rankings</h2>
            <div className="priority-queue-node1">
              <div className="top-boarding-school">Top Boarding School</div>
            </div>
          </div>
        </div>
        <img
          className="mask-group-icon12"
          loading="lazy"
          alt=""
          src="/mask-group-13.png"
        />
      </div>
      <BannerTwo
        createNode="#1"
        inDehradun="In Dehradun"
        coEducationalBoardingScho="Co-Educational Boarding School in Dehradun by Education Today 2020"
      />
      <BannerTwo
        createNode="#2"
        inDehradun="In Uttarakhand"
        coEducationalBoardingScho="Co-Educational Boarding School in North India by Education Today 2020"
        propHeight="unset"
        propFlex="unset"
        propHeight1="54px"
      />
      <BannerTwo
        createNode="#4"
        inDehradun="In India"
        coEducationalBoardingScho="Co-Educational Boarding School in India by Education Today 2020"
        propHeight="246px"
        propFlex="1"
        propHeight1="unset"
      />
    </div>
  </section>
  )
}
