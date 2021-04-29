import { useState, useEffect, useRef } from 'react';
import './app.css'

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
    const index = list.findIndex(i => i.id === item.id)
    const main = list[0]
    const copy = [...list]
    copy[index] = main
    copy[0] = item

    
    // let temp = currentVideoTime.current.currentTime
    // console.log('temp==>',temp)
    // console.log('ind-->',ind)
    // currentVideoTime.current.currentTime = siderVideTime.current.childNodes[ind].currentTime

    // siderVideTime.current.childNodes[ind].currentTime = temp
    setList(copy)
  }


  if(list[0] && list[0].url) {
    return (
      <div className="video_wrap">
        <div className="video_main">
           <video 
              ref={currentVideoTime}
              src={list[0].url}  
              controls 
              height="400" width="450">
           </video>
        </div>
        <div className="vide_sider" ref={siderVideTime}>
          {
            list.filter((_, index) => index > 0).map((item,index) => {
              return <video 
                key={item.id}
                src={item.url}
                autoPlay
                muted
                height="100"
                width="150"
                onClick={() => handleChange(item, index)}
              />
            })
          }
        </div>
      </div>
    );
  }

  return <div>loading</div>
  
}

export default App;
