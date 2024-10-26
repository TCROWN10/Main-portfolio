import React from 'react'
import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { useRef } from 'react';

const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    console.log("Name", name);
    console.log("Email", email);
    console.log("Message", message);

    const form = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();

        try {
            if(name === "" || email === "" || message === ""){
                console.log("All fields are required")
            }
            else {
                emailjs
                .sendForm('service_54nxus9', 'template_mkfcwsk', form.current, {
                  publicKey: 'yPzO_M2YHzL6zYVS1',
                })
                .then(
                  () => {
                    alert('Message sent successfully!');
                    setName("");  // Clear the form fields after success
                    setEmail("");
                    setMessage("");
                  },
                  (error) => {
                    alert('Failed to send the message. Please try again later.');
                    console.log('FAILED...', error.text);
                  },
                );
            }
        } catch (error) {
            alert("An error occurred. Please try again.");
            console.log(error)
        }
        
        }
    return(
        <section className='py-16 lg:section' id="contact">
            <div className='contact mx-auto'>
                <div className='flex flex-col lg:flex-row'>
                    {/* text */}
                <div className='flex-1 flex justify-start items-center'>
                    <div>
                        <h4 className='text-xl uppercase text-blue font-medium mb-2 tracking-wide'>
                            Get in touch 
                        </h4>
                        <h2 className='text-[40px] lg:text-[90px] leading-none mb-12 mr-9'>
                            Let's work <br/> together{' '}
                        </h2>
                    </div>
                </div>
                {/* form */}
                <form ref={form} className='flex-1 border rounded-r-2xl flex flex-col gap-y-6 pb-24 p-6 w-[100%]' onClick={handleSubmit}>
                    <input
                    type="text" 
                    placeholder='your name'
                    name='name'
                    className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-blue transition-all'
                    onChange={(e)=>setName(e.target.value)}
                    />
                    <input
                    type="text"
                    placeholder="Your email"
                    name='email'
                    className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-blue transition-all"
                    onChange={(e)=>setEmail(e.target.value)}
                    />
                <textarea
                    placeholder="Your message"
                    name='message'
                    className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-blue transition-all resize-none mb-12"
                    onChange={(e)=>setMessage(e.target.value)}
                ></textarea>
                <button
                    className="btn btn-lg"
                    type='submit'
                >
                    Send message
                </button>
                </form>
                </div>
            </div>
        </section>
    )
}


export default Contact