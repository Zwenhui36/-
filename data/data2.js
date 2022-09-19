// 本地模拟数据  
var localData = [
  {
    "content": "1、今天你几点起床的？",
    "content_type": 0,
    "role": true,
    "img": "/images/logo.png",
    "answer": {
      "role": false,
      "option": ''
    },
    "questionId": 1,
    "optionList": {
      "optionA": {
        'index': 0,
        'con':
        {
          a: "a.5、6点",
          "whether": 0
        },
        "option": 'a'
      },
      "optionB": {
        'index': 1,
        'con': {
          b: "b.7、8点",
          "whether": 0
        }, 
        "option": 'b'
      },
      "optionC": {
        'index': 2,
        'con': {
          c: "c.9、10点",
          "whether": 0
        },
        "option": 'c'
      }, 
      "optionD": {
        'index': 2,
        'con': {
          d: "d.11、12点",
          "whether": 0
        },
        "option": 'd'
      },
    }
  },
  {
    "content": "2、你今天一日三餐正常吃了吗",
    "content_type": 0,
    "role": true,
    "img": "/images/logo.png",
    "answer": "",
    "questionId": 2,
    "optionList": {
      "optionA": {
        'index': 0,
        'con': {
          a: "a.非常正常",
          "whether": 0,
        },
        "option": 'a'
      },
      "optionB": {
        'index': 1,
        'con': {
          b: "b.没吃早餐",
          "whether": 0
        },
        "option": 'b'
      },
      "optionC": {
        'index': 2,
        'con': {
          c: "c.没吃午餐",
          "whether": 0
        },
        "option": 'c'
      },
      "optionD": {
        'index': 2,
        'con': {
          d: "d.没吃晚餐",
          "whether": 0
        },
        "option": 'd'
      }, 
      // "optionE": {
      //   'index': 2,
      //   'con': {
      //     e: "e.天生丽质，用不着",
      //     "whether": 0
      //   },
      //   "option": 'd'
      // },
    }
  }, 
  {
    "content": "3、你一般喜欢做什么运动？",
    "content_type": 0,
    "role": true,
    "img": "/images/logo.png",
    "answer": "",
    "questionId": 3,
    "optionList": {
      "optionA": {
        'index': 0,
        'con': {
          a: "a.请私教健身、游泳",
          "whether": 0,
        },
        "option": 'a'
      },
      "optionB": {
        'index': 1,
        'con': {
          b: "b.我不喜欢运动",
          "whether": 0
        },
        "option": 'b'
      },
      "optionC": {
        'index': 2,
        'con': {
          c: "c.跑步",
          "whether": 0
        },
        "option": 'c'
      },
      "optionD": {
        'index': 2,
        'con': {
          d: "d.跳舞、练瑜伽",
          "whether": 0
        },
        "option": 'd'
      },
      // "optionE": {
      //   'index': 2,
      //   'con': {
      //     e: "e.天生丽质，用不着",
      //     "whether": 0
      //   },
      //   "option": 'd'
      // },
    }
  }, {
    "content": "4、人一天新陈代谢当中，水是必不可少的，你今天喝了多少?",
    "content_type": 0,
    "role": true,
    "img": "/images/logo.png",
    "answer": "",
    "questionId":4,
    "optionList": {
      "optionA": {
        'index': 0,
        'con': {
          a: "a.800ml",
          "whether": 0,
        },
        "option": 'a'
      },
      "optionB": {
        'index': 1,
        'con': {
          b: "b.1000ml",
          "whether": 0
        },
        "option": 'b'
      },
      "optionC": {
        'index': 2,
        'con': {
          c: "c.20000ml",
          "whether": 0
        },
        "option": 'c'
      },
      "optionD": {
        'index': 2,
        'con': {
          d: "d.4000ml",
          "whether": 0
        },
        "option": 'd'
      },
    }
  }, {
    "content": "5、很多水果中含有大量的维生素，今天你吃的什么水果？",
    "content_type": 0,
    "role": true,
    "img": "/images/logo.png",
    "answer": "",
    "questionId": 5,
    "optionList": {
      "optionA": {
        'index': 0,
        'con': {
          a: "a.苹果",
          "whether": 0
        },
        "option": 'a'
      },
      "optionB": {
        'index': 1,
        'con': {
          b: "b.梨子",
          "whether": 0
        },
        "option": 'b'
      },
       "optionC": {
        'index': 1,
        'con': {
          c: "c.其他水果",
          "whether": 0
        },
        "option": 'c'
      },
       "optionD": {
        'index': 1,
        'con': {
          d: "d.没吃水果",
          "whether": 0
        },
        "option": 'd'
      },
    }
  }, {
    "content": "6、和好朋友愉快的交流也是有益身体健康的，你平时和朋友联系吗",
    "content_type": 0,
    "role": true,
    "img": "/images/logo.png",
    "answer": "",
    "questionId": 6,
    "optionList": {
      "optionA": {
        'index': 0,
        'con': {
          a: "a.随时联系",
          "whether": 0
        },
        "option": 'a'
      },
      "optionB": {
        'index': 1,
        'con': {
          b: "b.偶尔联系",
          "whether": 0
        },
        "option": 'b'
      },
      "optionC": {
        'index': 2,
        'con': {
          c: "c.不常联系",
          "whether": 0
        },
        "option": 'c'
      },
      "optionD": {
        'index': 2,
        'con': {
          d: "d.不联系",
          "whether": 0
        },
        "option": 'd'
      },
    }
  },
  {
    "content": "7、你现在是开心还是难过？",
    "content_type": 0,
    "content_img": "/images/face.png",
    "role": true,
    "img": "/images/logo.png",
    "answer": "",
    'whether': 4,
    "questionId": 7,
    "optionList": {
      "optionA": {
        'index': 0,
        'con': {
          a: "a.很开心",
          "whether": 0
        },
        "option": 'a'
      },
      "optionB": {
        'index': 1,
        'con': {
          b: "b.一般般",
          "whether": 0
        },
        "option": 'b'
      },
      "optionC": {
        'index': 2,
        'con': {
          c: "c.有点emo",
          "whether": 0
        },
        "option": 'c'
      },
       "optionD": {
        'index': 2,
        'con': {
          d: "d.非常难过",
          "whether": 0
        },
        "option": 'd'
      },
    }
  }, {
    "content": "8、饮酒要适量（女性每天不超过一杯葡萄酒，男性不超过两杯），你喝了多少?",
    "content_type": 0,
    "role": true,
    "img": "/images/logo.png",
    "answer": "",
    "questionId": 8,
    "optionList": {
      "optionA": {
        'index': 0,
        'con': {
          a: "a.喝了一瓶",
          "whether": 0
        },
        "option": 'a'
      },
      "optionB": {
        'index': 1,
        'con': {
          b: "b.喝了半瓶",
          "whether": 0
        },
        "option": 'b'
      },
      "optionC": {
        'index': 2,
        'con': {
          c: "c.喝了一小杯",
          "whether": 0
        },
        "option": 'c'
      },
      "optionD": {
        'index': 2,
        'con': {
          d: "d.喝了一点点",
          "whether": 0
        },
        "option": 'd'
      },
      "optionE": {
        'index': 2,
        'con': {
          e: "e.不喝酒",
          "whether": 0
        },
        "option": 'e'
      },
    }
  }, {
    "content": "9、积极的心态是长寿的好办法，你最常用来记录自己生活或者心情的软件是？",
    "content_type": 0,
    "role": true,
    "img": "/images/logo.png",
    "answer": "",
    "questionId": 9,
    "optionList": {
      "optionA": {
        'index': 0,
        'con': {
          a: "a.QQ、微信",
          "whether": 0
        },
        "option": 'a'
      },
      "optionB": {
        'index': 1,
        'con': {
          b: "b.微博",
          "whether": 0
        },
        "option": 'b'
      },
      "optionC": {
        'index': 2,
        'con': {
          c: "c.快手/抖音视频",
          "whether": 0
        },
        "option": 'c'
      },
      "optionD": {
        'index': 2,
        'con': {
          d: "d.我不爱记录心情",
          "whether": 0
        },
        "option": 'd'
      },
      // "optionE": {
      //   'index': 2,
      //   'con': {
      //     e: "e.",
      //     "whether": 0
      //   },
      //   "option": 'd'
      // },
    }
  }, {
    "content": "10、如果每天都要为家里换上新鲜花朵，你会选择以下哪种花朵？",
    "content_type": 0,
    "role": true,
    "img": "/images/logo.png",
    "answer": "",
    "questionId": 10,
    "optionList": {
      "optionA": {
        'index': 0,
        'con': {
          a: "a.每天都不一样的",
          "whether": 0
        },
        "option": 'a'
      },
      "optionB": {
        'index': 1,
        'con': {
          b: "b.百合花",
          "whether": 0
        },
        "option": 'b'
      },
      "optionC": {
        'index': 2,
        'con': {
          c: "c.玫瑰花",
          "whether": 0
        },
        "option": 'c'
      },
      "optionD": {
        'index': 2,
        'con': {
          d: "d.郁金香",
          "whether": 0
        },
        "option": 'd'
      },
      // "optionE": {
      //   'index': 2,
      //   'con': {
      //     e: "e.",
      //     "whether": 0
      //   },
      //   "option": 'd'
      // },
    }
  }, {
    "content": "健康全部的秘诀，那就是每天都保持愉悦的好心情呀！",
    "content_type": 1,
    "role": true,
    'whether': 1,
    "img": "/images/logo.png",
    // "answer": "",
    "questionId": 11,
    "optionList": {
      "optionA": {
        'index': 0,
        'con': {
          a: "/images/happy.png",
          b: "/images/happy.png",
          c: "/images/happy.png",
          d: "/images/happy.png",
        },
        "whether": 1,
      },
      "optionB": {
        'index': 1,
        'con': "加油加油!!!",
      },
      "optionC": {
        'index': 2,
        'con': "aaaaa",
      } , 
       "optionD": {
        'index': 2,
        'con': "aaaaa",
      }
    }
  },
]


// 定义数据出口  
module.exports = {
  postList: localData
}




