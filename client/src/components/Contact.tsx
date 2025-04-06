import { useState } from "react";
import { motion } from "framer-motion";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { apiRequest, queryClient } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { InsertContactMessage } from "@shared/schema";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  Loader2
} from "lucide-react";

const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
  createdAt: z.string().optional(),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export default function Contact() {
  const [selectedOption, setSelectedOption] = useState("General Inquiry");
  const { toast } = useToast();
  
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      message: ""
    },
  });

  const contactMutation = useMutation({
    mutationFn: async (data: InsertContactMessage) => {
      const res = await apiRequest("POST", "/api/contact", data);
      return res.json();
    },
    onSuccess: () => {
      toast({
        title: "Message sent!",
        description: "We'll get back to you as soon as possible.",
        variant: "default",
      });
      form.reset();
      queryClient.invalidateQueries({ queryKey: ["/api/contact"] });
    },
    onError: (error) => {
      toast({
        title: "Something went wrong!",
        description: error.message || "Failed to send your message. Please try again.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: ContactFormValues) => {
    const contactData: InsertContactMessage = {
      ...data,
      createdAt: new Date().toISOString()
    };
    contactMutation.mutate(contactData);
  };

  const contactOptions = [
    "General Inquiry",
    "Project Consultation",
    "Career Opportunities",
    "Media Inquiries",
    "Partnerships"
  ];

  return (
    <section id="contact" className="py-24 bg-black relative overflow-hidden">
      {/* Futuristic Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
      
      {/* Grid pattern background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-40 pointer-events-none"></div>
      
      {/* Animated gradient orbs */}
      <motion.div 
        className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-[150px] pointer-events-none"
        animate={{
          opacity: [0.2, 0.4, 0.2],
          scale: [0.8, 1, 0.8]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-white/5 rounded-full blur-[120px] pointer-events-none"
        animate={{
          opacity: [0.15, 0.3, 0.15],
          scale: [1, 1.1, 1]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          {/* Section heading with futuristic styling */}
          <motion.div
            className="inline-block relative mb-2"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <motion.div 
              className="absolute -top-6 left-1/2 -translate-x-1/2 w-20 h-[1px] bg-gradient-to-r from-transparent via-white/50 to-transparent"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            />
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-3 uppercase bg-clip-text text-transparent bg-gradient-to-b from-white to-white/70">
              <span className="relative">
                GET IN TOUCH
                <motion.span 
                  className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-white via-white/80 to-transparent"
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  viewport={{ once: true }}
                />
              </span>
            </h2>
          </motion.div>
          
          <motion.p 
            className="text-white/70 max-w-2xl mx-auto text-lg backdrop-blur-sm py-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Have a project in mind or want to learn more about our innovative architectural solutions? We'd love to hear from you.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Contact form - Enhanced with futuristic design */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Form container with backdrop and border effects */}
            <div className="bg-black/60 backdrop-blur-md border border-white/10 rounded-none p-8 md:p-10 relative">
              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-12 h-12 border-t border-l border-white/30"></div>
              <div className="absolute bottom-0 right-0 w-12 h-12 border-b border-r border-white/30"></div>
              
              {/* Animated gradient line */}
              <motion.div 
                className="absolute top-0 left-0 w-full h-[1px]"
                style={{
                  background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)"
                }}
                animate={{
                  left: ["-100%", "100%"]
                }}
                transition={{
                  duration: 3,
                  ease: "linear",
                  repeat: Infinity,
                  repeatType: "loop"
                }}
              />
              
              {/* Form heading with animation */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                viewport={{ once: true }}
                className="mb-8"
              >
                <h3 className="text-2xl font-bold text-white mb-2 tracking-wide">
                  <span className="inline-block border-b border-white/30 pb-1">SEND US A MESSAGE</span>
                </h3>
                <p className="text-white/60 font-light">
                  Share your vision with us, and we'll bring it to life.
                </p>
              </motion.div>
              
              {/* Enhanced option selector with animation */}
              <div className="mb-8 relative">
                {/* Background line */}
                <div className="h-[1px] bg-white/10 absolute bottom-0 left-0 w-full -mb-4"></div>
                
                <p className="text-white/70 mb-3 text-sm uppercase tracking-wider">What are you interested in?</p>
                <div className="flex flex-wrap gap-3">
                  {contactOptions.map((option, index) => (
                    <motion.button
                      key={option}
                      type="button"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => {
                        setSelectedOption(option);
                        form.setValue("message", `I'm interested in discussing ${option.toLowerCase()}...`);
                      }}
                      className={`px-4 py-2 text-sm transition-all relative overflow-hidden
                        ${selectedOption === option
                          ? "bg-white text-black font-medium" 
                          : "bg-black/50 text-white/80 border border-white/20 hover:border-white/50 backdrop-blur-sm"
                        }`
                      }
                    >
                      {option}
                      
                      {selectedOption === option && (
                        <motion.div
                          className="absolute bottom-0 left-0 h-[1px] bg-white/70"
                          layoutId="optionUnderline"
                          initial={{ width: 0 }}
                          animate={{ width: "100%" }}
                          transition={{ duration: 0.3 }}
                        />
                      )}
                    </motion.button>
                  ))}
                </div>
              </div>
              
              {/* Enhanced form with animations */}
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.1 }}
                      viewport={{ once: true }}
                    >
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-white text-sm uppercase tracking-wider">
                              <span className="flex items-center gap-2">
                                <span className="inline-block h-[1px] w-4 bg-white/50"></span>
                                Name
                              </span>
                            </FormLabel>
                            <FormControl>
                              <div className="relative group">
                                <Input 
                                  placeholder="Your name" 
                                  {...field} 
                                  className="bg-black/50 border-white/20 focus:border-white p-6 text-white placeholder:text-white/30 backdrop-blur-sm group-hover:border-white/40 transition-all duration-300"
                                />
                                <div className="absolute top-0 left-0 h-full w-[1px] bg-gradient-to-b from-white/5 to-transparent group-focus-within:from-white/30 transition-all duration-300"></div>
                              </div>
                            </FormControl>
                            <FormMessage className="text-white/70" />
                          </FormItem>
                        )}
                      />
                    </motion.div>
                    
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.2 }}
                      viewport={{ once: true }}
                    >
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-white text-sm uppercase tracking-wider">
                              <span className="flex items-center gap-2">
                                <span className="inline-block h-[1px] w-4 bg-white/50"></span>
                                Email
                              </span>
                            </FormLabel>
                            <FormControl>
                              <div className="relative group">
                                <Input 
                                  placeholder="your.email@example.com" 
                                  type="email" 
                                  {...field} 
                                  className="bg-black/50 border-white/20 focus:border-white p-6 text-white placeholder:text-white/30 backdrop-blur-sm group-hover:border-white/40 transition-all duration-300"
                                />
                                <div className="absolute top-0 right-0 h-full w-[1px] bg-gradient-to-b from-transparent to-white/5 group-focus-within:to-white/30 transition-all duration-300"></div>
                              </div>
                            </FormControl>
                            <FormMessage className="text-white/70" />
                          </FormItem>
                        )}
                      />
                    </motion.div>
                  </div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.3 }}
                    viewport={{ once: true }}
                  >
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white text-sm uppercase tracking-wider">
                            <span className="flex items-center gap-2">
                              <span className="inline-block h-[1px] w-4 bg-white/50"></span>
                              Message
                            </span>
                          </FormLabel>
                          <FormControl>
                            <div className="relative group">
                              <Textarea 
                                placeholder="Tell us about your vision..." 
                                rows={7} 
                                {...field} 
                                className="bg-black/50 border-white/20 focus:border-white p-6 text-white placeholder:text-white/30 resize-none backdrop-blur-sm group-hover:border-white/40 transition-all duration-300"
                              />
                              <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-white/5 via-transparent to-white/5 group-focus-within:from-white/30 group-focus-within:to-white/30 transition-all duration-300"></div>
                            </div>
                          </FormControl>
                          <FormMessage className="text-white/70" />
                        </FormItem>
                      )}
                    />
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="pt-4"
                  >
                    <motion.div 
                      whileHover={{ scale: 1.02 }} 
                      whileTap={{ scale: 0.98 }}
                      className="relative group"
                    >
                      {/* Glow effect */}
                      <div className="absolute -inset-0.5 bg-gradient-to-r from-white/5 to-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
                      
                      <Button 
                        type="submit" 
                        className="w-full bg-black border border-white/50 hover:bg-white hover:text-black text-white py-8 text-lg uppercase tracking-widest transition-all duration-300 relative overflow-hidden group-hover:border-white"
                        disabled={contactMutation.isPending}
                      >
                        <span className="relative z-10">
                          {contactMutation.isPending ? (
                            <>
                              <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                              Sending Message...
                            </>
                          ) : (
                            <>
                              <Send className="mr-3 h-5 w-5" />
                              Submit Request
                            </>
                          )}
                        </span>
                        
                        {/* Button hover effect */}
                        <motion.span
                          className="absolute inset-0 bg-white"
                          initial={{ x: "-100%" }}
                          whileHover={{ x: "0%" }}
                          transition={{ duration: 0.3 }}
                        />
                      </Button>
                    </motion.div>
                    
                    <p className="text-white/40 text-sm text-center mt-4">
                      We'll respond to your inquiry within 24 hours.
                    </p>
                  </motion.div>
                </form>
              </Form>
            </div>
          </motion.div>
          
          {/* Contact information - with futuristic styling */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-10 mt-8 md:mt-0"
          >
            {/* Section heading */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              className="relative"
            >
              <h3 className="text-2xl font-bold text-white tracking-wide uppercase relative inline-block">
                <span className="relative pb-1">
                  CONNECT WITH US
                  <motion.span 
                    className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-white via-white/50 to-transparent"
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                  />
                </span>
              </h3>
              <p className="text-white/50 mt-3 font-light">
                Reach out through any of these channels for a prompt response.
              </p>
            </motion.div>
            
            {/* Contact info cards with hover effects */}
            <div className="space-y-5">
              {/* Map location */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                className="bg-black/40 backdrop-blur-sm border border-white/10 p-5 transition-all duration-200 hover:border-white/30 group relative overflow-hidden"
              >
                {/* Animated highlight line */}
                <motion.div 
                  className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-white/30 via-white/10 to-transparent"
                  initial={{ scaleX: 0, transformOrigin: "0% 50%" }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.5 }}
                />
                
                <div className="flex items-center gap-5">
                  <div className="bg-black/60 border border-white/30 p-4 rounded-none group-hover:border-white/70 transition-all duration-300">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1 text-white uppercase tracking-wider text-sm group-hover:text-white/90">
                      Our Headquarters
                    </h4>
                    <p className="text-white/60 text-sm group-hover:text-white/80 transition-colors">123 Architecture Boulevard</p>
                    <p className="text-white/60 text-sm group-hover:text-white/80 transition-colors">New York, NY 10001</p>
                  </div>
                </div>
              </motion.div>
              
              {/* Phone */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                className="bg-black/40 backdrop-blur-sm border border-white/10 p-5 transition-all duration-200 hover:border-white/30 group relative overflow-hidden"
              >
                {/* Animated highlight line */}
                <motion.div 
                  className="absolute top-0 right-0 w-full h-[1px] bg-gradient-to-l from-white/30 via-white/10 to-transparent"
                  initial={{ scaleX: 0, transformOrigin: "100% 50%" }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.5 }}
                />
                
                <div className="flex items-center gap-5">
                  <div className="bg-black/60 border border-white/30 p-4 rounded-none group-hover:border-white/70 transition-all duration-300">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1 text-white uppercase tracking-wider text-sm group-hover:text-white/90">
                      Phone
                    </h4>
                    <p className="text-white/60 text-sm group-hover:text-white/80 transition-colors">Main: (212) 555-8900</p>
                    <p className="text-white/60 text-sm group-hover:text-white/80 transition-colors">Projects: (212) 555-8901</p>
                  </div>
                </div>
              </motion.div>
              
              {/* Email */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                className="bg-black/40 backdrop-blur-sm border border-white/10 p-5 transition-all duration-200 hover:border-white/30 group relative overflow-hidden"
              >
                {/* Animated highlight line */}
                <motion.div 
                  className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-white/30 via-white/10 to-transparent"
                  initial={{ scaleX: 0, transformOrigin: "0% 50%" }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.5 }}
                />
                
                <div className="flex items-center gap-5">
                  <div className="bg-black/60 border border-white/30 p-4 rounded-none group-hover:border-white/70 transition-all duration-300">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1 text-white uppercase tracking-wider text-sm group-hover:text-white/90">
                      Email
                    </h4>
                    <p className="text-white/60 text-sm group-hover:text-white/80 transition-colors">info@nexusarchitects.com</p>
                    <p className="text-white/60 text-sm group-hover:text-white/80 transition-colors">projects@nexusarchitects.com</p>
                  </div>
                </div>
              </motion.div>
              
              {/* Hours */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.4 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                className="bg-black/40 backdrop-blur-sm border border-white/10 p-5 transition-all duration-200 hover:border-white/30 group relative overflow-hidden"
              >
                {/* Animated highlight line */}
                <motion.div 
                  className="absolute bottom-0 right-0 w-full h-[1px] bg-gradient-to-l from-white/30 via-white/10 to-transparent"
                  initial={{ scaleX: 0, transformOrigin: "100% 50%" }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.5 }}
                />
                
                <div className="flex items-center gap-5">
                  <div className="bg-black/60 border border-white/30 p-4 rounded-none group-hover:border-white/70 transition-all duration-300">
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1 text-white uppercase tracking-wider text-sm group-hover:text-white/90">
                      Operating Hours
                    </h4>
                    <p className="text-white/60 text-sm group-hover:text-white/80 transition-colors">Monday-Friday: 9:00 AM - 6:00 PM</p>
                    <p className="text-white/60 text-sm group-hover:text-white/80 transition-colors">Weekends: By appointment only</p>
                  </div>
                </div>
              </motion.div>
            </div>
            
            {/* Interactive map with glass effect */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="relative group mt-8"
            >
              {/* Map heading */}
              <div className="absolute -top-4 left-4 z-10 bg-black/80 px-4 py-2 border border-white/20">
                <p className="text-white/80 text-xs uppercase tracking-wider">Our Location</p>
              </div>
              
              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-white/30 z-10"></div>
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-white/30 z-10"></div>
              
              {/* Glass overlay */}
              <div className="absolute inset-0 bg-white/5 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10"></div>
              
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.982951865753!2d-73.98330192326744!3d40.74797283559809!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9aeb1c6b5%3A0x35b1cfbc89a6097f!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1690391590067!5m2!1sen!2sus"
                className="w-full h-[320px] border border-white/20 filter grayscale hover:grayscale-0 transition-all duration-500"
                loading="lazy"
                title="Office Location"
                style={{ filter: "contrast(1.2)" }}
              ></iframe>
              
              {/* Hover note */}
              <div className="absolute bottom-4 right-4 bg-black/80 border border-white/20 px-3 py-1 text-xs text-white/60 z-10">
                Interactive Map
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
