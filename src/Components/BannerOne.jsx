import React, { useMemo } from 'react'
import "../Style/BannerOne.css";

export const BannerOne = ({ image14,
    swimming,
    propAlignSelf,
    propPadding,
    propWidth,
    propBackgroundImage,
    propBottom,
    propWidth1,}) => {
    const ancestorNodeStyle = useMemo(() => {
        return {
          alignSelf: propAlignSelf,
          padding: propPadding,
          width: propWidth,
        };
      }, [propAlignSelf, propPadding, propWidth]);
    
      const groupDivStyle = useMemo(() => {
        return {
          backgroundImage: propBackgroundImage,
        };
      }, [propBackgroundImage]);
    
      const cousinNodesStyle = useMemo(() => {
        return {
          bottom: propBottom,
        };
      }, [propBottom]);
    
      const swimmingStyle = useMemo(() => {
        return {
          width: propWidth1,
        };
      }, [propWidth1]);
  return (
    <div className="ancestor-node" style={ancestorNodeStyle}>
    <div className="image-14-parent" style={groupDivStyle}>
      <img className="image-14-icon" alt="" src={image14} />
      <div className="cousin-nodes" style={cousinNodesStyle} />
      <h1 className="swimming" style={swimmingStyle}>
        {swimming}
      </h1>
      <div className="aunt-nodes">
        <div className="nephew-nodes">
          <div className="acres-pollution-free">
            22 Acres, Pollution- Free, World-Class.
          </div>
          <div className="ancestor-once-removed-nodes">
            <img
              className="mask-group-icon1"
              loading="lazy"
              alt=""
              src="/mask-group.png"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}
