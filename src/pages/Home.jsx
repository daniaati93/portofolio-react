import image from '../assets/image.png'
import image1 from '../assets/image copy 1.png'
import image2 from '../assets/image copy 2.png'
import image3 from '../assets/image copy 3.png'
import { Link } from 'react-router-dom';
import Dashboard from './Dashboard';

function Home (){
    const projects = [
        {
            id: 1,
            title: "Designing Dashboards",
            year: "2020",
            category: "Dashboard",
            image: image1,
            description:
                "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
        },

        {
            id: 2,
            title: "Creating pixel perfect icons",
            year: "2020",
            category: "Illustration",
            image: image2,
            description:
                "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
        },

        {
            id: 3,
            title: "36 Days of Malayalam type",
            year: "2020",
            category: "Typography",
            image: image3,
            description:
                "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
        }
    ]
    return(
        <div>
            <div className ="flex flex-col-reverse md:flex-row justify-center items-center lg:gap-28 gap-20 py-20 md:px-5">
                <div className="flex flex-col justify-center md:items-start items-center gap-6">
                    <div className="text-center md:text-start">
                        <h1 className="font-bold text-[44px] text-[#21243D]">Hi, I am John, <br/> Creative Technologist</h1>
                        <p className="text-[#21243D]">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet <br></br>sint. Velit officia consequat duis enim velit mollit. Exercitation veniam <br></br> consequat sunt nostrud amet.</p>
                    </div>
                    <button className="w-auto bg-[#FF6464] text-[#FFFFFF] p-2 rounded-sm  text-lg">Download Resume</button>
                </div>

                <div>
                    <img 
                        src={image}
                        alt='profil'
                        className='w-61 h-61'
                    />
                </div>
            </div>

            <section className="bg-[#EDF7FA] flex flex-col gap-2 py-5 w-full max-w-full">  

                <div className="flex justify-center md:px-5 gap-160">
                    <p className="font-medium">Recent posts</p>
                    <Link className="text-[#00A8CC]">View all</Link>
                </div>
                <div className="flex flex-col md:flex-row justify-center items-center gap-5 p-2 md:p-2">
                    <div className="bg-[#ffff] p-5 space-y-5 rounded-sm md:w-104.5 h-73.75 w-auto">
                        <Link>
                            <h3 className="font-bold text-[26px]">Making a design system from scratch</h3>
                        </Link>
                        <div className="flex gap-2">
                            <p>12 Feb 2020</p>
                                <div className="h-5 border-2 border-black"></div>
                                <p>Design Pattern</p>
                            </div>
                        <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                    </div>
                    
                    <div className="bg-[#ffff] p-5 space-y-5 rounded-sm md:w-104.5 h-73.75 w-auto">
                        <h3 className="font-bold text-[26px]">Creating pixel perfect icons in Figma scratch</h3>
                        <div className="flex gap-2">
                            <p>12 Feb 2020</p>
                            <div className="h-5 border-2 border-black"></div>
                            <p>Figma, Icon Design</p>
                        </div>
                        <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                    </div>
                </div>
            </section>

            <section className="flex flex-col gap-2 py-10 max-w-4xl mx-auto">
                {
                    projects.map((project)=>(
                        <div key={project.id}>
                            <div className="flex gap-5 justify-center items-center p-5 flex-col md:flex-row">
                                <img 
                                    src={project.image}
                                    alt="tableau" className="w-full md:w-auto" />
                                <div className="flex flex-col gap-2">
                                    <h1 className="font-bold text-[30px]">{project.title}</h1>
                                    <div className="flex gap-5">
                                        <p className="w-15.5 h-6.25 bg-[#142850] font-medium text-md text-[#ffff] rounded-xl flex justify-center items-center">{project.year}</p>
                                        <Link to='/Dashboard'>
                                            <p className="text-[#8695A4]">{project.category}</p>
                                        </Link>    
                                    </div>
                                    <p>
                                       {project.description} 
                                    </p>
                                </div>
                            </div>
                            <hr className=" m-8 text-[#E0E0E0]"/>
                            
                        </div>
                    ))
                }
            </section>
            
        </div>
    )
}
export default Home;