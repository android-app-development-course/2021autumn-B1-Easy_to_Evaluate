// pages/evaDetail/evaDetail.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    taskName: 'demo',
    stage: '资料收集阶段',
    joinNum: 1,
    judgeNum: 1, 
    moduleList: [{
      name: 'module测试1',
      num: 50,
    }, {
      name: 'module测试2',
      num: 50,
    }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      judgeNum: app.globalData.judgeNum,
      joinNum: app.globalData.joinNum,
      moduleList: app.globalData.moduleList
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
    if(app.globalData.joinNum<=0){
    app.globalData.joinNum++;
    app.globalData.judgeNum ++;}
    this.setData({
      judgeNum: app.globalData.judgeNum,
      joinNum: app.globalData.joinNum
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
  manageModule() {
    wx.navigateTo({
      url: '../manageModule/manageModule',
    })
  },
  nowJudgeNum() {
    wx.navigateTo({
      url: '../jdugeList/jdugeList',
    })
  },
  nowJoinNum() {
    wx.navigateTo({
      url: '../stuList/stuList',
    })
  },
  waitJudgeList() {
    wx.navigateTo({
      url: '../waitJudgeList/waitJudgeList',
    })
  },
  toResult(){
    wx.navigateTo({
      url: '../evaResult/evaResult',
    })
  }
})