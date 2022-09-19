// pages/scroll/index.js
var startPoint;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 移动导航栏
    //按钮位置参数
    buttonTop: 0,
    buttonLeft: 0,
    windowHeight: '',
    windowWidth: '',
    // 该模块
    scrollheight: '',
    chosed_index:0,
    cateList:[
      {
        id:1,
        name:'妇产科'
      },
      {
        id:2,
        name:'皮肤科'
      },
      {
        id:3,
        name:'普内科'
      },
      {
        id:4,
        name:'骨科'
      },
      {
        id:5,
        name:'中医科'
      },
      {
        id:6,
        name:'儿科'
      },
      {
        id:7,
        name:'其他科'
      },
    ],
    chosed_cate_id:'',
    goods_list:[
      {
        type_id:1,
        type_name:'妇产科',
        list:[
          {
            goods_name:'张医生（主治宫颈的病变）',
            img:'/images/doctor/1.png',
            zhiwei:'主任',
            url:"../doctor/doctordetail/doctordetail",
          },
          {
            goods_name:'毕医生（主治子宫方面常见的病变）',
            img:'/images/doctor/2.png',
            zhiwei:"副主任",
            url:"../doctor/doctordetail/doctordetail",
          },
          {
            goods_name:'王医生（主治输卵管的疾病）',
            img:'/images/doctor/3.png',
            zhiwei:'主治医师',
            url:"../doctor/doctordetail/doctordetail",
          },
        ]
      },
      {
        type_id:2,
        type_name:'皮肤科',
        list:[
          {
            goods_name:'郑医生（主治过敏类疾病）',
            img:'/images/doctor/1.png',
            zhiwei:'主任',
            url:"../doctor/doctordetail1/doctordetail1",
          },
          {
            goods_name:'毕医生（主治感染类疾病）',
            img:'/images/doctor/2.png',
            zhiwei:"副主任",
            url:"../doctor/doctordetail1/doctordetail1",
          },
          {
            goods_name:'王医生（主治自身免疫性的疾病）',
            img:'/images/doctor/3.png',
            zhiwei:'主治医师',
            url:"../doctor/doctordetail1/doctordetail1",
          },
        ]
      },
      {
        type_id:3,
        type_name:'普内科',
        list:[
          {
            goods_name:'毕医生（主治咽喉炎的疾病）',
            img:'/images/doctor/2.png',
            zhiwei:"副主任",
            url:"../doctor/doctordetail/doctordetail",
          },
          {
            goods_name:'张医生（主治冠心病、心脏病）',
            img:'/images/doctor/2.png',
            zhiwei:"主治医师",
            url:"../doctor/doctordetail/doctordetail",
          },
          {
            goods_name:'黄医生（主治支气管炎）',
            img:'/images/doctor/3.png',
            zhiwei:'主治医师',
            url:"../doctor/doctordetail/doctordetail",
          },
        ]
      },
      {
        type_id:4,
        type_name:'骨科',
        list:[
          {
            goods_name:'远医生（主治骨关节损伤）',
            img:'/images/doctor/1.png',
            zhiwei:'主治医师',
            url:"../doctor/doctordetail/doctordetail",
          },
          {
            goods_name:'张医生（主治颈椎病）',
            img:'/images/doctor/2.png',
            zhiwei:"主治医师",
            url:"../doctor/doctordetail/doctordetail",
          },
          {
            goods_name:'黄医生（主治骨坏死、地方性骨病）',
            img:'/images/doctor/3.png',
            zhiwei:'主治医师',
            url:"../doctor/doctordetail/doctordetail",
          },
        ]
      },
      {
        type_id:5,
        type_name:'中医科',
        list:[
          {
            goods_name:'毕医生（主治慢性病）',
            img:'/images/doctor/2.png',
            zhiwei:"副主任",
            url:"../doctor/doctordetail/doctordetail",
          },
          {
            goods_name:'远医生（主治女性月经不调）',
            img:'/images/doctor/1.png',
            zhiwei:'主治医师',
            url:"../doctor/doctordetail/doctordetail",
          },
          {
            goods_name:'张医生（主治肺病、内分泌失调）',
            img:'/images/doctor/2.png',
            zhiwei:"主治医师",
            url:"../doctor/doctordetail/doctordetail",
          },
        ]
      },
      {
        type_id:6,
        type_name:'儿科',
        list:[
          {
            goods_name:'王医生(主治呼吸系统的疾病比如：感冒、咳嗽)',
            img:'/images/doctor/3.png',
            zhiwei:'主治医师',
            url:"../doctor/doctordetail/doctordetail",
          },
          {
            goods_name:'张医生（主治消化系统的疾病比如：呕吐、腹痛、便秘）',
            img:'/images/doctor/2.png',
            zhiwei:"主治医师",
            url:"../doctor/doctordetail/doctordetail",
          },
        ]
      },
      {
        type_id:7,
        type_name:'其他科',
        list:[]
      },
    ],
    toTitle: "",
    scrollTop: 0,
    top: [],
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
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let windowHeight = wx.getSystemInfoSync().windowHeight // 屏幕的高度
    let windowWidth = wx.getSystemInfoSync().windowWidth // 屏幕的宽度
    this.setData({
        scrollheight: windowHeight * 750 / windowWidth - 370
    })
    this.setData({
      chosed_cate_id:this.data.cateList[0].id
    })
    // 设置每个分类的开始高度
    let top=[];
    for (var i = 0; i < this.data.goods_list.length; i++) {
      wx.createSelectorQuery().select('#title-' + this.data.goods_list[i].type_id).boundingClientRect(function (rect) {
        console.log(rect)
        var isTop = Number(rect.top);
        top.push(isTop);
      }).exec();
    }
    this.setData({
      top: top
    });
    // 浮动按钮
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

  
  onReady: function () {
  },

 
  onShow: function () {
  
  },
  /**
   * 选中分类
   */
  choseCate(e) {
    let {id,index} = e.currentTarget.dataset;
    this.setData({
        chosed_cate_id: id,
        chosed_index:index,
        toTitle: "title-" + id,
    })
    let  {top,scrollTop }= this.data;
    let length=top.length;
    console.log(scrollTop)
    if(scrollTop>top[length-2]-top[0] ){

    }else{
      console.log(111111)
    }
  },
  //滚动
  onScroll(e) {
    console.log(e.detail.scrollTop)
    this.setData({
      scrollTop: e.detail.scrollTop
    })
    var length = this.data.top.length;
    for (var i = 0; i < this.data.top.length; i++) {
      if (this.data.top[i] - this.data.top[0] <= this.data.scrollTop && (i < length - 1 && this.data.top[i + 1] - this.data.top[0] > this.data.scrollTop)) {
        if (this.data.chosed_index != i) {
          this.setData({
            chosed_index: i,
          });
        }
      }
    }
    if( this.data.scrollTop >=this.data.top[length-1]-this.data.top[0] ){
      console.log(this.data.top[length-1]-this.data.top[0])
      this.setData({
        chosed_index: length-1,
      });
    }
    
   

  },
  quickask:function(){
    wx.navigateTo({
      url: '../doctor/quickask/quickask',
    })
  }
})