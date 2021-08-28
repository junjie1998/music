const devBaseUrl = 'http://123.207.32.32:9001/'
const prodBaseUrl = 'http://123.207.32.32:9001/'

export const BASE_URL = process.env.NODE_ENV === 'development' ? devBaseUrl : prodBaseUrl

export const TIMEOUT = 10000