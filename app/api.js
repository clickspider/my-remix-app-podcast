const API_URL = `https://api.rss2json.com/v1/api.json?rss_url=https://feeds.soundcloud.com/users/soundcloud:users:1050245170/sounds.rss&api_key=${process.env.API_KEY}`;


export const getData = () => fetch(API_URL).then((res) => res.json());