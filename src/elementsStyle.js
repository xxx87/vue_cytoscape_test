let nodeStyle = {
  "text-margin-y": "data(textMarginY)",
  "text-wrap": "wrap",
  "border-color": "#000",
  "background-image": "data(image)",
  "background-position-x": "data(imagePositionX)",
  "background-position-y": "data(imagePositionY)",
  "background-width": "data(imageWidth)",
  "background-height": "data(imageHeight)",
  "background-fit": "data(imageFitType)",
  "border-opacity": 0.5,
  label: "data(name)",
  shape: "data(shape)",
  width: "data(width)",
  height: "data(height)",
  "font-size": 12,
  "text-valign": "center",
  "text-outline-width": 0,
  "text-outline-color": "data(textOutlineColor)",
  "background-color": "data(color)",
  color: "data(textColor)",
  "border-width": 2
};
let edgeStyle = {
  "text-wrap": "wrap",
  "text-max-width": 80,
  "curve-style": "bezier",
  width: 4,
  label: "data(name)",
  "line-color": "#dddddd",
  "target-arrow-color": "#dddddd",
  "source-arrow-color": "#dddddd",
  "target-arrow-shape": "triangle",
  "source-arrow-shape": "circle",
  opacity: 1,
  "control-point-step-size": 80
};
let selectedEdgeCss = {
  "curve-style": "bezier",
  width: 4,
  label: "data(name)",
  "line-color": "#777777",
  "target-arrow-color": "#777777",
  "source-arrow-color": "#777777",
  "target-arrow-shape": "triangle",
  "source-arrow-shape": "circle",
  opacity: 1
};
let selectedNodeCss = {
  "border-width": 6,
  "border-color": "#002a6d",
  "line-color": "black",
  "target-arrow-color": "black",
  "source-arrow-color": "black",
  opacity: 1
};

export { nodeStyle, edgeStyle, selectedEdgeCss, selectedNodeCss };
