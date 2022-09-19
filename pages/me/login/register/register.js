// pages/register/register.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        disabled:true,
        btnstate:"default",
        switchChecked:false,
        date:'1940-01-01',
        count: 60,
        activeIndex: 0,
        swaitchStatus: true,
        countryCodes: ["+86", "+80", "+84", "+87"],
        countryCodeIndex: 0,
        isAgree: false
    },
    savePhoneNumber: function (e) {
        console.log(e.detail.value)
        this.setData({
          phoneNumber: e.detail.value
        });
      },
      getValidCode: function () {
        if (this.data.phoneNumber && this.data.count == 60) {
          this.tick()
        } else if (!this.data.phoneNumber) {
          wx.showToast({
            title: '请填写电话号码',
            icon: 'loading',
            duration: 1000
          })
        }
      },
      tick: function () {
        var vm = this
        if (vm.data.count > 0) {
          vm.setData({
            count: vm.data.count - 1
          });
          setTimeout(function () {
            return vm.tick()
          }, 1000)
        } else {
          vm.setData({
            count: 60
          });
        }
      },
      bindCountryCodeChange: function(e){
        console.log('picker country code 发生选择改变，携带值为', e.detail.value);

        this.setData({
            countryCodeIndex: e.detail.value
        })
    },
    accountblur:function(e){
        var content = e.detail.value;
        if(content != ""){
            this.setData({disabled:false,btnstate:"defalut"});
        }else{
             this.setData({disabled:true,btnstate:"defalut"});
        }
    },
    bindDateChange:function(e){
        this.setData({
            date:e.detail.value
        })
    },
    formSubmit:function(e){
        console.log(e);
        wx.showToast({
            title: '注册成功',
            icon:"success",
            duration:2000,
        });
    },
    zhucebtn:function(){
        wx.navigateBack({
            url: '../login',
        })
    },
    bindAgreeChange: function (e) {
      this.setData({
          isAgree: !!e.detail.value.length
      });
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