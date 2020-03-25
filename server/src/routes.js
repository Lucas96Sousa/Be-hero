import { Router } from "express";

import OngController from "./controller/OngController";
import IncidentController from "./controller/IncidentController";
import ProfileController from "./controller/ProfileController";
import SessionController from "./controller/SessionController";

const routes = Router();

//Login
routes.post("/sessions", SessionController.create);

//Ong
routes.get("/ongs", OngController.index);
routes.post("/ongs", OngController.store);

//Incidents
routes.get("/incidents", IncidentController.index);
routes.post("/incidents", IncidentController.create);
routes.delete("/incidents/:id", IncidentController.delete);

//Profile
routes.get("/profile", ProfileController.index);

export default routes;
