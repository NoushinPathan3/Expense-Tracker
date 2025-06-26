import './Login.css';

function Login(){
    
    return(
        <>
        <div className="loginpage">
            <div className="loginbox">
                <form action="" >
                    <h1>Login</h1>
                    <div className="mail">
                        <label htmlFor="email">E-mail</label> <br/>
                        <input type="email" name="email-identifier" id="email" placeholder="Enter your E-mail" onChange={(e)=>setemail(e.target.value)}/>
                    </div><br /><br />
                    <div className="pass">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password-identifier" id="password" placeholder="Enter Password" onChange={(e)=>setpassword(e.target.value)}/>
                    </div><br /><br />
                    <div className="btn">
                        <button type="submit">Submit</button>
                    </div>
                    <h6>New User? <a href="/form">Register Now</a></h6>
                </form>
            </div>
        </div>
        </>
    )
}
export default Login;