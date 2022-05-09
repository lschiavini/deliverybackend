import { Router } from "express"
import { ensureAuthenticateClient } from "./middlewares/ensureAuthenticateClient";
import { AuthenticateClientController } from "./modules/account/authenticateClient/useCases/AuthenticateClientController";
import { AuthenticateDeliverymanController } from "./modules/account/authenticateDeliveryman/useCases/AuthenticateDeliverymanController";
import { CreateClientController } from "./modules/client/useCases/createClient/CreateClientController"
import { CreateDeliveryController } from "./modules/delivery/useCases/createDelivery/CreateDeliveryController";
import { FindAllAvailableController } from "./modules/delivery/useCases/findAllAvailable/FindAllAvailableController";
import { CreateDeliverymanController } from "./modules/deliveryman/useCases/createDeliveryman/CreateDeliverymanController";

const routes = Router()

const createClientController = new CreateClientController()
const authenticateClientController = new AuthenticateClientController()

const createDeliverymanController = new CreateDeliverymanController()
const authenticateDeliverymanController = new AuthenticateDeliverymanController()

const createDeliveryController = new CreateDeliveryController()
const findAllAvailableController = new FindAllAvailableController()
// const authenticateDeliveryController = new AuthenticateDeliveryController()

routes.post("/client/", createClientController.handle)
routes.post("/client/authenticate/", authenticateClientController.handle)

routes.post("/deliveryman/", createDeliverymanController.handle)
routes.post("/deliveryman/authenticate/", authenticateDeliverymanController.handle)


routes.post("/delivery/", ensureAuthenticateClient, createDeliveryController.handle)
routes.get("/delivery/available", findAllAvailableController.handle)

export { routes }