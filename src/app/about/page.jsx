import React from "react";
import Image from "next/image";

const AboutPage = () => {
  const stats = [
    { id: 1, name: "Products Sold", value: "10K+" },
    { id: 2, name: "Happy Customers", value: "5K+" },
    { id: 3, name: "Team Members", value: "50+" },
    { id: 4, name: "Years of Service", value: "7+" },
  ];

  return (
    <div className="min-h-screen bg-base-100 font-sans">
      <div className="hero min-h-[50vh] bg-base-200 rounded-b-[40px] shadow-sm">
        <div className="hero-content text-center py-20">
          <div className="max-w-3xl">
            <span className="text-sm font-semibold text-primary tracking-widest uppercase mb-2 block">
              Our Story & Passion
            </span>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
              Crafting Experiences,
              <br /> Not Just Products.
            </h1>
            <p className="text-lg text-base-content/80 mb-10 max-w-2xl mx-auto">
              We bridge the gap between imagination and reality, delivering
              innovative solutions that inspire and elevate. Join us on our
              journey to redefine excellence.
            </p>
            <div className="flex gap-4 justify-center">
              <button className="btn btn-primary btn-lg rounded-full">
                Our Products
              </button>
              <button className="btn btn-outline btn-lg rounded-full">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-6 py-24 md:py-32">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative group">
            <div className="aspect-4/3 rounded-3xl overflow-hidden shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]">
              <Image
                src="https://picsum.photos/seed/about-story/1200/900"
                alt="Our team collaborating"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="absolute -bottom-8 -left-8 w-64 h-64 bg-primary/10 rounded-full -z-10 blur-3xl"></div>
            <div className="absolute -top-10 -right-10 w-48 h-48 bg-secondary/10 rounded-full -z-10 blur-2xl"></div>
          </div>

          <div className="space-y-6">
            <div className="badge badge-outline badge-secondary badge-lg px-4 py-3">
              Founded in 2017
            </div>
            <h2 className="text-4xl font-semibold tracking-tight text-base-content">
              From a Small Idea to a Global Impact.
            </h2>
            <p className="text-lg text-base-content/90 leading-relaxed">
              Started in a small garage with just three passionate individuals,
              our vision was simple: to create technology that truly serves
              people. We believed that user-centric design could transform how
              we interact with the digital world.
            </p>
            <p className="text-base text-base-content/70">
              Today, with a team of 50+ dedicated experts, we continue to push
              boundaries. Every project we undertake is fueled by our core
              values of innovation, integrity, and a relentless focus on
              customer success. We don&apos;t just build, we craft.
            </p>
            <div className="pt-6">
              <button className="btn btn-ghost text-primary p-0 gap-2 hover:bg-transparent hover:text-primary-focus">
                Learn More About Our Process <span className="text-xl">→</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-primary text-primary-content py-16 rounded-[40px] mx-6 mb-24 shadow-inner">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 max-w-xl mx-auto">
            <h3 className="text-4xl font-bold mb-4">Our Journey in Numbers</h3>
            <p className="text-lg text-primary-content/80">
              A testament to our dedication, hard work, and the trust our
              clients place in us.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div
                key={stat.id}
                className="text-center bg-white/10 p-10 rounded-3xl backdrop-blur-sm border border-white/10 hover:bg-white/15 transition"
              >
                <div className="text-5xl font-extrabold mb-3">{stat.value}</div>
                <div className="text-sm font-medium tracking-wide text-primary-content/70 uppercase">
                  {stat.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="container mx-auto px-6 pb-24">
        <div className="text-center mb-20 max-w-2xl mx-auto">
          <span className="text-sm font-semibold text-secondary mb-2 block">
            Why Choose Us
          </span>
          <h2 className="text-5xl font-bold mb-6">What Makes Us Unique.</h2>
          <p className="text-lg text-base-content/80">
            It&apos;s not just what we do, it&apos;s how we do it. Our distinct
            approach ensures unprecedented quality and results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="card bg-base-200 shadow-lg p-10 rounded-[30px] border border-base-content/5 hover:border-primary/20 hover:bg-base-300 transition-all duration-300">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-8">
              <span className="text-3xl text-primary">💡</span>
            </div>
            <h4 className="text-2xl font-semibold mb-4">Innovation First</h4>
            <p className="text-base text-base-content/80">
              We don&apos;t follow trends; we create them. Every solution is
              built with a focus on cutting-edge efficiency and future-proof
              tech.
            </p>
          </div>
          <div className="card bg-base-200 shadow-lg p-10 rounded-[30px] border border-base-content/5 hover:border-secondary/20 hover:bg-base-300 transition-all duration-300">
            <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mb-8">
              <span className="text-3xl text-secondary">❤️</span>
            </div>
            <h4 className="text-2xl font-semibold mb-4">
              Client-Centric Heart
            </h4>
            <p className="text-base text-base-content/80">
              Your success is our priority. We listen, adapt, and build strong
              partnerships to ensure we deliver exactly what you need.
            </p>
          </div>
          <div className="card bg-base-200 shadow-lg p-10 rounded-[30px] border border-base-content/5 hover:border-accent/20 hover:bg-base-300 transition-all duration-300">
            <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-8">
              <span className="text-3xl text-accent">🛡️</span>
            </div>
            <h4 className="text-2xl font-semibold mb-4">
              Uncompromising Quality
            </h4>
            <p className="text-base text-base-content/80">
              From code to design, we obsess over details. We guarantee
              robustness, security, and polished aesthetics in every
              deliverable.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-primary text-secondary-content py-20 mt-16 rounded-t-[40px]">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-4xl font-bold mb-8">
            Ready to Build Something Extraordinary Together?
          </h3>
          <button className="btn btn-neutral btn-lg rounded-full px-12">
            Let&apos;s Talk!
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
