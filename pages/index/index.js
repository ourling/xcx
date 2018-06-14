//index.js
/****
 * data	Object	页面的初始数据
onLoad	Function	生命周期函数--监听页面加载
onReady	Function	生命周期函数--监听页面初次渲染完成
onShow	Function	生命周期函数--监听页面显示
onHide	Function	生命周期函数--监听页面隐藏
onUnload	Function	生命周期函数--监听页面卸载
onPullDownRefresh	Function	页面相关事件处理函数--监听用户下拉动作
onReachBottom	Function	页面上拉触底事件的处理函数
onShareAppMessage	Function	用户点击右上角转发
onPageScroll	Function	页面滚动触发事件的处理函数
onTabItemTap	Function	当前是 tab 页时，点击 tab 时触发
其他	Any	开发者可以添加任意的函数或数据到 object 参数中，在页面的函数中用 this 可以访问
 */
//获取应用实例
const app = getApp()

Page({
  data: {// 参与页面渲染的数据
    user: {},
    list:[]
  },
  onLoad: function(options) {  
    this.data.user = getApp().globalData.userInfo
    var url = 'xcx/story_list.php',
      data = {
        page: 1,
        size: 6
      },
      success = (res)=>{
        res = res.data
        if(res.isSuccess){
          this.setData({
            list: res.list
          })
          // this.data.list = res.list
          console.log(this.data.list)
        }else{
          alert('获取列表失败')
        }
      }
    getApp().globalAjax(url,data,success);
  },
  onReady: function() {
    // Do something when page ready.
  },
  onShow: function() {
    // Do something when page show.
  },
  onHide: function() {
    // Do something when page hide.
  },
  onUnload: function() {
    // Do something when page close.
  },
  onPullDownRefresh: function() {
    // Do something when pull down.
  },
  onReachBottom: function() {
    // Do something when page reach bottom.
  },
  onShareAppMessage: function () {
   // return custom share data when user share.
  },
  onPageScroll: function() {
    // Do something when page scroll
  },
  onTabItemTap(item) {
    
  },
  //事件处理函数
  urlItem: function(event){
    var _self = this
    var arg = event.currentTarget.dataset
    wx.navigateTo({
      url: '../story/index?story=' + arg.id
    })
  }
})
