import { Badge } from "@/components/ui/badge";
import { workExperiences } from "@/constants/work/work-experience";
import Image from "next/image";

export default function LandingWorkSection() {
  return (
    <>
      <section id="work">
        <div className="mx-auto w-full max-w-2xl space-y-8">
          <div className="w-full">
            <div className="mb-4">
              <span className="md:text-xl font-bold">Work Experience</span>
            </div>
            <div className="flex flex-col space-y-8">
              {workExperiences.map((experience, index) => (
                <div key={index} className="w-full flex flex-col gap-4">
                  <div className="flex gap-4 justify-between">
                    <div className="flex gap-4">
                      <div className="flex flex-col">
                        <Image
                          src={experience.imageUrl}
                          alt={experience.company}
                          width={50}
                          height={50}
                          className="rounded-full border"
                        />
                      </div>
                      <div className="flex flex-col">
                        <div className="flex gap-4 mb-2">
                          <div>
                            <h1 className="md:text-base text-sm font-bold">
                              {experience.role}
                            </h1>
                            <p className="md:text-base text-sm">
                              {experience.company}
                            </p>
                          </div>
                          <div className="gap-2 md:flex hidden">
                            {experience.types.map((type, typeIndex) => (
                              <Badge className="w-fit h-fit" key={typeIndex}>
                                {type}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <p className="text-muted-foreground text-sm">
                        {experience.startDate} - {experience.endDate}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
