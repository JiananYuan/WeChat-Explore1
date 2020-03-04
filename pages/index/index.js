Page({

  onClick: function(e) {
    console.dir(e.target.dataset)
  },

  innerClick: function() {
    console.log('inner')
  },

  outClick: function() {
    console.log('out')
  },

  inputListener: function(e) {
    this.setData({
      message: e.detail.value
    })
  },

  toggle: function() {
    this.setData({
      show: !this.data.show
    })
  },

  api1: function() {
    wx.showActionSheet({
      itemList: ['A', 'B', 'C'],
      success(res) {
        console.log(res.tapIndex)
      },
      fail(res) {
        console.log(res.errMsg)
      }
    })
  },

  api2: function() {
    wx.showModal({
      title: '提示',
      content: '这是一个模态弹窗',
      success(res) {
        if (res.confirm) {
          console.log('用户点击确定')
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  },

  api3: function () {
    wx.showToast({
      title: 'loading...',
      icon: 'loading',
      duration: 2000
    })
  },

  /**
   * 页面的初始数据
   */
  data: {
    message: "hello",
    person: {
      name: "zs",
      age: 15
    },
    Rec: "rectangle",
    todos: [
      {name: "js", completed: false},
      { name: "html", completed: true},
      { name: "css", completed: false}
    ],
    show: false
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
    
  }
})