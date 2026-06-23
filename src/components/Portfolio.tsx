import { motion } from 'framer-motion';
import { ExternalLink, Smartphone, Globe, ShoppingCart } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Project Alpha',
    category: 'Fintech Mobile App',
    description: 'A cross-platform mobile banking solution with real-time transactions, biometric authentication, and AI-powered financial insights.',
    icon: Smartphone,
    color: 'from-blue-500 to-cyan-400',
    tags: ['React Native', 'Node.js', 'PostgreSQL'],
  },
  {
    id: 2,
    title: 'Project Beta',
    category: 'Enterprise ERP System',
    description: 'An enterprise-level ERP web system featuring inventory management, HR modules, and advanced reporting dashboards.',
    icon: Globe,
    color: 'from-purple-500 to-pink-400',
    tags: ['React', 'Python', 'AWS'],
  },
  {
    id: 3,
    title: 'Project Gamma',
    category: 'E-commerce Marketplace',
    description: 'A high-performance e-commerce marketplace handling 100k+ daily transactions with multi-vendor support and real-time analytics.',
    icon: ShoppingCart,
    color: 'from-orange-500 to-yellow-400',
    tags: ['Next.js', 'Stripe', 'Redis'],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7 },
  },
};

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-16 sm:py-24 bg-secondary/30 relative">
      <div className="absolute inset-0 grid-overlay opacity-30" />
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
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Explore our portfolio of successful digital solutions delivered to clients worldwide
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="group relative glass neon-border rounded-2xl overflow-hidden card-hover"
            >
              {/* Gradient Header */}
              <div className={`h-48 bg-gradient-to-br ${project.color} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/20" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <project.icon className="w-20 h-20 text-white/30 group-hover:scale-110 transition-transform duration-500" />
                </div>
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-4 rounded-full bg-white/10 backdrop-blur-sm border border-white/20"
                  >
                    <ExternalLink className="w-6 h-6 text-white" />
                  </motion.button>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <span className="text-xs font-medium text-primary uppercase tracking-wider">
                  {project.category}
                </span>
                <h3 className="text-xl font-semibold mt-2 mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {project.description}
                </p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <button className="px-8 py-4 glass rounded-xl font-semibold hover:bg-white/10 transition-all glow-border">
            View All Projects
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
