import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export default function AddCategory(){
    const { register, handleSubmit, errors } = useForm();
    const navigate= useNavigate();
    const addCategory = async(data)=>{
        try {

            const response = await fetch('https://clone.mekdi-keknya.shop/category',{
                method:'POST',
                headers:{
                    'Content-Type':'application/json',
                    access_token:localStorage.getItem('access_token')
                },
                body:JSON.stringify(data)
            });
            
            if(!response.ok){
                throw new Error(response.statusText)
            }

            const responseJson = response.json();
            Swal.fire({
                title: 'Success',
                text: "Successfully added category",
                icon: 'success',
                confirmButtonText: 'Cool'
            })
            // navigate('/')
        } catch (error) {
            Swal.fire({
                title: 'Error',
                text: error,
                icon: 'error',
                confirmButtonText: 'Cool'
            })
        }
    }
    return (
        <section>
        <div className="flex flex-col justify-center min-py-12 mt-[-60px] sm:px-6 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <h2 className="mt-6 text-3xl font-extrabold text-center text-neutral-600">Add Category</h2>
            </div>
            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">

                <div className="px-4 py-8 sm:px-10">
                    <form onSubmit={handleSubmit(addCategory)} className="space-y-6" >
                        <div>
                            <label for="name" className="block text-sm font-medium text-gray-700"> Name </label>
                            <div className="mt-1">
                                <input {...register("name", { required: 'this is required' })} id="text" name="name" type="text"  className="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300" />
                            </div>
                        </div>
                        <div>
                            <button  type="submit" className="flex items-center justify-center w-full px-10 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-blue-600 rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">Add Category</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        </section>
    )
}