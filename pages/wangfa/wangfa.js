// pages/wangfa/wangfa.js
function getRandomcolor(){
    let rgb=[];
    for(let i=0;i<3;++i){
let color=Math.floor(Math.random()*256).toString(16)
color=color.length==1?'0'+color:color
rgb.push(color)
    }
    return '#'+rgb.join('');
}
Page({

    /**
     * 页面的初始数据
     */
    data: {
danmu:[
    {text:'邹老师好帅',
color:'#ffffff',
time:1
    },
    {
text:'邹老师真的帅',
color:'#ffffff',
time:1
    },
    {
text:'邹老师男神',
color:'#ffffff',
time:1
    },
    {
text:'邹哥哥求求了',
color:'#ffffff',
time:1
    }
]
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        this.videoCtx=wx.createVideoContext('myvideo')
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

    },
inputblur:function(e){
this.inputValue=e.detail.value
},
senddanmu:function(){
this.videoCtx.sendDanmu({
    text:this.inputValue,
    color:getRandomcolor()
})
}
})