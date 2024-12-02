import React, { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const SignIn = () => {
    const {signInUser} = useContext(AuthContext)

    const handleSignIn = e => {
      e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;

        console.log(email, password)
        signInUser(email, password)
           .then(result => {
               console.log(result.user);

            // update last login time
            const lastSignInTime = result?.user?.metadata?.lastSignInTime;
            const loginInfo = {email, lastSignInTime};

            fetch(`http://localhost:5000/users`, {
              method: 'PATCH',
              headers: {
                'content-type' : 'application/json'
              },
              body: JSON.stringify(loginInfo)
            })
            .then(res => res.json())
            .then(data => {
              console.log('signin info updated in db' , data)
            })

           })
           .catch(error => {
            console.log(error)
           })
    }
  return (
    <div className="mx-auto w-4/12 my-12">
      <h3 className="text-3xl font-bold text-center mb-6">Sign In Now</h3>
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <form onSubmit={handleSignIn} className="card-body">
          
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
               name="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="password"
               name="password"              
              className="input input-bordered"
              required
            />
           
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">SignIn</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
