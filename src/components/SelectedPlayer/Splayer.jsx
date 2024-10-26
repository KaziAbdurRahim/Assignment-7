import PropTypes from "prop-types";
import { RiDeleteBin6Line } from "react-icons/ri";

const Splayer = ({seletedSplayer}) => {
  const {name,battingType}=seletedSplayer;
    return (
        <div  className="">
            <div className="flex justify-between p-3 my-2 border-2 rounded-md items-center">
                <div className="flex items-center  ">
                    <div className="w-[10%] pr-2">{seletedSplayer.length}
                        
                        <img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp" alt=""  className="rounded-[50%] border-2 overflow-hidden object-cover "/>

                    </div>
                    <div className="items-center space-y-1">
                        <p className="font-semibold text-lg">{name}</p>
                        <p className="text-sm ">{battingType}</p>
                    </div>
                </div>
                <div>
                    <button className="text-red-500"><RiDeleteBin6Line /></button></div>
            </div>
           
            
        </div>
    );
};
Splayer.propTypes={
    seletedSplayer: PropTypes.object,



}
export default Splayer;