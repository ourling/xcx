// 七牛图片裁剪

const { pixelRatio, windowWidth } = wx.getSystemInfoSync()
const width = pixelRatio * windowWidth

module.exports = (domain, quality) =>
  item => {
    if (item.tagName === 'img' && item.attributes.src.indexOf(domain) !== -1 && item.attributes.src.indexOf('?') === -1) {
      item.attributes.src
      if (quality) item.attributes.src
    }
  }
