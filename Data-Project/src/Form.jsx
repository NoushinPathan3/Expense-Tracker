// import { useState } from "react";

// function Form(){
//     const [firstname,setfirstname]=useState("")
//     const [lastname,setlastname]=useState("")
//     const [email,setemail]=useState("")
//     const [age,setage]=useState("")
    
//     return(
//         <>
//         <div className="signuppage">
//             <div className="signupbox">
//                 <form action="" >
//                     <h1>Sign-Up</h1>
//                     <div className="firstname">
//                         <label htmlFor="firstname">first Name</label> <br /><br />
//                         <input type="text" name="fname-identifier" id="firstname" value={firstname} placeholder="First Name" onChange={(e)=>setfirstname(e.target.value)}/> <br /><br />
//                     </div>
//                     <div className="lastname">
//                         <label htmlFor="lastname">last Name</label> <br /><br />
//                         <input type="text" name="lname-identifier" id="lastname" value={lastname} placeholder="Last Name" onChange={(e)=>setlastname(e.target.value)}/> <br /> <br />
//                     </div>
//                     <div className="mail">
//                         <label htmlFor="email">E-mail</label> <br/><br />
//                         <input type="email" name="email-identifier" id="email" value={email} placeholder="Enter your E-mail" onChange={(e)=>setemail(e.target.value)}/> <br /> <br />
//                     </div>
//                     <div className="age">
//                         <label htmlFor="age">Age</label>
//                         <input type="text" name="age-identifier" id="age" value={age} placeholder="Enter Password" onChange={(e)=>setpassword(e.target.value)}/> <br /> <br />
//                     </div>
//                     <div className="btn">
//                         <button type="submit">Submit</button>
//                     </div>
//                 </form>
//             </div>
//         </div>
//         </>
//     )       
// }
// export default Form;
