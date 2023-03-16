import { Link, Outlet } from 'react-router-dom';


export default function Navbar(){
    return (   
          <div>

        <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <img src className='w-[100px]' alt="" />
          </a>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          <Link to="/menu"> <a className="mr-5 hover:text-gray-900 text-2xl font-bold text-black">Menu</a> </Link>  
            <a className="mr-5 hover:text-gray-900 text-2xl font-bold text-black">Promo</a>
            <a href=""> <img  src="https://mcdonalds.co.id/assets/img/reward/my-reward.svg" alt="" /></a>
          </nav>
         
        </div>
      </header>
      <Outlet />
        </div>
        )
    }
 