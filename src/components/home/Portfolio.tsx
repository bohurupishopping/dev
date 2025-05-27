import { useState, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects, categories } from '@/data/portfolio';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { ExternalLink } from 'lucide-react';

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [visibleProjects, setVisibleProjects] = useState(6);
  const { ref, controls } = useScrollAnimation();

  const filteredProjects = useMemo(() => {
    return selectedCategory === 'All'
      ? projects
      : projects.filter(project => project.category === selectedCategory);
  }, [selectedCategory]);

  const handleCategoryChange = useCallback((category: string) => {
    setSelectedCategory(category);
    setVisibleProjects(6); // Reset visible projects when category changes
  }, []);

  const loadMoreProjects = useCallback(() => {
    setVisibleProjects(prev => Math.min(prev + 3, filteredProjects.length));
  }, [filteredProjects.length]);

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0, scale: 0.95 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        type: "spring",
        stiffness: 100,
      },
    },
  };

  return (
    <section id="portfolio" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600">Portfolio</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-muted-foreground text-lg max-w-2xl mx-auto"
          >
            Explore our latest work and see how we've helped our clients achieve their digital goals through innovative solutions.
          </motion.p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map(category => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              size="lg"
              onClick={() => handleCategoryChange(category)}
              className={`
                rounded-full px-6 
                ${selectedCategory === category 
                  ? "bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700" 
                  : "hover:bg-muted"}
              `}
            >
              {category}
            </Button>
          ))}
        </div>

        <motion.div
          ref={ref}
          variants={container}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8"
        >
          <AnimatePresence mode="wait">
            {filteredProjects.slice(0, visibleProjects).map((project) => (
              <motion.div
                key={project.id}
                variants={item}
                layout
                whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgba(0,0,0,0.1), 0 10px 10px -5px rgba(0,0,0,0.04)"}}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
                className="group bg-background rounded-xl border shadow-lg hover:shadow-purple-500/20 transition-shadow duration-300"
              >
                <div className="relative overflow-hidden rounded-t-xl">
                  <AspectRatio ratio={16 / 9}>
                    <img
                      src={project.image}
                      alt={project.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </AspectRatio>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-4 md:p-6 w-full">
                      <Badge 
                        variant="outline" 
                        className="bg-white/10 backdrop-blur-sm text-white border-white/20 mb-2 text-xs sm:text-sm"
                      >
                        {project.category}
                      </Badge>
                      {project.link && (
                        <a 
                          href={project.link} 
                          className="text-white hover:text-purple-300 transition-colors absolute top-3 right-3 sm:top-4 sm:right-4 bg-black/30 hover:bg-black/50 p-2 rounded-full backdrop-blur-sm"
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`View ${project.title} live`}
                        >
                          <ExternalLink className="h-4 w-4 sm:h-5 sm:w-5" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
                <div className="p-4 md:p-6">
                  <h3 className="text-lg sm:text-xl font-semibold mb-2 group-hover:text-purple-600 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm sm:text-base mb-3 sm:mb-4 line-clamp-2 h-[2.5em] sm:h-[3em]">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.technologies.map((tech, index) => (
                      <Badge 
                        key={index} 
                        variant="secondary"
                        className="bg-purple-500/10 text-purple-700 hover:bg-purple-500/20 text-xs px-2 py-1 rounded-md"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {visibleProjects < filteredProjects.length && (
          <div className="mt-12 text-center">
            <Button
              onClick={loadMoreProjects}
              variant="outline"
              size="lg"
              className="rounded-full px-8 border-purple-500 text-purple-600 hover:bg-purple-500/10 hover:text-purple-700 transition-colors duration-300"
            >
              Load More Projects
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}