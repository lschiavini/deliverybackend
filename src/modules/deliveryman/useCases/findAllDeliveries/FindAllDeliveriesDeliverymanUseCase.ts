import { prisma } from "../../../../database/prismaClient"


export class FindAllDeliveriesDeliverymanUseCase {
    async execute(id_deliveryman: string) {
        const deliveries = await prisma.deliveryman.findMany({
            where: { id: id_deliveryman },
            select: {
                delivery: true,
                username: true,
                id: true
            }
        })
        return deliveries
    }
}