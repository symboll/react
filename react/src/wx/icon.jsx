

const list = [
  'fliggy_kefu',
  'fliggy_phone',
  'fliggy_down_arrow',
  'fliggy_right_arrow',
  // 'fliggy_green_finish',
  'fliggy_failed',
  'fliggy_success',
  'fliggy_green_inprocess',

  'fliggy_grey_inprocess',
  'fliggy_grey_pending',

  'fliggy_add_disabled',
  'fliggy_add',
  'fliggy_minus_disabled',
  'fliggy_minus',
  'fliggy_selected_disabled',
  'fliggy_selected',
  'fliggy_unselected',
]
function IconList () {
  return (
    <div>
      { list.map(item => <img key={item} src={`https://shtimgcdn.youhaodongxi.com/miniprogram/weapp-shihuituan/staticImg/${item}.png`} alt=''></img>) }
    </div>
  )
}

export default IconList