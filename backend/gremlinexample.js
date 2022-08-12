// const gremlin = require('gremlin');
import gremlin from "gremlin";
const DriverRemoteConnection = gremlin.driver.DriverRemoteConnection;
const Graph = gremlin.structure.Graph;

export const dc = new DriverRemoteConnection('wss://localhost:8182/gremlin',{rejectUnauthorized: false});

const graph = new Graph();
export const g = graph.traversal().withRemote(dc);

// g.V().limit(1).values('desc').toList().
//     then(data => {
//         console.log(data);
//         dc.close();
//     }).catch(error => {
//         console.log('ERROR', error);
//         dc.close();
//     });