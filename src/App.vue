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
      />
    </cytoscape>
  </div>
</template>
<script>
// import $ from "jquery";
import axios from "axios";
import cytoscape from "@/plugins/cytoscape";
// import elements from "./elements";
import config from "./example-config";

export default {
  name: "HelloWorld",
  data: function() {
    return {
      elements: [],
      config
    };
  },
  created() {
    console.log(this.config);
    axios
      .get("http://localhost:3000/nodes/76a8d2db-ffd6-4345-a8fc-fb71613a4b19")
      .then((resp) => {
        this.elements = resp.data;
        console.log(this.elements);
      })
      .catch((e) => console.log(e));
  },
  methods: {
    preConfig() {},
    afterCreated() {}
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
#app {
  border: 1px solid #000;
}
</style>
