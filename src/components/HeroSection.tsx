"use client"
import { Mail, Linkedin, Github, Phone } from "lucide-react";
import { Button } from "./ui/button";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="min-h-[85vh] flex items-center justify-center py-16 px-4">
      <div className="container max-w-4xl">
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
          {/* Avatar */}
          <div className="relative">
            <div className="w-40 h-40 md:w-52 md:h-52 rounded-full bg-gradient-to-br from-primary/20 to-accent overflow-hidden shadow-card">
              <div className="w-full h-full bg-muted flex items-center justify-center text-6xl font-display text-primary">
                <Image
                  alt="Foto"
                  src={'/img/FOTO CARA.jpg'}
                  width={200}
                  height={200}
                  className="rounded-full"
                />
              </div>
            </div>
            <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-primary rounded-full flex items-center justify-center shadow-soft">
              <span className="text-primary-foreground text-lg">👋</span>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 text-center md:text-left">
            <p className="text-primary font-medium mb-2 animate-fade-in-up">¡Hola! Soy</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-4 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              David Zabala
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              Desarrollador Web & Móvil
            </p>
            <p className="text-muted-foreground max-w-lg mb-8 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              Especializado en crear experiencias digitales modernas con React, Next.js, Node.js y React Native.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <Button variant="hero" size="lg" asChild>
                <a href="#contacto">
                  <Mail className="w-5 h-5 mr-2" />
                  Contactar
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="#proyectos">Ver proyectos</a>
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-3 mt-8 justify-center md:justify-start animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
              <a href="https://www.linkedin.com/in/davidzabalagranados/" target="_blank" rel="noopener noreferrer" className="p-3 rounded-lg bg-card shadow-soft hover:shadow-hover hover:-translate-y-1 transition-all duration-300">
                <Linkedin className="w-5 h-5 text-muted-foreground hover:text-primary transition-colors" />
              </a>
              <a href="https://github.com/DavidZG312" target="_blank" rel="noopener noreferrer" className="p-3 rounded-lg bg-card shadow-soft hover:shadow-hover hover:-translate-y-1 transition-all duration-300">
                <Github className="w-5 h-5 text-muted-foreground hover:text-primary transition-colors" />
              </a>
              <a href="mailto:davidzg312@gmail.com" className="p-3 rounded-lg bg-card shadow-soft hover:shadow-hover hover:-translate-y-1 transition-all duration-300">
                <Mail className="w-5 h-5 text-muted-foreground hover:text-primary transition-colors" />
              </a>
              <a href="tel:+573105344657" className="p-3 rounded-lg bg-card shadow-soft hover:shadow-hover hover:-translate-y-1 transition-all duration-300">
                <Phone className="w-5 h-5 text-muted-foreground hover:text-primary transition-colors" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
