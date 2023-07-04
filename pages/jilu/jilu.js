// pages/jilu/jilu.js
function anjian(){
  if(wx.getStorageSync('anjian')==true){
    let audio=wx.createInnerAudioContext();
    audio.src='pages/audio/1.mp3';
    audio.play();
  }}
Page({
    data: {
      a:wx.getStorageSync('zengchang1'),
    b:wx.getStorageSync('luanxu1'),
    c:wx.getStorageSync('mangwan')
    },
 onShow:function(){
  if(wx.getStorageSync('zengchang')<wx.getStorageSync('zengchang1')){
    wx.setStorageSync('zengchang1', wx.getStorageSync('zengchang'));
    this.setData({
      a:wx.getStorageSync('zengchang')
    })
  }
  if(wx.getStorageSync('luanxu')<wx.getStorageSync('luanxu1')){
    wx.setStorageSync('luanxu1', wx.getStorageSync('luanxu'));
    this.setData({
      b:wx.getStorageSync('luanxu')
    })
  }
  if(wx.getStorageSync('mangwan')<wx.getStorageSync('mangwan1')){
    wx.setStorageSync('mangwan1', wx.getStorageSync('mangwan'));
    this.setData({
      c:wx.getStorageSync('mangwan')
    })
  }
 },
 chongzhi:function(){
  anjian();
  wx.setStorageSync('zengchang', 100);
  wx.setStorageSync('zengchang1', 100);
  wx.setStorageSync('luanxu', 100);
  wx.setStorageSync('luanxu1', 100);
  wx.setStorageSync('mangwan', 100);
  wx.setStorageSync('mangwan1', 100);
 }
})