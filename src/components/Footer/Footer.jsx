

const Footer = () => {
    return (
        <footer className="footer bg-slate-900  text-white p-10 md:flex md:justify-between">
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
                <fieldset className="form-control w-80">
                    <label className="label">
                        <span className="label-text text-white">Subscribe to Our newsletter for the <br />latest updates.</span>
                    </label>
                    <div className="join">
                        <input
                            type="text"
                            placeholder="username@site.com"
                            className="input input-bordered join-item" />
                        <button className="btn btn-primary join-item  bg-gradient-to-r from-red-500 to-yellow-600">Subscribe</button>
                    </div>
                </fieldset>
            </div>
        </footer>



    );
};

export default Footer;