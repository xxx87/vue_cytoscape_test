import {
  nodeStyle,
  edgeStyle,
  selectedEdgeCss,
  selectedNodeCss
} from "./elementsStyle";

const config = {
  layout: {
    name: "preset"
  },
  zoom: 0.7,
  pan: { x: 0, y: 0 },
  wheelSensitivity: 0.2,
  // so we can see the ids
  style: [
    {
      selector: "node",
      style: nodeStyle
    },
    {
      selector: "edge",
      style: edgeStyle
    },
    {
      selector: "edge:selected",
      style: selectedEdgeCss
    },
    {
      selector: "node:selected",
      style: selectedNodeCss
    }
  ]
};

export default config;
