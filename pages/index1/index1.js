// pages/index1/index1.js
var a=1;
var b=0;
var num=0;
var timerID;
var array=[];
var max;
function paixu(){
    max=array[0];
for(var i=0;i<array.length;i++){if(array[i]<max){max=array[i];}}
wx.setStorageSync('zengchang', max);
array=[];
};
function anjian(){
    if(wx.getStorageSync('anjian')==true){
      let audio=wx.createInnerAudioContext();
      audio.src='pages/audio/1.mp3';
      audio.play();
    }}
Page({
    data: {
time:num
    },
getarray:function(){
    var that=this;
var rand1=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
var rand2=[];
for(var i=0;i<16;i++){
  var j=Math.floor(Math.random()*(rand1.length));
  rand2.push(rand1[j]);
  rand1.splice(j,1);
}
that.setData({
    rand:rand2
})
},
onShow:function(options){
    var that=this;
   that.getarray();
   that.stop();
   num=0;
   b=0;
   a=1;
   that.setData({
       time:num
   })
},
   clac1:function(){
    anjian();
    var that=this;
       if(that.data.rand[0]==a){a++;}
       if(b==0){that.start();b++}
       if(a==17){
           array.push(that.data.time);
       that.stop();
 wx.showModal({
   title:'用时',
   content:"你的用时为:"+that.data.time,
   confirmText:"继续游戏",
   cancelText:'结束游戏',
   success:function(res){
       if(res.confirm){
          that.getarray();
           num=0;
           b=0;
           a=1;
          that.setData({
               time:num
           })
       }
       if(res.cancel){
       that.getarray();
         num=0;
         b=0;
         a=1;
       that.setData({
             time:num
         })
           wx.navigateBack({
             delta: 1,
           })  
           paixu();                                 
       }
   }
 })
 }
   },
   clac2:function(){
    anjian();
    var that=this;
    if(that.data.rand[1]==a){a++;}
    if(b==0){that.start();b++}
    if(a==17){
        array.push(that.data.time);
       that.stop();
 wx.showModal({
   title:'用时',
   content:"你的用时为:"+that.data.time,
   confirmText:"继续游戏",
   cancelText:'结束游戏',
   success:function(res){
       if(res.confirm){
          that.getarray();
           num=0;
           b=0;
           a=1;
          that.setData({
               time:num
           })
       }
       if(res.cancel){
        that.getarray();
         num=0;
         b=0;
         a=1;
        that.setData({
             time:num
         })
         wx.navigateBack({
            delta: 1,
          })     
          paixu();   
       }
   }
 })
 }
},
clac3:function(){
    anjian();
    var that=this;
    if(that.data.rand[2]==a){a++;}
    if(b==0){that.start();b++}
    if(a==17){
        array.push(that.data.time);
       that.stop();
 wx.showModal({
   title:'用时',
   content:"你的用时为:"+that.data.time,
   confirmText:"继续游戏",
   cancelText:'结束游戏',
   success:function(res){
       if(res.confirm){
          that.getarray();
           num=0;
           b=0;
           a=1;
          that.setData({
               time:num
           })
       }
       if(res.cancel){
        that.getarray();
         num=0;
         b=0;
         a=1;
        that.setData({
             time:num
         })
         wx.navigateBack({
            delta: 1,
          })   
          paixu();     
       }
   }
 })
 }
},clac4:function(){
    anjian();
    var that=this;
    if(that.data.rand[3]==a){a++;}
    if(b==0){that.start();b++}
    if(a==17){
        array.push(that.data.time);
       that.stop();
 wx.showModal({
   title:'用时',
   content:"你的用时为:"+that.data.time,
   confirmText:"继续游戏",
   cancelText:'结束游戏',
   success:function(res){
       if(res.confirm){
          that.getarray();
           num=0;
           b=0;
           a=1;
          that.setData({
               time:num
           })
       }
       if(res.cancel){
        that.getarray();
         num=0;
         b=0;
         a=1;
        that.setData({
             time:num
         })
         wx.navigateBack({
            delta: 1,
          }) 
          paixu();       
       }
   }
 })
 }
},clac5:function(){
    anjian();
    var that=this;
    if(that.data.rand[4]==a){a++;}
    if(b==0){that.start();b++}
    if(a==17){
        array.push(that.data.time);
       that.stop();
 wx.showModal({
   title:'用时',
   content:"你的用时为:"+that.data.time,
   confirmText:"继续游戏",
   cancelText:'结束游戏',
   success:function(res){
       if(res.confirm){
          that.getarray();
           num=0;
           b=0;
           a=1;
          that.setData({
               time:num
           })
       }
       if(res.cancel){
        that.getarray();
         num=0;
         b=0;
         a=1;
        that.setData({
             time:num
         })
         wx.navigateBack({
            delta: 1,
          })        
          paixu();
       }
   }
 })
 }
},clac6:function(){
    anjian();
    var that=this;
    if(that.data.rand[5]==a){a++;}
    if(b==0){that.start();b++}
    if(a==17){
        array.push(that.data.time);
       that.stop();
 wx.showModal({
   title:'用时',
   content:"你的用时为:"+that.data.time,
   confirmText:"继续游戏",
   cancelText:'结束游戏',
   success:function(res){
       if(res.confirm){
          that.getarray();
           num=0;
           b=0;
           a=1;
          that.setData({
               time:num
           })
       }
       if(res.cancel){
        that.getarray();
         num=0;
         b=0;
         a=1;
        that.setData({
             time:num
         })
         wx.navigateBack({
            delta: 1,
          })  
          paixu();     
       }
   }
 })
 }
},clac7:function(){
    anjian();
    var that=this;
    if(that.data.rand[6]==a){a++;}
    if(b==0){that.start();b++}
    if(a==17){
        array.push(that.data.time);
       that.stop();
 wx.showModal({
   title:'用时',
   content:"你的用时为:"+that.data.time,
   confirmText:"继续游戏",
   cancelText:'结束游戏',
   success:function(res){
       if(res.confirm){
          that.getarray();
           num=0;
           b=0;
           a=1;
          that.setData({
               time:num
           })
       }
       if(res.cancel){
        that.getarray();
         num=0;
         b=0;
         a=1;
        that.setData({
             time:num
         })
         wx.navigateBack({
            delta: 1,
          })  
          paixu();      
       }
   }
 })
 }
},clac8:function(){
    anjian();
    var that=this;
    if(that.data.rand[7]==a){a++;}
    if(b==0){that.start();b++}
    if(a==17){
        array.push(that.data.time);
       that.stop();
 wx.showModal({
   title:'用时',
   content:"你的用时为:"+that.data.time,
   confirmText:"继续游戏",
   cancelText:'结束游戏',
   success:function(res){
       if(res.confirm){
          that.getarray();
           num=0;
           b=0;
           a=1;
          that.setData({
               time:num
           })
       }
       if(res.cancel){
        that.getarray();
         num=0;
         b=0;
         a=1;
        that.setData({
             time:num
         })
         wx.navigateBack({
            delta: 1,
          })      
          paixu();  
       }
   }
 })
 }
},clac9:function(){
    anjian();
    var that=this;
    if(that.data.rand[8]==a){a++;}
    if(b==0){that.start();b++}
    if(a==17){
        array.push(that.data.time);
       that.stop();
 wx.showModal({
   title:'用时',
   content:"你的用时为:"+that.data.time,
   confirmText:"继续游戏",
   cancelText:'结束游戏',
   success:function(res){
       if(res.confirm){
          that.getarray();
           num=0;
           b=0;
           a=1;
          that.setData({
               time:num
           })
       }
       if(res.cancel){
        that.getarray();
         num=0;
         b=0;
         a=1;
        that.setData({
             time:num
         })
         wx.navigateBack({
            delta: 1,
          })   
          paixu();     
       }
   }
 })
 }
},clac10:function(){
    anjian();
    var that=this;
    if(that.data.rand[9]==a){a++;}
    if(b==0){that.start();b++}
    if(a==17){
        array.push(that.data.time);
       that.stop();
 wx.showModal({
   title:'用时',
   content:"你的用时为:"+that.data.time,
   confirmText:"继续游戏",
   cancelText:'结束游戏',
   success:function(res){
       if(res.confirm){
          that.getarray();
           num=0;
           b=0;
           a=1;
          that.setData({
               time:num
           })
       }
       if(res.cancel){
        that.getarray();
         num=0;
         b=0;
         a=1;
        that.setData({
             time:num
         })
         wx.navigateBack({
            delta: 1,
          })   
          paixu();     
       }
   }
 })
 }
},clac11:function(){
    anjian();
    var that=this;
    if(that.data.rand[10]==a){a++;}
    if(b==0){that.start();b++}
    if(a==17){
        array.push(that.data.time);
       that.stop();
 wx.showModal({
   title:'用时',
   content:"你的用时为:"+that.data.time,
   confirmText:"继续游戏",
   cancelText:'结束游戏',
   success:function(res){
       if(res.confirm){
that.getarray();
           num=0;
           b=0;
           a=1;
          that.setData({
               time:num
           })
       }
       if(res.cancel){
        that.getarray();
         num=0;
         b=0;
         a=1;
        that.setData({
             time:num
         })
         wx.navigateBack({
            delta: 1,
          })  
          paixu();      
       }
   }
 })
 }
},clac12:function(){
    anjian();
    var that=this;
    if(that.data.rand[11]==a){a++;}
    if(b==0){that.start();b++}
    if(a==17){
        array.push(that.data.time);
       that.stop();
 wx.showModal({
   title:'用时',
   content:"你的用时为:"+that.data.time,
   confirmText:"继续游戏",
   cancelText:'结束游戏',
   success:function(res){
       if(res.confirm){
          that.getarray();
           num=0;
           b=0;
           a=1;
          that.setData({
               time:num
           })
       }
       if(res.cancel){
        that.getarray();
         num=0;
         b=0;
         a=1;
        that.setData({
             time:num
         })
         wx.navigateBack({
            delta: 1,
          })     
          paixu();   
       }
   }
 })
 }
},clac13:function(){
    anjian();
    var that=this;
    if(that.data.rand[12]==a){a++;}
    if(b==0){that.start();b++}
    if(a==17){
        array.push(that.data.time);
       that.stop();
 wx.showModal({
   title:'用时',
   content:"你的用时为:"+that.data.time,
   confirmText:"继续游戏",
   cancelText:'结束游戏',
   success:function(res){
       if(res.confirm){
          that.getarray();
           num=0;
           b=0;
           a=1;
          that.setData({
               time:num
           })
       }
       if(res.cancel){
        that.getarray();
         num=0;
         b=0;
         a=1;
        that.setData({
             time:num
         })
         wx.navigateBack({
            delta: 1,
          })      
          paixu();  
       }
   }
 })
 }
},clac14:function(){
    anjian();
    var that=this;
    if(that.data.rand[13]==a){a++;}
    if(b==0){that.start();b++}
    if(a==17){
        array.push(that.data.time);
       that.stop();
 wx.showModal({
   title:'用时',
   content:"你的用时为:"+that.data.time,
   confirmText:"继续游戏",
   cancelText:'结束游戏',
   success:function(res){
       if(res.confirm){
          that.getarray();
           num=0;
           b=0;
           a=1;
          that.setData({
               time:num
           })
       }
       if(res.cancel){
        that.getarray();
         num=0;
         b=0;
         a=1;
        that.setData({
             time:num
         })
         wx.navigateBack({
            delta: 1,
          })    
          paixu();     
       }
   }
 })
 }
},clac15:function(){
    anjian();
    var that=this;
    if(that.data.rand[14]==a){a++;}
   if(b==0){that.start();b++}
   if(a==17){
    array.push(that.data.time);
   that.stop();
wx.showModal({
title:'用时',
content:"你的用时为:"+that.data.time,
confirmText:"继续游戏",
cancelText:'结束游戏',
success:function(res){
   if(res.confirm){
      that.getarray();
       num=0;
       b=0;
       a=1;
      that.setData({
           time:num
       })
   }
   if(res.cancel){
    that.getarray();
     num=0;
     b=0;
     a=1;
    that.setData({
         time:num
     })
     wx.navigateBack({
        delta: 1,
      })   
      paixu();     
   }
}
})
}
},clac16:function(){
    anjian();
    var that=this;
    if(that.data.rand[15]==a){a++;}
   if(b==0){that.start();b++}
   if(a==17){
    array.push(that.data.time);
      that.stop();
wx.showModal({
  title:'用时',
  content:"你的用时为:"+that.data.time,
  confirmText:"继续游戏",
  cancelText:'结束游戏',
  success:function(res){
      if(res.confirm){
         that.getarray();
          num=0;
          b=0;
          a=1;
         that.setData({
              time:num
          })
      }
      if(res.cancel){
       that.getarray();
        num=0;
        b=0;
        a=1;
       that.setData({
            time:num
        })
        wx.navigateBack({
            delta: 1,
          })      
          paixu();
      }
  }
})
}
},
 start:function(){
var that=this;
     timerID=setInterval(()=>{that.timer()},1000)
 },
 stop:function(){
     clearInterval(timerID);  
 },
 timer:function(){
var that=this;
     that.setData({
         time:num++
     })
 }
})