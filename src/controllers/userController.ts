import { Request, Response } from 'express'
import prisma from '../config/prismaConfig'

export const getAllUsers = async (req: Request, res: Response) => {
    try {
        const users = await prisma.user.findMany()
        return res.status(200).json(users)
    } catch (error) {
        return res.status(500).json({ error: 'Failed to fetch users' })
    }
}

export const getUser = async (req: Request, res: Response) => {
    const userId = req.params.id

    try {
        const user = await prisma.user.findUnique({
            where: {
                id: userId,
            },
        })

        if (!user) {
            return res.status(404).json({ message: 'User not found' })
        }

        return res.status(200).json(user)
    } catch (error) {
        return res.status(500).json({ error: 'Failed to fetch user' })
    }
}

export const updateUser = async (req: Request, res: Response) => {
    const userId = req.params.id
    const { name, email, password, phone } = req.body

    try {
        await prisma.user.update({
            where: {
                id: userId,
            },
            data: {
                name,
                email,
                password,
                phone,
            },
        })
        return res.status(200).json({ message: 'User data updated' })
    } catch (error) {
        return res.status(500).json({ error: 'Failed to update user' })
    }
}

export const deleteUser = async (req: Request, res: Response) => {
    const userId = req.params.id
    try {
        await prisma.user.delete({
            where: {
                id: userId,
            },
        })
        return res.status(200).json({ message: 'User deleted' })
    } catch (error) {
        return res.status(500).json({ error: 'Failed to delete user' })
    }
}
