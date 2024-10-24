import logo from '../../assets/logo-footer.png'

const Footer = () => {
    return (
        <footer className=" bg-slate-900  text-white p-10 ">
            <img src={logo} alt="" className='mx-auto my-4' />
            <div className="footer md:flex md:justify-between">
            <nav>
                <h6 className="footer-title">About Us</h6>
             <p>We are a passionate team <br /> dedicated to providing the best <br />service to our customers.</p>
            </nav>
            <nav>
                <h6 className="footer-title">Quick Links</h6>
                <a className="link link-hover">Home</a>
                <a className="link link-hover">Services</a>
                <a className="link link-hover">About </a>
                <a className="link link-hover">Contact</a>
            </nav>
           
            <div>
                <h6 className="footer-title">Subscribe</h6>
                <div className=" ">
                    <div className="">
                        <p className="text-white mb-2">Subscribe to Our newsletter for the <br />latest updates.</p>
                    </div>
                    <div className="md:join ">
                        <input
                            type="text"
                            placeholder="username@site.com"
                            className="input input-bordered join-item " />
                        <button className="btn btn-primary   bg-gradient-to-r from-red-500 to-yellow-600  join-item">Subscribe</button>
                    </div>
                </div>
            </div>
            </div>
            
            <div className="my-3">
            <hr className=" text-white"/>
            <p className="text-center mt-1">@2024 Cricket All Right Reserved</p>
            </div>
        </footer>



    );
};

export default Footer;