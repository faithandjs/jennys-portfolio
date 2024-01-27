import { SchemaTypeDefinition } from 'sanity'

import blockContent from './blockContent'
import post from './post'
import projects from './projects'
import overview from './overview'

export const schemaTypes = [post, blockContent]
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blockContent, projects, overview],
}
