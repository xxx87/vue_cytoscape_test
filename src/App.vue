<template>
  <div id="cyto" ref="cyto"></div>
</template>
<script>
// import $ from "jquery";
import cytoscape from "cytoscape";
import elements from "./elements";
import {
  nodeStyle,
  edgeStyle,
  selectedEdgeCss,
  selectedNodeCss
} from "./elementsStyle";

export default {
  name: "HelloWorld",
  data: function() {
    return {};
  },
  props: {
    msg: String
  },
  mounted() {
    let cy = cytoscape({
      container: this.$refs.cyto,
      elements: elements,

      layout: {
        name: "preset"
      },

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
    });
    //this line below breaks the browser
    this.cy = cy;
    // var stringStylesheet = "node { background-color: cyan; }";
    // console.log(cy.$("#n2").data());
    // cy.$("#n2").css("foo");
    // cy.$('#n2').style("background-color", "cyan");
    // function nodeType(type) {
    //   console.log(1, type);
    //   return { content: "data(id)", "background-color": "red" };
    // }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
#cyto {
  width: 800px;
  height: 800px;
  display: block;
  border: 1px solid blue;
}
</style>
