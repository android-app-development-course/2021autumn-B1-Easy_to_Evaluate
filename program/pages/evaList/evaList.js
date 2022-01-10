const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    isManager: true,
    ifMask: false,
    taskList: [

    ],
    moduleList: [{
      name: ''
    }, {
      name: ''
    }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(app.globalData.userInfo)
    this.setData({
      isManager: app.globalData.userInfo.ifManager,
      taskList: app.globalData.taskList
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
      isManager: app.globalData.userInfo.ifManager,
      taskList: app.globalData.taskList
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

  toTaskDetail() {
    if(app.globalData.userInfo.name != 'lz')
    wx.navigateTo({
      // url: `../evaDetail/evaDetail?id=${}$name=${}`,
      url: `../evaDetail/evaDetail`,
    })
    else
    wx.navigateTo({
      url: '../joinEva/joinEva',
    })
  },
  add() {
    this.setData({
      ifMask: true,
      moduleList: [{
        name: ''
      }]
    })
  },

  addModule() {
    let mid = this.data.moduleList
    mid.push({
      name: ''
    })
    this.setData({
      moduleList: mid
    })
  },

  addTask() {
    this.setData({
      ifMask: false,
    })
    setTimeout(() => {
      wx.showToast({
        title: '添加成功',
        duration: 1000
      })
      app.globalData.taskList.push({
        name: 'demo1'
      })
      this.onShow()
    })
  },
  cancel() {
    this.setData({
      ifMask: false
    })
  }
})