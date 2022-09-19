var startPoint;
Page({
    data:{
      // 移动导航栏
    //按钮位置参数
    buttonTop: 0,
    buttonLeft: 0,
    windowHeight: '',
    windowWidth: '',

      currentTab:0,
      flag:0,
      // 瀑布流
      list: [{
        name: '苏苏',
        num: '33',
        title: '当地第一个规模较大的方舱',
        url: 'https://636c-cloud1-5g9s6m4xc535a723-1310002932.tcb.qcloud.la/%E7%A4%BE%E5%8C%BA%E7%B4%A0%E6%9D%90/pic1.png?sign=12b4bc53f801c8c0d50a4591fb6c7d3c&t=1653118670',
        avatar: 'https://636c-cloud1-5g9s6m4xc535a723-1310002932.tcb.qcloud.la/%E7%A4%BE%E5%8C%BA%E7%B4%A0%E6%9D%90/pic1.png?sign=12b4bc53f801c8c0d50a4591fb6c7d3c&t=1653118670'
      },
      {
        name: '一句话',
        num: '12',
        title: '豪华大医院',
        url: 'https://636c-cloud1-5g9s6m4xc535a723-1310002932.tcb.qcloud.la/%E7%A4%BE%E5%8C%BA%E7%B4%A0%E6%9D%90/pic2.jpg?sign=407ea55b7373cac1999ebca00c66e0c8&t=1653119013',
        avatar: 'https://636c-cloud1-5g9s6m4xc535a723-1310002932.tcb.qcloud.la/%E7%A4%BE%E5%8C%BA%E7%B4%A0%E6%9D%90/pic2.jpg?sign=407ea55b7373cac1999ebca00c66e0c8&t=1653119013'
      },
      {
        name: '王嘻嘻西西',
        num: '45',
        title: '居家隔离的第25天',
        url: 'https://636c-cloud1-5g9s6m4xc535a723-1310002932.tcb.qcloud.la/%E7%A4%BE%E5%8C%BA%E7%B4%A0%E6%9D%90/pic6.jpg?sign=445d6a93954d79942b5b63a65c45b3c9&t=1653119554',
        avatar: 'https://636c-cloud1-5g9s6m4xc535a723-1310002932.tcb.qcloud.la/%E7%A4%BE%E5%8C%BA%E7%B4%A0%E6%9D%90/pic6.jpg?sign=445d6a93954d79942b5b63a65c45b3c9&t=1653119554'
      },
      {
        name: '辽宁省援沪医疗队',
        num: '58',
        title: '辽宁省援沪医疗队凯旋',
        url: 'https://636c-cloud1-5g9s6m4xc535a723-1310002932.tcb.qcloud.la/%E7%A4%BE%E5%8C%BA%E7%B4%A0%E6%9D%90/pic3.jpg?sign=815d753c2c190408bdaa305a1f2629a6&t=1653119130',
        avatar: 'https://636c-cloud1-5g9s6m4xc535a723-1310002932.tcb.qcloud.la/%E7%A4%BE%E5%8C%BA%E7%B4%A0%E6%9D%90/pic3.jpg?sign=815d753c2c190408bdaa305a1f2629a6&t=1653119130'
      },
      {
        name: '于爱同行',
        num: '5',
        title: '援沪任务圆满结束',
        url: 'https://636c-cloud1-5g9s6m4xc535a723-1310002932.tcb.qcloud.la/%E7%A4%BE%E5%8C%BA%E7%B4%A0%E6%9D%90/pic4.jpg?sign=68a74e0be63e73b226804a8c3a636da7&t=1653119307',
        avatar: 'https://636c-cloud1-5g9s6m4xc535a723-1310002932.tcb.qcloud.la/%E7%A4%BE%E5%8C%BA%E7%B4%A0%E6%9D%90/pic4.jpg?sign=68a74e0be63e73b226804a8c3a636da7&t=1653119307'
      },
      {
        name: '听各种雨',
        num: '86',
        title: '援沪三人小队留影',
        url: 'https://636c-cloud1-5g9s6m4xc535a723-1310002932.tcb.qcloud.la/%E7%A4%BE%E5%8C%BA%E7%B4%A0%E6%9D%90/pic5.jpg?sign=9b6942f636f0aa370e52d39a25921642&t=1653119436',
        avatar: 'https://636c-cloud1-5g9s6m4xc535a723-1310002932.tcb.qcloud.la/%E7%A4%BE%E5%8C%BA%E7%B4%A0%E6%9D%90/pic5.jpg?sign=9b6942f636f0aa370e52d39a25921642&t=1653119436'
      },
      {
        name: '苏苏',
        num: '33',
        title: '当地第一个规模较大的方舱',
        url: 'https://636c-cloud1-5g9s6m4xc535a723-1310002932.tcb.qcloud.la/%E7%A4%BE%E5%8C%BA%E7%B4%A0%E6%9D%90/pic1.png?sign=12b4bc53f801c8c0d50a4591fb6c7d3c&t=1653118670',
        avatar: 'https://636c-cloud1-5g9s6m4xc535a723-1310002932.tcb.qcloud.la/%E7%A4%BE%E5%8C%BA%E7%B4%A0%E6%9D%90/pic1.png?sign=12b4bc53f801c8c0d50a4591fb6c7d3c&t=1653118670'
      },
      {
        name: '一句话',
        num: '12',
        title: '豪华大医院',
        url: 'https://636c-cloud1-5g9s6m4xc535a723-1310002932.tcb.qcloud.la/%E7%A4%BE%E5%8C%BA%E7%B4%A0%E6%9D%90/pic2.jpg?sign=407ea55b7373cac1999ebca00c66e0c8&t=1653119013',
        avatar: 'https://636c-cloud1-5g9s6m4xc535a723-1310002932.tcb.qcloud.la/%E7%A4%BE%E5%8C%BA%E7%B4%A0%E6%9D%90/pic2.jpg?sign=407ea55b7373cac1999ebca00c66e0c8&t=1653119013'
      },
      {
        name: '王嘻嘻西西',
        num: '45',
        title: '居家隔离的第25天',
        url: 'https://636c-cloud1-5g9s6m4xc535a723-1310002932.tcb.qcloud.la/%E7%A4%BE%E5%8C%BA%E7%B4%A0%E6%9D%90/pic6.jpg?sign=445d6a93954d79942b5b63a65c45b3c9&t=1653119554',
        avatar: 'https://636c-cloud1-5g9s6m4xc535a723-1310002932.tcb.qcloud.la/%E7%A4%BE%E5%8C%BA%E7%B4%A0%E6%9D%90/pic6.jpg?sign=445d6a93954d79942b5b63a65c45b3c9&t=1653119554'
      },
      {
        name: '辽宁省援沪医疗队',
        num: '58',
        title: '辽宁省援沪医疗队凯旋',
        url: 'https://636c-cloud1-5g9s6m4xc535a723-1310002932.tcb.qcloud.la/%E7%A4%BE%E5%8C%BA%E7%B4%A0%E6%9D%90/pic3.jpg?sign=815d753c2c190408bdaa305a1f2629a6&t=1653119130',
        avatar: 'https://636c-cloud1-5g9s6m4xc535a723-1310002932.tcb.qcloud.la/%E7%A4%BE%E5%8C%BA%E7%B4%A0%E6%9D%90/pic3.jpg?sign=815d753c2c190408bdaa305a1f2629a6&t=1653119130'
      },
      {
        name: '于爱同行',
        num: '5',
        title: '援沪任务圆满结束',
        url: 'https://636c-cloud1-5g9s6m4xc535a723-1310002932.tcb.qcloud.la/%E7%A4%BE%E5%8C%BA%E7%B4%A0%E6%9D%90/pic4.jpg?sign=68a74e0be63e73b226804a8c3a636da7&t=1653119307',
        avatar: 'https://636c-cloud1-5g9s6m4xc535a723-1310002932.tcb.qcloud.la/%E7%A4%BE%E5%8C%BA%E7%B4%A0%E6%9D%90/pic4.jpg?sign=68a74e0be63e73b226804a8c3a636da7&t=1653119307'
      },
      
      ],
      // 分享
      itemList:["文字分享","图片与视频分享"],
      // 视频
      
      src:'',
        danmuList:
            [],
      // 文字
      a: '3月24日晚，江西省南昌市首个方舱医院将正式投入使用。当日下午，中新社记者探访了位于江西省南昌市新建区欣悦湖体育馆内的欣悦湖方舱医院。',
    value: false
    },
    
  //按钮拖动事件
  buttonStart: function (e) {
    startPoint = e.touches[0] //获取拖动开始点
  },
  buttonMove: function (e) {
    var endPoint = e.touches[e.touches.length - 1] //获取拖动结束点
    //计算在X轴上拖动的距离和在Y轴上拖动的距离
    var translateX = endPoint.clientX - startPoint.clientX
    var translateY = endPoint.clientY - startPoint.clientY
    startPoint = endPoint //重置开始位置
    var buttonTop = this.data.buttonTop + translateY
    var buttonLeft = this.data.buttonLeft + translateX
    //判断是移动否超出屏幕
    if (buttonLeft + 50 >= this.data.windowWidth) {
      buttonLeft = this.data.windowWidth - 50;
    }
    if (buttonLeft <= 0) {
      buttonLeft = 0;
    }
    if (buttonTop <= 0) {
      buttonTop = 0
    }
    if (buttonTop + 50 >= this.data.windowHeight) {
      buttonTop = this.data.windowHeight - 50;
    }
    this.setData({
      buttonTop: buttonTop,
      buttonLeft: buttonLeft
    })
  },
  buttonEnd: function (e) {},
  moveindex:function(){
    wx.switchTab({
      url: '../index/index',
    })
  },
    // 社区大框架
    switchNav:function(e){
      console.log(e);
      var page = this;
      var id = e.target.id;
      if(this.data.currentTab == id){
         return false;
      }else{
        page.setData({currentTab:id});
      }
      page.setData({flag:id});
    },
    onShareAppMessage: function () {
      return {
        title: '医院社区',
        desc: '这里提供各种医院等相关信息',
        path: '/pages/community/community'
      }
    },
    //视频
    onReady:function(res){
      this.videoContext=wx.createVideoContext('myVideo')
  },
  /**
   * 页面的初始数据
   */
  inputValue:'',
    bindInputBlur:function(e){
      this.inputValue=e.detail.value
  },
  bindSendDanmu:function(){
      this.videoContext.sendDanmu({
          text:this.inputValue,
          color:getRandomColor()
      })
  },
  videoErrorCallback:function(e){
      console.log('视频错误信息：')
      console.log(e.detail.errMsg)
  },
    // 分享
    showActionSheet(e){
      wx.showActionSheet({
        itemList: this.data.itemList,

        success(e){
            console.log("success")
            console.log(e)
            if(!e.camcle){
                if(e.tapIndex==0){
                    wx.navigateTo({
                      url: '../wenzhang/wenzhang'
                    })
                }
                else if(e.tapIndex==1){
                    wx.navigateTo({
                      url: '../camera/camera'
                    })
                }
            }
            else{
                console.log("cancle")
            }
        },
        fail(e){
            console.log("fail")
            console.log(e)
        },
        complete(e){
            console.log("complete")
            console.log(e)
        }
      })
  },
  // 文字
  checkboxChange(e) {
    this.setData({
      value: !this.data.value
    })
  },
  onLoad() {
    let a = this.data.a;
    console.log(a.length)
    if (a.length > 39) {
      a = a.slice(0, 50) + "...";
      this.setData({
        a
      })
    }
    // 导航栏
    wx.getSystemInfo({
      success: (res) => {
        this.setData({
          windowHeight: res.windowHeight,
          windowWidth: res.windowWidth,
          buttonTop: res.windowHeight * 0.85, //这里定义按钮的初始位置
          buttonLeft: res.windowWidth * 0.85,
        })
      }
    })

  },
   /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    // 小程序点击返回键时销毁之前页面
    let pages = getCurrentPages().length - 1;
    console.log('需要销毁的页面：' + pages);
    wx.navigateBack({
      delta: pages
    })
  },
  ssss() {
    app.addClickAudio()
  }
  
  })
// 视频
function getRandomColor(){
  const rgb=[]
  for(let i=0;i<3;++i){
      let color=Math.floor(Math.random()*256).toString(16)
      color=color.length ==1 ? '0' + color:color
      rgb.push(color)
  }
  return '#'+rgb.join('')
}
//文字
const app = getApp()