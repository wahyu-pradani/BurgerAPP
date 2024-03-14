import { Link } from 'react-router-dom'

export default function Navbar(){
    return(
        <nav className='bg-slate-500'>
            <div className='container py-5 flex gap-8 items-center text-white justify-between mx-auto px-[80px]'>
                <div><h1 className='text-2xl font-bold'>Navbar</h1></div>
                <div>
                    <ul className='flex gap-11 text-lg font-bold mx-auto'>
                        <li><Link to="/">Home</Link></li>
                        <li> <Link to="/about">About</Link></li>
                        <li><Link to="/help">Help</Link></li>
                    </ul>
                </div>        
            </div>
        </nav>
    );
}