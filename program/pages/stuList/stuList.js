// pages/stuList/stuList.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    index: 0,
    ifMask: false,
    array: ['1班', '2班'],
    stuList: [{
      name: 'wt',
      class: '1班',
      num: '1234',
      checked: true
    }, {
      name: 'lz',
      class: '2班',
      num: '12345',
      checked: false
    }],
    add: {
      name: '',
      num: '',
      class: ''
    },

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      stuList:app.globalData.stuList
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
  add() {
    this.setData({
      ifMask: true
    })
  },
  addStu() {
    wx.showToast({
      title: '添加成功',
      duration: 1000
    })
    if (app.globalData.stuList.length == 0) {
      app.globalData.stuList.push({
        name: 'wt',
        class: '1班',
        num: '1234',
        checked: true
      })
    } else {
      app.globalData.stuList.push({
        name: 'lz',
        class: '1班',
        num: '12345',
        checked: false
      })
    }
    this.setData({
      ifMask: false,
      stuList: app.globalData.stuList
    })
  },
  bindPickerChange: function (e) {
    this.setData({
      index: e.detail.value
    })
  },
  cancel() {
    this.setData({
      ifMask: false
    })
  }
})