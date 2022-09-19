//获取应用实例
var app = getApp()
var plugin = requirePlugin("myPlugin"); 
Page({
    data:{
        //个人信息
        userInfo: {},
        hasUserInfo: false,
        canIUse: wx.canIUse('button.open-type.getUserInfo'),
        canIUseGetUserProfile: false,
        canIUseOpenData: wx.canIUse('open-data.type.userAvatarUrl') && wx.canIUse('open-data.type.userNickName') ,// 如需尝试获取用户信息可改为false
        
        animationData:{},
        actionSheetHidden: true,
        // AI
        guideList:[
          '浙江天气',
          '就医提示',
          '就医流程',
          '健康知识'
        ]
    },
    chatWithMe: function(e){
       // console.log('dfdf')
        wx.navigateTo({
          url: '../quickask/chatroom/chatroom'
        })
        plugin.setGuideList(this.data.guideList)
    },
    actionSheetChange: function(e){
        this.setData({
            actionSheetHidden: !this.data.actionSheetHidden
        })
    },
    bindItemTap: function (e){
         console.log('tap ' + e.currentTarget.dataset.navigator);
         wx.navigateTo({
            url: e.currentTarget.dataset.navigator
        })
    },
    onShow: function () {
        let that = this;
        wx.setNavigationBarTitle({
            title: '在线服务',
            success:function(){
               // console.log("success")
            },
            fail: function(){
               // console.log("error")
            }
        })
        wx.showNavigationBarLoading();
        var animation = wx.createAnimation({
            transformOrigin: "50% 50%",
            duration: 3000,
            timingFunction: 'ease',
            delay: 0
        })
        this.animation = animation;
        animation.scale(2,2).rotate(45).step();
        this.setData({
            animationData: animation.export()
        })
        setTimeout(function(){
            animation.translate(30).step();
            this.setData({
                animationData:animation.export()
            })
        }.bind(this),2000)
    },
    onLoad() {
        if (wx.getUserProfile) {
          this.setData({
            canIUseGetUserProfile: true
          })
        };
        wx.getSystemInfo({
          success: res => {
            let isIOS = res.system.indexOf("iOS") > -1;
            let navHeight = 0;
            if (!isIOS) {
              navHeight = 48;
            } else {
              navHeight = 44;
            }
            this.setData({
              status: res.statusBarHeight,
              navHeight: navHeight,
              statusBarHeight: res.statusBarHeight + navHeight
            });
          }
        });
      },
      getUserProfile(e) {
        // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认，开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
        wx.getUserProfile({
          desc: '展示用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
          success: (res) => {
            console.log(res)
            this.setData({
              userInfo: res.userInfo,
              hasUserInfo: true
            })
          }
        })
      },
      getUserInfo(e) {
        // 不推荐使用getUserInfo获取用户信息，预计自2021年4月13日起，getUserInfo将不再弹出弹窗，并直接返回匿名的用户个人信息
        console.log(e)
        this.setData({
          userInfo: e.detail.userInfo,
          hasUserInfo: true
        })
      }
})