import {g, dc} from "../gremlinexample.js";


// fetch employee info
export const fetchData = async (req, res) => {
    console.log("=====================inside");
  g.V().limit(1).values('desc').toList().
    then(data => {
        console.log(data);
        dc.close();
    }).catch(error => {
        console.log('ERROR', error);
        dc.close();
    });
};