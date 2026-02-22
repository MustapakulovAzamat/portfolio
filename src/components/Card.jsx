import { useState } from 'react'
import { Text } from './Text'
import { Title } from './Title'

export const Card = ({proj}) => {
  const [show, setShow] = useState(false)

  return (
    <div key={proj.id} className='flex justify-center items-center gap-6 flex-wrap'>
      <div>
        <a href={proj.link}>
          <img src={proj.img} alt={proj.title} className='w-full max-w-[350px] rounded-2xl'/>
        </a>
      </div>
      <div>
        <Title>
          {proj.title}
        </Title>
        <Text
          className={`max-w-xl my-3 transition-all duration-500 overflow-hidden ${
            show ? "max-h-[300px]" : "max-h-[50px]"
          }`}
        >
          {proj.desc}
        </Text>

        <button onClick={() => setShow(!show)}
          className='underline mb-3'
        >
          {show ? 'Close' : 'More'}
        </button>
        
        <div className='flex'>
          {proj.icons.map(icon => (
            <div key={icon.id}>
              <img src={icon.icon} alt={icon.icon} className='max-w-[30px]'/>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
