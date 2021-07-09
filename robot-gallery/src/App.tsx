import React, { useState, useEffect } from 'react';

import logo from './assets/images/logo.svg'
import styles from './App.module.css'

// import robots from './mockdata/robots.json'

import Robot from './components/Robot'
import RobotDiscount from './components/RobotDiscount'
import ShoppingCart from './components/ShoppingCart'

interface robotGalleryInter {
  id: number
  name: string
  email: string
}

const App: React.FC = (props) => {
  const [count, setCount] = useState<number>(0)
  const [robotGallery, setRobotGallery] = useState<any>([])
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string>('')
  useEffect(() => {
    document.title = `点击了${count}次`
  }, [count]) 
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json()
        setRobotGallery(data)
      }catch (err) {
        setError(err.message)
      }finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])
  return (
    <div className={styles.app}>
      <div className={styles.appHeader}>
        <img src={logo} className={styles.appLogo} alt="logo" />
        <h1>罗伯特机器人炫酷吊炸天online购物平台的名字要长</h1>
      </div>
      <button onClick={() => { setCount(count+ 1)  }}>Click</button>
      <span>count: {count}</span>
      <ShoppingCart />
      { (!error && error !== '') && <div>网站出错{error}</div> }
      {
        !loading ? 
        (<div className={styles.robotList}>
          { robotGallery.map((r:robotGalleryInter, index: number) => 
            index % 2 === 0 ?  <Robot id={r.id} name={r.name} email={r.email} key={r.id}/>
            : <RobotDiscount id={r.id} name={r.name} email={r.email} key={r.id}/>
           )} 
        </div>) : 
        (<div>loading</div>)
      }

    </div>
  );
}

// interface Props {}
// interface state {
//   robotGallery: any[]
// }

// class App extends React.Component<Props, State> {
//   constructor (props: Props) {
//     super(props)
//     this.state = {
//       robotGallery: []
//     }
//   }
//   componentDidMount () {
//     fetch('https://jsonplaceholder.typicode.com/users')
//     .then(res => res.json())
//     .then(data => this.setState({ robotGallery: data }))
//   }
//   render () {
//     const { robotGallery } = this.state
//     return (<div className={styles.app}>
//       <div className={styles.appHeader}>
//         <img src={logo} className={styles.appLogo} alt="logo" />
//         <h1>罗伯特机器人炫酷吊炸天online购物平台的名字要长</h1>
//       </div>
//       <ShoppingCart />
//       <div className={styles.robotList}>
//         {
//           robotGallery.map(r => <Robot id={r.id} name={r.name} email={r.email} key={r.id}/>)
//         }
//       </div>
//     </div>)
//   }
// }

export default App;
