import React from 'react'
import { FaBook } from "react-icons/fa";
import { Text } from '../components/Text';
import { Title } from '../components/Title';

export const AboutPage = () => {
  return (
    <div id='about' className='
      min-h-[50vh]
      flex flex-wrap justify-center items-center
      bg-[rgb(26,31,35)]
      text-white
      py-12
    '>
      <div className='container'>
        <div className='flex gap-5 max-w-[50rem]'>
          <div className='min-w-1 bg-red-600'></div>
          <div>
            <Title className='mb-8'>About Me</Title>
            <Text>
              I am Azamat, 18 years old, from Bishkek. Student of the Polytechnic named after Razzakova in the direction of Software Engineering (English program). I am stress-resistant, adapt quickly, and constantly develop as a specialist and personality.
            </Text>
          </div>
        </div>

        <div className='flex gap-5 mt-20'>
          <div>
            <Title className='flex items-center gap-4 mb-5'>
              <FaBook className='text-red-600'/>Styding
            </Title>
            <ul className='list-disc ml-20 flex flex-col gap-2'>
              <li>2023-2024: Geeks Course</li>
              <li>2024–2025: Completed High School</li>
              <li>2025–2026: Studying at Polytechnic named after Razzakov, Software Engineering (English program)</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
