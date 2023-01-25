import { Router } from "express";

import { categoryRoutes } from "./categories.routes";

const routers = Router();

routers.use("/categories", categoryRoutes);

export default routers;
