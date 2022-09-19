var app = getApp()
Page({
  data:{
    image:"https://636c-cloud1-5g9s6m4xc535a723-1310002932.tcb.qcloud.la/%E4%B8%AA%E4%BA%BA%E4%B8%AD%E5%BF%83/%E5%A4%B4%E5%83%8F.png?sign=11e925b391a991e4a3e9d6071000c772&t=1653651298"
  },
  
  onLoad:function(options){
    console.log(options)
      
  },
  //获取授权用户信息e
  onGetUserInfo:function(e) {
        
    wx.getUserProfile({
      desc: '用于完善会员资料',
      success:(res)=>{
        this.setData({
            image: res.userInfo.avatarUrl})
        wx.showModal({
          title: '登录成功',
          content: '是否前往首页',
          success(res){
          if(res.confirm){
              wx.switchTab({
                url: '../index/index',
              })
          }else if(res.cancel){
              console.log('用户点击取消')
          }
        }
        })
    }}
    )
},
  addtouxiang:function(){
    wx.navigateTo({
      url: '../me/addtouxiang/addtouxiang',
    })
  },
  login:function(){
    wx.navigateTo({
      url: '../me/login/login',
    })
  },
  gomessage:function(){
    wx.navigateTo({
      url: '../me/message/message',
    })
  },
  gofamily:function(){
    wx.navigateTo({
      url: '../me/family/family',
    })
  },
  mustknow:function(){
    wx.navigateTo({
      url: '../me/mustknow/mustknow',
    })
  },
  getmap:function(){
    wx.navigateTo({
      url: '../me/map/map'
    })
  },
  reserve:function(){
    wx.navigateTo({
      url: '../me/reserve/reserve'
    }),
    wx.showToast({
      title: '查询成功',
      icon: 'success',
      duration: 2000
    })
  },
  getreport:function(){
    wx.navigateTo({
      url: '../me/report/report'
    })
  },
  sharetofriend:function(){
    wx.navigateTo({
      url:'../me/sharefriend/sharefriend'
    })
  },
  aboutus:function(){
    wx.navigateTo({
      url:'../me/aboutus/aboutus'
    })
  },
  update:function(){
    wx.showModal({
      title:'版本',
      content:'当前是最新版本',
      cancelColor: 'cancelColor',
    })
  },
})