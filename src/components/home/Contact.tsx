import { motion } from 'framer-motion';
// import { useForm } from 'react-hook-form';
// import { zodResolver } from '@hookform/resolvers/zod';
// import { z } from 'zod';
// import { Button } from '@/components/ui/button';
// import { Input } from '@/components/ui/input';
// import { Textarea } from '@/components/ui/textarea';
// import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
// import { useToast } from '@/hooks/use-toast';
import { MapPin, Mail } from 'lucide-react'; // Removed SendIcon, CheckCircle2
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

// const formSchema = z.object({
//   name: z.string().min(2, { message: 'Name must be at least 2 characters' }),
//   email: z.string().email({ message: 'Please enter a valid email address' }),
//   subject: z.string().min(5, { message: 'Subject must be at least 5 characters' }),
//   message: z.string().min(10, { message: 'Message must be at least 10 characters' }),
// });

// type FormData = z.infer<typeof formSchema>;

export default function Contact() {
  // const { toast } = useToast();
  // const [isSubmitting, setIsSubmitting] = useState(false);
  // const [isSuccess, setIsSuccess] = useState(false);
  const { ref, controls } = useScrollAnimation();

  // const form = useForm<FormData>({
  //   resolver: zodResolver(formSchema),
  //   defaultValues: {
  //     name: '',
  //     email: '',
  //     subject: '',
  //     message: '',
  //   },
  // });

  // const onSubmit = async (data: FormData) => {
  //   setIsSubmitting(true);
    
  //   // Simulate API call
  //   await new Promise(resolve => setTimeout(resolve, 1500));
    
  //   console.log('Form submitted:', data);
  //   setIsSubmitting(false);
  //   setIsSuccess(true);
    
  //   toast({
  //     title: "Message sent!",
  //     description: "We'll get back to you as soon as possible.",
  //   });
    
  //   // Reset form after success
  //   setTimeout(() => {
  //     form.reset();
  //     setIsSuccess(false);
  //   }, 3000);
  // };

  const contactInfo = [
    {
      icon: <MapPin className="h-5 w-5" />,
      title: 'Our Location',
      details: 'Kolkata, West Bengal, India',
    },
    {
      icon: <Mail className="h-5 w-5" />,
      title: 'Email Us',
      details: 'pritam@bohurupi.com',
    },

  ];

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600">Touch</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-muted-foreground text-lg max-w-2xl mx-auto"
          >
            Have a project in mind? We'd love to hear from you. Reach out to us through the channels below.
          </motion.p>
        </div>

        <div className="flex justify-center">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }} // Changed animation from x to y
            animate={controls}
            variants={{
              visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }, // Changed animation from x to y
              hidden: { opacity: 0, y: 20 }, // Changed animation from x to y
            }}
            className="w-full max-w-lg"
          >
            <div className="bg-background rounded-lg border p-6 sm:p-8 shadow-lg">
              <h3 className="text-2xl font-semibold mb-6 text-center">Contact Information</h3>
              
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-lg bg-gradient-to-br from-purple-600/10 to-indigo-600/10 text-indigo-600 mr-4">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-medium text-base sm:text-lg">{item.title}</h4>
                      <p className="text-muted-foreground text-sm sm:text-base">{item.details}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Map Removed */}
              {/* <div className="rounded-lg overflow-hidden h-64 border mt-8">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.3059353029!2d-74.25986548248684!3d40.69714941512199!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sca!4v1616426723905!5m2!1sen!2sca" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  title="map"
                ></iframe>
              </div> */}
            </div>
          </motion.div>

          {/* Form Removed */}
          {/* <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={controls}
            variants={{
              visible: { opacity: 1, x: 0, transition: { duration: 0.5, delay: 0.2 } },
              hidden: { opacity: 0, x: 20 },
            }}
          >
            <div className="bg-background rounded-lg border p-6 shadow-sm">
              <h3 className="text-2xl font-semibold mb-6">Send us a message</h3>
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Your name" {...field} disabled={isSubmitting || isSuccess} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input placeholder="your.email@example.com" {...field} disabled={isSubmitting || isSuccess} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Subject</FormLabel>
                        <FormControl>
                          <Input placeholder="How can we help you?" {...field} disabled={isSubmitting || isSuccess} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Tell us about your project..." 
                            className="min-h-32" 
                            {...field} 
                            disabled={isSubmitting || isSuccess}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button 
                    type="submit" 
                    disabled={isSubmitting || isSuccess}
                    className={`w-full transition-all duration-300 ${
                      isSuccess 
                        ? 'bg-green-600 hover:bg-green-700' 
                        : 'bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700'
                    }`}
                  >
                    {isSubmitting ? (
                      <div className="flex items-center">
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Sending...
                      </div>
                    ) : isSuccess ? (
                      <div className="flex items-center">
                        <CheckCircle2 className="h-4 w-4 mr-2" />
                        Message Sent!
                      </div>
                    ) : (
                      <div className="flex items-center">
                        <SendIcon className="h-4 w-4 mr-2" />
                        Send Message
                      </div>
                    )}
                  </Button>
                </form>
              </Form>
            </div>
          </motion.div> */}
        </div>
      </div>
    </section>
  );
}