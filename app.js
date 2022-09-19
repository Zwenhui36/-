//app.js
// AI
var plugin = requirePlugin("myPlugin");
// 每日必答
var hotapp = require('utils/hotapp.js');
var postData = require('data/util.js');
var postData1 = require('data/util1.js');
var postData2 = require('data/util2.js');
var postData3 = require('data/util3.js');


App({
  onLaunch: function () {
    //调用API从本地缓存中获取数据
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
  },
  getUserInfo:function(cb){
    var that = this
    if(this.globalData.userInfo){
      typeof cb == "function" && cb(this.globalData.userInfo)
    }else{
      //调用登录接口
      wx.login({
        success: function () {
          wx.getUserInfo({
            success: function (res) {
              that.globalData.userInfo = res.userInfo
              typeof cb == "function" && cb(that.globalData.userInfo)
            }
          })
        }
      })
    }
  },
  /**
   * 每日必答
   */
  globalData: {
    userInfo:null,
    hotapp: hotapp, // 这里作为一个全局变量, 方便其它页面调用
    dataList: postData.postList,
    dataList1: postData1.postList1,
    dataList2: postData2.postList2,
    dataList3: postData3.postList3,
    
  },
  
})