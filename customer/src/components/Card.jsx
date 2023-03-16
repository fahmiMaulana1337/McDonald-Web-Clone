import { useNavigate } from "react-router-dom"
export default function Card({data}) {
    const navigate = useNavigate()
    
    return (
        <div className="card w-96 bg-base-100 shadow-xl mt-6">
            <figure className="px-10 pt-10">
                <img src={data.imgUrl} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{data.name}</h2>
                <div className="card-actions">
                    <button onClick={()=>navigate(`/detail/${data.id}`)} className="btn btn-primary">See Detail</button>
                </div>
            </div>
        </div>
    )
}