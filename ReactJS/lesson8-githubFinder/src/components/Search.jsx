import { useState } from "react"
import Swal from "sweetalert2";

const Search = ({ sendKeyboard }) => {
    const [keyboard, setKeyboard] = useState("");
    const formSubmited = (e) => {
        e.preventDefault();
        if (!keyboard) {
            Swal.fire({
                title: "Please, fill input!",
                theme: 'light',
                icon: "warning"
            });
        } else {
            sendKeyboard(keyboard);
        }

    }
    return (
        <div className="container d-flex align-items-center justify-content-center flex-column my-5">
            <div className="col-7">
                <form onSubmit={formSubmited} className="input-group mb-3">
                    <input onChange={e => setKeyboard(e.target.value)} type="text" className="form-control" placeholder="Enter username" />
                    <button className="btn btn-outline-dark" type="submit" >Search</button>
                </form>
            </div>
        </div>
    )
}

export default Search