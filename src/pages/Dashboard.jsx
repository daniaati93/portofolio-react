import image4 from '../assets/img_4.png'
import image5 from '../assets/img_5.png'
import image6 from '../assets/img_6.png'
import { Link } from 'react-router-dom';

function Dashboard () {
    return(
        <div className="flex justify-center items-center py-8 flex-col gap-8 px-5">
            <div className="flex flex-col gap-5"> 
                <Link to='/Home' >
                    <h1 className="font-black text-xl">Designing Dashboards with usability in mind</h1>
                </Link>
                <div className="flex gap-2">
                    <p className="bg-[#FF7C7C] text-[#ffff] px-1 md:px-2 rounded-xl">2020</p>
                    <p className="text-[#8695A4]">Dashboard, User Experience Design</p>
                </div>
                <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia <br />consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                <img 
                    src={image4} 
                    alt="photo" className="w-auto md:w-170"
                />

                <div className="flex flex-col gap-3">
                    <h1 className="font-bold text-xl">Heading 1</h1>
                    <div className="flex flex-col gap-3">
                        <p>Heading 2</p>
                        <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia <br/>consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                        <img 
                            src={image5}
                            alt="photo" className="w-auto md:w-170"
                        />
                        <img 
                            src={image6} 
                            alt="photo" className="w-auto md:w-170"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Dashboard;