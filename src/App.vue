<template>
  <div id="app">
    <cytoscape
      ref="cyRef"
      class="cyto"
      :config="config"
      :preConfig="preConfig"
      :afterCreated="afterCreated"
    >
      <cy-element
        v-for="def in elements"
        :key="`${def.data.id}`"
        :definition="def"
        v-on:click="selectNodeOrEdge"
      />
    </cytoscape>
  </div>
</template>

<script>
import jquery from "jquery";
import contextMenus from "cytoscape-context-menus";
import "cytoscape-context-menus/cytoscape-context-menus.css";
import cxtmenu from "cytoscape-cxtmenu";
import navigator from "cytoscape-navigator";
import "cytoscape-navigator/cytoscape.js-navigator.css";
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
    selectNodeOrEdge(event) {
      console.log(2, event.target.id());
    },
    addNode(event) {
      console.log(1, event.target, this.$refs.cyRef.instance);
      if (event.target === this.$refs.cyRef.instance)
        console.log("adding node", this.$refs.cyRef.instance);
      this.elements.push({
        data: { id: Math.floor(Math.random() * 100) },
        position: { x: event.position.x, y: event.position.y },
        group: "nodes"
      });
    },
    preConfig(cytoscape) {
      // contextMenus(cytoscape, jquery);
      cytoscape.use(contextMenus, jquery);
      cytoscape.use(cxtmenu);
      cytoscape.use(navigator);
      // navigator(cytoscape)
      console.log("calling pre-config", cytoscape);
    },
    afterCreated(cy) {
      let defaults_nav = {
        container: true, // html dom element
        viewLiveFramerate: 0, // set false to update graph pan only on drag end; set 0 to do it instantly; set a number (frames per second) to update not more than N times per second
        thumbnailEventFramerate: 10, // max thumbnail's updates per second triggered by graph updates
        thumbnailLiveFramerate: false, // max thumbnail's updates per second. Set false to disable
        dblClickDelay: 200, // milliseconds
        removeCustomContainer: true, // destroy the container specified by user on plugin destroy
        rerenderDelay: 100, // ms to throttle rerender updates to the panzoom for performance
      };

      cy.navigator(); // get navigator instance, nav
      let defaults = {
        menuRadius: 100, // the radius of the circular menu in pixels
        selector: "node", // elements matching this Cytoscape.js selector will trigger cxtmenus
        commands: [
          // an array of commands to list in the menu or a function that returns the array

          {
            // example command
            fillColor: "red", // optional: custom background color for item
            content: "Удалить", // html/text content to be displayed in the menu
            contentStyle: {}, // css key:value pairs to set the command's css in js if you want
            select: function(ele) {
              // a function to execute when the command is selected
              console.log(ele.id()); // `ele` holds the reference to the active element
            },
            enabled: true // whether the command is selectable
          },
          {
            // example command
            fillColor: "lightgreen", // optional: custom background color for item
            content: "Скрыть", // html/text content to be displayed in the menu
            contentStyle: {}, // css key:value pairs to set the command's css in js if you want
            select: function(ele) {
              // a function to execute when the command is selected
              console.log(ele.id()); // `ele` holds the reference to the active element
            },
            enabled: true // whether the command is selectable
          },
          {
            // example command
            fillColor: "lightblue", // optional: custom background color for item
            content: "Выделить всё", // html/text content to be displayed in the menu
            contentStyle: {}, // css key:value pairs to set the command's css in js if you want
            select: function(ele) {
              // a function to execute when the command is selected
              console.log(ele.id()); // `ele` holds the reference to the active element
            },
            enabled: true // whether the command is selectable
          }
        ], // function( ele ){ return [ /*...*/ ] }, // a function that returns commands or a promise of commands
        fillColor: "rgba(0, 0, 0, 0.75)", // the background colour of the menu
        activeFillColor: "rgba(1, 105, 217, 0.75)", // the colour used to indicate the selected command
        activePadding: 10, // additional size in pixels for the active command
        indicatorSize: 24, // the size in pixels of the pointer to the active command
        separatorWidth: 3, // the empty spacing in pixels between successive commands
        spotlightPadding: 4, // extra spacing in pixels between the element and the spotlight
        minSpotlightRadius: 24, // the minimum radius in pixels of the spotlight
        maxSpotlightRadius: 38, // the maximum radius in pixels of the spotlight
        openMenuEvents: "cxttapstart taphold", // space-separated cytoscape events that will open the menu; only `cxttapstart` and/or `taphold` work here
        itemColor: "white", // the colour of text in the command's content
        itemTextShadowColor: "transparent", // the text shadow colour of the command's content
        zIndex: 9999, // the z-index of the ui div
        atMouse: false // draw menu at mouse position
      };
      cy.cxtmenu(defaults);
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
              cy.$("#a").select();
              cy.$("#a").style({ "background-color": "green" });

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
<style>
#app {
  border: 1px solid green;
  position: absolute;
}
.cytoscape-navigator {
  width: 200px;
  height: 200px;
}
.cyto {
  overflow: hidden;
  width: 800px;
  height: 400px;
  border: 1px solid #000;
}
</style>
