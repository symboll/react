import { FC, useContext } from 'react';
import { appContext } from '../index'

interface IProps {
  name: string,
  level: number
}
const Robot: FC<IProps> =({ name, level }) =>{

  const context = useContext(appContext)
  return (
    <div>
      name: { name }
      <br />
      level: { level }
      <br />
      { context.username }
    </div>
  )
}

export default Robot