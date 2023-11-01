import { configureStore } from '@reduxjs/toolkit'
import { useSelector, TypedUseSelectorHook } from 'react-redux'
import counterSlice from './modules/counter/counter'

const store = configureStore({
  reducer: {
    counter: counterSlice
  }
})

//获取store.getState函数类型
type getStateFnType = typeof store.getState
//获取getStateFnType返回值类型
type IRootType = ReturnType<getStateFnType>

//自定对state进行类型添加
/*
export interface TypedUseSelectorHook<TState> {
     (state: TState) => TSelected 这里会帮我们把类型赋值给state
    <TSelected>(selector: (state: TState) => TSelected, equalityFn?: EqualityFn<NoInfer<TSelected>>): TSelected;
}
*/
export const useAppSelector: TypedUseSelectorHook<IRootType> = useSelector

export default store
