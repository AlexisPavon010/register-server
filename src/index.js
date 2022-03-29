import app from "./app.js";
import "./mongoose/db.js";



app.listen(4000 || process.env.PORT);
console.log("Server is running", 4000 || process.env.PORT);

