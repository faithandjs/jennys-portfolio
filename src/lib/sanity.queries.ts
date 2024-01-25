import groq from 'groq'
import { createClient, type SanityClient } from 'next-sanity'

import { apiVersion, dataset, projectId, useCdn } from '~/lib/sanity.api'
export const dynamic = 'force-dynamic'
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

export async function getOverview() {
  return getClient().fetch(
    groq`*[_type == 'overview']{
    _id, 
    bannertext,
    summarytitle,
    summary,
    newsletter, 
    medium,
    linkedin, 
    github,
    novypro, 
    email,
  }`,
  )
}
export async function getProjects() {
  return getClient().fetch(
    groq`*[_type == 'projects']{
    _id, 
    name,
    "image": image.asset->url,
    "alt": image.alt,
    github,
  }`,
  )
}
