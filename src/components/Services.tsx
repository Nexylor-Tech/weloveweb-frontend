import { motion } from 'framer-motion';
import { Monitor, Palette, Megaphone, Video } from 'lucide-react';

export function Services() {

  const services = [
    {
      id: '01',
      title: 'Branding & Identity',
      description: 'Crafting unique visual languages that define your brand and resonate with your audience.',
      icon: Palette,
      tags: ['Logo Design', 'Brand Guidelines', 'Visual Identity', 'Typography']
    },
    {
      id: '02',
      title: 'Full Stack Web development',
      description: 'Bringing your brand to online with professional looking website that ranks first in Google.',
      icon: Video,
      tags: ['Web Development', 'SEO', 'Art Illustration', 'Typography']
    },
    {
      id: '03',
      title: 'Digital Marketing',
      description: 'Strategic campaigns that amplify your reach and drive measurable growth for your business.',
      icon: Megaphone,
      tags: ['SEO Design', 'Promotion', 'Social Media', 'Typography']
    },
    {
      id: '04',
      title: 'UI UX Design',
      description: 'Designing intuitive and engaging digital experiences that convert users into loyal customers.',
      icon: Monitor,
      tags: ['Prototyping', 'Wireframe', 'Interface Design', 'User Research']
    },
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-black text-white border-b border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-8 md:gap-12 mb-16 md:mb-24">
          <div className="space-y-4 md:space-y-6">
            <div className="flex items-center gap-2 text-orange-500 font-bold uppercase tracking-widest text-[10px] md:text-sm">
              <span className="w-1.5 h-1.5 bg-orange-500 rounded-full" />
              Our Services
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-display font-bold tracking-tighter leading-none">
              Built to Elevate.<br />
              Designed to <span className="text-orange-500">Perform.</span>
            </h2>
          </div>

          <div className="lg:w-1/3 space-y-6 md:space-y-8">
            <p className="text-lg md:text-xl text-white/40 leading-relaxed">
              We don't just make things look good — we make them work. weloveweb blends strategic thinking with compelling design to craft brand experiences that convert.
            </p>
          </div>
        </div>

        <div className="space-y-0">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative py-10 md:py-12 border-t border-white/10 flex flex-col lg:flex-row items-start lg:items-center gap-8 lg:gap-12 hover:bg-white/5 transition-all duration-500 px-4 md:px-8 -mx-4 md:-mx-8 cursor-pointer"
            >
              <div className="text-xs md:text-sm font-bold text-white/20 uppercase tracking-widest">{service.id}</div>

              <div className="flex-1 flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-12">
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-sm bg-white/5 flex items-center justify-center group-hover:bg-orange-500 transition-colors duration-500 shrink-0">
                  <service.icon className="w-6 h-6 md:w-8 md:h-8 group-hover:text-white transition-colors" />
                </div>

                <div className="space-y-3 md:space-y-4 max-w-xl">
                  <h3 className="text-2xl md:text-3xl font-bold tracking-tight">{service.title}</h3>
                  <p className="text-sm md:text-base text-white/40 leading-relaxed group-hover:text-white/60 transition-colors">
                    {service.description}
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 md:gap-3 lg:w-1/3">
                {service.tags.map((tag) => (
                  <span key={tag} className="px-3 md:px-4 py-1 rounded-full border border-white/10 text-[10px] md:text-xs font-medium text-white/40 group-hover:border-white/20 group-hover:text-white/60 transition-all">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

