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
const HtmlParser = require('../../html-view/index')
const qiniuImg = require('../../html-view/each/qiniuImg')
const resolveAnchor = require('../../html-view/each/resolveAnchor')
const app = getApp()
Page({
  data: {// 参与页面渲染的数据
    story: {
      date:"2018-04-15 10:26:45",
      desc:"两宗分隔十九年的命案，竟然同地点、同月同日发生。由于太巧合了……",
      html:'<p>1998年7月23日发生了轰动全香港的九龙湾」德福花园」五尸命案，三名迷信妇人，因误信一名大陆来的假风水师，进行所谓的」添寿法事」&nbsp;，结果被诱骗喝下混有山埃(剧毒氰化钾)的符水，其中一名死者更将符水供两名女儿饮用，结果五人集体死亡。根据资料，该地19年来发生过两起死亡事件，总共死了12人，诡异的是都是在7月22日发生。</p><p class="ph" style="margin-top: 0px; margin-bottom: 0px; padding: 0px; height: 20px;"><br/></p><p>第一起发生于1979年7月22日，兴建中的」德福花园」C座发生工安意外，有电梯突然下坠，导致6名工人死亡。1998年7月22日，一名41岁姚姓妇女，在德福花园的T座跳楼死亡。而五尸命案，法医官证实死者都是在7月22日下午死亡。</p><p class="ph" style="margin-top: 0px; margin-bottom: 0px; padding: 0px; height: 20px;"><br/></p><p>两宗分隔十九年的命案，竟然同地点、同月同日发生。由于太巧合了，当时街坊都议论纷纷，指可能是六名男死者想找鬼新娘，于是同时同地索命夺魂！焦点转回那起跳楼事件，当时港警接获通知到现场调查，发现姚姓死者留下了三封遗书。遗书内容关连到一宗妇人失踪案的资料，警方感到案件并不简单，便开始四处追查。</p><p class="ph" style="margin-top: 0px; margin-bottom: 0px; padding: 0px; height: 20px;"><br/></p><p>7月23日，港警在该处C座五楼的一个单位破门而入，侦破香港罕见的集体死亡命案。五名女性死者是徐顺琴(40岁)、李迎晖(徐长女17岁)、李迎曦(徐幼女15岁)、林春丽(49岁)与蔡秀玲(45岁)，分别死在单位内的五个房间里。港警发现，事发单位外墙，放置了一把用圆镜及红线缠着的剪刀，这被视作为风水物。此外，又发现三名死者都信奉日本的新宗教，警方ㄧ开始怀疑是集体自杀案并与邪教有关。港警调查发现，死者之一林春丽是上市公司侨成集团的总裁(主席)。</p><p style="text-align:center"><img src="http://ozjrt1c1f.bkt.clouddn.com/uploads/0415/1523758556176424169."/></p><p class="ph" style="margin-top: 0px; margin-bottom: 0px; padding: 0px; height: 20px;"><br/></p><p>放置了一把用圆镜及红线缠着的剪刀</p><p class="ph" style="margin-top: 0px; margin-bottom: 0px; padding: 0px; height: 20px;"><br/></p><p style="text-align:center"><img src="http://ozjrt1c1f.bkt.clouddn.com/uploads/0415/152375855762820627."/></p><p class="ph" style="margin-top: 0px; margin-bottom: 0px; padding: 0px; height: 20px;"><br/></p><p>事发当日林春丽曾到银行亲自提取70万港币。当时职员有所怀疑，她的答覆是：」只是提出一阵子，下午会存回户口，放心。」但这七十万就从此消失了!&nbsp;于是港警开始朝谋财害命的方向追查，原来是有人借开坛作法，要替死者五人添寿，这70万为作法工具，然后骗她们喝下有毒的符水，导致五人相继毒发身亡。</p><p class="ph" style="margin-top: 0px; margin-bottom: 0px; padding: 0px; height: 20px;"><br/></p><p>而元凶李育辉逃往大陆湖北，同年九月被捕，1999年4月，凶手被枪决伏法。自五尸命案发生后，传闻不少清洁工也在遇上怪事后辞职。一位清洁工表示，每晚到凶宅所在楼层倒垃圾时，都会听到阵阵急促的拖鞋脚步声。同时有女人声说道：」等我呀，我今天还没倒垃圾呀」那清洁工人最初还以为是自己听错，于是继续工作。但当所有垃圾清理完后，转头她就发现后楼梯门后，有一袋包装整齐的垃圾放在地上，清洁工人知道」有事」发生，便立刻飞奔下楼离开。</p><p class="ph" style="margin-top: 0px; margin-bottom: 0px; padding: 0px; height: 20px;"><br/></p><p style="text-align:center"><img src="http://ozjrt1c1f.bkt.clouddn.com/uploads/0415/1523758557194198573."/></p><p style="text-align: center;">元凶李育辉</p><p class="ph" style="margin-top: 0px; margin-bottom: 0px; padding: 0px; height: 20px;"><br/></p><p>盛传不同大楼的几名清洁工知道此事后，便纷纷辞职。2013年2月7日，德福花园五尸命案凶宅被拍卖，开价300万港币，较市价低约35%，最后在未到底价的情况下，被拍卖单位收回。</p><p><br/></p>',
      like:0,
      lookNum:0,
      title:"香港真实十大灵异事件——德福花园灵异事件",
      type:"灵异事件",
      user:"风"
    },
    html: "",
    https: {
      story: getApp().data
    },
  },
  onLoad: function(options) {
    // Do some initialize when page load.
    var url = 'story/select_index.php',
      data = {type: ""}
    // getApp().globalAjax(url,data);
    const htmlString = `
      <view class="container">
        <view class="story-title">${this.data.story.title}</view>
        <view class="story-info">
          <view class="item author nowrap">作者：${this.data.story.user}</view>
          <view class="item time nowrap">时间：${this.data.story.date}</view>
        </view>
        <view class="desc">${this.data.story.desc}</view>
        <view class="section">
          <view class="story-html">${this.data.story.html}</view>
        </view>
      </view>`
    const html = new HtmlParser(htmlString)
      .each(qiniuImg('//ozjrt1c1f.bkt.clouddn.com')).nodes
    this.setData({ html })
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
    console.log(item.index)
    console.log(item.pagePath)
    console.log(item.text)
  },
  //事件处理函数  
  urlItem: function(item){
    console.log(item)
  }
})
