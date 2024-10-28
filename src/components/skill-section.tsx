import SkillOutline from "@/components/skill-outline";

import { languages, technologies } from "@/lib/data";

export default function SkillSection() {
  return (
    <div className="space-y-1 px-4 md:px-0">
      <p className="text-xs text-muted-foreground mt-4 mb-4">
        Programming Languages
      </p>
      <div className="space-y-2 mb-4">
        {languages.map((language) => (
          <SkillOutline
            key={language.text}
            Icon={language.icon}
            text={language.text}
          />
        ))}
      </div>
      <div className="pt-4">
        <p className="text-xs text-muted-foreground mb-4">Technologies</p>
        <div className="space-y-2">
          {technologies.map((technology) => (
            <SkillOutline
              key={technology.text}
              Icon={technology.icon}
              text={technology.text}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
