import { Router } from "express"
import { ensureAuthenticateClient } from "./middlewares/ensureAuthenticateClient";
import { ensureAuthenticateDeliveryman } from "./middlewares/ensureAuthenticateDeliveryman";
import { AuthenticateClientController } from "./modules/account/authenticateClient/useCases/AuthenticateClientController";
import { AuthenticateDeliverymanController } from "./modules/account/authenticateDeliveryman/useCases/AuthenticateDeliverymanController";
import { CreateClientController } from "./modules/client/useCases/createClient/CreateClientController"
import { FindAllDeliveriesController } from "./modules/client/useCases/deliveries/FindAllDeliveriesController";
import { CreateDeliveryController } from "./modules/delivery/useCases/createDelivery/CreateDeliveryController";
import { FindAllAvailableController } from "./modules/delivery/useCases/findAllAvailable/FindAllAvailableController";
import { UpdateDeliverymanController } from "./modules/delivery/useCases/updateDeliveryman/UpdateDeliverymanController";
import { UpdateEndDateController } from "./modules/delivery/useCases/updateEndDate/UpdateEndDateController";
import { CreateDeliverymanController } from "./modules/deliveryman/useCases/createDeliveryman/CreateDeliverymanController";
import { FindAllDeliveriesDeliverymanController } from "./modules/deliveryman/useCases/findAllDeliveries/FindAllDeliveriesDeliverymanController";

const routes = Router()

const createClientController = new CreateClientController()
const authenticateClientController = new AuthenticateClientController()

const createDeliverymanController = new CreateDeliverymanController()
const authenticateDeliverymanController = new AuthenticateDeliverymanController()

const createDeliveryController = new CreateDeliveryController()
const findAllAvailableController = new FindAllAvailableController()
const updateDeliverymanController = new UpdateDeliverymanController()
const findAllDeliveriesClient = new FindAllDeliveriesController()
const findAllDeliveriesDeliveryman = new FindAllDeliveriesDeliverymanController()
const updateEndDateController = new UpdateEndDateController()

routes.post("/client/", createClientController.handle)
routes.post("/client/authenticate/", authenticateClientController.handle)

routes.post("/deliveryman/", createDeliverymanController.handle)
routes.post("/deliveryman/authenticate/", authenticateDeliverymanController.handle)


routes.post(
    "/delivery/",
    ensureAuthenticateClient,
    createDeliveryController.handle
)
routes.get(
    "/delivery/available",
    ensureAuthenticateDeliveryman,
    findAllAvailableController.handle
)

routes.put(
    "/delivery/updateDeliveryman/:id",
    ensureAuthenticateDeliveryman,
    updateDeliverymanController.handle
)


routes.get(
    "/client/deliveries",
    ensureAuthenticateClient,
    findAllDeliveriesClient.handle
)

routes.get(
    "/deliveryman/deliveries",
    ensureAuthenticateDeliveryman,
    findAllDeliveriesDeliveryman.handle
)

routes.put(
    "/delivery/updateEndDate/:id",
    ensureAuthenticateDeliveryman,
    updateEndDateController.handle
)

export { routes }