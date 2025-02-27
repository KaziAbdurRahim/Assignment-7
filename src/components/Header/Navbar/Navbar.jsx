import logo from '../../../assets/logo.png'


const Navbar = ({availableBalance}) => {
    return (
        <div className=' sticky top-0  z-50   backdrop-blur-2xl '>
            <div className="navbar mx-auto container">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex="0" role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <li><a>Home</a></li>
                            <li><a>Fixture</a></li>
                            <li><a>Teams</a></li>
                            <li><a>Schedules</a></li>
                        </ul>
                    </div>
                    <a className="btn btn-ghost "><img src={logo} alt="" className='w-12' /></a>
                    
                    
                </div>
                
                <div className="navbar-end">
                <div className=" hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                    <li><a>Home</a></li>
                            <li><a>Fixture</a></li>
                            <li><a>Teams</a></li>
                            <li><a>Schedules</a></li>
                    </ul>
                </div>
                    <div>
                        {/* <img src={} alt="" /> */}
                        <p>Coin:{availableBalance}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
