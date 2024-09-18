import { Badge } from "@/components/ui/badge";
import { skillList } from "@/constants/skill/skill-list";

export default function LandingSkillSection() {
  return (
    <>
      <section id="skill">
        <div className="mx-auto w-full max-w-2xl space-y-8">
          <div className="w-full">
            <div className="mb-4">
              <span className="md:text-xl font-bold">Skills</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {skillList.map((skill, index) => (
                <Badge key={index}>{skill.name}</Badge>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
