function Register() {
  return (
    <div className="register py-[100px]">
      <div className="container mx-auto">
        <div className="register-context max-w-[70%] m-auto">
          <h1 className=" text-center text-black font-bold text-[30px] mb-12">Register Now</h1>
          <form action="">
            <div className="form-fields grid grid-cols-2 gap-4">
              <input type="text" placeholder="First Name" className=" border p-2 rounded border-black placeholder:text-black/35 font-bold text-[14px] focus-visible:outline-none" />
              <input type="text" placeholder="Last Name" className=" border p-2 rounded border-black placeholder:text-black/35 font-bold text-[14px] focus-visible:outline-none" />
              <input type="text" placeholder="Phone" className=" border p-2 rounded border-black placeholder:text-black/35 font-bold text-[14px] focus-visible:outline-none" />
              <input type="text" placeholder="Email" className=" border p-2 rounded border-black placeholder:text-black/35 font-bold text-[14px] focus-visible:outline-none" />
              <input type="password" name="password" id="" placeholder="Password" className=" border p-2 rounded border-black placeholder:text-black/35 font-bold text-[14px] focus-visible:outline-none" />
              <select name="gender" id="" className=" border p-2 rounded border-black placeholder:text-black/35 font-bold text-[14px] focus-visible:outline-none">
                <option value="">Male</option>
                <option value="">Female</option>
              </select>
              <textarea name="Address" id="" cols="30" rows="10" placeholder="Address" className=" col-span-2 border p-2 rounded border-black placeholder:text-black/35 font-bold text-[14px] focus-visible:outline-none"></textarea>
            </div>
            <div className="button flex justify-center">
              <button className="bg-black/80 text-white text-[16px] py-[7px] px-[30px] rounded mt-3">Register</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Register
