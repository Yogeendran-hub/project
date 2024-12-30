
export default function Contact () {

    const config = {
        email : 'yogeendran7@gmail.com – You can email me anytime, and I will respond as promptly as possible.',
        phone: '+91 9952212818 - Don’t hesitate to give me a call or send a message; I’m happy to connect.'
    }

    return <section id='contact' className='flex flex-col bg-primary px-5 py-32 text-white'>
        <div className='flex flex-col items-center'>
           
            <h1 className='text-4xl border-b-4  border-secondary mb-5 w-[140px] font-bold'>Contact</h1>
            <p className='pb-5'>If you would like to have a more detailed discussion about my work, skills, or potential collaborations, please don't hesitate to get in touch with me. I am always open to exploring new opportunities, sharing ideas, and engaging in meaningful conversations to build connections and contribute to impactful projects.</p>
            <p className='py-2'><span className='font-bold'>Email :</span> {config.email}</p>
            <p className='py-2'><span className='font-bold'>Phone :</span> {config.phone}</p>
        </div>
    </section>
}