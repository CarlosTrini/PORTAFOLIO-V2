import { Code2, Wrench, Server, Layers } from "lucide-react";

type Skill = {
  name: string;
  level: number; // 0-100
  color: string; // tailwind text color class
};

type Category = {
  label: string;
  icon: React.ReactNode;
  iconColor: string;
  skills: Skill[];
};

const categories: Category[] = [
  {
    label: "Frontend",
    icon: <Code2 className="w-4 h-4" />,
    iconColor: "text-primary",
    skills: [
      { name: "React.js", level: 88, color: "text-cyan-400" },
      { name: "Astro", level: 88, color: "text-cyan-400" },
      { name: "TypeScript", level: 80, color: "text-blue-400" },
      { name: "JavaScript", level: 90, color: "text-yellow-400" },
      { name: "HTML5 & CSS3", level: 92, color: "text-orange-400" },
      { name: "SCSS / Sass", level: 82, color: "text-pink-400" },
      { name: "Tailwind CSS", level: 75, color: "text-cyan-300" },
    ],
  },
  {
    label: "Librerías & UI",
    icon: <Layers className="w-4 h-4" />,
    iconColor: "text-accent",
    skills: [
      { name: "Redux / Redux Thunk", level: 72, color: "text-purple-400" },
      { name: "React Router DOM", level: 85, color: "text-red-400" },
      { name: "Ant Design", level: 78, color: "text-blue-300" },
      { name: "SweetAlert2", level: 90, color: "text-amber-400" },
      { name: "Swiper.js", level: 80, color: "text-indigo-400" },
      { name: "Styled Components", level: 65, color: "text-pink-300" },
    ],
  },
  {
    label: "Backend & DB",
    icon: <Server className="w-4 h-4" />,
    iconColor: "text-emerald-400",
    skills: [
      // { name: "Node.js", level: 55, color: "text-emerald-400" },
      { name: "Express.js", level: 52, color: "text-green-400" },
      { name: "Next.js", level: 60, color: "text-dark-text-main" },
      { name: "MongoDB", level: 50, color: "text-emerald-500" },
      { name: "Firebase", level: 65, color: "text-amber-500" },
      { name: "JWT / Auth", level: 55, color: "text-rose-400" },
    ],
  },
  {
    label: "Herramientas",
    icon: <Wrench className="w-4 h-4" />,
    iconColor: "text-highlight",
    skills: [
      { name: "Git & GitHub", level: 85, color: "text-dark-text-main" },
      { name: "Vite", level: 80, color: "text-violet-400" },
      // { name: "Gulp", level: 65, color: "text-red-400" },
      { name: "VS Code", level: 92, color: "text-blue-400" },
      { name: "Postman (básico)", level: 72, color: "text-orange-400" },
      { name: "Figma (básico)", level: 40, color: "text-pink-400" },
    ],
  },
];

// const LevelLabel = ({ level }: { level: number }) => {
//   if (level >= 85) return <span className="text-emerald-400">Avanzado</span>;
//   if (level >= 65) return <span className="text-primary">Intermedio</span>;
//   return <span className="text-dark-text-muted">Básico</span>;
// };

const Skills = () => {
  return (
    <div className="w-full py-8">


      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mx-auto">
        {categories.map((cat) => (
          <div
            key={cat.label}
            className="rounded-2xl bg-dark-card border border-dark-border hover:border-primary/30 transition-colors duration-300 p-6 shadow-xl"
          >
            {/* Category header */}
            <div className="flex items-center gap-2 mb-5 pb-3 border-b border-dark-border">
              <span className={cat.iconColor}>{cat.icon}</span>
              <h4 className="text-sm font-bold text-dark-text-main tracking-wide uppercase">
                {cat.label}
              </h4>
            </div>

            {/* Skills list */}
            <ul className="space-y-3.5">
              {cat.skills.map((skill) => (
                <li key={skill.name}>
                  <div className="flex items-center justify-between mb-1">
                    <span className={`text-sm font-medium ${skill.color}`}>
                      {skill.name}
                    </span>
                    {/* <span className="text-xs">
                      <LevelLabel level={skill.level} />
                    </span> */}
                  </div>
                  {/* Progress bar */}
                  {/* <div className="h-1.5 w-full rounded-full bg-dark-surface overflow-hidden">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-primary to-accent transition-all duration-700"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div> */}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <p className="mt-6 text-center text-xs text-dark-text-dim italic">
        Aprendizaje continuo — siempre sumando nuevas tecnologías al stack.
      </p>
    </div>
  );
};

export default Skills;
