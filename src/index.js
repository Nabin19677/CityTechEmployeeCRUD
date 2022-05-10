import "./config/index.js";
import dbErrorHandler from "./db/_err.js";
import db from "./db/index.js";
import expressApp from "./express_app/index.js";

db.then((db) => {
  expressApp.listen(expressApp.get("port"), () => {
    console.log(`Express App listening on port ${expressApp.get("port")}`);
  });
}).catch(dbErrorHandler);
