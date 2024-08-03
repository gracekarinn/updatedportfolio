import About from "@/components/about";
import Bahasa from "@/components/bahasa";
import Contact from "@/components/contact";
import Education from "@/components/education";
import Project from "@/components/project";

export default function Home() {
  return (
    <div className="snap-y snap-mandatory h-screen overflow-y-scroll">
      <section className="snap-start min-h-screen flex flex-col justify-center px-4 py-16 md:py-0">
        <div className="relative z-10 w-full max-w-4xl mx-auto mt-10">
          <About />
        </div>
      </section>
      <section className="snap-start min-h-screen flex flex-col justify-center px-4 py-16 md:py-0">
        <div className="w-full max-w-4xl mx-auto">
          <Education />
        </div>
      </section>
      <section className="snap-start min-h-screen flex flex-col justify-center px-4 py-16 md:py-0">
        <div className="w-full max-w-4xl mx-auto">
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
