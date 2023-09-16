export const TodoItem = ({title}) => {
    return(
        <>
            <li className="d-flex align-items-center justify-content-between border p-2 mt-2">
                <input type="checkbox" />
                <span>{title}</span>
                <div>
                    <button className="btn btn-success">Edit</button>
                    <button className="btn btn-danger">Remove</button>
                </div>
            </li>
        </>
    )
}