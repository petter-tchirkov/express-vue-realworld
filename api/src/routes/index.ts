import auth from './auth'
import { Router } from "express"


const root:Router = Router()

root.use('/auth', auth)

root.get('/', (_, res) => {
  res.status(200).send({message: 'root router'})
} )

export default root
