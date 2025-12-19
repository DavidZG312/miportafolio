
import { Mail, Phone, Linkedin, MapPin } from "lucide-react";

const contactInfo = [
  {
    icon: Phone,
    label: "Teléfono",
    value: "+57 310 5344657",
    href: "tel:+573105344657",
  },
  {
    icon: Mail,
    label: "Email",
    value: "davidzg312@gmail.com",
    href: "mailto:davidzg312@gmail.com",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "davidzabalagranados",
    href: "https://linkedin.com/in/davidzabalagranados",
  },
];

const ContactSection = () => {
  return (
    <section id="contacto" className="py-20 px-4">
      <div className="container max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            ¿Hablamos?
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Estoy disponible para nuevos proyectos y oportunidades. No dudes en contactarme.
          </p>
        </div>

        <div className="bg-card rounded-2xl p-8 shadow-card">
          <div className="space-y-4">
            {contactInfo.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="flex items-center gap-4 p-4 rounded-xl bg-accent/50 hover:bg-accent transition-colors duration-300 group"
              >
                <div className="p-3 rounded-lg bg-card shadow-soft group-hover:shadow-hover group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  <item.icon className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">{item.label}</p>
                  <p className="font-medium text-foreground">{item.value}</p>
                </div>
              </a>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-border">
            <div className="flex items-center justify-center gap-2 text-muted-foreground">
              <MapPin className="w-4 h-4" />
              <span>Colombia</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
