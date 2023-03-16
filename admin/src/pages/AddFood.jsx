import { useEffect } from "react"
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux"
import Swal from "sweetalert2";
import { fetchFromCategory } from "../action/creator"

export default function AddFood() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();



    const { pending, categories, error } = useSelector((state) => (state.category));
    console.log(categories)
    const dispatch = useDispatch()
    useEffect(() => {
        return async () => {
            await dispatch(fetchFromCategory())
        }
    }, []);

    const addFood = async (data) => {
        try {
            const inputData = {
                name: data.name,
                price: data.price,
                description: data.description,
                imgUrl: data.imgUrl,
                category: data.category,
                ingredients: [data.ingredients, data.ingredients2, data.ingredients3]
            }


            const response = await fetch("https://clone.mekdi-keknya.shop/item", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    'access_token': localStorage.getItem('access_token')
                },
                body: JSON.stringify(inputData)
            })
            const message = await response.json()
            if (!response.ok) {
                throw new Error(message)
            }

            Swal.fire({
                title: 'Success',
                text: 'Success Add food',
                icon: 'success',
                confirmButtonText: 'Cool'
            })
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
                    <h2 className="mt-6 text-3xl font-extrabold text-center text-neutral-600">Add Food</h2>
                </div>
                <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">

                    <div className="px-4 py-8 sm:px-10">
                        <form onSubmit={handleSubmit(addFood)} className="space-y-6" action="#" method="POST">
                            <div>
                                <label for="name" className="block text-sm font-medium text-gray-700"> Name </label>
                                <div className="mt-1">
                                    <input id="text" {...register("name", { required: 'this is required' })} type="text" className="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300" />
                                </div>
                            </div>
                            <div>
                                <label for="imgUrl" className="block text-sm font-medium text-gray-700"> Image </label>
                                <div className="mt-1">
                                    <input id="text"  {...register("imgUrl", { required: 'this is required' })} type="text" className="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300" />
                                </div>
                            </div>
                            <div>
                                <label for="imgUrl" className="block text-sm font-medium text-gray-700"> Price </label>
                                <div className="mt-1">
                                    <input id="text"  {...register("price", { required: 'this is required' })} type="number" className="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300" />
                                </div>
                            </div>
                            <div>
                                <label for="description" className="block text-sm font-medium text-gray-700"> Description </label>
                                <div className="mt-1">
                                    <input id="text"  {...register("description", { required: 'this is required' })} type="text" className="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300" />
                                </div>
                            </div>
                            <div>
                                <label for="ingridients" className="block text-sm font-medium text-gray-700"> Ingridients </label>
                                <div className="mt-1">
                                    <input id="text"  {...register("ingredients")} type="text" novalidate className="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300" />
                                </div>
                                <div className="mt-1">
                                    <input id="text"  {...register("ingredients2")} type="text" className="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300" />
                                </div>
                                <div className="mt-1">
                                    <input id="text"  {...register("ingredients3")} type="text" className="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300" />
                                </div>
                            </div>
                            <div>

                                <select defaultValue={''} className="select select-bordered w-full max-w-xs">
                                    <option disabled hidden value={''}>Select Category</option>
                                    {
                                        categories.map((category) => (
                                            <option  {...register("category")} value={category.id}>{category.name}</option>
                                        ))
                                    }
                                </select>

                            </div>
                            <div>
                                <button type="submit" className="flex items-center justify-center w-full px-10 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-blue-600 rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">Add Food</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}