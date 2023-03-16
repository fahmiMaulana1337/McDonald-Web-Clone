import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom"
import Swal from "sweetalert2"
import { fetchFromFood } from "../action/creator";


export default function TableRow({ data }) {
    const deleteFood = async () => {
        try {
     
            const response = await fetch(`  ${data.id}`, {
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
                text: 'Success Delete food',
                icon: 'success',
                confirmButtonText: 'Cool'
            })
            dispatch(fetchFromFood())


        } catch (error) {
            Swal.fire({
                title: 'Errors',
                text: error,
                icon: 'error',
                confirmButtonText: 'Cool'
            })
        }
    }

    const dispatch = useDispatch();
    return (
        <tr>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={data.imgUrl} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>

                </div>
            </td>
            <td>
                <div className="font-bold">{data.name}</div>
            </td>
            <td> {data.price}</td>
            <td>
                <button className="btn btn-ghost btn-xs">{data.description}</button>
            </td>

            <td>
                {data.User.email}
            </td>
            <td>
                {data.Category.name}
            </td>

            <td>

                <Link to={`item/${data.id}`} className="mt-10"> <button className="btn btn-secondary">Edit Food</button></Link>
                <a onClick={deleteFood} className="mt-10"> <button className="btn btn-error">Delete Food</button></a>
            </td>
        </tr>
    )
}