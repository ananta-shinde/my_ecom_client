const Signup = (props) =>{
    return(<>
       <div className='container'>
         <div className='row'>
           <div className='col-6 offset-3 p-4'>
             <h4>Welcome User, Please sign up for better experience</h4>
             <h2 className='text-center'>Sign Up</h2>
             <form className='bg-light shadow p-4'>
               <label className=''>Name :</label>
               <input type="text" className='form-control'/>
               <label className=' '>Email :</label>
               <input type="text" className='form-control'/>
               <label className=' '>Password :</label>
               <input type="password" className='form-control'/>
               <button className='btn btn-primary w-100'>Signup</button>
             </form>
           </div>
         </div>
       </div>
    </>)
}

 
 
export default Signup;


