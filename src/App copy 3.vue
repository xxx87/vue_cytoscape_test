<template>
  <v-app id="app">
    <div class="my_app">
      <div class="my_app_div1">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem sapiente
        praesentium, tenetur modi aspernatur pariatur, eum in neque velit
        assumenda nisi vitae impedit. Minus maiores in qui amet dolore atque.
      </div>
      <div class="my_app_div2">
        <v-btn v-model="btn" @click="btn = !btn">Right panel hide</v-btn>
        <cytoscape
          id="cy"
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
        <div class="my_app_div3" :class="{ hide_div: btn }">
          :style="{visibility: 'hidden'}" Lorem ipsum dolor sit, amet
          consectetur adipisicing elit. Quidem ipsum dignissimos mollitia
          commodi, alias consequatur odio, quos quis officiis harum totam iste
          tempora cum inventore? Enim ab cum et illo?
        </div>
      </div>
    </div>

    <!-- <v-container fill-height class="con1">
      <v-navigation-drawer absolute class="draw" dark permanent> </v-navigation-drawer>
      <div class="con2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur beatae suscipit ad vero? Culpa, maxime, quis mollitia porro dolore nemo animi fugiat sapiente praesentium repellendus vitae nostrum est totam harum.</div>
    </v-container> -->

    <!-- <cytoscape id="cy"
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
    </cytoscape> -->
  </v-app>
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
      config,
      btn: false
    };
  },
  mounted() {
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
html {
  overflow-y: auto !important;
}
.my_app {
  height: 100%;
  border: 1px solid #000;
  display: table;
}
.my_app_div1 {
  border: 1px solid red;
  width: 250px;
  display: table-cell;
}
.my_app_div2 {
  border: 2px solid green;
  position: relative;
}
.my_app_div3 {
  border: 1px solid blue;
  /* display: table-cell; */
  width: 250px;
  height: 100%;
  position: absolute;
  right: 0;
  /* transition: width .2s linear; */
}
#cy {
  position: absolute;
  border: 1px solid #000;
}
/* .my_app_div3:hover {
  color: red;
} */
.show_div {
  /* border: 1px solid blue;
  transition: width 0.2s linear;
  width: 250px;*/
  width: 250px;
  transition: all 0.5s linear;

  opacity: 1;

  /* display: table-cell; */
}
.hide_div {
  /* transition: opacity 1s ease-out;
  opacity: 0; */
  /* width: 0;
  transition: all 0.5s linear;

  opacity: 0; */
  /* display: none; */
  visibility: hidden;
  /* width: 0px;
  transition: width .2s linear; */
}
</style>
