import { createClient } from 'next-sanity'

// import { apiVersion, dataset, projectId, useCdn } from '../env'
import { env } from 'process'

export  const client = createClient({
  apiVersion: "2023-05-29",
  dataset: "production",
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  token: process.env.SANITY_ACCESS_TOKEN,
  useCdn: true,
  
})
