// pages/stuList/stuList.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    index: 0,
    ifMask: false,
    array: ['1班', '2班'],
    stuList: [{
      name: 'lz',
      class: '1班',
      num: '12345'
    }
  ],
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
    this.setData({
      ifMask: false
    })
  },
  bindPickerChange: function(e) {
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