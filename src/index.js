import app from "./app.js";
import { PORT } from "./config.js";

app.listen(4000 || process.env.PORT);
console.log("Server is running", PORT);