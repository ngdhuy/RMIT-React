import { useTodo } from "../../context/useTodo"
import {SiStarship } from 'react-icons/si'
import { motion } from 'framer-motion'
import { TodoItem } from "../TodoItem"

export const TodoList = () => {
  const { todos } = useTodo()
  
  if(!todos.length) {
    return(
      <div className='max-w-lg px-5 m-auto'>
        <h1 className="flex flex-col items-center gap-5 py-10 text-xl font-bold text-center rounded-xl bg-zinc-900">
          <SiStarship className="text-5xl" />
          You have nothing to do!
        </h1>
      </div>
    )
  } else {
    return(
      <motion.ul className="grid max-w-lg gap-2 px-5 m-auto">
        {todos.map(todo => (todo !== null ?
            <TodoItem todo={todo} key={todo.id} />
            :
            ""
        ))}
      </motion.ul>
    )
  }
}