import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchFromFood } from '../actions/creator';
import Card from '../components/Card';


export default function Landing() {
    const {pending,foods,error} = useSelector((state)=>(state.food));
    const dispatch = useDispatch()
    useEffect(()=>{
        return async()=>{
           await dispatch(fetchFromFood())
        }
    },[]);

    if(pending){
        return (
            <section>
              <h1 className="animate-pulse text-red-400 text-3xl">Loading ...</h1>
            </section>
          );
    }
    // if(error){
    //     return (
    //         <section>
    //           <h1 className="animate-pulse text-red-400 text-3xl">{error}</h1>
    //         </section>
    //       );
    // }
    return (
        
        <div>
            <hr />
            <section className="text-gray-600 body-font bg-orange-50">
                <div className='flex justify-center'>
                    <h1 className='text-4xl font-sans font-bold mt-12'>Food</h1>

                </div>
                
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-wrap  justify-evenly mt">
                        {
                            foods.map(data => {
                                return <Card key={data.id} data={data} />
                            })
                        }
                    </div>
                </div>
            </section>
        </div>
    )
}