import { useState } from 'react';
import { motion } from 'framer-motion';
import { Code2, Palette, BarChartBig } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { services } from '@/data/services';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const iconComponents = {
  Code2,
  Palette,
  BarChartBig,
};

export default function Services() {
  const { ref, controls } = useScrollAnimation();
  const [expandedService, setExpandedService] = useState<string | null>(null);

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  const handleServiceClick = (id: string) => {
    setExpandedService(expandedService === id ? null : id);
  };

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            What We <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600">Do</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-muted-foreground text-lg max-w-2xl mx-auto"
          >
            We specialize in designing and developing solutions that help businesses thrive in the digital landscape.
          </motion.p>
        </div>

        <motion.div
          ref={ref}
          variants={container}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service) => {
            const IconComponent = iconComponents[service.icon as keyof typeof iconComponents];
            
            return (
              <motion.div
                key={service.id}
                variants={item}
                className={`group bg-background rounded-xl border shadow-lg transition-all duration-300 hover:shadow-xl hover:border-purple-500/20 ${
                  expandedService === service.id ? 'lg:row-span-2' : ''
                }`}
                layoutId={`service-card-${service.id}`}
              >
                <div 
                  className="p-8 cursor-pointer"
                  onClick={() => handleServiceClick(service.id)}
                >
                  <div className="flex items-center mb-6">
                    <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-gradient-to-br from-purple-600/10 to-indigo-600/10 text-indigo-600">
                      {IconComponent && <IconComponent className="h-7 w-7" />}
                    </div>
                    <h3 className="text-2xl font-semibold ml-4">{service.title}</h3>
                  </div>
                  <p className="text-muted-foreground mb-6 text-lg">{service.description}</p>
                </div>

                <div className="px-8 pb-8">
                  <Accordion type="single" collapsible className="w-full">
                    {service.features.map((feature) => (
                      <AccordionItem 
                        key={feature.id} 
                        value={feature.id}
                        className="border-b border-purple-500/10 last:border-0"
                      >
                        <AccordionTrigger className="text-left hover:text-purple-600 text-lg">
                          {feature.title}
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground">
                          {feature.description}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}