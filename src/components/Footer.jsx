import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
function Footer (){
    return(
        <div className="flex flex-col justify-center items-center mt-10">
            <div className="flex flex-col gap-5 justify-center items-center p-5">
                <div className="flex justify-center gap-5 text-[#21243D]">  
                    <FaFacebookSquare size={35} color='#21243D'/>
                    <FaInstagramSquare size={35} color='#21243D'/> 
                    <FaLinkedin size={35} color='#21243D' />
                    <FaTwitter size={35} color='#21243D'/>
                </div>
                <p> Copyright ©2020 All rights reserved</p>
                
            </div>
    
        </div>
    )
}
export default Footer;