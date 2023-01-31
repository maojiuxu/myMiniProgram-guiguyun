// 导入请求的基础地址
import config from './config.js'

// 此文件用来封装请求方法
export default function({url, data = {}, method = 'GET'}){  // 以对象形式接收请求的参数并在接收的解构参数和对参数设置默认值
  return new Promise((resolve, reject) => {  // 返回一个Promise实例
    // 此处发送请求
    wx.request({  // 定义一个变量来接收请求的结果
      url: config.baseUrl + url, // 由基础路径和传的参数拼接而成
      data, // 请求时携带的参数
      method,  // 请求方式
      success: res => {  // 请求成功时
        resolve(res.data)
      },
      fail: err => { // 请求失败时
        reject(err)
      },
      // complete: () => { }  // 请求完成时，不管成功失败都会执行该回调
    });    
  })
}


