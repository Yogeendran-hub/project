import ResumeImg from '../assets/resume.jpg';

export default function Resume() {
    const config = {
        link: '/Yogeendran_S_Resume.pdf'
    };

    return (
        <section id="resume" className="flex flex-col md:flex-row bg-secondary px-5 py-10">
            {/* Image Section */}
            <div className="py-5 md:w-1/2 flex justify-center md:justify-end">
                <img className="w-[300px] md:w-[400px] object-cover" src={ResumeImg} alt="Resume Preview" />
            </div>

            {/* Text Section */}
            <div className="md:w-1/2 flex justify-center">
                <div className="flex flex-col justify-center text-white max-w-lg">
                    <h1 className="text-4xl border-b-4 border-primary mb-5 w-fit font-bold">Resume</h1>
                    <p className="pb-5 text-lg leading-relaxed">
                    I invite you to take a look at my resume, where you can find a detailed overview of my skills, professional experience, educational background, and qualifications. It provides insights into the projects I have worked on, the technologies I am proficient in, and the value I can bring to your team or organization. Exploring my resume will give you a comprehensive understanding of my expertise and accomplishments.
                    </p>
                    <div className="flex justify-start">
                        <a
                            className="btn bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary-light transition"
                            href={config.link}
                            download
                        >
                            Download Resume
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
