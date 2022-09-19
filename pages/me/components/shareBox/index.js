Component({
  properties: {
    //属性值可以在组件使用时指定
    isCanDraw: {
      type: Boolean,
      value: false,
      observer(newVal, oldVal) {
        newVal && this.drawPic()
      }
    }
  },
  data: {
    imgDraw: {}, //绘制图片的大对象
    sharePath: '', //生成的分享图
    visible: false
  },
  methods: {
    handleClose() {
      this.setData({
        visible: false
      })
      this.triggerEvent('close')
    },
    drawPic() {
      if (this.data.sharePath) { //如果已经绘制过了本地保存有图片不需要重新绘制
        this.setData({
          visible: true
        })
        this.triggerEvent('initData') 
        return
      }
      wx.showLoading({
        title: '生成中'
      })
      this.setData({
        imgDraw: {
          "width": "720px",
          "height": "1280px",
          "background": "#f8f8f8",
          "views": [
            {
              "type": "image",
              "url": "https://636c-cloud1-5g9s6m4xc535a723-1310002932.tcb.qcloud.la/%E4%B8%AA%E4%BA%BA%E4%B8%AD%E5%BF%83/sharebg.png?sign=79fe578f77088865a07ac3f8c9d2e004&t=1653127727",
              "css": {
                "width": "720px",
                "height": "1280px",
                "top": "0px",
                "left": "0px",
                "rotate": "0",
                "borderRadius": "",
                "borderWidth": "",
                "borderColor": "#000000",
                "shadow": "",
                "mode": "scaleToFill"
              }
            },
            {
              "type": "image",
              "url": "https://636c-cloud1-5g9s6m4xc535a723-1310002932.tcb.qcloud.la/%E4%B8%AA%E4%BA%BA%E4%B8%AD%E5%BF%83/erweima.png?sign=364854c7a65b788086e58572679b3896&t=1653128494",
              "css": {
                "width": "250px",
                "height": "250px",
                "top": "850px",
                "left": "250px",
                "rotate": "0",
                "borderRadius": "",
                "borderWidth": "",
                "borderColor": "#000000",
                "shadow": "",
                "mode": "scaleToFill"
              }
            }
          ]
        }
      })
    },
    onImgErr(e) {
      wx.hideLoading()
      wx.showToast({
        title: '生成分享图失败，请刷新页面重试'
      })
    },
    onImgOK(e) {
      wx.hideLoading()
      this.setData({
        sharePath: e.detail.path,
        visible: true,
      })
      //通知外部绘制完成，重置isCanDraw为false
      this.triggerEvent('initData') 
    },
    preventDefault() { },
    // 保存图片
    handleSavePhoto() {
      wx.showLoading({
        title: '正在保存...',
        mask: true
      })
      wx.saveImageToPhotosAlbum({
        filePath: this.data.sharePath,
        success: () => {
          wx.showToast({
            title: '保存成功'
          })
          setTimeout(() => {
            this.setData({
              visible: false
            })
            this.triggerEvent('close')
          }, 300)
        },
        fail: () => {
          wx.getSetting({
            success: res => {
              let authSetting = res.authSetting
              if (!authSetting['scope.writePhotosAlbum']) {
                wx.showModal({
                  title: '提示',
                  content: '您未开启保存图片到相册的权限，请点击确定去开启权限！',
                  success(res) {
                    if (res.confirm) {
                      wx.openSetting()
                    }
                  }
                })
              }
            }
          })
          setTimeout(() => {
            wx.hideLoading()
            this.setData({
              visible: false
            })
            this.triggerEvent('close')
          }, 300)
        }
      })
    }
  }
})
