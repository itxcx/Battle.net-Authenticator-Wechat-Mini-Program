// login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
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
    wx.setNavigationBarTitle({
      title: '登录授权中...'
    })
          wx.login({
            success: function (res) {
              if (res.code) {
                let url = "http://127.0.0.1:1024/index.php"
                console.log(url)
                wx.request({
                  url: url,
                  data: {code:res.code,tag:'code'},
                  header: {},
                  method: 'get',
                  dataType: 'json',
                  success: function (res) {
                    if (res.data.status == 1) {
                      wx.setStorage({
                        key: "skey",
                        data: res.data.data
                      })
                      wx.redirectTo({
                        url: '/pages/index/index',
                        success: function (res) { },
                        fail: function (res) { },
                        complete: function (res) { },
                      })
                    } else if(res.data.status == 0)
                    {
                      //跳转注册or绑定页面
                    }
                  }
                })
              } else {
                console.log('用户信息获取失败' + res.errMsg)
              }
            }
          })
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