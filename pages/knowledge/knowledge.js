// page/component/details/details.js
var startPoint;
Page({
  data:{
    curIndex: 0,
    // 移动导航栏
    //按钮位置参数
    buttonTop: 0,
    buttonLeft: 0,
    windowHeight: '',
    windowWidth: '',
    // 全部
    array:[],
    array2:[],
    array3:[],
  },
  onLoad: function () {
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
    var array=this.initData();
    this.setData({array:array});
    var array2=this.initData2();
    this.setData({array2:array2});
    var array3=this.initData3();
    this.setData({array3:array3});
  },
  // 全部
  initData:function(){
    var array=[];
    var object1=new Object();
    object1.img="https://636c-cloud1-5g9s6m4xc535a723-1310002932.tcb.qcloud.la/%E9%A6%96%E9%A1%B5/xinwen1.png?sign=ef3e3c2d0d7ee7925ed7a78f405e27b4&t=1653222768";
    object1.title='大姨妈腰痛怎么办';
    object1.type='健康养生';
    object1.liulan='1314520浏览';
    object1.pinglun='369评论';
    object1.url='../articles/articles';
    array[0]=object1;

    var object2=new Object();
        object2.img="https://636c-cloud1-5g9s6m4xc535a723-1310002932.tcb.qcloud.la/%E9%A6%96%E9%A1%B5/xinwen2.png?sign=b1abfdbbf1ef943ebe2d38ae7472110e&t=1653222989";
        object2.title='冬天泡脚的好处';
        object2.type='养生之道';
        object2.liulan='11314浏览';
        object2.pinglun='693评论';
        object2.url='../articles1/articles1';
        array[1]=object2;

    var object3=new Object();
    object3.img="https://636c-cloud1-5g9s6m4xc535a723-1310002932.tcb.qcloud.la/%E9%A6%96%E9%A1%B5/xinwen3.png?sign=61a79e1bb1ede1be2dfdc2ab2a6fb4f3&t=1653224452";
    object3.title='糖友喝粥不如多加点粗粮和蔬菜';
    object3.type='家庭医生在线';
    object3.liulan='513454浏览';
    object3.pinglun='936评论';
    object3.url='../articles2/articles2';
    array[2]=object3;

    var object4=new Object();
    object4.img="https://636c-cloud1-5g9s6m4xc535a723-1310002932.tcb.qcloud.la/%E9%A6%96%E9%A1%B5/xinwen4.png?sign=389f4966481d6727681c54297ea0c2e2&t=1653320945";
    object4.title='可乐杀精真的吗？真相往往是这样的';
    object4.type='广告';
    object4.liulan='45746767浏览';
    object4.pinglun='396评论';
    object4.url='../articles/articles';
    array[3]=object4;

    var object5=new Object();
    object5.img="https://636c-cloud1-5g9s6m4xc535a723-1310002932.tcb.qcloud.la/%E9%A6%96%E9%A1%B5/xinwen5.png?sign=9d8337147a57a944a2c2d03300ce02f3&t=1653320961";
    object5.title='免疫力下降发出的三个信号';
    object5.type='日常疑问';
    object5.liulan='423465浏览';
    object5.pinglun='639评论';
    object5.url='../articles/articles';
    array[4]=object5;

    return array;
},
// 全部
initData2:function(){
  var array2=[];
  var object1=new Object();
  object1.img="https://636c-cloud1-5g9s6m4xc535a723-1310002932.tcb.qcloud.la/%E9%A6%96%E9%A1%B5/xinwen5.png?sign=9d8337147a57a944a2c2d03300ce02f3&t=1653320961";
  object1.title='免疫力下降发出的三个信号';
  object1.type='日常疑问';
  object1.liulan='534220浏览';
  object1.pinglun='754评论';
  array2[0]=object1;

  var object2=new Object();
      object2.img="https://636c-cloud1-5g9s6m4xc535a723-1310002932.tcb.qcloud.la/%E9%A6%96%E9%A1%B5/xinwen4.png?sign=389f4966481d6727681c54297ea0c2e2&t=1653320945";
      object2.title='可乐杀精真的吗？真相往往是这样的';
      object2.type='家庭医生在线';
      object2.liulan='6324浏览';
      object2.pinglun='2323评论';
      array2[1]=object2;

  var object3=new Object();
  object3.img="https://636c-cloud1-5g9s6m4xc535a723-1310002932.tcb.qcloud.la/%E9%A6%96%E9%A1%B5/xinwen2.png?sign=b1abfdbbf1ef943ebe2d38ae7472110e&t=1653222989";
  object3.title='冬天泡脚的好处';
  object3.type='养生之道';
  object3.liulan='75343浏览';
  object3.pinglun='2356评论';
  array2[2]=object3;

  var object4=new Object();
  object4.img="https://636c-cloud1-5g9s6m4xc535a723-1310002932.tcb.qcloud.la/%E9%A6%96%E9%A1%B5/xinwen3.png?sign=61a79e1bb1ede1be2dfdc2ab2a6fb4f3&t=1653224452";
  object4.title='糖友喝粥不如多加点粗粮和蔬菜';
  object4.type='健康养生';
  object4.liulan='57446767浏览';
  object4.pinglun='896评论';
  array2[3]=object4;

  var object5=new Object();
  object5.img="https://636c-cloud1-5g9s6m4xc535a723-1310002932.tcb.qcloud.la/%E9%A6%96%E9%A1%B5/xinwen1.png?sign=ef3e3c2d0d7ee7925ed7a78f405e27b4&t=1653222768";
  object5.title='大姨妈腰痛怎么办';
  object5.type='广告';
  object5.liulan='34755浏览';
  object5.pinglun='856评论';
  array2[4]=object5;

  return array2;
},
// 全部
initData3:function(){
  var array3=[];
  var object1=new Object();
  object1.img="https://636c-cloud1-5g9s6m4xc535a723-1310002932.tcb.qcloud.la/%E9%A6%96%E9%A1%B5/xinwen5.png?sign=9d8337147a57a944a2c2d03300ce02f3&t=1653320961";
  object1.title='免疫力下降发出的三个信号';
  object1.type='健康养生';
  object1.liulan='1314520浏览';
  object1.pinglun='369评论';
  array3[0]=object1;

  var object2=new Object();
      object2.img="https://636c-cloud1-5g9s6m4xc535a723-1310002932.tcb.qcloud.la/%E9%A6%96%E9%A1%B5/xinwen4.png?sign=389f4966481d6727681c54297ea0c2e2&t=1653320945";
      object2.title='可乐杀精真的吗？真相往往是这样的';
      object2.type='日常疑问';
      object2.liulan='11314浏览';
      object2.pinglun='693评论';
      array3[1]=object2;

  var object3=new Object();
  object3.img="https://636c-cloud1-5g9s6m4xc535a723-1310002932.tcb.qcloud.la/%E9%A6%96%E9%A1%B5/xinwen1.png?sign=ef3e3c2d0d7ee7925ed7a78f405e27b4&t=1653222768";
  object3.title='大姨妈腰痛怎么办';
  object3.type='养生之道';
  object3.liulan='513454浏览';
  object3.pinglun='936评论';
  array3[2]=object3;

  var object4=new Object();
  object4.img="https://636c-cloud1-5g9s6m4xc535a723-1310002932.tcb.qcloud.la/%E9%A6%96%E9%A1%B5/xinwen3.png?sign=61a79e1bb1ede1be2dfdc2ab2a6fb4f3&t=1653224452";
  object4.title='糖友喝粥不如多加点粗粮和蔬菜';
  object4.type='广告';
  object4.liulan='45746767浏览';
  object4.pinglun='396评论';
  array3[3]=object4;

  var object5=new Object();
  object5.img="https://636c-cloud1-5g9s6m4xc535a723-1310002932.tcb.qcloud.la/%E9%A6%96%E9%A1%B5/xinwen2.png?sign=b1abfdbbf1ef943ebe2d38ae7472110e&t=1653222989";
  object5.title='冬天泡脚的好处';
  object5.type='日常疑问';
  object5.liulan='423465浏览';
  object5.pinglun='639评论';
  array3[4]=object5;

  return array3;
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
  

  // 基本框架
  bindTap(e) {
    const index = parseInt(e.currentTarget.dataset.index);
    this.setData({
      curIndex: index
    })
  }
 
})