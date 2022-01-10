import {
  login
} from '../../utils/apis'
const app = getApp()

Page({
  data: {
    phone: '',
    password: '',
    success: false,
    text: ''
  },

  // 获取输入账号 
  phoneInput: function (e) {
    this.setData({
      phone: e.detail.value
    })
  },

  // 获取输入密码 
  passwordInput: function (e) {
    this.setData({
      password: e.detail.value
    })
  },

  // 登录 
  login: function () {
    let that = this;
    if (that.data.phone.length == 0) {
      wx.showToast({
        title: '用户名不能为空',
        icon: 'loading',
        duration: 1000
      })
    } else if (that.data.password.length == 0) {
      wx.showToast({
        title: '密码不能为空',
        icon: 'loading',
        duration: 1000
      })
    } else if (!app.globalData.userLogin[that.data.phone] || (app.globalData.userLogin[that.data.phone].password != that.data.password)) {

      wx.showToast({
        title: '账号密码不匹配',
        icon: 'error',
        duration: 1500
      })
    } else {
      wx.showToast({
        title: '登录成功',
        icon: 'success',
        duration: 1500
      })
      app.globalData.userInfo = {
        ifManager: app.globalData.userLogin[this.data.phone].ifManager,
        name: this.data.phone,
        num: app.globalData.userLogin[this.data.phone].num,
      }
      console.log(app.globalData.userInfo)
      setTimeout(() => {
        wx.switchTab({
          url: '../comuniList/comuniList',
        })
      }, 1500)
    }
  },
  // 注册 
  register: function () {
    wx.navigateTo({
      url: '/pages/register/register',
    })
  }

})