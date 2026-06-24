import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'hello@ketha24.com',
    href: 'mailto:hello@ketha24.com',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+94 77 123 4567',
    href: 'tel:+94771234567',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Kaduwela, Sri Lanka',
    href: '#',
  },
];

const Contact = () => {
  return (
    <section id="contact" className="py-16 sm:py-24 relative">
      {/* Background Accents */}
      <div className="absolute left-0 bottom-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute right-0 top-0 w-64 h-64 bg-glow-secondary/5 rounded-full blur-3xl" />
      
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
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Ready to transform your ideas into reality? Get in touch and let's discuss your project.
          </p>
        </motion.div>

        {/* Contact Cards */}
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="glass-strong neon-border rounded-2xl p-6 sm:p-8 md:p-12 glow-border"
          >
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {contactInfo.map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex flex-col items-center text-center p-6 rounded-xl bg-secondary/30 hover:bg-secondary/50 transition-all group"
                >
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="text-sm text-muted-foreground mb-1">{item.label}</div>
                  <div className="font-semibold group-hover:text-primary transition-colors">{item.value}</div>
                </motion.a>
              ))}
            </div>

            {/* CTA */}
            <div className="text-center">
              <p className="text-muted-foreground mb-6">
                Have a project in mind? We'd love to hear from you.
              </p>
              <motion.a
                href="mailto:hello@ketha24.com"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-xl font-semibold text-lg hover-glow transition-all"
              >
                Send Us an Email
                <ArrowRight className="w-5 h-5" />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
