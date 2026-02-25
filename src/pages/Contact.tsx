import { Mail, Phone, Linkedin, ExternalLink } from "lucide-react";

const contacts = [
  {
    icon: Mail,
    label: "Email",
    value: "awale3671@gmail.com",
    href: "mailto:awale3671@gmail.com",
  },
  {
    icon: Phone,
    label: "WhatsApp",
    value: "+252 616 204 535",
    href: "https://wa.me/252616204535",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "Salah Ali",
    href: "https://www.linkedin.com/in/salah-ali-607a39236",
  },
];

const Contact = () => {
  return (
    <div className="min-h-screen py-24">
      <div className="container mx-auto px-6">
        <div className="mb-12 max-w-2xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 font-heading text-xs text-primary">
            <Mail className="h-3.5 w-3.5" />
            Get in Touch
          </div>
          <h1 className="mb-4 font-heading text-3xl font-bold text-foreground md:text-4xl">
            Contact <span className="text-gradient">Me</span>
          </h1>
          <p className="text-muted-foreground">
            I'm always open to discussing new projects, opportunities, or
            collaborations.
          </p>
        </div>

        <div className="grid gap-4 md:max-w-lg">
          {contacts.map((c) => (
            <a
              key={c.label}
              href={c.href}
              target="_blank"
              rel="noopener noreferrer"
              className="card-gradient group flex items-center gap-4 rounded-xl border border-border p-5 transition-all hover:glow-border"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
                <c.icon className="h-5 w-5" />
              </span>
              <div className="flex-1">
                <p className="font-heading text-xs uppercase tracking-wider text-muted-foreground">
                  {c.label}
                </p>
                <p className="text-sm font-medium text-foreground">{c.value}</p>
              </div>
              <ExternalLink className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-primary" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contact;
