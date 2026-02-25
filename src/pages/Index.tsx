import { Cloud, Shield, Code, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const skills = [
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    items: ["AWS", "Linux Sysadmin", "CI/CD"],
  },
  {
    icon: Shield,
    title: "Security",
    items: ["Security Assessments", "Cyber Defense"],
  },
  {
    icon: Code,
    title: "Development",
    items: ["Python", "Software Integration"],
  },
];

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="hero-gradient flex min-h-[85vh] items-center">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 font-heading text-xs text-primary">
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-terminal-blink" />
              Available for opportunities
            </div>

            <h1 className="mb-6 font-heading text-4xl font-bold leading-tight text-foreground md:text-6xl">
              Software Integrator
              <br />
              <span className="text-gradient">&amp; DevOps Engineer</span>
            </h1>

            <p className="mb-8 max-w-xl text-lg leading-relaxed text-muted-foreground">
              Dedicated to bridging the gap between clean code and robust
              infrastructure. With years in IT Support and Data Center
              Management, now focused on Software Engineering and automated
              deployments.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 font-heading text-sm font-semibold text-primary-foreground transition-all hover:shadow-lg hover:shadow-primary/25"
              >
                Get in Touch
                <ChevronRight className="h-4 w-4" />
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 rounded-lg border border-border bg-secondary px-6 py-3 font-heading text-sm font-medium text-secondary-foreground transition-colors hover:bg-muted"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="border-t border-border py-24">
        <div className="container mx-auto px-6">
          <h2 className="mb-2 font-heading text-xs uppercase tracking-widest text-primary">
            Core Expertise
          </h2>
          <h3 className="mb-12 font-heading text-2xl font-bold text-foreground md:text-3xl">
            Top Skills
          </h3>

          <div className="grid gap-6 md:grid-cols-3">
            {skills.map((skill) => (
              <div
                key={skill.title}
                className="group card-gradient rounded-xl border border-border p-6 transition-all hover:glow-border"
              >
                <skill.icon className="mb-4 h-8 w-8 text-primary" />
                <h4 className="mb-3 font-heading text-lg font-semibold text-foreground">
                  {skill.title}
                </h4>
                <ul className="space-y-2">
                  {skill.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2 text-sm text-muted-foreground"
                    >
                      <span className="h-1 w-1 rounded-full bg-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
