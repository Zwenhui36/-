// pages/map/map.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        latitude:23.099994,
        longitude:113.324520,
        markers:[{
            id:1,
            latitude:23.099994,
            longitude:113.324520,
            name:'T.I.T 创意园'
        }]
    },
    onReady:function(e){
        this.mapCtx=wx.createMapContext('myMap')
    },
    moveToLocation:function(){
        this.mapCtx.moveToLocation()
    },
    moveToRoutePlan:function(){
        wx.navigateTo({
          url: '../route-plan/route-plan',
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
    }
})