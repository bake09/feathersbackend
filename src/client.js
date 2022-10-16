import { feathers } from '@feathersjs/feathers'
export {}

const userServiceMethods = ['find', 'get', 'create', 'update', 'patch', 'remove']
const todosServiceMethods = ['find', 'get', 'create', 'update', 'patch', 'remove']

export const createClient = (connection) => {
  const client = feathers()

  client.configure(connection)

  client.use('users', connection.service('users'), {
    methods: userServiceMethods
  })

  client.use('todos', connection.service('todos'), {
    methods: todosServiceMethods
  })

  return client
}
