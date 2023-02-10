export default function Button({removeToDos, id}){
    return (
        <button onClick={() => removeToDos(id)} className="todo-btn">Ferdig</button>
    )
}