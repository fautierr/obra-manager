import { GraphQLClient, ClientError, type Variables } from 'graphql-request'
import { cookies } from 'next/headers'
import { ENV } from './env'

type GraphQLRequestParams = {
  query: string
  variables?: Variables
}

export async function getServerClient<T>({
  query,
  variables,
}: GraphQLRequestParams): Promise<T> {
  try {
    // 👇 await acá
    const cookieStore = await cookies()

    // Convertir todas las cookies a un solo string
    console.log(cookieStore)
    const cookieHeader = cookieStore
      .getAll()
      .map(({ name, value }) => `${name}=${value}`)
      .join('; ')

    const client = new GraphQLClient(ENV.GRAPHQL_URL, {
      headers: {
        Cookie: cookieHeader,
      },
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
