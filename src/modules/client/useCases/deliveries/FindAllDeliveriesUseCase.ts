import { prisma } from "../../../../database/prismaClient";

export class FindAllDeliveriesUseCase {
    async execute(id_client: string) {
        const deliveries = await prisma.client.findMany({
            where: { id: id_client },
            include: {
                delivery: true
            }
            // ,
            // select: {
            //     delivery: true,
            //     username: true
            // }
        })
        return deliveries
    }
}