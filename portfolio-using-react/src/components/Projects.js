import minicalculator from '../assets/minicalculator.jpg';
import Homepagess from '../assets/Homepagess.jpg';
import formvalidation from '../assets/formvalidation.jpg';

export default function Projects() {
    const config = {
        projects: [
            {
                image: minicalculator,
                name: 'Mini Calculator',
                description: 'A basic calculator application developed using JavaScript, designed to perform essential arithmetic operations such as addition, subtraction, multiplication, and division, offering a straightforward and user-friendly interface for quick and easy calculations.',
                tools: ['HTML', 'CSS', 'JavaScript'],
                link: 'https://github.com'
            },
            {
                image: Homepagess,
                name: 'Restaurant Webpage',
                description: 'A fully responsive and user-friendly restaurant webpage, meticulously crafted using ReactJS, ensuring seamless functionality and an engaging user experience across all devices and screen sizes.',
                tools: ['ReactJS', 'CSS', 'Bootstrap'],
                link: 'https://github.com/'
            },
            {
                image: formvalidation,
                name: 'Form Validation',
                description: 'An interactive form validation application developed using JavaScript, designed to ensure accurate user input by providing real-time feedback, detecting errors, and enhancing the overall data submission process for improved user experience and reliability.',
                tools: ['HTML', 'CSS', 'JavaScript'],
                link: 'https://github.com/'
            }
        ]
    };

    return (
        <section id='projects' className="flex flex-col py-20 px-5 justify-center bg-primary text-white">
            <div className="w-full">
                <div className="flex flex-col px-10 py-5">
                    <h1 className="text-4xl border-b-4 border-secondary mb-5 w-[150px] font-bold">Projects</h1>
                    <p>
                    Here are some of the most notable projects I have worked on, showcasing my expertise in web development. I have utilized a combination of technologies, including HTML, CSS, JavaScript, ReactJS, and Bootstrap, to design and develop responsive, user-friendly, and visually appealing web applications. Each project demonstrates my ability to solve problems creatively, implement modern design principles, and deliver high-quality solutions. Feel free to explore them and see the results of my work!
                    </p>
                </div>
            </div>
            <div className="w-full">
                <div className="flex flex-col md:flex-row flex-wrap px-10 gap-12">
                    {config.projects.map((project, index) => (
                        <div
                            key={index}
                            className="relative flex flex-col bg-secondary p-5 rounded-lg shadow-lg w-full md:w-[30%]"
                        >
                            <img className="h-[200px] w-full object-cover rounded-md" src={project.image} alt={project.name} />
                            <div className="mt-5">
                                <h2 className="text-2xl font-bold mb-2">{project.name}</h2>
                                <p className="mb-3">{project.description}</p>
                                <p className="mb-5">
                                    <span className="font-semibold">Tools Used: </span>
                                    {project.tools.join(', ')}
                                </p>
                                <div className="flex justify-center">
                                    <a
                                        className="btn bg-primary text-white px-5 py-2 rounded hover:bg-secondary-light transition"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        href={project.link}
                                    >
                                        View Project
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
