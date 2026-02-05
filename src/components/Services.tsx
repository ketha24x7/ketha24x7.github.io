import { motion } from 'framer-motion';
import { Globe, Smartphone, Cloud, Code, Database, Shield } from 'lucide-react';

const services = [
  {
    icon: Globe,
    title: 'Web Solutions',
    description: 'Custom web platforms, progressive web apps, and enterprise-grade e-commerce solutions built for scale.',
    features: ['Custom Platforms', 'E-commerce', 'PWAs'],
  },
  {
    icon: Smartphone,
    title: 'Mobile Apps',
    description: 'Native and cross-platform mobile applications for iOS and Android with stunning UI/UX.',
    features: ['iOS Development', 'Android Apps', 'React Native'],
  },
  {
    icon: Cloud,
    title: 'Cloud & IT Strategy',
    description: 'Cloud infrastructure setup, migration services, and strategic IT consulting for your business.',
    features: ['AWS/Azure/GCP', 'DevOps', 'Consulting'],
  },
  {
    icon: Code,
    title: 'Custom Software',
    description: 'Tailored software solutions designed to automate processes and solve unique business challenges.',
    features: ['Automation', 'Integration', 'APIs'],
  },
  {
    icon: Database,
    title: 'Data Solutions',
    description: 'Data architecture, analytics pipelines, and business intelligence dashboards.',
    features: ['Analytics', 'BI Dashboards', 'Data Engineering'],
  },
  {
    icon: Shield,
    title: 'Cybersecurity',
    description: 'Comprehensive security audits, penetration testing, and compliance solutions.',
    features: ['Security Audits', 'Compliance', 'Monitoring'],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const Services = () => {
  return (
    <section id="services" className="py-24 relative">
      <div className="absolute inset-0 bg-hero-gradient" />
      
      <div className="container mx-auto px-6 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Comprehensive IT solutions tailored to accelerate your digital transformation
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              className="group glass rounded-2xl p-8 card-hover cursor-pointer"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-7 h-7 text-primary" />
              </div>
              
              <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {service.features.map((feature) => (
                  <span
                    key={feature}
                    className="text-xs px-3 py-1 rounded-full bg-secondary text-muted-foreground"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
