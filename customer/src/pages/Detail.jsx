import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { fetchFromDetailFood } from "../actions/creator";
// import useFetch from "../hooks/hook"
export default function Detail() {
    const { id } = useParams()
    const {pending,food,error}=useSelector((state)=>(state.detail));
    const dispatch = useDispatch();
    useEffect(()=>{
        return async ()=>{
            await dispatch(fetchFromDetailFood(id))
        }
    },[])
    // const {items}=useFetch(` http://localhost:3000/posts/${id}`)
    if(pending){
        return (
            <section>
              <h1 className="animate-pulse text-red-400 text-3xl">Loading ...</h1>
            </section>
          );
    }
    if(error){
        return (
            <section>
              <h1 className="animate-pulse text-red-400 text-3xl">{error}</h1>
            </section>
          );
    }
    return (
        <div>
            {JSON.stringify(food.Ingredients)}
            <section className="text-gray-600 body-font bg-orange-200" >
                <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                        <img className="object-cover object-center rounded" alt="hero" src={food.imgUrl} />
                    </div>
                    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Name: {food.name}
                        </h1>
                        <h3 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Description: {food.description}
                        </h3>
                        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Category: {food.category}
                        </h1>
                        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Ingredient:
                        </h1>
                        {
                            food.Ingredients.map((ingredient,index)=>(
                            
                                <h3 key={index} className="mb-8 leading-relaxed">{index+1}. {ingredient.name}</h3>
                            ))
                        }
                        <p className="mb-8 leading-relaxed">{food.category}</p>
                        <div className="flex justify-center">
                            <button className="inline-flex text-white  bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Pesan Sekarang</button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}