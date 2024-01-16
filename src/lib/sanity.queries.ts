import type { PortableTextBlock } from '@portabletext/types'
import type { ImageAsset, Slug } from '@sanity/types'
import groq from 'groq'
import { createClient, type SanityClient } from 'next-sanity'

import { apiVersion, dataset, projectId, useCdn } from '~/lib/sanity.api'

export function getClient(): SanityClient {
  const client = createClient({
    projectId,
    dataset,
    apiVersion,
    useCdn,
    perspective: 'published',
  })
  // if (preview) {
  //   if (!preview.token) {
  //     throw new Error('You must provide a token to preview drafts')
  //   }
  //   return client.withConfig({
  //     token: preview.token,
  //     useCdn: false,
  //     ignoreBrowserTokenWarning: true,
  //     perspective: 'previewDrafts',
  //   })
  // }
  return client
}

export const postsQuery = groq`*[_type == "post" && defined(slug.current)] | order(_createdAt desc)`

export async function getPosts(client: SanityClient): Promise<Post[]> {
  return await client.fetch(postsQuery)
}

export const postBySlugQuery = groq`*[_type == "post" && slug.current == $slug][0]`

export async function getPost(
  client: SanityClient,
  slug: string,
): Promise<Post> {
  return await client.fetch(postBySlugQuery, {
    slug,
  })
}

export const postSlugsQuery = groq`
*[_type == "post" && defined(slug.current)][].slug.current
`

export interface Post {
  _type: 'post'
  _id: string
  _createdAt: string
  title?: string
  slug: Slug
  excerpt?: string
  mainImage?: ImageAsset
  body: PortableTextBlock[]
}

// jennys
export async function getProjects() {
  return getClient().fetch(
    groq`*[_type == 'project']{
    _id, 
    name,
    "slug":slug.current,
       "image":image.asset->url,
    "alt": image.alt,
    github,
    powerbi,
  }`,
    // content
    // { cache: 'no-store' }
  )
}
