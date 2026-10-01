import {
  User,
  GraduationCap,
  Clock,
  BookOpen,
  Code2,
  Server,
  Database,
  Terminal,
  Lightbulb,
  CheckCircle2,
  MapPin,
} from "lucide-react";

const Me = () => {
  return (
    <div className="w-full py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">

        {/* Bio Card */}
        <div className="relative overflow-hidden rounded-2xl bg-dark-card border border-dark-border hover:border-primary/40 transition-all duration-300 p-6 md:p-8 flex flex-col justify-between shadow-xl">
          <div className="absolute top-0 right-0 w-40 h-40 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

          <div>
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-dark-border">
              <div className="p-2.5 rounded-xl bg-primary/10 border border-primary/20 text-primary">
                <User className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-dark-text-main flex items-center gap-2">
                  <span>¡Qué hay!</span>
                  <span className="text-sm font-normal text-primary px-2.5 py-0.5 rounded-full bg-primary/10 border border-primary/20">
                    Sobre mí
                  </span>
                </h3>
                <p className="text-xs text-dark-text-muted mt-0.5">Perfil y trayectoria profesional</p>
              </div>
            </div>

            <ul className="space-y-4 text-dark-text-muted text-sm md:text-base leading-relaxed">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <span>
                  Me llamo <strong className="text-dark-text-main font-semibold">Carlos Trinidad</strong> — puedes llamarme <span className="text-accent font-medium">Trinidad</span>. Soy desarrollador Frontend con enfoque en código y experiencia de usuario.
                </span>
              </li>

              <li className="flex items-start gap-3">
                <GraduationCap className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span>
                  Egresado de <strong className="text-dark-text-main">Ingeniería en Sistemas Computacionales</strong> en el Instituto Tecnológico de Iztapalapa.
                </span>
              </li>

              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-highlight shrink-0 mt-0.5" />
                <span>
                  Con <strong className="text-highlight font-semibold">4 años de experiencia utilizando React.js</strong>, desarrollando Landingpage, sistemas CMS, HRM, FMS, migraciones de sitios estáticos a dinámicos .
                </span>
              </li>

              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <span>
                  Ubicado en <strong className="text-dark-text-main">Ciudad de México</strong> — abierto a oportunidades remotas o híbridas.
                </span>
              </li>
            </ul>
          </div>

          <div className="mt-8 pt-4 border-t border-dark-border flex flex-wrap justify-center gap-2">
            <span className="text-xs px-2.5 py-1 rounded-md bg-emerald-400/10 border border-emerald-400/30 text-emerald-400 font-medium">
              ✓ Disponible para trabajar
            </span>
            <span className="text-xs px-2.5 py-1 rounded-md bg-primary/10 border border-primary/20 text-primary">
              React 18+
            </span>
            <span className="text-xs px-2.5 py-1 rounded-md bg-accent/10 border border-accent/20 text-accent">
              TypeScript
            </span>
            <span className="text-xs px-2.5 py-1 rounded-md bg-primary/10 border border-primary/20 text-primary">
              Astro            </span>

            <span className="text-xs px-2.5 py-1 rounded-md bg-dark-surface border border-dark-border text-dark-text-muted">
              CDMX / Remoto / Hibrido
            </span>
          </div>
        </div>

        {/* Interests & Goals Card */}
        <div className="relative overflow-hidden rounded-2xl bg-dark-card border border-dark-border hover:border-accent/40 transition-all duration-300 p-6 md:p-8 flex flex-col justify-between shadow-xl">
          <div className="absolute top-0 right-0 w-40 h-40 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

          <div>
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-dark-border">
              <div className="p-2.5 rounded-xl bg-accent/10 border border-accent/20 text-accent">
                <Lightbulb className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-dark-text-main flex items-center gap-2">
                  <span>Lo que me mueve</span>
                  <span className="text-sm font-normal text-accent px-2.5 py-0.5 rounded-full bg-accent/10 border border-accent/20">
                    Goals &amp; Stack
                  </span>
                </h3>
                <p className="text-xs text-dark-text-muted mt-0.5">Motivaciones técnicas y áreas de crecimiento</p>
              </div>
            </div>

            <ul className="space-y-4 text-dark-text-muted text-sm md:text-base leading-relaxed">
              <li className="flex items-start gap-3">
                <Code2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <span>
                  Me muevo del lado del desarrollo Frontend con <strong className="text-dark-text-main font-semibold">JavaScript y React.js</strong>
                </span>
              </li>

              <li className="flex items-start gap-3">
                <Server className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span>
                  He trabajado con <strong className="text-dark-text-main">Node.js, Express y Next.js</strong> en proyectos MERN completos, lo que me da una visión end-to-end del desarrollo web.
                </span>
              </li>

              <li className="flex items-start gap-3">
                <Database className="w-5 h-5 text-highlight shrink-0 mt-0.5" />
                <span>
                  He integrado <strong className="text-dark-text-main">MongoDB, Firebase Auth y Firebase Storage</strong> en proyectos reales con autenticación, almacenamiento de archivos y datos en tiempo real.
                </span>
              </li>

              <li className="flex items-start gap-3">
                <Terminal className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <span>
                  Actualmente expandiendo mi stack hacia <strong className="text-emerald-400">Python</strong>y profundizando en patrones avanzados de React y Astro.
                </span>
              </li>
            </ul>
          </div>

          <div className="mt-8 pt-4 border-t border-dark-border flex flex-wrap gap-2">
            <span className="text-xs px-2.5 py-1 rounded-md bg-dark-surface border border-dark-border text-dark-text-muted">
              Node.js
            </span>
            <span className="text-xs px-2.5 py-1 rounded-md bg-dark-surface border border-dark-border text-dark-text-muted">
              Next.js
            </span>
            <span className="text-xs px-2.5 py-1 rounded-md bg-dark-surface border border-dark-border text-dark-text-muted">
              MongoDB
            </span>
            <span className="text-xs px-2.5 py-1 rounded-md bg-emerald-400/10 border border-emerald-400/20 text-emerald-400">
              Python
            </span>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Me;
