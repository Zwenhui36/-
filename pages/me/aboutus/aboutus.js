// pages/cssCase/dengpao/index.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
      off: false, //是否关闭灯泡
    //   翻页
      currentPage: 0,
        swiperData: [{
        name: "就医小宝典"
        }, {
        name: "专为就医打造的小程序"
        }, {
        name: "让你就医更便捷"
        }]
    },
    close() {
      this.setData({
        off: !this.data.off
      })
    },
    loadMore({ detail }) {
        console.log(detail)
        if (this.data.currentPage >= 1) return; //模拟总页数为3
        // mock数据（请求api分页数据）
        setTimeout(() => {
          this.data.currentPage++;
          detail.addToList([
            {
              name: `联系方式：18584935678`,
            },
            {
              name: `地址：xxx省 xxx市 `,
            },
            {
              name: `邮箱：3853239@qq.com`,
            },
          ])
        }, 1000)
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