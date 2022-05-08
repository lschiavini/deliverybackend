import { Router } from "express"
import { AuthenticateClientController } from "./modules/account/authenticateClient/useCases/AuthenticateClientController";
import { AuthenticateDeliverymanController } from "./modules/account/authenticateDeliveryman/useCases/AuthenticateDeliverymanController";
import { CreateClientController } from "./modules/client/useCases/createClient/CreateClientController"
import { CreateDeliveryController } from "./modules/delivery/useCases/createDelivery/CreateDeliveryController";
import { CreateDeliverymanController } from "./modules/deliveryman/useCases/createDeliveryman/CreateDeliverymanController";

const routes = Router()

const createClientController = new CreateClientController()
const authenticateClientController = new AuthenticateClientController()

const createDeliverymanController = new CreateDeliverymanController()
const authenticateDeliverymanController = new AuthenticateDeliverymanController()

const createDeliveryController = new CreateDeliveryController()
// const authenticateDeliveryController = new AuthenticateDeliveryController()

routes.post("/client/", createClientController.handle)
routes.post("/deliveryman/", createDeliverymanController.handle)
routes.post("/delivery/", createDeliveryController.handle)
routes.post("/client/authenticate/", authenticateClientController.handle)
routes.post("/deliveryman/authenticate/", authenticateDeliverymanController.handle)

export { routes }