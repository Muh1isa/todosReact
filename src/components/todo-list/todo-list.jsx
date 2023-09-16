import { TodoItem } from "../todo-item"

export const TodoList = ( {todos} ) => {
    return(
        <ul className="w-50 m-auto">
            { todos.map(item => (
                <TodoItem key={item.id} title={item.title} />
            )) }
        </ul>
    )
}