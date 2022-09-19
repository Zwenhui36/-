// pages/doctor/doctordetail/doctordetail.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        // 医生信息
        contacts: [{
            id: 1,
            name: '郑医生',
            img: '/images/doctor/1.png',
            phone: '0101 123456',
            zhiwei: '主任',
            keshi: '皮肤科'
          },
          {
            id: 2,
            name: '毕医生',
            img: '/images/doctor/2.png',
            phone: '0101 123456',
            zhiwei: '副主任',
            keshi: '皮肤科'
          },
          {
            id: 3,
            name: '王医生',
            img: '/images/doctor/3.png',
            phone: '0101 123456',
            zhiwei: '主治医师',
            keshi: '皮肤科'
          },
          {
            id: 4,
            name: '远医生',
            img: '/images/doctor/1.png',
            phone: '0101 123456',
            zhiwei: '主治医师',
            keshi: '皮肤科'
          },
          {
            id: 5,
            name: '张医生',
            img: '/images/doctor/2.png',
            phone: '0101 123456',
            zhiwei: '主治医师',
            keshi: '皮肤科'
          },
          {
            id: 6,
            name: '黄医生',
            img: '/images/doctor/3.png',
            phone: '0101 123456',
            zhiwei: '主治医师',
            keshi: '皮肤科'
          },
          {
            id: 7,
            name: '李医生',
            img: '/images/doctor/1.png',
            phone: '0101 123456',
            zhiwei: '主治医师',
            keshi: '皮肤科'
          },
          {
            id: 8,
            name: '刘医生',
            img: '/images/doctor/2.png',
            phone: '0101 123456',
            zhiwei: '主治医师',
            keshi: '皮肤科'
          }
          ],
          contact: {},
          transformIdx: 0,
          position: 'center',
          duration: 300,
          show: false,
          overlay: false
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        this.setData({
            contact: this.data.contacts[0]
          })
    },
    showNext(e) {
        const idx = e.currentTarget.dataset.idx;
        this.setData({
          show: true,
          contact: this.data.contacts[idx],
          transformIdx: idx
        })
      },
    
      showPrev() {
        this.setData({
          show: false
        })
      },
    
      onBeforeEnter(res) {
        console.log(res)
      },
      onEnter(res) {
        console.log(res)
      },
      onAfterEnter(res) {
        console.log(res)
      },
      onBeforeLeave(res) {
        console.log(res)
      },
      onLeave(res) {
        console.log(res)
      },
      onAfterLeave(res) {
        console.log(res)
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