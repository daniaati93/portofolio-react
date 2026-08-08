
function Blog (){

    const projects=[
        {
            id: 1,
            title: "UI Interactions of the week",
            date: "12 Feb 2019",
            category: "Express, Handlebars",
            description:
                "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
        },

        {
            id: 2,
            title: "UI Interactions of the week",
            date: "12 Feb 2019",
            category: "Express, Handlebars",
            description:
                "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
        },

        {
            id: 3,
            title: "UI Interactions of the week",
            date: "12 Feb 2019",
            category: "Express, Handlebars",
            description:
                "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
        },
    ]

    return (
        
        <div className="py-10">
            <div className="max-w-4xl mx-auto px-5">
                <p className="font-black text-xl mb-8">
                    Blog
                </p>

                {
                    projects.map((project)=>(
                        <div key={project.id}>
                            <div className="flex gap-5 items-start flex-col md:flex-row">
                                <div className="flex flex-col gap-2">
                                    <h1 className="font-semibold text-xl">{project.title}</h1>
                                    <div className="flex gap-2">
                                        <p className="">{project.date}</p>
                                        <div className="h-5 border-2 border-black"></div>
                                        <p>{project.category}</p>
                                    </div>
                                    <p>{project.description}</p>
                                </div>
                            </div>
                            <hr className="text-[#E0E0E0] m-8"/>
                        </div>
                    ))
                }
                
                
            </div>
            
        </div>
    )
}
export default Blog;