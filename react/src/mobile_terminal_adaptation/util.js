(function() {
  function setHTMLFontSize () {
    const HTMLFontSize = (document.documentElement.clientWidth / 375 * 100 ) + 'px'
    const BODYFontSize = '16px'
    const StyleDom = document.createElement('style')
    StyleDom.innerHTML = `html { font-size: ${HTMLFontSize} !important}; body { font-size: ${BODYFontSize} !important};`
    document.getElementsByTagName('head')[0].appendChild(StyleDom)
  }

  if(document.documentElement.clientWidth) {
    setHTMLFontSize()
  }

  window.addEventListener('resize', function() {
    setHTMLFontSize()
  })
})()