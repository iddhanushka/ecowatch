import { Link } from "react-router-dom"

function Login() {
  return (
    <div className="register pt-[100px] pb-[110px]">
      <div className="container mx-auto">
        <div className="register-context max-w-[40%] m-auto">
          <h1 className=" text-center text-black font-bold text-[30px] mb-12">Login</h1>
          <form action="">
            <div className="form-fields grid gap-4">
              <input type="email" placeholder="Email" className=" border p-2 rounded border-black placeholder:text-black/35 font-bold text-[14px] focus-visible:outline-none" />

              <input type="password" name="password" id="" placeholder="Password" className=" border p-2 rounded border-black placeholder:text-black/35 font-bold text-[14px] focus-visible:outline-none" />
            </div>
            <div className="button flex justify-between">
              <Link to="/register" className=" underline underline-offset-2 text-black font-bold text-[14px]">
                Not a user ?, Register now
              </Link>
              <button className="bg-black/80 text-white text-[16px] py-[7px] px-[30px] rounded mt-3">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
