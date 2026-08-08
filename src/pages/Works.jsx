import image1 from '../assets/image copy 1.png'
import image2 from '../assets/image copy 2.png'
import image3 from '../assets/image copy 3.png'

function Works() {
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
    return (
        <section className="py-10">

            {/* Conteneur commun pour Works + projets */}
            <div className="max-w-4xl mx-auto px-5">

                <p className="font-black text-xl mb-8">
                    Works
                </p>
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
                                        <p className="text-[#8695A4]">{project.category}</p>
                                           
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
                {/* Projet 1 */}
            </div>    

        </section>
    )
}

export default Works;