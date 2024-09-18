import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardTitle } from "@/components/ui/card";
import { projects } from "@/constants/projects/project-lis";
import { Sparkle } from "lucide-react";
import Image from "next/image";

export default function LandingProjectSection() {
  return (
    <>
      <section id="project">
        <div className="mx-auto w-full max-w-2xl space-y-8">
          <div className="w-full">
            <div className="flex justify-center flex-col items-center mb-4 text-center space-y-4 md:mb-8 mb-4">
              <div className="inline-flex h-fit animate-background-shine items-center justify-center gap-x-2 rounded-full border dark:bg-[linear-gradient(110deg,#f4f4f5,45%,#d4d4d8,55%,#f4f4f5)] bg-[length:200%_100%] px-3 py-1.5 text-xs font-medium dark:text-black text-white bg-[linear-gradient(110deg,#09090b,45%,#4D4B4B,55%,#09090b)]">
                <Sparkle className="h-3 w-3" />
                My Project
              </div>
              <div className="space-y-2">
                <span className="md:text-4xl text-2xl font-bold mt-4">
                  Highlighted Projects
                </span>
                <p className="md:text-base text-sm">
                  I have worked on various projects, from dummy projects to real
                  projects.
                </p>
              </div>
            </div>
            <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
              {projects.map((project) => (
                <Card key={project.id}>
                  <CardTitle>
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={1500}
                      height={902}
                      className="w-full rounded-t-xl"
                    />
                  </CardTitle>
                  <CardContent className="px-3 py-2">
                    <div className="space-y-4">
                      <h1 className="font-bold">{project.title}</h1>
                      <p className="text-muted-foreground text-sm">
                        {project.description}
                      </p>
                    </div>
                  </CardContent>
                  <CardFooter className="px-3 pb-4 pt-2">
                    <div className="flex flex-wrap gap-2">
                      {project.techs.map((tech, index) => (
                        <Badge key={index} variant={"secondary"}>
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
