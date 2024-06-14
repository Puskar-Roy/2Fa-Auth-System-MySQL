import { Request as ExpressRequest, Response, NextFunction } from 'express'
import jwt, { JwtPayload } from 'jsonwebtoken'
import prisma from '../config/prismaConfig'
import { config } from '../config/config'

interface RequestWithUser extends ExpressRequest {
    userId?: string
}

interface TokenData extends JwtPayload {
    _id: string
}

export const protect = async (
    req: RequestWithUser,
    res: Response,
    next: NextFunction
) => {
    try {
        const token = req.headers.authorization?.split(' ')[1]
        if (!token) {
            return res.status(401).json({
                success: false,
                message: 'Unauthorized: No token provided',
            })
        }

        const decoded = jwt.verify(token, config.JWT_SECRET) as TokenData

        if (!decoded || !decoded._id) {
            return res.status(401).json({
                success: false,
                message: 'Unauthorized: Invalid token',
            })
        }

        const user = await prisma.user.findUnique({
            where: {
                id: decoded._id,
            },
        })

        if (!user) {
            return res.status(401).json({
                success: false,
                message: 'User Not Found!',
            })
        }

        req.userId = decoded._id
        next()
    } catch (error) {
        return res.status(401).json({
            success: false,
            message: 'Unauthorized: Invalid token',
        })
    }
}
