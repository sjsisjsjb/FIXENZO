const axios = require('axios');

/*
 * Unlimited generate photos with support create NSFW
 * shared from: https://whatsapp.com/channel/0029VagvXerC1FuF4KH1yd1F
 * don't delete wm
*/

async function cimg(prompt) {
  try {
    const response = await axios.get(`https://imgen.duck.mom/prompt/${prompt}`);
    const imageUrl = response.request.res.responseUrl;
    return imageUrl;
  } catch (error) {
    console.error(error);
    return null;
  }
}

module.exports = cimg;