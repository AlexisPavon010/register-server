import express from "express";
import cors from "cors";

import "./mongoose/db.js";
import registerRoutes from "./routes/register.router.js";
// import { getAuthorization } from "./middelwares/getAuthorization.js";

// import morgan from "morgan";

// import authRoutes from "./routes/auth";
// import indexRoutes from "./routes/index";
// import tasksRoutes from "./routes/tasks";

const app = express();

// app.set("port", config.port);

// app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());
// app.use( getAuthorization);
app.get('/', (req, res)=> {
    res.status(200).json({ok: true})
});

app.use('/api', registerRoutes);

// app.use(authRoutes);
// app.use(tasksRoutes);

export default app;