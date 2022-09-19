// pages/camera/camera.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        currentTab:0,
        winWidth:0,
        winHeight:0,
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        //页面初始化 options为页面跳转所带来的参数
        let page=this;
        wx.getSystemInfo({
          success: function(res){
              console.log(res);
              page.setData({winWidth:res.windowWidth});
              page.setData({winHeight:res.windowHeight});
          },
        }),
        //授权相机功能
        wx.getSetting({
          success(res){
              if(!res.authSetting['scope.camera']){
                  wx.authorize({
                    scope: 'scope.camera',
                    success(){
                        //用户已经同意小程序使用相机功能
                       wx.startRecord()
                    }
                  })
              }
          }
        }),
        //创造Camera实例
        this.ctx=wx.createCameraContext()
    },
    switchNav:function(e){
        var page=this;
        if(this.data.currentTab==e.target.dataset.current){
            return false;
        }else{
            page.setData({currentTab:e.target.dataset.current})
        }
    },
    //拍照
    takePhoto(){
        this.ctx.takePhoto({
            quality:'high',
            success:(res)=>{
                console.log('takePhoto')
                this.setData({
                    src:res.tempImagePath
                })
            }
        })
    },
    //开始摄影
    startRecord(){
        this.ctx.startRecord({
            success:(res)=>{
                console.log('startRecord')
            }
        })
    },
    //结束摄影
    stopRecord(){
        this.ctx.stopRecord({
            success:(res)=>{
                this.setData({
                    src:res.tempThumbPath,
                    videoSrc:res.tempVideoPath
                })
            }
        })
    },
    //错误事件
    error(e){
        console.log(e.detail)
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