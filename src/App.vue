<template>
  <div id="app">
    <cytoscape
      ref="cyto"
      :config="config"
      :preConfig="preConfig"
      :afterCreated="afterCreated"
    >
      <cy-element
        v-for="def in elements"
        :key="`${def.data.id}`"
        :definition="def"
        v-on:mouseup="getPositionCurrentNode"
      />
    </cytoscape>
  </div>
</template>
<script>
// import $ from "jquery";
import axios from "axios";
import cytoscape from "@/plugins/cytoscape";
import edgehandles from "cytoscape-edgehandles";
// import elements from "./elements";
import config from "./example-config";
import edgeHandlesConf from "./edgeHandlesConf";

export default {
  name: "HelloWorld",
  data: function() {
    return {
      elements: [],
      config
    };
  },
  mounted () {
    // this.$refs.cyto.use(edgehandles)
    // console.log(this.$refs.cyto);
  },
  created() {
    // cytoscape.use(edgehandles);
    // console.log(this.$refs);
    axios
      .get("http://localhost:3000/nodes/76a8d2db-ffd6-4345-a8fc-fb71613a4b19")
      .then((resp) => {
        this.elements = resp.data;
        // console.log(this.elements);
      })
      .catch((e) => console.log(e));
  },
  methods: {
    getPositionCurrentNode(event) {
      // console.log(1, event.target.position(), event.target.data('code'));
      // let code = event.target.data("code");
      // let newPos = event.target.position();
      // axios
      //   .put("http://localhost:3000/update", {
      //     code: code,
      //     newPos: newPos
      //   })
      //   .then((resp) => {
      //     // this.elements = resp.data;
      //     console.log(resp);
      //   })
      //   .catch((e) => console.log(e));
    },
    preConfig(cytoscape) {
      // console.log(cytoscape());
      cytoscape.use(edgehandles);
    },
    afterCreated(cy) {
      let eh = cy.edgehandles(edgeHandlesConf);
      // eh.enableDrawMode();
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
#app {
  border: 1px solid #000;
}
</style>
