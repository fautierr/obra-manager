import { GraphQLRequestParams } from './types'
import { GraphQLClient, ClientError } from 'graphql-request'
import { ENV } from './env'

export async function getBrowserClient<T>({
  query,
  variables,
}: GraphQLRequestParams): Promise<T> {
  try {
    const client = new GraphQLClient(ENV.GRAPHQL_URL, {
      credentials: 'include',
    })

    return await client.request<T>(query, variables)
  } catch (error) {
    if (error instanceof ClientError) {
      console.error('GraphQL errors:', error.response.errors)
      console.error('GraphQL data (partial):', error.response.data)
    } else {
      console.error('Network or unexpected error:', error)
    }
    throw error
  }
}
