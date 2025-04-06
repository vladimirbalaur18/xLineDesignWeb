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

        {/* Full width contact form with enhanced design */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative max-w-3xl mx-auto mb-20"
        >
          {/* Glowing background effect for the form */}
          <div className="absolute -inset-1 bg-gradient-to-r from-white/5 via-white/10 to-white/5 rounded-2xl blur opacity-50"></div>
          
          {/* Form container with backdrop and modern styling */}
          <div className="bg-black/70 backdrop-blur-xl border border-white/20 rounded-xl p-8 md:p-10 relative overflow-hidden">
            {/* Animated subtle glow */}
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/5 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white/5 rounded-full blur-3xl"></div>
            
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
              className="mb-8 text-center"
            >
              <h3 className="text-3xl font-bold text-white mb-3 tracking-wide">
                <span className="inline-block border-b border-white/30 pb-1">SEND US A MESSAGE</span>
              </h3>
              <p className="text-white/70 font-light max-w-md mx-auto">
                Share your vision with us, and we'll bring it to life through innovative architecture.
              </p>
            </motion.div>
            
            {/* Enhanced option selector with animation */}
            <div className="mb-10 relative">
              <p className="text-white/80 mb-4 text-center text-sm uppercase tracking-wider font-semibold">What are you interested in?</p>
              <div className="flex flex-wrap justify-center gap-3">
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
                    className={`px-5 py-2 text-sm transition-all relative rounded-full overflow-hidden
                      ${selectedOption === option
                        ? "bg-white text-black font-medium shadow-lg shadow-white/10" 
                        : "bg-black/30 text-white/80 border border-white/20 hover:border-white/50 backdrop-blur-sm"
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
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                                className="bg-black/50 border-white/20 focus:border-white rounded-lg p-6 text-white placeholder:text-white/40 backdrop-blur-sm group-hover:border-white/40 transition-all duration-300"
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
                                className="bg-black/50 border-white/20 focus:border-white rounded-lg p-6 text-white placeholder:text-white/40 backdrop-blur-sm group-hover:border-white/40 transition-all duration-300"
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
                              rows={6} 
                              {...field} 
                              className="bg-black/50 border-white/20 focus:border-white rounded-lg p-6 text-white placeholder:text-white/40 resize-none backdrop-blur-sm group-hover:border-white/40 transition-all duration-300"
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
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-white/5 to-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm rounded-xl"></div>
                    
                    <Button 
                      type="submit" 
                      className="w-full bg-black border border-white/50 hover:bg-white hover:text-black text-white py-7 text-lg uppercase tracking-widest transition-all duration-300 relative overflow-hidden group-hover:border-white rounded-xl"
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
                        className="absolute inset-0 w-full h-full bg-white z-0"
                        initial={{ scale: 0, opacity: 0 }}
                        whileHover={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                    </Button>
                  </motion.div>
                </motion.div>
              </form>
            </Form>
          </div>
        </motion.div>
        
        {/* Contact info and map section below the form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto bg-black/60 backdrop-blur-md border border-white/10 rounded-xl overflow-hidden"
        >
          <div className="grid md:grid-cols-2">
            {/* Map section */}
            <div className="h-[250px] md:h-full relative overflow-hidden border-b md:border-b-0 md:border-r border-white/10">
              <div className="absolute inset-0 bg-white/5 flex items-center justify-center">
                {/* Futuristic city grid/map */}
                <div className="w-full h-full bg-black/40 relative overflow-hidden">
                  {/* Grid pattern like a blueprint with perspective */}
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:20px_20px]"></div>
                  
                  {/* Map marker */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                    <motion.div 
                      className="w-4 h-4 bg-white rounded-full"
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [1, 0.8, 1]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      <div className="absolute -inset-2 border-2 border-white/30 rounded-full"></div>
                      <div className="absolute -inset-4 border border-white/10 rounded-full"></div>
                    </motion.div>
                  </div>
                  
                  {/* Animated radiating circles */}
                  <motion.div 
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 border border-white/30 rounded-full"
                    animate={{
                      scale: [1, 3, 1],
                      opacity: [0.2, 0, 0.2]
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeOut"
                    }}
                  />
                  
                  {/* Intersecting grid lines for futuristic feel */}
                  <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                    <div className="absolute top-1/3 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                    <div className="absolute top-2/3 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                    <div className="absolute top-0 left-0 h-full w-[1px] bg-gradient-to-b from-transparent via-white/20 to-transparent"></div>
                    <div className="absolute top-0 left-1/3 h-full w-[1px] bg-gradient-to-b from-transparent via-white/20 to-transparent"></div>
                    <div className="absolute top-0 left-2/3 h-full w-[1px] bg-gradient-to-b from-transparent via-white/20 to-transparent"></div>
                  </div>
                  
                  {/* Map coordinates */}
                  <div className="absolute bottom-4 right-4 text-xs text-white/50 font-mono">40.7128° N, 74.0060° W</div>
                </div>
              </div>
            </div>
            
            {/* Contact details with futuristic styling */}
            <div className="p-8 md:p-10 space-y-6">
              <motion.h3
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                viewport={{ once: true }}
                className="text-xl text-white font-bold tracking-wide mb-6 inline-block border-b border-white/30 pb-1"
              >
                CONTACT INFORMATION
              </motion.h3>
              
              <div className="space-y-5">
                <motion.div 
                  className="flex items-start gap-4"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  viewport={{ once: true }}
                >
                  <div className="w-10 h-10 bg-white/5 border border-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-white/70" />
                  </div>
                  <div>
                    <h4 className="text-white text-sm uppercase tracking-wider mb-1">Address</h4>
                    <p className="text-white/70 font-light">1428 Avant-Garde Avenue<br/>New York, NY 10001</p>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex items-start gap-4"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="w-10 h-10 bg-white/5 border border-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-white/70" />
                  </div>
                  <div>
                    <h4 className="text-white text-sm uppercase tracking-wider mb-1">Email</h4>
                    <p className="text-white/70 font-light">hello@futurestructure.com</p>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex items-start gap-4"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="w-10 h-10 bg-white/5 border border-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-white/70" />
                  </div>
                  <div>
                    <h4 className="text-white text-sm uppercase tracking-wider mb-1">Phone</h4>
                    <p className="text-white/70 font-light">+1 (212) 555-1234</p>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex items-start gap-4"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <div className="w-10 h-10 bg-white/5 border border-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-white/70" />
                  </div>
                  <div>
                    <h4 className="text-white text-sm uppercase tracking-wider mb-1">Working Hours</h4>
                    <p className="text-white/70 font-light">Monday – Friday: 9am – 6pm<br/>Saturday: By appointment</p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}