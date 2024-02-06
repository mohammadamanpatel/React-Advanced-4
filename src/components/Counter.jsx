import {useDispatch, useSelector} from 'react-redux'
import { decrement, increment } from '../redux/counterSlice'
const Counter = () => {
   const value = useSelector((state)=>state.counter.value)
   const dispatch = useDispatch()
    return(
      <div>
        <div>
            <button onClick={()=>dispatch(increment())}>Increment</button>
        </div>
        <div>{value}</div>
        <div>
            <button onClick={()=>dispatch(decrement())}>decrement</button>
        </div>
      </div>    
   )
}
export default Counter