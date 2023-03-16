import { useEffect, useState } from "react"
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { fetchFromCategory, fetchFromDetailFood } from "../action/creator"

export default function EditFood() {
    const { id } = useParams()
    const { register, handleSubmit, reset } = useForm();
    const { pending: pendingFood, food, error: errorFood } = useSelector((state) => (state.detail));

    const [input, setInput] = useState({});


    useEffect(() => {
        dispatch(fetchFromDetailFood(id))
    }, []);
    useEffect(() => {
        
        dispatch(fetchFromDetailFood(id))

    }, []);

    useEffect(() => {
        dispatch(fetchFromCategory())
    }, []);
    const { pending, categories, error } = useSelector((state) => (state.category));
    const dispatch = useDispatch()

    const editFood = async (data) => {
        try {
            const inputData = {
                name: data.name,
                price: data.price,
                description: data.description,
                imgUrl: data.imgUrl,
                category: 5,
                ingredients: [data.ingredients, data.ingredients2, data.ingredients3]
            }

            console.log(data.category)
            const response = await fetch(`https://clone.mekdi-keknya.shop/item/${id}`, {
                method: "PUT",
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
                text: 'Success Edit food',
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
        {JSON.stringify(food.Ingredients)}

            <div className="flex flex-col justify-center min-py-12 mt-[-60px] sm:px-6 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-md">
                    <h2 className="mt-6 text-3xl font-extrabold text-center text-neutral-600">Edit Food</h2>
                </div>
                <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">

                    <div className="px-4 py-8 sm:px-10">
                        <form onSubmit={handleSubmit(editFood)} className="space-y-6" action="#" method="POST">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700"> Name </label>
                                <div className="mt-1">
                                    <input id="text" {...register("name", { required: 'this is required' })} type="text" defaultValue={food.data?.name} className="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300" />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="imgUrl" className="block text-sm font-medium text-gray-700"> Image </label>
                                <div className="mt-1">
                                    <input id="text"  {...register("imgUrl", { required: 'this is required' })} type="text" defaultValue={food.data?.imgUrl} className="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300" />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="imgUrl" className="block text-sm font-medium text-gray-700"> Price </label>
                                <div className="mt-1">
                                    <input id="text"  {...register("price", { required: 'this is required' })} type="number" defaultValue={food.data?.price} className="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300" />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="description" className="block text-sm font-medium text-gray-700"> Description </label>
                                <div className="mt-1">
                                    <input id="text"  {...register("description", { required: 'this is required' })} type="text" defaultValue={food.data?.description} className="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300" />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="ingridients" className="block text-sm font-medium text-gray-700"> Ingridients </label>
                                <div className="mt-1">
                                    <input id="text"  {...register("ingredients")} type="text" defaultValue={food.data?.Ingredients[0]?.name} noValidate  className="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300" />
                                </div>
                                <div className="mt-1">
                                    <input id="text"  {...register("ingredients2")} type="text" noValidate defaultValue={food.data?.Ingredients[1]?.name}   className="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300" />
                                </div>
                                <div className="mt-1">
                                    <input id="text"  {...register("ingredients3")} type="text"  noValidate defaultValue={food.data?.Ingredients[2]?.name}  className="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300" />
                                </div>
                            </div>
                            <div>

                                <select  defaultValue={null} className="select select-bordered w-full max-w-xs">
                                    <option disabled hidden value={null}>Select Category</option>
                                    {
                                        categories.map(category => (
                                            console.log(category),
                                            <option {...register("category")} key={category.id} value={category?.id}>{category?.name}</option>
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