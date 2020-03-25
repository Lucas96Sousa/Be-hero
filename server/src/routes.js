import { Router } from "express";

import OngController from "./controller/OngsController";
const routes = Router();

routes.get("/ongs", OngController.index);
routes.post("/ongs", OngController.store);

export default routes;
