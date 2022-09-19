let timeId = null;
Page({
    data: {
        history: [],
        hot: ['大姨妈痛', '冬天泡脚', '糖友喝粥不如多加点粗粮'],
        result: [
            {
                id: 1,
                url: '../articles/articles',
                thumb: 'https://636c-cloud1-5g9s6m4xc535a723-1310002932.tcb.qcloud.la/%E9%A6%96%E9%A1%B5/xinwen1.png?sign=c71704c2f7a197a738ac8bf2bce05444&t=1653654809',
                title: '大姨妈腰痛怎么办'
            },
            {
                id: 2,
                url: '../articles1/articles1',
                thumb: 'https://636c-cloud1-5g9s6m4xc535a723-1310002932.tcb.qcloud.la/%E9%A6%96%E9%A1%B5/xinwen2.png?sign=296812ab398ee78a22490a16e79389db&t=1653654822',
                title: '冬天泡脚的好处'
            },
            {
                id: 3,
                url: '../articles2/articles2',
                thumb: 'https://636c-cloud1-5g9s6m4xc535a723-1310002932.tcb.qcloud.la/%E9%A6%96%E9%A1%B5/xinwen3.png?sign=a0919b1db44856338ace1bc2f95150ae&t=1653654308',
                title: '糖友喝粥多加粗粮和蔬菜'
            },
        ],
        showKeywords: false,
        keywords: ['大姨妈痛', '冬天泡脚', '糖友喝粥不如多加点粗粮和蔬菜', '医生的忠告'],
        value: '',
        showResult: false,
    },
    cancelSearch() {
        this.setData({
            showResult: false,
            showKeywords: false,
            value: ''
        })
    },
    searchInput(e) {
        if(!e.detail.value){
            this.setData({
                showKeywords: false
            })
        }else{
            if(!this.data.showKeywords){
                timeId && clearTimeout(timeId);
                timeId = setTimeout(() => {
                    this.setData({
                        showKeywords: true
                    })
                }, 1000)
            }
        }
    },
    keywordHandle(e) {
        const text = e.target.dataset.text;
        this.setData({
            value: text,
            showKeywords: false,
            showResult: true
        })
        this.historyHandle(text);
    },
    historyHandle(value) {
        let history = this.data.history;
        const idx = history.indexOf(value);
        if (idx === -1) {
            // 搜索记录只保留8个
            if (history.length > 7) {
                history.pop();
            }
        } else {
            history.splice(idx, 1);
        }
        history.unshift(value);
        wx.setStorageSync('history', JSON.stringify(history));
        this.setData({
            history
        });
    },
    onLoad() {
        const history = wx.getStorageSync('history');
        if (history) {
            this.setData({
                history: JSON.parse(history)
            })
            console.log(this.data.history);
        }
    }
})