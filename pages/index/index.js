// pages/knowledge/knowledge.js
Page({
     /**
      * 页面的初始数据
      */
     data: {
      no_scroll: true,
        imgUrls: [
            'cloud://cloud1-5g9s6m4xc535a723.636c-cloud1-5g9s6m4xc535a723-1310002932/bg/b1.png',
            'cloud://cloud1-5g9s6m4xc535a723.636c-cloud1-5g9s6m4xc535a723-1310002932/bg/b2.png',
            'cloud://cloud1-5g9s6m4xc535a723.636c-cloud1-5g9s6m4xc535a723-1310002932/bg/b3.png'
          ],
          indicatorDots: false,
          autoplay: false,
          interval: 3000,
          duration: 800,
          icons: [
            [
              {
                id: 1,
                url: '../doctor/doctordetail/doctordetail',
                img: 'https://636c-cloud1-5g9s6m4xc535a723-1310002932.tcb.qcloud.la/%E9%A6%96%E9%A1%B5/%E5%85%A8%E7%A7%91.png?sign=2249dec23d432b79cee8364d4e3eeb0d&t=1653646209',
                name: '全科'
                
              },
              {
                id: 2,
                img: 'https://636c-cloud1-5g9s6m4xc535a723-1310002932.tcb.qcloud.la/%E9%A6%96%E9%A1%B5/%E5%A6%87%E4%BA%A7%E7%A7%91.png?sign=5cc951d8a8fcda2a03db40ed2b7130fc&t=1653646228',
                name: '妇产科',
                url: '../doctor/doctordetail/doctordetail'
              },
              {
                id: 3,
                img: 'https://636c-cloud1-5g9s6m4xc535a723-1310002932.tcb.qcloud.la/%E9%A6%96%E9%A1%B5/%E7%9A%AE%E8%82%A4%E7%A7%912.png?sign=3e6b7b7ed247125f1c577025dc35e804&t=1653646252',
                name: '皮肤科',
                url: '../doctor/doctordetail/doctordetail'
              },
              {
                id: 4,
                img: 'https://636c-cloud1-5g9s6m4xc535a723-1310002932.tcb.qcloud.la/%E9%A6%96%E9%A1%B5/%E5%BF%83%E5%86%85%E7%A7%91.png?sign=a8df83bdb2765725b93a6a8e910c51d2&t=1653646289',
                name: '普内科',
                url: '../doctor/doctordetail/doctordetail'
              },
              {
                id: 5,
                img: 'https://636c-cloud1-5g9s6m4xc535a723-1310002932.tcb.qcloud.la/%E9%A6%96%E9%A1%B5/%E9%AA%A8%E7%A7%91.png?sign=752455069ef9f703afe7c864b4970c12&t=1653646462',
                name: '骨科',
                url: '../doctor/doctordetail/doctordetail'
              },
              {
                id: 6,
                img: 'https://636c-cloud1-5g9s6m4xc535a723-1310002932.tcb.qcloud.la/%E9%A6%96%E9%A1%B5/%E4%B8%AD%E5%8C%BB%E7%A7%91.png?sign=e70cf6480f41cded53ab163281cc73ec&t=1653646475',
                name: '中医科',
                url: '../doctor/doctordetail/doctordetail'
              },
              {
                id: 7,
                img: 'https://636c-cloud1-5g9s6m4xc535a723-1310002932.tcb.qcloud.la/%E9%A6%96%E9%A1%B5/%E5%84%BF%E7%A7%91.png?sign=4fee77b2a4a1f05cbee5755bcbc38db8&t=1653646486',
                name: '儿科',
                url: '../doctor/doctordetail/doctordetail'
              },
              {
                id: 8,
                img: 'https://636c-cloud1-5g9s6m4xc535a723-1310002932.tcb.qcloud.la/%E9%A6%96%E9%A1%B5/%E6%9B%B4%E5%A4%9A%E9%80%89%E4%B8%AD.png?sign=019b35a61eefc0acf8eba2cb830beb2e&t=1653646509',
                name: '更多',
                url: '../type/type'
              }
            ]
          ],
     },
    //  一键返回顶部
    goTop: function (e) {
      if (wx.pageScrollTo) {
        wx.pageScrollTo({
          scrollTop: 0
        })
      } else {
        wx.showModal({
          title: '提示',
          content: '当前微信版本过低，无法使用该功能，请升级到最新微信版本后重试。'
        })
      }
    },
    onPageScroll: function (e) {
      if (e.scrollTop > 80) {
        this.setData({
          no_scroll: false
        });
      } else {
        this.setData({
          no_scroll: true
        });
      }
    },
     askdoctor:function(){
       wx.navigateTo({
         url: '../doctor/quickask/quickask',
       })
     },
     article1:function(){
       wx.navigateTo({
         url: '../articles/articles',
       })
     },
     article2:function(){
      wx.navigateTo({
        url: '../articles1/articles1',
      })
    },
    article3:function(){
      wx.navigateTo({
        url: '../articles2/articles2',
      })
    },
     guahao:function(){
      wx.navigateTo({
        url: '../index/guahao/guahao',
      })
     },
     finddoctor:function(){
       wx.navigateTo({
         url: '../dailyask/dailyask',
       })
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
        return {
          title:'就医小宝典',
          desc:'快来一起用吧',
          path:'/pages/index/index?id=123'
        }
     }
 })