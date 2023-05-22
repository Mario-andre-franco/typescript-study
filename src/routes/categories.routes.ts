import { Router, request } from 'express'
import { createCategoryController } from '../modules/cars/useCases/createCategory'
import { listCategoriesController } from '../modules/cars/useCases/listCategories/ListCategoriesController'



const categoriesRoutes = Router()


categoriesRoutes.post('/categories', (request, response) => {
    return createCategoryController.handle(request,response)
})

categoriesRoutes.get('/', (request, response ) => {
    return listCategoriesController.handle(request,response)
})


export { categoriesRoutes }