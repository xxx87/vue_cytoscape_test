<template>
  <div id="app">
    <cytoscape
    class="cyto"
      ref="cyRef"
      :config="config"
      :preConfig="preConfig"
      :afterCreated="afterCreated"
      v-on:click="addNode"
      v-on:cxttapstart="updateNode"
    >
      <cy-element
        v-for="def in elements"
        :key="`${def.data.id}`"
        :definition="def"
        v-on:mousedown="deleteNode($event, def.data.id)"
      />
    </cytoscape>
  </div>
</template>

<script>
import jquery from "jquery";
import contextMenus from "cytoscape-context-menus";
import "cytoscape-context-menus/cytoscape-context-menus.css";
import config from "./example-config";

const elements = [...config.elements];
delete config.elements;

export default {
  data() {
    return {
      config,
      elements
    };
  },
  methods: {
    addNode(event) {
      console.log(event.target, this.$refs.cyRef.instance);
      if (event.target === this.$refs.cyRef.instance)
        console.log("adding node", this.$refs.cyRef.instance);
      this.elements.push({
        data: { id: Math.floor(Math.random() * 100) },
        position: { x: event.position.x, y: event.position.y },
        group: "nodes"
      });
    },
    deleteNode(id) {
      console.log("node clicked", id);
    },
    updateNode(event) {
      console.log(event.position); // x coordinate
      console.log("right click node", event);
    },
    preConfig(cytoscape) {
      contextMenus(cytoscape, jquery);
      console.log("calling pre-config", cytoscape);
    },
    afterCreated(cy) {
      // cy: this is the cytoscape instance
      console.log("after created", cy);
      cy.contextMenus({
        menuItems: [
          {
            id: "remove",
            content: "remove",
            tooltipText: "remove",
            image: { src: "/remove.svg", width: 12, height: 12, x: 6, y: 4 },
            selector: "node, edge",
            onClickFunction: function(event) {
              cy.$('#a').select();
              cy.$('#a').style({ "background-color": "green" });

              // var target = event.target || event.cyTarget;
              // target.remove();
            },
            hasTrailingDivider: true
          },
          {
            id: "hide",
            content: "hide",
            tooltipText: "hide",
            selector: "*",
            onClickFunction: function(event) {
              var target = event.target || event.cyTarget;
              target.hide();
            },
            disabled: false
          }
        ]
      });
    }
  }
};
</script>
<style scoped>
.cyto {
  width: 300px;
  height: 400px;
  border: 1px solid #000;
}
</style>