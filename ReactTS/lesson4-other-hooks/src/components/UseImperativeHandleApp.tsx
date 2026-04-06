import { useImperativeHandle, useRef, forwardRef } from "react"

const MyInput = forwardRef((props, ref) => {
    useImperativeHandle(ref, () => ({
        myFunc: sayHi
    }))
    const sayHi = () => {
        alert("hello")
    }

    return <input type="text" />
})

const UseImperativeHandleApp = () => {
    const inputRef = useRef();
    const handleClick = () => {
        inputRef.current.myFunc();
    }
    return (
        <div>
            <MyInput ref={inputRef} /> <button onClick={handleClick}>test</button>
        </div>
    )
}

export default UseImperativeHandleApp