import { fetchBlog, fetchLocations, fetchServices } from "@/api";


export default async function Sitemap() {
    //blog
    const blogPosts = await fetchBlog()
    const posts = blogPosts?.results?.map((post : any) => ({
        url: `https://1furniturerestoration.com/blog/${post.id}`,
        lastModified: post.created_at
      }));
    //locations
    const locations = await fetchLocations()
    const locs = locations?.results?.map((location: any) => ({
        url: `https://1furniturerestoration.com/location/${location?.location_name?.replace(/%| /g,"_")}`,
        lastModified: new Date()
    }))
    //services
    const services = await fetchServices()
   const servs = locations?.results.map((location : any) => 
    services?.results?.map((service : any) => ({
        url: `https://1furniturerestoration.com/services/${service?.slug}/${location?.id}/${location?.location_name?.replace(/%| /g,"_")}`,
        lastModified: new Date()
    }))
   )
   const servicesMap = servs.flat()
   
  return [
    {
      url: 'https://1furniturerestoration.com',
      lastModified: new Date(),
    },
    {
      url: 'https://1furniturerestoration.com/about',
      lastModified: new Date(),
    },
    {
      url: 'https://1furniturerestoration.com/book',
      lastModified: new Date(),
    },
    {
        url: 'https://1furniturerestoration.com/photos',
        lastModified: new Date(),
      },
      {
        url: 'https://1furniturerestoration.com/blog',
        lastModified: new Date(),
      },
      {
        url: 'https://1furniturerestoration.com/reviews',
        lastModified: new Date(),
      },
      {
        url: 'https://1furniturerestoration.com/services',
        lastModified: new Date(),
      },
      ...posts,
      ...locs,
      ...servicesMap

  ]
}