import VuexORM from '@vuex-orm/core'

// Create a new instance of Database.
const database = new VuexORM.Database()

import users from './users'
import products from './products'

database.register(users)
database.register(products)

export default database