// pages/index/guahao/biaoge/biaoge.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        date: "2022-06-01",
        radioList: [
            {
              text: '妇产科'
            },
            {
              text: '皮肤科'
            },
            {
              text: '普内科'
            },
            {
              text: '骨科'
            },
            {
              text: '中医科'
            },
            {
              text: '儿科'
            }
          ],
          radioList1: [
            {
              text: '郑医生'
            },
            {
              text: '王医生'
            },
            {
              text: '张医生'
            }
          ]
    },
    //日期
    bindDateChange: function (e) {
        this.setData({
            date: e.detail.value
        })
    },
    // 单选
    radioChange: function (e) {
        this.setData({
          activeIndex: e.currentTarget.dataset.index
        });
      },
      // 单选2
    radioChange1: function (e) {
        this.setData({
          activeIndex1: e.currentTarget.dataset.index
        });
      },
    //   formSubmit:function(e){
    //     console.log(e);
    //     wx.showToast({
    //         title: '预约成功',
    //         icon:"success",
    //         duration:2000,
    //     });
    // },
    //   预约按钮
    subbtn:function(){
        wx.showToast({
            title: '预约成功',
            icon: 'success',
            duration: 6000,
            success(){
              wx.switchTab({
                  url: '/pages/index/index',
              })
            }
        });
        // 
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