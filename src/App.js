import { AboutPage } from "./pages/AboutPage";
import { ContactPage } from "./pages/ContactPage";
import { MainPage } from "./pages/MainPage";
import { ProjectsPage } from "./pages/ProjectsPage";


function App() {
  return (
    <div className="App">
      <MainPage/>
      <ProjectsPage/>
      <AboutPage/>
      <ContactPage/>
    </div>
  );
}

export default App;
