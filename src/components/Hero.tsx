import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import AnimatedBackground from './AnimatedBackground';
import GameArcade from './GameArcade';

const stats = [
  { value: '50+', label: 'Projects Delivered' },
  { value: '40+', label: 'Happy Clients' },
  { value: '5+', label: 'Years Experience' },
];

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-28 pb-16">
      {/* Animated Background */}
      <AnimatedBackground />

      {/* Aurora glow blobs */}
      <div className="absolute -top-32 -left-24 w-[28rem] h-[28rem] aurora bg-neon-blue/30 animate-aurora" />
      <div className="absolute top-1/3 -right-24 w-[26rem] h-[26rem] aurora bg-neon-violet/25 animate-aurora" style={{ animationDelay: '-6s' }} />
      <div className="absolute bottom-0 left-1/3 w-[22rem] h-[22rem] aurora bg-neon-cyan/20 animate-aurora" style={{ animationDelay: '-12s' }} />

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-radial from-primary/10 via-transparent to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left: Content */}
          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass neon-border mb-8"
            >
              <Sparkles className="w-4 h-4 text-neon-cyan" />
              <span className="text-sm font-medium text-muted-foreground">
                Next-Gen IT Solutions
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl md:text-6xl lg:text-6xl xl:text-7xl font-bold leading-[1.05] mb-6"
            >
              Transforming Ideas into{' '}
              <span className="gradient-text">Digital Reality</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-10"
            >
              We engineer the future of digital interaction. By blending robust web, mobile, 
              and cloud architecture with powerful, scalable AI solutions—whether 
              building new systems or enhancing existing ones—we help your business lead 
              the next wave of innovation.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center lg:justify-start justify-center gap-4"
            >
              <a
                href="#services"
                className="group px-8 py-4 bg-primary text-primary-foreground rounded-xl font-semibold text-lg hover-glow hover:bg-primary/90 transition-all flex items-center gap-2"
              >
                Our Services
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#contact"
                className="px-8 py-4 glass rounded-xl font-semibold text-lg hover:bg-white/10 transition-all glow-border"
              >
                Get a Quote
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-14 grid grid-cols-3 gap-4 sm:gap-8 max-w-md mx-auto lg:mx-0"
            >
              {stats.map((stat) => (
                <div key={stat.label} className="text-center lg:text-left">
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold font-display gradient-text">
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm text-muted-foreground mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: Playable Game */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="w-full max-w-md mx-auto lg:max-w-lg lg:ml-auto"
          >
            <GameArcade />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
