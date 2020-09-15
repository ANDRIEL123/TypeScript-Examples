import express from 'express'
import routes from './routes'
import routeUser from './routes/routeUser'
const app = express();

app.use('/users', routeUser);

app.listen(3333);