import { compare } from "bcrypt"
import { sign } from "jsonwebtoken"
import { prisma } from "../../../../database/prismaClient"

interface IAuthenticateDeliveryman {
    username: string
    password: string
}

export class AuthenticateDeliverymanUseCase {
    async execute({ username, password }: IAuthenticateDeliveryman) {
        const deliveryman = await prisma.deliveryman.findFirst({
            where: {
                username: username
            }
        })

        if (!deliveryman) {
            throw new Error("Username or password invalid")
        }

        const passMatch = await compare(password, deliveryman.password)

        if (!passMatch) {
            throw new Error("Username or password invalid")
        }

        const token = sign({ username }, "dac9630aec642a428cd73f4be0a03569", {
            subject: deliveryman.id,
            expiresIn: "1d"
        })

        return token

    }
};
