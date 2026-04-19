import React from "react";
import {
  FiArrowRight,
  FiGithub,
  FiLayers,
  FiShield,
  FiZap,
  FiTwitter,
  FiLinkedin,
} from "react-icons/fi";
import Image from "next/image";

const Homepage = () => {
  return (
    <div className="min-h-screen bg-base-100 font-sans overflow-hidden">
      <section className="relative pt-20 pb-32 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[60%] bg-primary/10 blur-[120px] rounded-full"></div>
          <div className="absolute bottom-0 right-[-5%] w-[30%] h-[50%] bg-secondary/10 blur-[100px] rounded-full"></div>
        </div>

        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-base-200 border border-base-content/5 mb-6">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
                </span>
                <span className="text-sm font-medium">
                  Next.js 14 & Tailwind v4 Powered
                </span>
              </div>
              <h1 className="text-6xl md:text-7xl font-bold leading-[1.1] mb-8">
                Digital Solutions <br />
                <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-secondary">
                  Redefined.
                </span>
              </h1>
              <p className="text-xl text-base-content/70 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                Experience the fusion of high-performance code and breathtaking
                aesthetics. We build products that don&apos;t just work—they
                inspire.
              </p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                <button className="btn btn-primary btn-lg rounded-2xl group px-8">
                  Get Started
                  <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="btn btn-outline btn-lg rounded-2xl px-8">
                  Watch Demo
                </button>
              </div>
            </div>

            <div className="flex-1 relative">
              <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-base-200">
                <Image
                  src="https://picsum.photos/seed/tech-hero/800/600"
                  alt="Dashboard Preview"
                  width={800}
                  height={600}
                  className="object-cover"
                />
              </div>

              <div className="absolute -bottom-6 -left-6 bg-base-100 p-6 rounded-3xl shadow-xl border border-base-content/5 hidden md:block animate-bounce-slow">
                <div className="flex items-center gap-4">
                  <div className="bg-success/20 p-3 rounded-2xl text-success">
                    <FiZap size={24} />
                  </div>
                  <div>
                    <p className="text-xs text-base-content/50 uppercase font-bold tracking-tighter">
                      Performance
                    </p>
                    <p className="text-xl font-bold">99.9% Score</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-base-200/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold mb-4">Why Choose Our Platform</h2>
            <div className="w-24 h-1.5 bg-primary mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group p-10 bg-base-100 rounded-4xl border border-base-content/5 hover:border-primary/30 transition-all duration-300 hover:shadow-2xl">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-8 group-hover:bg-primary group-hover:text-white transition-colors">
                <FiLayers size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Modular Design</h3>
              <p className="text-base-content/60 leading-relaxed">
                Our architecture is built on independent modules, ensuring
                scalability and easy maintenance for your projects.
              </p>
            </div>

            <div className="group p-10 bg-base-100 rounded-4xl border border-base-content/5 hover:border-secondary/30 transition-all duration-300 hover:shadow-2xl">
              <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center text-secondary mb-8 group-hover:bg-secondary group-hover:text-white transition-colors">
                <FiZap size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Lightning Fast</h3>
              <p className="text-base-content/60 leading-relaxed">
                Optimized with Next.js App Router for near-instant load times
                and seamless transitions.
              </p>
            </div>

            <div className="group p-10 bg-base-100 rounded-4xl border border-base-content/5 hover:border-accent/30 transition-all duration-300 hover:shadow-2xl">
              <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center text-accent mb-8 group-hover:bg-accent group-hover:text-white transition-colors">
                <FiShield size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Enterprise Security</h3>
              <p className="text-base-content/60 leading-relaxed">
                We prioritize your data. Built-in protection against common
                vulnerabilities and secure API handling.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 container mx-auto px-6">
        <div className="bg-neutral text-neutral-content rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 italic">
              Ready to transform your digital presence?
            </h2>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <button className="btn btn-primary btn-lg rounded-2xl px-12">
                Start Building Now
              </button>
              <div className="flex items-center justify-center gap-6 text-2xl">
                <a href="#" className="hover:text-primary transition-colors">
                  <FiGithub />
                </a>
                <a href="#" className="hover:text-primary transition-colors">
                  <FiTwitter />
                </a>
                <a href="#" className="hover:text-primary transition-colors">
                  <FiLinkedin />
                </a>
              </div>
            </div>
          </div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-20 -mt-20 blur-3xl"></div>
        </div>
      </section>

      <footer className="py-12 border-t border-base-content/5 text-center">
        <p className="text-base-content/50">
          © 2026 Mehrab Hosen. Built with ❤️ & Next.js
        </p>
      </footer>
    </div>
  );
};

export default Homepage;
