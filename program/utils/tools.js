/**
 * @function getParamsToUrl
 * @description 将get请求的参数连接到url上，以?xx=xx&连接
 * @param param: Object
 * @return url: String
 */
export function getParamsToUrl(param, url) {
  // 判空
  if(JSON.stringify(param) == '{}') {
    return url
  }
  url += '?'
  for(let i in param) {
    url += (i + '=' + param[i] + '&')
  }
  url = url.substring(0, url.length-1)
  console.log('[tools.js-getParamsToUrl()]', url)
  return url
}

/**
 * @function 将get请求的参数连接到url上
 * @description 将get请求的参数连接到url上，以/xx/xx连接
 * @param param: Object
 * @return url: String
 */
export function getParamsToUrlBySlash(param, url) {
  // 判空
  if(JSON.stringify(param) == '{}') {
    return url
  }
  for(let i in param) {
    url += ('/' + param[i])
  }
  console.log('[tools.js-getParamsToUrlBySlash()]', url)
  return url
}