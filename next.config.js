// module.exports = {
//   reactStrictMode: true,
// }



module.exports = {
  images: {
    domains: ['res.cloudinary.com'],
  },
  trailingSlash: true,
  assetPrefix: process.env.NODE_ENV === 'production' ? '/Music_Empire_Apps_2' : '',
};

// const withTM = require('next-transpile-modules')(['fs-module'])

// module.exports = withTM()