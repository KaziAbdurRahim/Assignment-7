import bgImage from '../../assets/bg-shadow.png'

const Sub = () => {
    return (
      <div className=' '>
          <div className="border-2 border-white-600 p-10 backdrop-blur-md container  ">
            <div className="hero  bg-base-200  rounded-lg  " style={{ backgroundImage: `url(${ bgImage})`, backgroundSize: 'cover',  }}>
  <div className="hero-content text-center">
    <div className="max-w-md">
      <h1 className="text-2xl font-bold">Subscribe to our Newstellers</h1>
      <p className="py-6">
        Get the latest update
      </p>
      <input className="p-3 rounded-lg mr-2" type="text" placeholder="Enter your email"/>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
        </div>
      </div>
    );
};

export default Sub;