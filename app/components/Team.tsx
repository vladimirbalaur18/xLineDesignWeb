"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "./ui/card";
import {
  Mail,
  Linkedin,
  Twitter,
  Award,
  Building,
  GraduationCap,
} from "lucide-react";

const teamMembers = [
  {
    id: 1,
    name: "Alexander Mitchell",
    position: "Principal Architect",
    bio: "Alexander has over 25 years of experience in architectural design with a focus on sustainable commercial projects.",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&h=256&q=80",
    socialLinks: {
      email: "alex@nexusarchitects.com",
      linkedin: "#",
      twitter: "#",
    },
    qualification: "M.Arch, Harvard GSD",
    specialty: "Sustainable Design",
    awards: "AIA Gold Medal",
  },
  {
    id: 2,
    name: "Sophia Chen",
    position: "Design Director",
    bio: "Sophia leads our design team with her innovative approach and attention to detail in creating memorable spaces.",
    image:
      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&h=256&q=80",
    socialLinks: {
      email: "sophia@nexusarchitects.com",
      linkedin: "#",
      twitter: "#",
    },
    qualification: "M.Arch, Yale",
    specialty: "Interior Architecture",
    awards: "Pritzker Prize Nominee",
  },
  {
    id: 3,
    name: "Marcus Johnson",
    position: "Technical Director",
    bio: "Marcus ensures our designs are structurally sound and meet all technical requirements while maintaining design integrity.",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&h=256&q=80",
    socialLinks: {
      email: "marcus@nexusarchitects.com",
      linkedin: "#",
      twitter: "#",
    },
    qualification: "M.S. Structural Engineering",
    specialty: "Complex Structures",
    awards: "Engineering Excellence Award",
  },
  {
    id: 4,
    name: "Olivia Rodrigues",
    position: "Sustainability Lead",
    bio: "Olivia specializes in integrating sustainable practices and green technologies into our architectural designs.",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&h=256&q=80",
    socialLinks: {
      email: "olivia@nexusarchitects.com",
      linkedin: "#",
      twitter: "#",
    },
    qualification: "LEED AP BD+C",
    specialty: "Green Building",
    awards: "Green Design Innovator",
  },
];

export default function Team() {
  const [hoveredMember, setHoveredMember] = useState<number | null>(null);

  return (
    <section id="team" className="py-24 bg-gray-950">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-3">
            <span className="text-primary">Cunoaște echipa</span> noastră
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Suntem o echipă de profesioniști pasionați, fiecare cu expertiza sa
            unică. Împreună, transformăm viziuni în realitate prin design
            inovator și sustenabil.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              onMouseEnter={() => setHoveredMember(member.id)}
              onMouseLeave={() => setHoveredMember(null)}
            >
              <Card className="bg-gray-900/50 border-gray-800 overflow-hidden hover:border-primary/50 transition-all duration-300">
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="object-cover w-full h-full transition-transform duration-500"
                    style={{
                      transform:
                        hoveredMember === member.id
                          ? "scale(1.05)"
                          : "scale(1)",
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/30 to-transparent opacity-70"></div>

                  {/* Social links */}
                  <motion.div
                    className="absolute bottom-4 left-0 right-0 flex justify-center gap-3"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{
                      opacity: hoveredMember === member.id ? 1 : 0,
                      y: hoveredMember === member.id ? 0 : 10,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <a
                      href={`mailto:${member.socialLinks.email}`}
                      className="bg-gray-900/80 p-2 rounded-full hover:bg-primary/90 transition-colors"
                    >
                      <Mail className="h-5 w-5" />
                    </a>
                    <a
                      href={member.socialLinks.linkedin}
                      className="bg-gray-900/80 p-2 rounded-full hover:bg-[#0077B5]/90 transition-colors"
                    >
                      <Linkedin className="h-5 w-5" />
                    </a>
                    <a
                      href={member.socialLinks.twitter}
                      className="bg-gray-900/80 p-2 rounded-full hover:bg-[#1DA1F2]/90 transition-colors"
                    >
                      <Twitter className="h-5 w-5" />
                    </a>
                  </motion.div>
                </div>

                <CardContent className="p-5">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-primary text-sm mb-3">{member.position}</p>
                  <p className="text-gray-400 text-sm mb-4">{member.bio}</p>

                  <div className="grid grid-cols-1 gap-2 text-xs text-gray-400">
                    <div className="flex items-center gap-2">
                      <GraduationCap className="h-4 w-4 text-gray-500" />
                      <span>{member.qualification}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Building className="h-4 w-4 text-gray-500" />
                      <span>{member.specialty}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Award className="h-4 w-4 text-gray-500" />
                      <span>{member.awards}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
