import { ThemeProvider } from './components/theme/theme-provider';
import { ActiveSectionProvider } from './components/active-section';
import { Header } from './components/section/header';
import { Hero } from './components/section/hero';
import { About } from './components/section/about';
import { Skill } from './components/section/skill';
import { WorkExperience } from './components/section/work-experience';
import { Education } from './components/section/education';
import { Contact } from './components/section/contact';
import { Footer } from './components/section/footer';
import { SectionDivider } from './components/section/section-divider';

function App() {
  return (
    <>
      <ThemeProvider>
        <ActiveSectionProvider>
          <div className='container px-4 mx-auto flex flex-col items-center'>
            <Header />
            <Hero />
            <SectionDivider />
            <About />
            <Skill />
            <WorkExperience />
            {/* <Projects /> */}
            <Education />
            <Contact />
            <Footer />
          </div>
        </ActiveSectionProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
