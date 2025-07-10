import style from './Counter.module.css'
import { useState } from 'react'

function Counter() {
    const [count, setCount] = useState(0)

    const handleClick = () =>{
        setCount (count+1)
    }

    return(
        <div className={style.counter}>
            <p className={style.count}>Đếm: {count}</p>
            <button className={style.button} onClick={handleClick}>Tăng</button>
        </div>
    )
}

export default Counter