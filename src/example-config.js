const config = {
  style: [
    {
      selector: "node",
      style: {
        content: function(ele) {
          // console.log(ele);
          return ele.data("name");
        }
      }
    },
    {
      selector: "edge",
      style: {
        content: "data(name)",
        "curve-style": "bezier",
        "target-arrow-shape": "triangle"
      }
    }
    // {
    //   selector: "node:selected",
    //   style: {
    //     // "background-color": "blue"
    //   }
    // },
  ],

  layout: {
    name: "grid"
  }
  // widht: "400px",
  // height: "200px"
};

export default config;
