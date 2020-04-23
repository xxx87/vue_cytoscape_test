const config = {
  style: [
    {
      selector: "node",
      style: {
        content: "data(name)",
        // "text-margin-y": "data(textMarginY)",
        // "font-family": "consolas",
        // // "font-family": "courier-new",
        // "text-wrap": "wrap",
        // // "text-max-width": 80,
        // "border-color": "#000",
        // "background-image": "data(image)",
        // "background-position-x": "data(imagePositionX)",
        // "background-position-y": "data(imagePositionY)",
        // "background-width": "data(imageWidth)",
        // "background-height": "data(imageHeight)",
        // "background-fit": "data(imageFitType)",
        // "border-opacity": 0.5,
        // // "content": "data(name)",
        // label: "data(name)",
        // shape: "data(shape)",
        // width: "data(width)",
        // height: "data(height)",
        // "font-size": 12,
        // "text-valign": "center",
        // "text-outline-width": 0,
        // "text-outline-color": "data(textOutlineColor)",
        // "background-color": "data(color)",
        // color: "data(textColor)",
        // "border-width": 2
      }
    },
    {
      selector: "edge",
      style: {
        content: "data(name)"
      }
    },
    {
      selector: "node:selected",
      style: {
        "background-color": "red"
      }
    },
    {
      selector: "edge",
      style: {
        "curve-style": "bezier",
        "target-arrow-shape": "triangle"
      }
    }
  ],

  elements: [
    {
      data: {
        id: "a", name: "el A"
      },
      position: {
        x: 589, y: 182
      }
    },
    { data: { id: "b", name: "el B" }, position: { x: 689, y: 282 } },
    { data: { id: "c", name: "el C" }, position: { x: 389, y: 102 } },
    { data: { id: "d", name: "el D" }, position: { x: 289, y: 132 } },
    { data: { id: "ab", name: "link1", source: "a", target: "b" } },
    { data: { id: "bc", name: "link2", source: "b", target: "c" } },
    { data: { id: "cd", name: "link3", source: "c", target: "d" } },
    { data: { id: "da", name: "link4", source: "d", target: "a" } }
  ],

  layout: {
    name: "grid"
  },
  widht: "400px",
  height: "200px"
};

export default config;
