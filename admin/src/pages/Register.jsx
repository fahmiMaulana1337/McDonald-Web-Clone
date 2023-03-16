import { useForm } from "react-hook-form";
import Logo from "../assets/images/logo.png";
import Swal from 'sweetalert2'

export default function Register() {
    const {register,handleSubmit,watch,formState:{errors}}=useForm();
  return (
    <section>
      <div className="flex flex-col justify-center min-py-12 sm:px-6 mt-[-70px] lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <div className="flex justify-center">
            <img src={Logo} className="h-[100px]" alt="" />
          </div>
          <h2 className="mt-6 text-3xl font-extrabold text-center text-neutral-600">
            Add Admin
          </h2>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="px-4 py-8 sm:px-10">
            <form onSubmit={handleSubmit(async (data,formState)=>{
              try {
               const response= await fetch("https://clone.mekdi-keknya.shop/register",{
                  method:"POST",
                  headers:{
                    "Content-Type":"application/json",
                    'access_token':localStorage.getItem('access_token')
                  },
                  body:JSON.stringify(data)
                })  
                const message= await response.json()
                if(!response.ok){
                  throw new Error(message)
                }

                Swal.fire({
                  title: 'Success',
                  text: 'Success Add Admin',
                  icon: 'success',
                  confirmButtonText: 'Cool'
                })
              } catch (error) {
                console.log(error)
                Swal.fire({
                  title: 'Error',
                  text: error,
                  icon: 'error',
                  confirmButtonText: 'Cool'
                })
              }
       
               
              })}
               className="space-y-6" >
              <div>
                <label
                  for="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  {" "}
                  Email address{" "}
                </label>
                <div className="mt-1">
                  <input
                    id="email"
                   { ...register("email",{required:'this is required'})}
                    type="email"
                    autocomplete="email"
                    required=""
                    className="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                  />
                </div>
              </div>
     
              <div>
                <label
                  for="address"
                  className="block text-sm font-medium text-gray-700"
                >
                  {" "}
                  Address{" "}
                </label>
                <div className="mt-1">
                  <input
                    id="address"
                    { ...register("address")}
                    type="text"
                    className="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                  />
                </div>
              </div>
              <div>
                <label
                  for="phoneNumber"
                  className="block text-sm font-medium text-gray-700"
                >
                  {" "}
                  Phone Number{" "}
                </label>
                <div className="mt-1">
                  <input
                    id="phoneNumber"
                    { ...register("phoneNumber")}
                    type="text"
                    className="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                  />
                </div>
              </div>

              <div>
                <label
                  for="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  {" "}
                  Password{" "}
                </label>
                <div className="mt-1">
                  <input
                    id="password"
                    { ...register("password",{required:'this is required'})}

                    type="password"
                    autocomplete="current-password"
                    required=""
                    className="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                  />
                </div>
              </div>
              {/* <p>{errors.password}</p> */}
              <div>
                <button
                  type="submit"
                  className="flex items-center justify-center w-full px-10 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-blue-600 rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Sign Up
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
