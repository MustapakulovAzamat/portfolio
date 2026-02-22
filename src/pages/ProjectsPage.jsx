import projects from '../data/projects.json'
import { Card } from "../components/Card"

export const ProjectsPage = () => {

  return (
    <div id="projects" className='w-full py-12'>
      <div className="container flex flex-col gap-10">
        {projects.map(proj => (
          <Card key={proj.id} proj={proj}/>
        ))}
      </div>
    </div>
  )
}
