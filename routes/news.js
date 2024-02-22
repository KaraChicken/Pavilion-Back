import { Router } from 'express'
import * as auth from '../middlewares/auth.js'
import { create, getAll, edit, get, getId } from '../controllers/news.js'
import admin from '../middlewares/admin.js'

const router = Router()

router.post('/', auth.jwt, admin, create)
router.get('/all', auth.jwt, admin, getAll)
router.patch('/:id', auth.jwt, edit)
router.get('/', get)
router.get('/:id', getId)

export default router
