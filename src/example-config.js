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
  // wheelSensitivity: 0.2,
  // so we can see the ids
  style: [
    {
      selector: "node[name]",
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
    },
    // some style for the extension

    {
      selector: ".eh-handle",
      style: {
        "background-color": "red",
        width: 12,
        height: 12,
        shape: "ellipse",
        "overlay-opacity": 0,
        "border-width": 12, // makes the handle easier to hit
        "border-opacity": 0
      }
    },

    {
      selector: ".eh-hover",
      style: {
        "background-color": "red"
      }
    },

    {
      selector: ".eh-source",
      style: {
        "border-width": 2,
        "border-color": "red"
      }
    },

    {
      selector: ".eh-target",
      style: {
        "border-width": 2,
        "border-color": "red"
      }
    },

    {
      selector: ".eh-preview, .eh-ghost-edge",
      style: {
        "background-color": "red",
        "line-color": "red",
        "target-arrow-color": "red",
        "source-arrow-color": "red"
      }
    },

    {
      selector: ".eh-ghost-edge.eh-preview-active",
      style: {
        opacity: 0
      }
    }
  ]
};

export default config;
