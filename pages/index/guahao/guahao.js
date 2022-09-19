Page({

    /**
     * 页面的初始数据
     */
    data: {
      // picker的上箭头下箭头
      picker_chose1: false,
      picker_chose2: false,
      picker_chose3: false,
      hasData: true,
      storeList: [{
          name: '温州市'
        },
        {
          name: '绍兴市'
        },
        {
          name: '杭州市'
        },
        {
          name: '金华市'
        },
        {
          name: '瑞安市'
        }
      ],
      store: '市区', //选择的门店
      themeList: [{
          name: '妇产科'
        },
        {
          name: '皮肤科'
        },
  
        {
          name: '普内科'
        },
  
        {
          name: '骨科'
        }, 
        {
          name: '中医科'
        },
      ],
      theme: '科室', //选择的主题
      statusList: [{
          name: '苏医生'
        },
        {
          name: '王医生'
        },
  
        {
          name: '李医生'
        },
  
        {
          name: '郑医生'
        }, 
        {
          name: '毕医生'
        },
      ],
      status: '医生', //选择的状态
      dateList: [{
          name: '2022年6月'
        },
        {
          name: '2022年7月'
        },
        {
          name: '2022年8月'
        },
        {
          name: '2022年9月'
        },
      ],
      date: '选择时间', //选择的时间
      show_action: false, //是否展示操作
      list_num: 0, //已选中的个数
      list: [{
          value: 1,
          status: 0,
          disabled: false,
        },
        {
          value: 2,
          status: 0,
          disabled: false,
        },
        {
          value: 3,
          status: 0,
          disabled: false,
        },
        {
          value: 4,
          status: 1,
          disabled: true,
        },
        {
          value: 5,
          status: 1,
          disabled: true,
        },
        {
          value: 6,
          status: 1,
          disabled: true,
        },
      ]
    },
    tianxie:function(){
        wx.navigateTo({
          url: '../guahao/biaoge/biaoge',
        })
    },
    change: function (e) {
      let param = e.currentTarget.dataset.type,
        data = e.currentTarget.dataset.value,
        index = e.detail.value,
        dataArr = this.data[param],
        checked = e.currentTarget.dataset.checked;
        this.setData({
          [checked]: !this.data[checked]
        })
      if (dataArr[index] !== undefined) {
        this.setData({
          [data]: dataArr[index].name
        })
      }
    },
    showAction() {
      this.setData({
        show_action: !this.data.show_action
      })
      if (!this.data.show_action) {
        this.data.list.forEach(item => {
          item.checked = false
        })
        this.setData({
          list_num: 0,
          list: this.data.list
        })
      }
    },
  
    actionChange(e) {
      console.log('checkbox发生change事件，携带value值为：', e.detail.value)
      let {
        list
      } = this.data, va = e.detail.value;
      console.log(va)
      list.forEach((item, index) => {
        item.checked = false;
        va.forEach((i0 => {
          if (item.value == i0) {
            item.checked = true;
          }
        }))
      })
      this.setData({
        list,
        list_num: va.length
      })
    },
  
  
    onLoad: function (options) {
  
    },
  
  
    onShow: function () {
  
    },
  
  
    onPullDownRefresh: function () {
  
    },
  
  
    onReachBottom: function () {
  
    },
  
  })