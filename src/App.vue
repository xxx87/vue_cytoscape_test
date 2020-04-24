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
        :style="`${def.data.type}`"
      />
    </cytoscape>
  </div>
</template>
<script>
// import $ from "jquery";
import cytoscape from "@/plugins/cytoscape";
import elements from "./elements";
import config from "./example-config";

export default {
  name: "HelloWorld",
  data: function() {
    return {
      config,
      elements
    };
  },
  methods: {
    preConfig() {

    },
    afterCreated() {}
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
#app {
  border: 1px solid #000;
}
</style>
