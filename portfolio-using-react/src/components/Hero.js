import HeroImg from '../assets/heroimg.png';
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { AiOutlineFacebook, AiOutlineLinkedin } from "react-icons/ai";
import './Hero.css';

export default function Hero() {
    const config = {
        subtitle: 'I am a Frontend Developer and Designer',
        social: {
            x: 'https://twitter.com/',
            facebook: 'https://facebook.com',
            linkedin: 'https://in.linkedin.com',
            github: 'https://github.com'
        }
    };

    return (
        <section className="flex flex-col md:flex-row px-5 py-32 bg-primary justify-center items-center">
            {/* Text Section */}
            <div className="md:w-1/2 flex flex-col text-center md:text-left">
                <h1 className="text-white text-6xl font-hero-font">
                    Hi, <br /> I'm <span className="text-black">'S</span> Yogeendran'
                    <p className="text-2xl mt-2">{config.subtitle}</p>
                </h1>
                <div className="flex justify-center md:justify-start py-10 space-x-5">
                    <a
                        href={config.social.x}
                        className="flex items-center justify-center w-14 h-14 border-2 border-yellow-500 text-yellow-500 hover:text-white hover:bg-yellow-500 transition rounded-sm"
                    >
                        <FaXTwitter size={24} />
                    </a>
                    <a
                        href={config.social.facebook}
                        className="flex items-center justify-center w-14 h-14 border-2 border-yellow-500 text-yellow-500 hover:text-white hover:bg-yellow-500 transition rounded-sm"
                    >
                        <AiOutlineFacebook size={24} />
                    </a>
                    <a
                        href={config.social.linkedin}
                        className="flex items-center justify-center w-14 h-14 border-2 border-yellow-500 text-yellow-500 hover:text-white hover:bg-yellow-500 transition rounded-sm"
                    >
                        <AiOutlineLinkedin size={24} />
                    </a>
                    <a
                        href={config.social.github}
                        className="flex items-center justify-center w-14 h-14 border-2 border-yellow-500 text-yellow-500 hover:text-white hover:bg-yellow-500 transition rounded-sm"
                    >
                        <FaGithub size={24} />
                    </a>
                </div>
            </div>

            {/* Image Section */}
            <img className="md:w-1/3 w-full max-w-[300px] heroimage" src={HeroImg} alt="Hero" />
        </section>
    );
}
