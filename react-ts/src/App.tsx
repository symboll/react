import { useState, useEffect } from 'react'
import style from './App.module.css'
import { FiShoppingCart } from 'react-icons/fi'
import Robot from './components/robot'

interface IAuth {
  code: string,
  type: string
}
interface IRole {
  _id: string,
  level: number,
  name: string,
  auth: IAuth[]
}

function App() {
  const [count, setCount] = useState<number>(0)
  const [list, setList] = useState<IRole[]>([])

  useEffect(()=> {
    getList()
  }, [])
  const getList = async () => {
    const result = await fetch('http://localhost:3001/role')
    const res = await result.json()
    setList(res.data.roles)
  }
  return (
    <div className={style.wrap}>
      <FiShoppingCart onClick={ ()=> setCount(count + 1) } />
      { count }

      { list.map(r => <Robot key={r._id}  name={r.name} level={r.level} />) }
    </div>
  );
}

export default App;
