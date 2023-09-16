export const TodoInput = ( {setTodos} ) => {

    const TodoFunc = (evt) => {

        let clock = new Date()

        if(evt.keyCode == 13) {
            let newObj = {
                id: clock.getTime,
                title: evt.target.value,
                isComplated: false
            }

            setTodos((prev) => [...prev, newObj ])

            evt.target.value = null
        }
    }
    
    return(
        <>
            <input type="text" onKeyUp={TodoFunc} placeholder="Todo..." className="form-control mt-5 w-50 m-auto mb-5"/>
        </>
    )
}