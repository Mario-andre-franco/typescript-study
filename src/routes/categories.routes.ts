import { Router, request } from 'express'
import { CreateCategoryService } from '../service/CreateCategoryService'
import { PostgresCategoriesRepository } from '../repositories/PostgresCategoriesRepository'


const categoriesRoutes = Router()
const categoriesRepository = new PostgresCategoriesRepository()


categoriesRoutes.post('/categories', (request, response) => {
    const { name, description } = request.body

    const createCategoryService = new CreateCategoryService(categoriesRepository)

    createCategoryService.execute({name, description})
    
    return response.status(201).send()
})

categoriesRoutes.get('/', (request, response ) => {
    const all = categoriesRepository.list()

    return response.json(all)
})


export { categoriesRoutes }