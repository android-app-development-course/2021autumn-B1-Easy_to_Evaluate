// pages/manageModule/manageModule.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    moduleList: [{
      name: '美赛建模',
      prizeList: [{
        prizeName: 'H奖',
        prizeNum: 40,
      }, {
        prizeName: 'O奖',
        prizeNum: 30,
      }, {
        prizeName: 'S奖',
        prizeNum: 20,
      }, 
      ]
    }]
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

  changeModule() {
    wx.navigateTo({
      url: '../changeModule/changeModule',
    })
  }
})