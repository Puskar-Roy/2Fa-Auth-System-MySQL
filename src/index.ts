import express, { Express, Request, Response, NextFunction } from 'express'
import cors from 'cors'
import morgan from 'morgan'
import { config } from './config/config'
import limiter from './lib/rateLimitConfig'
import CheckError from './lib/checkError'
import errorHandler from './middleware/errorMiddleware'
import authRoutes from './router/authRoutes'
import userRoutes from './router/userRoutes'
import corsOptions from './lib/corsConfig'

const app: Express = express()

app.use(express.json())
app.use(morgan('dev'))
app.use(config.DEV_ENV === 'PROD' ? cors(corsOptions) : cors())
app.use(limiter)

app.get('/', (req, res) => {
    res.status(200).json({ success: true })
});

app.use('/api/v0.1/auth', authRoutes)
app.use('/api/v0.1/users', userRoutes)

app.all('*', (req: Request, res: Response, next: NextFunction) => {
    next(new CheckError(`Can't find ${req.originalUrl} on this server!`, 404))
})

app.use(errorHandler)

app.listen(config.PORT, () => {
    console.log(`[⚡] Server Is Running on http://localhost:${config.PORT}`)
})
