// pages/comDetail/comDetail.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name: '',
    messageList: [],
    value: '',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      messageList: app.globalData.comInfo[options.name],
      name: options.name
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    this.setData({
      messageList: app.globalData.comInfo[this.data.name],
    })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  send(e) {
    console.log(e)
    let mid = this.data.messageList
    app.globalData.comInfo[this.data.name].push({
      me: true,
      content: this.data.value
    })
    this.onShow()
    this.setData({
      value: ''
    })
  },
  input(e) {
    console.log(e.detail, e)
    this.setData({
      value: e.detail.value
    })
  }
})