import { IoArrowDownSharp } from "react-icons/io5";
import { Button } from "../components/Button";
import { Text } from "../components/Text";
import { Title } from "../components/Title";
import { ALink } from "../components/ALink";

export const MainPage = () => {
  return (
    <div className='
      bg-[rgb(26,31,35)] w-full min-h-screen
      flex items-center justify-center
      py-12
    '>
      <div className="container text-white">
        <div className="main-layout">
          <div className="flex flex-col gap-3">
            <div className="w-[80px] h-[8px] bg-white rounded-3xl mb-6 mx-auto sm:mx-0"></div>
            <Title className="lg:text-5xl md:text-[29px] text-3xl">I'm Azamat,<br/> a Frontend Developer</Title>
            <div className="text-gray-500">
              <Text>HTML · CSS · JS</Text>
              <Text>React · Sass · Tailwind</Text>
              <Text>Next.js</Text>
            </div>
            <a href="#contact" className="mx-auto sm:mx-0 contents">
              <Button>
                {<IoArrowDownSharp/>}
              </Button>
            </a>
          </div>

          <div className="flex flex-col gap-3">
            <div>
              <Title>About me</Title>
              <Text className="max-w-xs text-gray-500 lg:text-xl md:text-[14px] my-2">
                I am stress-resistant, I learn fast and I am not afraid of new things. 
                I strive to get better every day.
              </Text>
              <ALink link={"#about"}>Learn more</ALink>
            </div>
            <div>
              <Title>My work</Title>
              <Text className="max-w-xs text-gray-500 lg:text-xl md:text-[14px] my-2">
                I handle the development of web interfaces on a regular basis. 
                I also make it a point to incorporate fresh technologies all the time. 
                This helps boost the overall quality of the projects. 
                It also speeds things up quite a bit.
              </Text>
              <ALink link={"#projects"}>Learn more</ALink>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
