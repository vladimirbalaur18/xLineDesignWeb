import { useState } from "react";
import { motion } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Bed, Bath, Grid, Expand, Calendar, Info, Send, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

// Property data
const properties = [
  {
    id: 1,
    title: "Modern Minimalist Villa",
    address: "1234 Skyline Drive, Los Angeles, CA",
    price: "$4,850,000",
    bedrooms: 5,
    bathrooms: 6,
    area: "4,320",
    yearBuilt: 2022,
    description: "An architectural masterpiece with panoramic ocean views, featuring open concept living spaces, a chef's kitchen, and a stunning infinity pool.",
    tags: ["Featured", "New Construction"],
    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&h=800",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&h=800",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&h=800",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&h=800",
    ]
  },
  {
    id: 2,
    title: "Sleek Downtown Penthouse",
    address: "500 Urban Heights, New York, NY",
    price: "$3,200,000",
    bedrooms: 3,
    bathrooms: 3.5,
    area: "2,850",
    yearBuilt: 2020,
    description: "Ultra-modern penthouse with floor-to-ceiling windows offering spectacular city views, smart home technology, and private rooftop terrace.",
    tags: ["Penthouse", "Smart Home"],
    images: [
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=1200&h=800",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=1200&h=800",
      "https://images.unsplash.com/photo-1560448204-603b3fc33ddc?w=1200&h=800",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200&h=800",
    ]
  },
  {
    id: 3,
    title: "Geometric Glass Mansion",
    address: "789 Lakefront Road, Austin, TX",
    price: "$5,975,000",
    bedrooms: 6,
    bathrooms: 7,
    area: "6,200",
    yearBuilt: 2021,
    description: "Innovative geometric design with glass walls that connect indoor-outdoor living spaces, featuring a home theater, wine cellar, and meditation garden.",
    tags: ["Luxury", "Waterfront"],
    images: [
      "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=1200&h=800",
      "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?w=1200&h=800",
      "https://images.unsplash.com/photo-1560448075-bb485b067938?w=1200&h=800",
      "https://images.unsplash.com/photo-1618219944342-824e40a13285?w=1200&h=800",
    ]
  },
  {
    id: 4,
    title: "Sustainable Forest Retreat",
    address: "1545 Mountain View, Boulder, CO",
    price: "$2,795,000",
    bedrooms: 4,
    bathrooms: 4,
    area: "3,600",
    yearBuilt: 2023,
    description: "Net-zero energy home crafted from sustainable materials, featuring solar arrays, rainwater harvesting, and biophilic design elements throughout.",
    tags: ["Eco-Friendly", "Mountain View"],
    images: [
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1200&h=800",
      "https://images.unsplash.com/photo-1560184897-ae75f418493e?w=1200&h=800",
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=1200&h=800",
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=1200&h=800",
    ]
  },
];

// Form validation schema
const consultationFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().min(6, { message: "Please enter a valid phone number." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
  propertyInterest: z.string().optional(),
});

type ConsultationFormValues = z.infer<typeof consultationFormSchema>;

export default function PropertyForSale() {
  const [selectedProperty, setSelectedProperty] = useState<number | null>(null);
  const [openDialog, setOpenDialog] = useState(false);
  const [openConsultationForm, setOpenConsultationForm] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  
  const form = useForm<ConsultationFormValues>({
    resolver: zodResolver(consultationFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
      propertyInterest: "",
    },
  });
  
  const onSubmit = (data: ConsultationFormValues) => {
    console.log("Form submitted with data:", data);
    setFormSubmitted(true);
    // In a real application, this would send the data to a server
    setTimeout(() => {
      form.reset();
      setOpenConsultationForm(false);
      setFormSubmitted(false);
    }, 2000);
  };

  return (
    <section id="properties" className="py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/90 to-black -z-10"></div>
      
      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:3rem_3rem] -z-10"></div>
      
      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center relative"
        >
          {/* Decorative elements */}
          <motion.div
            className="absolute -top-8 left-1/2 -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-white/70 to-transparent"
            initial={{ scaleX: 0, opacity: 0 }}
            whileInView={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          />
          
          {/* Section heading with modern styling */}
          <div className="relative inline-block">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 tracking-tight uppercase relative">
              <motion.span 
                className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80 relative z-10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                SIGNATURE PROPERTIES
              </motion.span>
              
              {/* Underline */}
              <motion.span 
                className="absolute -bottom-2 left-0 h-[2px] bg-gradient-to-r from-white via-white/80 to-transparent"
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              />
              
              {/* Vertical accents */}
              <div className="absolute -left-4 top-0 h-full w-[1px] bg-white/30"></div>
              <div className="absolute -right-4 top-0 h-full w-[1px] bg-white/30"></div>
            </h2>
          </div>
          
          <motion.p 
            className="text-gray-300 max-w-2xl mx-auto font-light tracking-wide backdrop-blur-sm py-2 px-4 border-l border-r border-white/10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Exclusive architectural masterpieces currently available for discerning buyers.
            Click on any property to view detailed images.
          </motion.p>
        </motion.div>

        {/* Properties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 mb-16">
          {properties.map((property) => (
            <Dialog key={property.id} open={openDialog && selectedProperty === property.id} onOpenChange={(open) => {
              setOpenDialog(open);
              if (!open) setSelectedProperty(null);
            }}>
              <DialogTrigger asChild>
                <motion.div 
                  className="group relative cursor-pointer bg-black/40 backdrop-blur-sm border border-white/10 hover:border-white/30 transition-all duration-300 rounded-sm overflow-hidden"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6 }}
                  whileHover={{ 
                    y: -5,
                    boxShadow: "0 15px 30px -10px rgba(0, 0, 0, 0.5)",
                  }}
                  onClick={() => {
                    setSelectedProperty(property.id);
                    setOpenDialog(true);
                  }}
                >
                  {/* Property image */}
                  <div className="aspect-[4/3] relative overflow-hidden">
                    <img 
                      src={property.images[0]} 
                      alt={property.title}
                      className="object-cover w-full h-full transition-all duration-700 group-hover:scale-110"
                    />
                    
                    {/* Overlay gradient with grid pattern */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20 group-hover:opacity-80 transition-opacity">
                      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:20px_20px] opacity-30"></div>
                    </div>
                    
                    {/* Price tag */}
                    <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-md py-1 px-3 border border-white/20">
                      <span className="text-white font-bold">{property.price}</span>
                    </div>
                    
                    {/* Badge tags */}
                    <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                      {property.tags.map((tag, index) => (
                        <Badge 
                          key={index} 
                          variant="outline" 
                          className="bg-black/70 backdrop-blur-sm border-white/30 text-white text-xs"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    
                    {/* Expand icon */}
                    <div className="absolute bottom-4 right-4 bg-black/50 backdrop-blur-sm p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform group-hover:translate-y-0 translate-y-2 border border-white/20">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15 3H21M21 3V9M21 3L14 10M9 21H3M3 21V15M3 21L10 14" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </div>

                  {/* Property details */}
                  <div className="p-4">
                    <h3 className="text-lg font-bold text-white mb-1 transition-colors group-hover:text-white/90">{property.title}</h3>
                    <div className="flex items-center text-white/60 text-sm mb-4">
                      <MapPin className="w-3.5 h-3.5 mr-1" />
                      <span className="truncate">{property.address}</span>
                    </div>
                    
                    {/* Specifications */}
                    <div className="grid grid-cols-4 gap-2 py-2 border-y border-white/10">
                      <div className="flex flex-col items-center">
                        <Bed className="w-4 h-4 text-white/70 mb-1" />
                        <span className="text-white text-sm">{property.bedrooms}</span>
                      </div>
                      <div className="flex flex-col items-center">
                        <Bath className="w-4 h-4 text-white/70 mb-1" />
                        <span className="text-white text-sm">{property.bathrooms}</span>
                      </div>
                      <div className="flex flex-col items-center">
                        <Grid className="w-4 h-4 text-white/70 mb-1" />
                        <span className="text-white text-sm">{property.area}</span>
                      </div>
                      <div className="flex flex-col items-center">
                        <Calendar className="w-4 h-4 text-white/70 mb-1" />
                        <span className="text-white text-sm">{property.yearBuilt}</span>
                      </div>
                    </div>
                    
                    {/* View more button indicator */}
                    <div className="flex items-center justify-between mt-4">
                      <div className="text-white/70 text-xs">Click to view gallery</div>
                      <motion.div 
                        className="w-8 h-[1px] bg-white/50"
                        initial={{ width: 0 }}
                        whileInView={{ width: 32 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </div>
                </motion.div>
              </DialogTrigger>
              
              <DialogContent className="sm:max-w-5xl bg-black/95 border-white/10 p-4">
                <DialogTitle className="text-xl font-bold text-white mb-1">
                  {property.title}
                </DialogTitle>
                <DialogDescription className="text-white/70 mb-6">
                  {property.address} - {property.price}
                </DialogDescription>

                {/* Image Carousel */}
                <div className="mb-8">
                  <Carousel className="w-full">
                    <CarouselContent>
                      {property.images.map((image, index) => (
                        <CarouselItem key={index}>
                          <div className="relative aspect-[16/9] overflow-hidden rounded-sm border border-white/10">
                            <img 
                              src={image} 
                              alt={`${property.title} - Image ${index + 1}`}
                              className="object-cover w-full h-full"
                            />
                          </div>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <div className="absolute top-1/2 left-4 -translate-y-1/2 z-10">
                      <CarouselPrevious className="bg-black/70 border-white/30 hover:bg-white/10" />
                    </div>
                    <div className="absolute top-1/2 right-4 -translate-y-1/2 z-10">
                      <CarouselNext className="bg-black/70 border-white/30 hover:bg-white/10" />
                    </div>
                  </Carousel>
                </div>
                
                {/* Property Details */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-white text-lg font-semibold mb-4 flex items-center gap-2">
                      <Info className="w-5 h-5 text-white/70" />
                      Property Details
                    </h4>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex items-center">
                        <Bed className="w-5 h-5 text-white/70 mr-2" />
                        <div>
                          <div className="text-white/50 text-xs">Bedrooms</div>
                          <div className="text-white">{property.bedrooms}</div>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <Bath className="w-5 h-5 text-white/70 mr-2" />
                        <div>
                          <div className="text-white/50 text-xs">Bathrooms</div>
                          <div className="text-white">{property.bathrooms}</div>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <Expand className="w-5 h-5 text-white/70 mr-2" />
                        <div>
                          <div className="text-white/50 text-xs">Area (sq ft)</div>
                          <div className="text-white">{property.area}</div>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <Calendar className="w-5 h-5 text-white/70 mr-2" />
                        <div>
                          <div className="text-white/50 text-xs">Year Built</div>
                          <div className="text-white">{property.yearBuilt}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-white text-lg font-semibold mb-4">Description</h4>
                    <p className="text-white/70">{property.description}</p>
                    
                    <div className="mt-6">
                      <Button variant="outline" className="border-white/30 text-white hover:bg-white hover:text-black">
                        Request More Information
                      </Button>
                    </div>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
        
        {/* Call to action */}
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="bg-black/30 backdrop-blur-sm border border-white/10 p-8 rounded-sm relative overflow-hidden">
            {/* Design elements */}
            <div className="absolute top-0 left-0 w-16 h-16 border-t border-l border-white/20"></div>
            <div className="absolute bottom-0 right-0 w-16 h-16 border-b border-r border-white/20"></div>
            
            <h3 className="text-2xl font-bold text-white mb-4">Custom Architectural Design</h3>
            <p className="text-white/70 mb-6 max-w-2xl mx-auto">
              Our architectural firm specializes in creating bespoke properties tailored to your vision and lifestyle. Contact our team to discuss your dream home project.
            </p>
            <Button 
              className="bg-white text-black hover:bg-white/90 hover:text-black"
              onClick={() => setOpenConsultationForm(true)}
            >
              Schedule A Consultation
            </Button>
          </div>
        </motion.div>
        
        {/* Consultation form dialog */}
        <Dialog open={openConsultationForm} onOpenChange={setOpenConsultationForm}>
          <DialogContent className="sm:max-w-md bg-black/95 border-white/10">
            <div className="absolute top-0 right-0 p-3">
              <Button 
                variant="ghost" 
                size="icon" 
                className="text-white/70 hover:text-white hover:bg-white/10" 
                onClick={() => setOpenConsultationForm(false)}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
            
            <DialogTitle className="text-xl font-bold text-white">
              Schedule Your Consultation
            </DialogTitle>
            <DialogDescription className="text-white/70">
              Complete the form below and our team will contact you to arrange a personal consultation.
            </DialogDescription>
            
            {formSubmitted ? (
              <div className="py-6 text-center">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-white/10"
                >
                  <Send className="h-6 w-6 text-white" />
                </motion.div>
                <h3 className="mb-2 text-lg font-semibold text-white">Consultation Request Sent</h3>
                <p className="text-white/70">
                  Thank you for your interest. Our team will be in touch with you shortly to discuss your project.
                </p>
              </div>
            ) : (
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 py-4">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-white">Full Name</Label>
                  <Input
                    id="name"
                    className="bg-black/50 border-white/20 text-white placeholder:text-white/50 focus:border-white"
                    placeholder="Enter your full name"
                    {...form.register("name")}
                  />
                  {form.formState.errors.name && (
                    <p className="text-red-400 text-xs mt-1">{form.formState.errors.name.message}</p>
                  )}
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-white">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    className="bg-black/50 border-white/20 text-white placeholder:text-white/50 focus:border-white"
                    placeholder="Enter your email"
                    {...form.register("email")}
                  />
                  {form.formState.errors.email && (
                    <p className="text-red-400 text-xs mt-1">{form.formState.errors.email.message}</p>
                  )}
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-white">Phone Number</Label>
                  <Input
                    id="phone"
                    className="bg-black/50 border-white/20 text-white placeholder:text-white/50 focus:border-white"
                    placeholder="Enter your phone number"
                    {...form.register("phone")}
                  />
                  {form.formState.errors.phone && (
                    <p className="text-red-400 text-xs mt-1">{form.formState.errors.phone.message}</p>
                  )}
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="propertyInterest" className="text-white">Property Interest (Optional)</Label>
                  <Input
                    id="propertyInterest"
                    className="bg-black/50 border-white/20 text-white placeholder:text-white/50 focus:border-white"
                    placeholder="Which property are you interested in?"
                    {...form.register("propertyInterest")}
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-white">Your Message</Label>
                  <Textarea
                    id="message"
                    className="min-h-[100px] bg-black/50 border-white/20 text-white placeholder:text-white/50 focus:border-white"
                    placeholder="Tell us about your vision or any questions you may have..."
                    {...form.register("message")}
                  />
                  {form.formState.errors.message && (
                    <p className="text-red-400 text-xs mt-1">{form.formState.errors.message.message}</p>
                  )}
                </div>
                
                <DialogFooter className="pt-4 border-t border-white/10">
                  <Button 
                    type="submit" 
                    className="w-full bg-white text-black hover:bg-white/90"
                    disabled={form.formState.isSubmitting}
                  >
                    {form.formState.isSubmitting ? (
                      <div className="flex items-center justify-center">
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Processing...
                      </div>
                    ) : (
                      <span className="flex items-center justify-center">
                        <Send className="mr-2 h-4 w-4" /> Send Request
                      </span>
                    )}
                  </Button>
                </DialogFooter>
              </form>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}