import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId, useCdn } from '../env'
import { env } from 'process'

export  const client = createClient({
  apiVersion,
  dataset ,
  projectId,
  useCdn,

})

