import { motion } from 'framer-motion';
import { CheckCircle, Users, Zap, Award } from 'lucide-react';

const highlights = [
  {
    icon: Users,
    title: 'Expert Team',
    description: 'Skilled developers, designers, and strategists dedicated to your success.',
  },
  {
    icon: Zap,
    title: 'Agile Approach',
    description: 'Rapid iterations and continuous delivery for faster time-to-market.',
  },
  {
    icon: Award,
    title: 'Proven Results',
    description: '150+ successful projects delivered across various industries.',
  },
];

const values = [
  'Innovation-driven solutions',
  'Client-centric approach',
  'Transparent communication',
  'Quality-first development',
  'Continuous improvement',
  'Long-term partnerships',
];

const About = () => {
  return (
    <section id="about" className="py-16 sm:py-24 relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute right-0 top-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              About <span className="gradient-text">Ketha24</span>
            </h2>
            
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Founded with a vision to democratize technology, Ketha24 has evolved into a 
              leading IT solutions provider. We combine technical excellence with creative 
              thinking to deliver solutions that not only meet but exceed expectations.
            </p>
            
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Our journey spans over a decade of innovation, during which we've partnered 
              with startups and enterprises alike, helping them navigate the digital landscape 
              and achieve transformative growth.
            </p>

            {/* Values Grid */}
            <div className="grid grid-cols-2 gap-4">
              {values.map((value, index) => (
                <motion.div
                  key={value}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-sm text-foreground">{value}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Content - Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="glass neon-border rounded-2xl p-6 card-hover"
              >
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
