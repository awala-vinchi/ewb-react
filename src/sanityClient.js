import sanityClient from '@sanity/client';

const client = sanityClient({
  projectId: 'ltigqay9', // Replace with your Sanity project ID
  dataset: 'production', // Replace with your dataset name (e.g., 'production')
  apiVersion: '2021-03-25', // Replace with the latest API version
  useCdn: true, // Set to `true` to use Sanity’s CDN for faster performance
})

export  default  client
