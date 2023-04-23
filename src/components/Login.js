import { useNavigate } from "react-router-dom";


export default function(){
    let navigate = useNavigate();

    function Enter(e){
        e.preventDefault();
        navigate("/booklist");
    }

    function GoToRegister(){
        navigate("/register");
    }
    return (<>
        <div id='main'>
            <h1>Member Login</h1>
            <form onSubmit={Enter}>
                <input type='text' placeholder="Username" required/>

                <input type="password" placeholder="Password" required/>

                <button>Login</button>

                
            </form>
            <h3>Forgot Password?</h3>
            <h3>Not a member? <button onClick={GoToRegister}>Register!</button></h3>
        </div>
    </>)
}