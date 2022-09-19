// pages/cssCase/stepsAnt/index.js
var i = 0;
Page({


    data: {
      list: [
        {
          date: '就医步骤',
          time: "①",
          content: '确定选择的医院，带好身份证或医保卡'
        },
        {
          date: '就医步骤',
          time: "②",
          content: '选择就诊科室'
        },
        {
          date: '就医步骤',
          time: "③",
          content: '挂号、填写病历、候诊'
        },
        {
          date: '就医步骤',
          time: "④",
          content: '就诊（医生询问病情、查体、初步诊断或建议，就是医患沟通的过程）'
        },
        {
          date: '就医步骤',
          time: "⑤",
          content: '携医生开具检查单划价、交款，并进行相应检查'
        },
        {
          date: '就医步骤',
          time: "⑥",
          content: '携检查报告单提交接诊医生，听取医生诊断和建议'
        },
        {
            date: '就医步骤',
            time: "⑦",
            content: '听取医生开具处方的用药目的、方法、注意事项、复诊要求'
          },
          {
            date: '就医步骤',
            time: "⑧",
            content: '药物划价、交款、取药、注射室治疗或回家按医嘱用药、按时复诊，离院'
          },
      ],
      left: [],
    animation: [],
    tm: 0
    },
    onLoad() {
      let a = 128;
      let b = 128;
      console.log(a == b)
      console.log(a === b)
      let c = "128";
      let d = 128;
      console.log(c == d)
      console.log(c === d)
      let e = 'ee';
      console.log(typeof (e))
      let f = 'ff';
      let g = e + f;
      console.log(g == e + f)
      console.log(g === e + f)
    },
    onShow: function () {
        this.donghua();
        let j = 14
        while (j--)
          this.data.left.push(Math.floor(Math.random() * 750 + 1))
        this.setData({
          tm: 1,
          left: this.data.left
        })
      },
      donghua: function () {
        setTimeout(function () {
          let animation = wx.createAnimation({})
          animation.translateY(604).opacity(0).step({
            duration: 4000
          })
          animation.translateY(0).opacity(1).step({
            duration: 0
          })
          this.setData({
            ['left[' + i + ']']: Math.floor(Math.random() * 750 + 1),
            ['animation[' + i + ']']: animation.export()
          })
    
          i++;
          if (i == 14)
            i = 0
        }.bind(this), 500)
        setTimeout(function () {
          this.donghua()
        }.bind(this), 500)
    
      },
      hide(e) {
        let index = e.currentTarget.dataset['index']
        console.log(index)
        let animation = wx.createAnimation({})
        animation.translateY(0).opacity(0).step({
          duration: 0
        })
        this.setData({
          ['animation[' + index + ']']: animation.export()
        })
      }
  })