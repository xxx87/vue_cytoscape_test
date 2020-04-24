let elements = [
  {
    data: {
      id: "n1",
      code: "code-1",
      name: "Node_1",
      nodeType: "job",
      maxCharInRow: 20,
      textMarginY: 15,
      shape: "roundrectangle",
      width: 150,
      height: 100,
      color: "grey",
      textOutlineColor: "#bcbcbc",
      textColor: "black",
      image: "../bp/NodeTask.png",
      imagePositionX: "50%",
      imagePositionY: "0",
      imageWidth: "40",
      imageHeight: "40",
      imageFitType: "none"
    },
    position: { x: 10, y: 10 }
  },
  {
    data: {
      id: "n2",
      code: "code-2",
      name: "Node_2",
      nodeType: "job",
      maxCharInRow: 20,
      textMarginY: 15,
      shape: "roundrectangle",
      width: 150,
      height: 100,
      color: "grey",
      textOutlineColor: "#bcbcbc",
      textColor: "black",
      image: "../bp/NodeTask.png",
      imagePositionX: "50%",
      imagePositionY: "0",
      imageWidth: "40",
      imageHeight: "40",
      imageFitType: "none"
    },
    position: { x: 200, y: 150 } // can alternatively specify position in rendered on-screen pixels
  },

  {
    data: {
      id: "n3",
      code: "code-3",
      name: "Node_3",
      nodeType: "job",
      maxCharInRow: 20,
      textMarginY: 15,
      shape: "roundrectangle",
      width: 150,
      height: 100,
      color: "grey",
      textOutlineColor: "#bcbcbc",
      textColor: "black",
      image: "../bp/NodeTask.png",
      imagePositionX: "50%",
      imagePositionY: "0",
      imageWidth: "40",
      imageHeight: "40",
      imageFitType: "none"
    },
    position: { x: 10, y: 234 }
  },
  {
    group: "edges",
    data: {
      id: "e1",
      name: "Edge1",
      source: "n1",
      target: "n2"
    },
    pannable: false // whether dragging on the edge causes panning
  },
  {
    group: "edges",
    data: {
      id: "e2",
      name: "Edge2",
      source: "n2",
      target: "n3"
    },
    pannable: false // whether dragging on the edge causes panning
  }
];

export default elements;
