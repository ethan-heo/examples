import { Express } from 'express'
import fcRoutes from './fullcalendar/route'

const routes = (app: Express) => {
    app.use('/fullcalendar', fcRoutes)
}

export default routes

