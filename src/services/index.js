import { todos } from './todos/todos.js'

import { user } from './users/users.js'

export const services = (app) => {
  app.configure(todos)

  app.configure(user)

  // All services will be registered here
}
