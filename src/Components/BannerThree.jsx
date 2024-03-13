import React from 'react'
import { BannerOne } from './BannerOne'
import "../Style/BannerThree.css";

export const BannerThree = () => {
  return (
    <section className="branch-node">
    <div className="leaf-node">
      <div className="parent-node">
        <div className="sibling-nodes">
          <div className="child-nodes">
            <h1 className="our-commitment-to">
              Our commitment to all-round development shines in diverse
              extracurricular activities.
            </h1>
            <h1 className="our-students-love-container">
              <span>(</span>
              <span className="our-students-love">
                {" "}
                Our Students love that
              </span>
              <span>! )</span>
            </h1>
          </div>
          <BannerOne image14="/fight.png" swimming="Swimming" />
        </div>
        <div className="sibling-once-removed-nodes">
          <div className="uncle-once-removed-nodes">
            <BannerOne
              image14="/fight.png"
              swimming="Taekwondo"
              propAlignSelf="unset"
              propPadding="0px var(--padding-25xl)"
              propWidth="651px"
              propBackgroundImage="url('/fight.png')"
              propBottom="0px"
              propWidth1="unset"
            />
            <div className="descendant-thrice-removed-node">
              <img
                className="image-20-icon"
                loading="lazy"
                alt=""
                src="/seemore.png"
              />
              <div className="uncle-thrice-removed-nodes">
                <div className="cousin-thrice-removed-nodes-parent">
                  <div className="cousin-thrice-removed-nodes">
                    <img
                      className="cousin-thrice-removed-nodes-child"
                      alt=""
                      src="/horseride.png"
                    />
                    <div className="descendant-four-times-removed" />
                  </div>
                  <h1 className="horse-riding">Horse Riding</h1>
                  <div className="uncle-four-times-removed-nodes">
                    <div className="aunt-four-times-removed-nodes">
                      <div className="acres-pollution-free1">
                        22 Acres, Pollution- Free, World-Class.
                      </div>
                      <div className="ancestor-five-times-removed-no">
                        <img
                          className="mask-group-icon2"
                          loading="lazy"
                          alt=""
                          src="/mask-group.png"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="sibling-five-times-removed-nod">
        <div className="aunt-five-times-removed-nodes-parent">
          <div className="aunt-five-times-removed-nodes">
            <b className="see-all-activities">SEE ALL ACTIVITIES</b>
          </div>
          <div className="frame-child" />
          <img className="image-16-icon" alt="" src="/arrow.png" />
        </div>
      </div>
    </div>
  </section>
  )
}
