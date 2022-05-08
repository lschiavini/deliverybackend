import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";


interface IPayload {
    sub: string
}

export async function ensureAuthenticateClient(request: Request, response: Response, next: NextFunction) {
    const authHeader = request.headers.authorization
    if (!authHeader) {
        return response.status(401).json({
            message: "Token Missing"
        })
    }
    const [, token] = authHeader.split(" ")
    try {
        const { sub } = verify(token, "dac9630aec642a428cd73f4be0a03569") as IPayload
        console.log('sub', sub)

        request.id_client = sub

        return next()
    } catch (err) {
        return response.status(401).json({
            message: "Invalid Token!"
        })
    }

}