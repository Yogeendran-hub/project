import AboutImg from '../assets/about.png';

export default function About () {
    const config  = {
        line1: 'I have utilized HTML, CSS, JavaScript, React.js, Tailwind CSS, and Bootstrap to design and develop visually appealing and highly functional websites that provide a seamless user experience.',
        line2: 'I am proficient in front-end development, with expertise in tools and frameworks such as React.js, Tailwind CSS, and Bootstrap, enabling me to create responsive, dynamic, and interactive web applications.',
        line3: 'On the backend, I have hands-on experience with Node.js, which allows me to build scalable and efficient server-side applications to complement my front-end projects.'
    }

    return <section className='flex flex-col md:flex-row bg-secondary px-5' id='about'>
        <div className='py-5 md:w-1/2'>
            <img src={AboutImg} />
        </div>
        <div className='md:w-1/2 flex justify-center'>
            <div className='flex flex-col justify-center text-white'>
                <h1 className='text-4xl border-b-4 border-primary mb-5 w-[170px] font-bold'>About Me</h1>
                <p className='pb-5'>{config.line1}</p>
                <p className='pb-5'>{config.line2}</p>
                <p className='pb-5'>{config.line3}</p>
            </div>
        </div>
    </section>
}