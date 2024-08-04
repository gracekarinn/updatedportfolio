import About from "@/components/about";
import Bahasa from "@/components/bahasa";
import Contact from "@/components/contact";
import Education from "@/components/education";
import Project from "@/components/project";

export default function Home() {
  return (
    <div className="snap-y snap-mandatory h-screen overflow-y-scroll">
      <section className="snap-start min-h-screen flex flex-col justify-center px-4">
        <div className="relative z-10 w-full max-w-4xl mx-auto">
          <About />
        </div>
      </section>
      <section className="snap-start min-h-screen flex flex-col justify-center px-4 py-16 md:py-0">
        <div className="w-full max-w-4xl mx-auto">
          <Education />
        </div>
      </section>
      <section className="snap-start h-screen overflow-y-auto flex items-center justify-center px-4">
        <div className="w-full max-w-4xl mx-auto py-16 lg:py-20 lg:pb-32">
          <Project />
        </div>
      </section>
      <section className="snap-start min-h-screen flex flex-col justify-center px-4 py-16 md:py-0">
        <div className="w-full max-w-4xl mx-auto">
          <Bahasa />
        </div>
      </section>
      <section className="snap-start min-h-screen flex flex-col justify-center px-4 py-16 md:py-0">
        <div className="w-full max-w-4xl mx-auto">
          <Contact />
        </div>
      </section>
    </div>
  );
}
