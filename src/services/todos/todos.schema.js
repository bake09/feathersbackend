import { resolve, getDataValidator, getValidator, querySyntax } from '@feathersjs/schema'
import { dataValidator, queryValidator } from '../../schemas/validators.js'

// Main data model schema
export const todosSchema = {
  $id: 'Todos',
  type: 'object',
  additionalProperties: false,
  required: ['id', 'text'],
  properties: {
    text: {
      type: 'string'
    },
    done: {
      type: 'boolean'
    },
    importance: {
      type: 'string'
    },
    creater_id: {
      type: 'number'
    },
    pending_date: {
      type: 'string'
    },
    profile_img: {
      type: 'string'
    },
    timestamps: true
  }
}
export const todosResolver = resolve({
  properties: {}
})
export const todosExternalResolver = resolve({
  properties: {}
})

// Schema for creating new data
export const todosDataSchema = {
  $id: 'TodosData',
  type: 'object',
  additionalProperties: false,
  required: ['text'],
  properties: {
    text: {
      type: 'string'
    },
    done: {
      type: 'boolean'
    },
    importance: {
      type: 'string'
    },
    creater_id: {
      type: 'number'
    },
    pending_date: {
      type: 'string'
    },
    profile_img: {
      type: 'string'
    },
    timestamps: true
  }
}
export const todosDataValidator = getDataValidator(todosDataSchema, dataValidator)
export const todosDataResolver = resolve({
  properties: {}
})

// Schema for allowed query properties
export const todosQuerySchema = {
  $id: 'TodosQuery',
  type: 'object',
  additionalProperties: false,
  properties: {
    ...querySyntax(todosSchema.properties)
  }
}
export const todosQueryValidator = getValidator(todosQuerySchema, queryValidator)
export const todosQueryResolver = resolve({
  properties: {}
})
