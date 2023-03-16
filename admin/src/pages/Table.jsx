import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchFromFood } from "../action/creator";
import TableRow from "../components/TableRow";

export default function Table() {
    const { pending, foods, error } = useSelector((state) => (state.food));
    const dispatch = useDispatch()
    useEffect(() => {
        return async () => {
            await dispatch(fetchFromFood())
        }
    }, []);

    if (pending) {
        return (
            <section>
                <h1 className="animate-pulse text-red-400 text-3xl">Loading ...</h1>
            </section>
        );
    }
    return (
        <div className="w-full">
            <h1 className="text-4xl font-sans font-bold">FOOD</h1>
            <Link to='/add-food' className="mt-10"> <button className="btn btn-success">Add Food</button>
            </Link>
            <hr />
            <table className="table w-full mt-10">
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Description</th>
                        <th>Author</th>
                        <th>Category</th>
                        <th>Action</th>

                    </tr>
                </thead>
                <tbody>
                    {
                        foods.map(data => {
                            return <TableRow key={data.id} data={data} />
                        })
                    }

                </tbody>


            </table>
        </div>
    )
}