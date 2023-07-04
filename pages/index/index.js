// index.js
function anjian(){
  if(wx.getStorageSync('anjian')==true){
    let audio=wx.createInnerAudioContext();
    audio.src='pages/audio/1.mp3';
    audio.play();
  }}
Page({
  data: {
    hidden:true
  },
  clac:function(){
    anjian();
    this.setData({
hidden:false     
    })
  },
clac4:function(){
  anjian();
  this.setData({
   hidden:true
  })
},
clac1:function(){
  anjian();
  wx.navigateTo({
    url: '../index1/index1',
  })
},
clac2:function(){
  anjian();
wx.navigateTo({
  url: '../index2/index2',
})
},
clac3:function(){
  anjian();
 wx.navigateTo({
   url: '../index3/index3',
 })
},
})
