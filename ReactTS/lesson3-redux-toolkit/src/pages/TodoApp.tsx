import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useAppDisptach, useAppSelector } from '../tools/store'
import type { todoType } from '../types/todos.model';
import { useState } from 'react';
import { add } from '../tools/slices/todoSlice';

const TodoApp = () => {

  const todos = useAppSelector(p => p.todo);
  const [todo, setTodo] = useState<string>("");
  const dispatch = useAppDisptach();

  const todoHandleSubmit = (e: React.SubmitEvent) => {
    e.preventDefault();
    dispatch(add(todo));
    setTodo("");
  }

  return (
    <Container>
      <Link to={'/'} className='btn btn-warning mt-3'>←</Link>
      <div className="d-flex align-items-center justify-content-center flex-column">

        <h1 className='my-5'>Todo App</h1>

        <div className='col-6'>
          <form onSubmit={todoHandleSubmit}>
            <div className="input-group mb-3">
              <input value={todo} onChange={((e) => setTodo(e.target.value))} type="text" className="form-control" placeholder="Add item" aria-describedby="button-addon2" />

              <button className={`btn btn-dark ${todo.length <= 0 ? 'disabled' : ''}`} type="submit" id="button-addon2">Add</button>
            </div>
          </form>
        </div>

        <div className="col-6">
          <ul className="list-group">
            {todos.map((item: todoType, index: number) => (
              <li key={index} className="list-group-item d-flex justify-content-between align-items-center">{item.text} <button className='btn btn-danger'>X</button></li>
            ))}
          </ul>
        </div>

      </div>
    </Container>
  )
}

export default TodoApp