import express, { Application, Request, Response } from "express"
import { productRoute } from "./modules/Products/product.route"
const app:Application = express()
import cors from 'cors'
import { orderRoute } from "./modules/orders/order.route"


app.use(express.json())
app.use(cors())

app.use("/api/products", productRoute)
app.use("/api/orders", orderRoute)


app.get('/', (req:Request, res:Response) => {
  res.send('Hello World!')
})

export default app;

