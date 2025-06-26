import './Signup.css';

function Signup(){
   
    return(
        <>
        <div className="signuppage">
            <div className="signupbox">
                <form action="" >
                    <h1>Sign-Up</h1>
                    <div className="firstname">
                        <label htmlFor="firstname">first Name</label> <br />
                        <input type="text" name="fname-identifier" id="firstname" placeholder="First Name" onChange={(e)=>setfirstname(e.target.value)}/>
                    </div>
                    <div className="lasstname">
                        <label htmlFor="lastname">first Name</label> <br />
                        <input type="text" name="lname-identifier" id="lastname" placeholder="Last Name" onChange={(e)=>setlastname(e.target.value)}/>
                    </div>
                    <div className="mail">
                        <label htmlFor="email">E-mail</label> <br/>
                        <input type="email" name="email-identifier" id="email" placeholder="Enter your E-mail" onChange={(e)=>setemail(e.target.value)}/>
                    </div><br /><br />
                    <div className="pass">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password-identifier" id="password" placeholder="Enter Password" onChange={(e)=>setpassword(e.target.value)}/>
                    </div><br /><br />
                    <div className="btn">
                        <button type="submit" >Submit</button>
                    </div>
                </form>
            </div>
        </div>
        </>
    )
}
export default Signup;