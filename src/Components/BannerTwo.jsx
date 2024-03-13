import React, { useMemo } from 'react'
import "../Style/BannerTwo.css";

export const BannerTwo = ({ createNode,
    inDehradun,
    coEducationalBoardingScho,
    propHeight,
    propFlex,
    propHeight1,}) => {
    const groupDiv1Style = useMemo(() => {
        return {
          height: propHeight,
        };
      }, [propHeight]);
    
      const createNodeStyle = useMemo(() => {
        return {
          flex: propFlex,
          height: propHeight1,
        };
      }, [propFlex, propHeight1]);
  return (
    <div className="assign-node">
    <div className="rectangle-container" style={groupDiv1Style}>
      <div className="frame-child1" />
      <div className="create-node" style={createNodeStyle}>
        {createNode}
      </div>
      <i className="in-dehradun">{inDehradun}</i>
      <div className="constant-node1">
        <div className="co-educational-boarding-school">
          {coEducationalBoardingScho}
        </div>
      </div>
    </div>
  </div>
  )
}
