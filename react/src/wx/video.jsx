import { useState, useEffect, useRef, forwardRef, memo } from 'react';
import './video.less'

const videList = [
  {
    id: 1,
    url: 'https://stream7.iqilu.com/10339/upload_transcode/202002/18/20200218114723HDu3hhxqIT.mp4'
  },
  {
    id: 2,
    url: 'https://stream7.iqilu.com/10339/upload_transcode/202002/18/20200218093206z8V1JuPlpe.mp4'
  },
  {
    id: 3,
    url: 'https://stream7.iqilu.com/10339/article/202002/18/2fca1c77730e54c7b500573c2437003f.mp4'
  },
  {
    id: 4,
    url: 'https://stream7.iqilu.com/10339/upload_transcode/202002/18/20200218025702PSiVKDB5ap.mp4'
  },
  {
    id: 5,
    url: 'https://stream7.iqilu.com/10339/upload_transcode/202002/18/202002181038474liyNnnSzz.mp4'
  },
  {
    id: 6,
    url: 'https://stream7.iqilu.com/10339/article/202002/18/02319a81c80afed90d9a2b9dc47f85b9.mp4'
  }
];

function App() {
  const [list , setList] = useState([])
  const currentVideoTime = useRef();
  const siderVideTime = useRef();

  useEffect(() => {
    // 接口获取 数据
    getListInit()
  }, []) 

  const getListInit = () => {
    setList(videList)
  }

  const handleChange = (item, ind) =>  {
    
    console.log(siderVideTime.current.childNodes[ind].getBoundingClientRect())

    const sideNode = siderVideTime.current.childNodes[ind]
    const mainNode = currentVideoTime.current

    
    sideNode.classList.add(`tarnaslate_side_${1+ ind}`)
    mainNode.classList.add(`tarnaslate_main_${1+ ind}`)

    setTimeout(()=> {
      sideNode.classList.remove(`tarnaslate_side_${1+ ind}`)
      mainNode.classList.remove(`tarnaslate_main_${1+ ind}`)

      let tempCurrentTime = currentVideoTime.current.currentTime
      let tempSrc = currentVideoTime.current.src

      currentVideoTime.current.src = siderVideTime.current.childNodes[ind].src
      currentVideoTime.current.currentTime = siderVideTime.current.childNodes[ind].currentTime

      siderVideTime.current.childNodes[ind].src = tempSrc
      siderVideTime.current.childNodes[ind].currentTime = tempCurrentTime
    }, 800)

  }
  console.log('render !')
    return (
      <div className="video_wrap">
        <div className="video_main">
          <VideoChild
            ref={currentVideoTime}
            src={ list[0] && list[0].url}  
            controls
            width="480"
            height="270"
          />
        </div>
        <div className="vide_sider" ref={siderVideTime}>
          {
            list.filter((_, index) => index > 0).map((item,index) => {
              return <VideoChild 
                width="120"
                height="67"
                key={item.id}  
                src={item.url} 
                // ref={siderVideTime?.current?.childNodes[index]}
                muted
                onClick={() => handleChange(item, index)}
              />
            })
          }
        </div>
      </div>
    );
}

const VideoChild = memo(forwardRef((props, ref) => {
  const { muted, height, width, controls, src='', onClick =() => {} } = props
  // console.log('==>',ref?.current?.currentTime)
  if(src !=='') {
    return (
      <>
        <video 
          width={width}
          height={height}
          ref={ref}
          src={src}
          autoPlay
          muted={muted}
          controls={controls}
          onClick={onClick}
        />
      </>
    )
  }
  return <div>loading</div>
})) 



export default App;
