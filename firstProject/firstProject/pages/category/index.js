// pages/category/index.js

import { request,sleep } from "../../request/index.js"

Page({

  /**
   * 页面的初始数据
   */
  data: {
    leftMenuList: [],
    rightCatList: [],
    currentIndex: 0,
    scrollTop: 0
  },
  cats: [],
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const cats = wx.getStorageSync("Cats");
    if (!cats) {
      this.getCates();
    } else {
      if (Date.now() - cats.time > 10000) {
        this.getCates();
      } else {
        this.cats = cats.data;
        let leftMenuList = this.cats.map(v => v.cat_name);
        let rightCatList = this.cats[0].children;
        this.setData({
          leftMenuList,
          rightCatList
        });
      }
    }

  },
  getCates() {
    request({
      url: "categories"
    }).then((res) => {
      this.cats = res.data.message;
      wx.setStorageSync("Cats", { time: Date.now(), data: this.cats });
      let leftMenuList = this.cats.map(v => v.cat_name);
      let rightCatList = this.cats[0].children;
      this.setData({
        leftMenuList,
        rightCatList
      });
    });
  },
  handleItemTap(e) {
    var { index } = e.currentTarget.dataset;
    let rightCatList = this.cats[index].children;
    this.setData({
      currentIndex: index,
      rightCatList,
      scrollTop:0
    });
  }
})
