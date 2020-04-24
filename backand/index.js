const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const port = 3000;

app.use(cors());
const Pool = require("pg").Pool;
const pool = new Pool({
  user: "sky",
  host: "localhost",
  database: "forBPMN",
  password: "passwOrd",
  port: 5432
});

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

app.get("/", (request, response) => {
  response.json({ info: "Node.js, Express, and Postgres API" });
});

app.get("/nodes/:routecode", async (request, response) => {
  const rCode = request.params.routecode;

  let responseArray = [];

  let nodes = (
    await pool.query(
      `SELECT id, code, blocktype, "xPos", "yPos" FROM wfnode WHERE "wftypicalrouteRef" = '${rCode}'`
    )
  )["rows"];

  let edges = (
    await pool.query(
      `SELECT id, code, "wfnode1_code", "wfnode2_code", "outVariantKey", "outCondition" FROM wflink WHERE "wftypicalrouteRef" = '${rCode}'`
    )
  )["rows"];

  let nodesObj = nodes.map((item) => {
    return {
      data: {
        id: item.id,
        code: item.code,
        name: "Node_" + item.id,
        nodeType: item.blocktype,
        maxCharInRow: 20,
        textMarginY: 15,
        shape: "roundrectangle",
        width: 150,
        height: 100,
        color: "lightgrey",
        textOutlineColor: "#bcbcbc",
        textColor: "black",
        image: "../bp/NodeTask.png",
        imagePositionX: "50%",
        imagePositionY: "0",
        imageWidth: "40",
        imageHeight: "40",
        imageFitType: "none"
      },
      position: { x: parseInt(item.xPos), y: parseInt(item.yPos) }
    };
  });

// console.log(nodesObj.find(node => node.data.code === "node154324447273926").data.id);

  let edgesObj = edges.map((item) => {
    return {
      data: {
        id: item.id,
        code: item.code,
        name: "Edge_" + item.id,
        source: nodesObj.find(node => node.data.code === item.wfnode1_code).data.id,
        target: nodesObj.find(node => node.data.code === item.wfnode2_code).data.id,
        // source: nodesObj.find(node => node.code === item.wfnode1_code).id,
        // target: nodesObj.find(node => node.code === item.wfnode2_code).id,
        outVariantKey: item.outVariantKey,
        outCondition: item.outCondition
      }
    };
  });


  responseArray = nodesObj.concat(edgesObj);
  response.status(200).json(responseArray);
});
app.get("/edges/:routecode", (request, response) => {
  const rCode = request.params.routecode;
  pool.query(
    `SELECT * FROM wflink WHERE "wftypicalrouteRef" = '${rCode}'`,
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).json(results.rows);
    }
  );
});

app.put("/update", (request, response) => {
  const { code, newPos } = request.body
  console.log("code: ", code);
  console.log("pos: ", newPos);
  pool.query(
    `UPDATE wfnode SET "xPos" = '${newPos.x}', "yPos" = '${newPos.y}' WHERE "code" = '${code}'`,
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).json(results.rows);
    }
  );
});

app.listen(port, () => {
  console.log(`App running on port ${port}.`);
});
