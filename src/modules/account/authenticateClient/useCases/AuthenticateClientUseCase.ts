import { compare } from "bcrypt"
import { sign } from "jsonwebtoken"
import { prisma } from "../../../../database/prismaClient"

interface IAuthenticateClient {
    username: string
    password: string
}

export class AuthenticateClientUseCase {
    async execute({ username, password }: IAuthenticateClient) {
        const client = await prisma.client.findFirst({
            where: {
                username: username
            }
        })

        if (!client) {
            throw new Error("Username or password invalid")
        }

        const passMatch = await compare(password, client.password)

        if (!passMatch) {
            throw new Error("Username or password invalid")
        }

        const token = sign({ username }, "dac9630aec642a428cd73f4be0a03569", {
            subject: client.id,
            expiresIn: "1d"
        })

        return token

    }
};
