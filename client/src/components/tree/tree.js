import React, { useEffect } from "react";
import Tree from "react-d3-tree";
import { useDispatch, useSelector } from "react-redux";
import tree from "./tree.module.css";
import { useCenteredTree } from "./helper/helpers";
import "../I/style/styles.css";
import { getAllTag } from "../../redux/actions/tagAC";

// Here we're using `renderCustomNodeElement` to represent each node
// as an SVG `rect` instead of the default `circle`.
const renderRectSvgNode = ({ nodeDatum, toggleNode }) => (
  <g className={tree.wrapper}>
    <circle
      r="15"
      x="-10"
      onClick={toggleNode}
      fill="rgba(255, 253, 135, 0.8)"
      strokeWidth="0.2px"
      border="none"
    />
    <text data-tree={nodeDatum.name} opacity="0.5" fontSize="16px" fontWeight="300" fill="rgb(0, 0, 0)" strokeWidth="1" x="20">
      {nodeDatum.name}
    </text>

    {nodeDatum.attributes?.department && (
      <text fill="rgb(0, 0, 0)" opacity="0.1" x="200" dy="20" strokeWidth="1">
        Department: {nodeDatum.attributes?.department}
      </text>
    )}
  </g>
);

export default function TreeApp() {
  const tags = useSelector((state) => state.tag);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!tags.length) {
      dispatch(getAllTag());
    } else {
    }
  }, [tags]);

  const [translate, containerRef] = useCenteredTree();

  return (
    <div className={tree.container} ref={containerRef}>
      <Tree
        data={{
          name: "INSPIRATION",
          children: tags,
        }}
        translate={translate}
        orientation="vertical"
        renderCustomNodeElement={renderRectSvgNode}
      />
    </div>
  );
}
