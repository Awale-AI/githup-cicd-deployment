import { Server, Layers, ShieldCheck, User } from "lucide-react";

const ecosystem = [
  {
    icon: Layers,
    title: "Integration",
    desc: "Merging complex software modules into a unified, functional system.",
  },
  {
    icon: Server,
    title: "Infrastructure",
    desc: "Managing physical and virtual servers with a focus on uptime.",
  },
  {
    icon: ShieldCheck,
    title: "Security",
    desc: "Conducting security assessments to ensure code and servers are hardened against threats.",
  },
];

const About = () => {
  return (
    <div className="min-h-screen py-24">
      <div className="container mx-auto px-6">
        <div className="mb-16 max-w-2xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 font-heading text-xs text-primary">
            <User className="h-3.5 w-3.5" />
            Professional Story
          </div>
          <h1 className="mb-4 font-heading text-3xl font-bold text-foreground md:text-4xl">
            About <span className="text-gradient">Me</span>
          </h1>
        </div>

        <div className="mb-16 grid gap-12 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <h2 className="mb-4 font-heading text-xl font-semibold text-foreground">
              Software Integrator &amp; Engineer
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I currently focus on the lifecycle of software delivery — from
                Software Deployment and Testing to ensuring seamless Data Center
                and Server Management.
              </p>
              <p>
                My background in IT Support gives me a unique
                "boots-on-the-ground" perspective on troubleshooting, while my
                engineering skills allow me to automate those solutions.
              </p>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="card-gradient rounded-xl border border-border p-6">
              <h3 className="mb-4 font-heading text-sm uppercase tracking-widest text-primary">
                Current Focus
              </h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  Software Deployment & Testing
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  Data Center & Server Management
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  Automation & CI/CD Pipelines
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Technical Ecosystem */}
        <div>
          <h2 className="mb-2 font-heading text-xs uppercase tracking-widest text-primary">
            Technical Ecosystem
          </h2>
          <h3 className="mb-8 font-heading text-2xl font-bold text-foreground">
            What I Bring
          </h3>

          <div className="grid gap-6 md:grid-cols-3">
            {ecosystem.map((item) => (
              <div
                key={item.title}
                className="card-gradient rounded-xl border border-border p-6 transition-all hover:glow-border"
              >
                <item.icon className="mb-4 h-7 w-7 text-primary" />
                <h4 className="mb-2 font-heading text-base font-semibold text-foreground">
                  {item.title}
                </h4>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
