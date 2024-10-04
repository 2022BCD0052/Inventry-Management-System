/** @type {import('next').NextConfig} */
const nextConfig = {};
images:{
    remotePatterns: [
        {

            protocol:"https",
            hostname: "cloudinary.com",
        },
        {

            protocol:"https",
            hostname: "utfs.io",
        },
        ,{
            images: {
                domains: ['utfs.io'],  // Add 'utfs.io' to the list of allowed domains
              },
        }
    ]
}

export default nextConfig;


// https://console.cloudinary.com/console/c-cdbb9e7cf15c57154be49b50acc6c0/media_library/homepage/asset/4f68d3ff049e363be49f3bbc45e6d485/manage?context=manage