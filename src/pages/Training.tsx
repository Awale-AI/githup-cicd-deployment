import { GraduationCap } from "lucide-react";

const courses = [
  {
    name: "DevOps AWS",
    focus: "Cloud architecture, scalability, and AWS managed services.",
  },
  {
    name: "DevOps Bootcamp",
    focus: "Advanced Linux System Administration & Automation.",
  },
  {
    name: "CompTIA Security+",
    focus: "Network security, threats, and operational security.",
  },
  {
    name: "Diploma in Cybersecurity",
    focus: "Risk management and defensive security strategies.",
  },
  {
    name: "Python Programming",
    focus: "Scripting, automation, and core software fundamentals.",
  },
];

const Training = () => {
  return (
    <div className="min-h-screen py-24">
      <div className="container mx-auto px-6">
        <div className="mb-12 max-w-2xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 font-heading text-xs text-primary">
            <GraduationCap className="h-3.5 w-3.5" />
            Continuous Learning
          </div>
          <h1 className="mb-4 font-heading text-3xl font-bold text-foreground md:text-4xl">
            Training &amp; <span className="text-gradient">Certifications</span>
          </h1>
          <p className="text-muted-foreground">
            Formal and specialized paths that validate technical expertise.
          </p>
        </div>

        <div className="space-y-4">
          {courses.map((course, i) => (
            <div
              key={course.name}
              className="card-gradient group flex flex-col gap-4 rounded-xl border border-border p-6 transition-all hover:glow-border md:flex-row md:items-center md:justify-between"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="flex items-center gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 font-heading text-sm font-bold text-primary">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-heading text-lg font-semibold text-foreground">
                  {course.name}
                </h3>
              </div>
              <p className="text-sm text-muted-foreground md:max-w-md md:text-right">
                {course.focus}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Training;
