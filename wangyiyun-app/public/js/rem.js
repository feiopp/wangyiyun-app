function remSize() {
  // 获取设备宽度
  let deviceSize = document.documentElement.clientWidth || window.innerWidth
  if (deviceSize >= 750) {
    deviceSize = 7.5 * 100
  }
  if (deviceSize <= 320) {
    deviceSize = 320
  }
  // 750px-->1rem==100px; 375px-->1rem==50px    1rem = deviceSize / 7.5 + 'px'
  document.documentElement.style.fontSize = deviceSize / 7.5 + 'px'
  // 根据视口宽度 deviceSize 的改变,字体大小按比例改变 0.3 + 'rem'
  document.querySelector('body').style.fontSize = 0.3 + 'rem'
}
remSize()
// 随着窗口改变,调用函数
window.onresize = function () {
  remSize()
}
