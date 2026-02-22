import React, { useRef } from 'react'
import emailjs from 'emailjs-com'
import { Title } from '../components/Title';
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaPhoneAlt } from "react-icons/fa";
import { Input } from '../components/Input';

export const ContactPage = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault()
    emailjs.sendForm(
      process.env.REACT_APP_SERVICE_ID,
      process.env.REACT_APP_TEMPLATE_ID,
      form.current,
      process.env.REACT_APP_PUBLIC_KEY,
    )
    .then(() => {
      alert("The message was sent successfully")
      form.current.reset()
    })
    .catch(e => {
      console.log(e);
    })
  }
  return (
    <div id='contact' className='
      w-full py-12
      flex flex-col justify-center items-center 
    '>
      <Title className='text-center'>Contact Me</Title>
      <div>
        <form ref={form} onSubmit={sendEmail} className='flex flex-col justify-center items-center gap-4'>
          <Input type={'text'} name={'user_name'} placeholder={"Your name"}/>
          <Input type={'email'} name={'user_email'} placeholder={"Your email"}/>
          <textarea name="message" placeholder='Text' className='
            p-3 w-full max-w-[400px] border-2 border-[rgb(26,31,35)] rounded-2xl
          '/>
          <button type='submit' className='
          bg-[rgb(26,31,35)] rounded-xl w-full max-w-[200px] h-12 text-white'
          >Отправить</button>

          <div className='flex gap-3 justify-center items-center'>
            <a href="https://github.com/MustapakulovAzamat">
              <FaGithub size={'25px'}/>
            </a>
            <a href="https://www.instagram.com/qwzmask/?next=%2F&hl=ru">
              <FaInstagram size={'25px'}/>
            </a>
            <a href="mailto:azamustapakylov1@gmail.com">
              <SiGmail size={'25px'}/>
            </a>
            <a href="tel:+996701555022">
              <FaPhoneAlt size={'22px'}/>
            </a>
          </div>
        </form>
      </div>
    </div>
  )
}
