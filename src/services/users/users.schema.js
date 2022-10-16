import { resolve, querySyntax, getValidator, getDataValidator } from '@feathersjs/schema'
import { passwordHash } from '@feathersjs/authentication-local'
import { dataValidator, queryValidator } from '../../schemas/validators.js'

// Main data model schema
export const userSchema = {
  $id: 'User',
  type: 'object',
  additionalProperties: false,
  required: ['id', 'email'],
  properties: {
    id: {
      type: 'number'
    },
    email: { type: 'string' },
    name: { type: 'string' },
    profile_img: { type: 'string' },
    password: { type: 'string' }
  }
}
export const userResolver = resolve({
  properties: {}
})

// Schema for the basic data model (e.g. creating new entries)
export const userDataSchema = {
  $id: 'UserData',
  type: 'object',
  additionalProperties: false,
  required: [],
  properties: {
    ...userSchema.properties
  }
}
export const userDataValidator = getDataValidator(userDataSchema, dataValidator)
export const userDataResolver = resolve({
  properties: {
    password: passwordHash({ strategy: 'local' })
  }
})

export const userExternalResolver = resolve({
  properties: {
    // The password should never be visible externally
    password: async () => undefined
  }
})

// Schema for allowed query properties
export const userQuerySchema = {
  $id: 'UserQuery',
  type: 'object',
  additionalProperties: false,
  properties: {
    ...querySyntax(userSchema.properties)
  }
}
export const userQueryValidator = getValidator(userQuerySchema, queryValidator)
export const userQueryResolver = resolve({
  properties: {
    // If there is a user (e.g. with authentication), they are only allowed to see their own data
    id: async (value, user, context) => {
      if (context.params.user) {
        return context.params.user.id
      }
      return value
    }
  }
})
