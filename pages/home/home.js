// pages/home/home.js
// 导入请求方法
import request from '../../utils/request'

Page({

  /**
   * 调用的方法
   */
  // 1、顶部轮播图的数据
  async getSwiperImgUrl(){
    let result = await request({url: '/banner', data: {type: 2}});
    // console.log(result);
    // 将请求回来的数据存到data中
    this.setData({
      swiperImgUrl: result.banners
    })
  },
  // 2、获取推荐歌单数据
  async getRecommendMusicList(){
    let res = await request({url: '/personalized', data: {limit: 10}});
    // console.log(res);
    this.setData({
      RecommendMusicList: res.result
    })
  },


  /**
   * 页面的初始数据
   */
  data: {
    swiperImgUrl: [], // 顶部轮播图请求回来的url数据
    RecommendMusicList: [],  // 推荐歌单数据
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    // 调用获取顶部轮播图的数据
    this.getSwiperImgUrl();
    // 调用获取推荐歌单的数据
    this.getRecommendMusicList();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})