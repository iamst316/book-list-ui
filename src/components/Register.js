import { useNavigate } from "react-router-dom";


export default function(){
    let navigate = useNavigate();
    function Enter(e){
        e.preventDefault();
        navigate("/");
    }

    function GoToLogin(){
        navigate("/");
    }
    return (<>
        <div id='main'>
            <h1>Register User</h1>
            <form onSubmit={Enter}>
                <input type='text' placeholder="Username" required/>

                <input type="password" placeholder="Password" required/>
                
                <input type="password" placeholder="Confirm Password" required/>

                <button>Register</button>

                
            </form>
            
            <h3>Already a member? <button onClick={GoToLogin}>Login!</button></h3>
        </div>
    </>)
}