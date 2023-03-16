import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import Swal from "sweetalert2"
import { fetchFromCategory } from "../action/creator"


export default function Category(){

    const deleteCategory = async (id) => {
        try {
     
            const response = await fetch(`https://clone.mekdi-keknya.shop/category/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    access_token: localStorage.getItem('access_token')
                },
            })
            if (!response.ok) {
                throw { error: "Data Not Found" }
            }
            Swal.fire({
                title: 'Success',
                text: 'Success Delete Category',
                icon: 'success',
                confirmButtonText: 'Cool'
            })
            dispatch(fetchFromCategory())
        } catch (error) {
            Swal.fire({
                title: 'Errors',
                text: error,
                icon: 'error',
                confirmButtonText: 'Cool'
            })
        }
    }
        const { pending, categories, error } = useSelector((state) => (state.category));
        console.log(categories)
        const dispatch = useDispatch()
        useEffect(() => {
            return async () => {
                await dispatch(fetchFromCategory())
            }
        }, []);
    return (
        <div className="w-full">
        <h1 className="text-4xl font-sans font-bold">Category</h1>
        <Link to='/add-category' href="" className="mt-10"> <button className="btn btn-success mt-5">Add Category</button></Link>
        <hr />
        <table className="table w-full mt-10">
            <thead>
                <tr>
                    <th>No</th>
                    <th>Name</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {
                    categories.map((data,idx) => {
                        return (
                            <tr key={data.id}>
                                <td>{idx+1}</td>
                                <td>{data.name}</td>
                                <td><button onClick={() =>{deleteCategory(data.id)}} className="btn btn-error">Delete</button></td>
                            </tr>
                        )
                    })
                }

            </tbody>


        </table>
    </div>
    )
}