import $axios from "./request.js"

/**
 * @function 登录
 *  */
export async function login(param) {
  return $axios({
    method: 'GET',
    url: 'login',
    data: param
  })
}