export function getInterfaceRoute(name) {
  return interfaceRoute[name]
}

// 开发环境
const ENV = {
  qa: '',
  test: '',
  develop: 'http://www.aqipal.top:80/'
}

// 选择环境
const DOMAIN = ENV.develop

// 接口地址
const interfaceRoute = {
  // login: DOMAIN + 'login',
  login: DOMAIN + 'accounts/login',
  getevalist: DOMAIN + 'getevalist',
  getcomlist: DOMAIN + 'getcomlist',
  getcomdetail: DOMAIN + 'getcomdetail',
  addnewtask: DOMAIN +'addnewtask',
  addnewCom: DOMAIN + 'addnewCom',
  addnewmessage: DOMAIN + 'addnewmessage',
  addExcel: DOMAIN + 'addexcel',
  addmodule: DOMAIN + 'addmodule',
  addnewstu: DOMAIN + 'addnewstu',
  rmmodule: DOMAIN + 'rmmodule',
  rmstu: DOMAIN + 'rmstu',
  rmtask: DOMAIN + 'rmtask',
  modifystu: DOMAIN + 'modifystu',
  modifyPassword: DOMAIN + 'modifyPassword',
  modifystage: DOMAIN + 'modifystage',
  getevaresultlist: DOMAIN +'getevaresultlist',
  gettaggedlist: DOMAIN + 'gettaggedlist',
  modifymodule: DOMAIN +'modifymodule',
}