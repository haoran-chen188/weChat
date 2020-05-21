// pages/goods_list/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabs: [
      {
        id:0,
        value:"综合",
        isActive:1
      },
      {
        id:1,
        value:"销量",
        isActive:0
      },
      {
        id:2,
        value:"价格",
        isActive:0
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  }
})