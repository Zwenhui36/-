// pages/route-plan/route-plan.js
import{CDN_PATH,MOYUAN_KEY,BAIQIAN_KEY,YULU_KEY,DIFUNI_KEY,REFERER} from '../config/appConfig';
Page({

    /**
     * 页面的初始数据
     */
    data: {
        modes:[
            {text:'驾车',value:'driving'},
            {text:'公交',value:'transit'},
            {text:'步行',value:'walking'}
        ],
        modeIndex:0,
        startPoint:null,
        endPoint:null,
        isNavigate:false,
        showCustomActionsheet:false,
        keyIndex:0
    },
    onChooseStartPoint(){
        wx.chooseLocation({
          success:(res)=>{
              this.setData({
                  startPoint:res
              });
          }
        });
    },
    onChooseEndPoint(){
        wx.chooseLocation({
          success:(res)=>{
              this.setData({
                  endPoint:res
              });
          }
        });
    },
    onSelectMode(event){
        const{ index}=event.currentTarget.dataset;
        if (index===this.data.modeIndex){
          return;
        }
        this.setData({
          modeIndex:index
        });
      },
      onRouteplan(){
        if (!this.data.endPoint){
          wx.showToast({
            title: '请选择终点位置',
            icon:'none',
            duration:1500,
            mask:false
          });
          return;
        }
        const key='V6BBZ-PBYWX-HEO4O-TCKDR-FCR5S-C2FAV';
        const referer=REFERER;
        const endPoint=JSON.stringify(this.data.endPoint);
        const startPoint=this.data.startPoint? JSON.stringify(this.data.startPoint): '';
        const mode=this.data.modes[this.data.modeIndex].value;
        const navigation=this.data.isNavigate ? 1: 0;
        let url='plugin://routePlan/index?key='+key+'&referer='+referer+"&endPoint="+endPoint+'&mode='+mode+'&navigation'+navigation
        if (startPoint){
          url+='&startPoint='+startPoint;
        }
        wx.navigateTo({
          url
        });
      },
      onChangeNavigate(event){
        this.setData({
          isNavigate:event.detail.value
        });
      },
      onShareAppMessage:function(){
      
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