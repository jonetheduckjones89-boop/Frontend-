"use client";

import { useRef } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/layout/Navbar";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import {
    ArrowRight,
    CheckCircle2,
    Database,
    Zap,
    Shield,
    FileText,
    Layout,
    Calendar,
    Mail,
    FileBox, // For Google Drive/Notion metaphors
    Lock,
    Globe,
    Share2
} from "lucide-react";

const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
};

const stagger = {
    visible: { transition: { staggerChildren: 0.1 } }
};

export default function Home() {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <div className="min-h-screen font-sans bg-background text-foreground selection:bg-primary/20">
            <Navbar />

            {/* 1. HERO SECTION */}
            <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
                {/* Dark Mode Gradient Background */}
                <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.05)_0%,transparent_40%)] opacity-60"></div>

                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto text-center space-y-8">
                        <motion.div
                            initial="hidden"
                            animate="visible"
                            variants={stagger}
                            className="space-y-6"
                        >
                            <motion.div variants={fadeIn} className="inline-block px-4 py-1.5 rounded-full bg-secondary/50 border border-white/5 text-sm font-medium text-muted-foreground mb-4">
                                Automated Patient Data Infrastructure
                            </motion.div>

                            <motion.h1
                                variants={fadeIn}
                                className="text-5xl md:text-7xl font-heading font-semibold tracking-tight leading-[1.1] text-foreground bg-clip-text text-transparent bg-gradient-to-pb from-white to-white/70"
                            >
                                The operating system for modern clinics.
                            </motion.h1>

                            <motion.p
                                variants={fadeIn}
                                className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed font-light"
                            >
                                OREN automates patient intake, data extraction, and clinical workflows with infrastructure-grade precision.
                            </motion.p>

                            <motion.div
                                variants={fadeIn}
                                className="flex flex-col sm:flex-row gap-4 justify-center pt-8"
                            >
                                <Link href="/onboarding">
                                    <Button size="lg" className="rounded-full px-10 h-14 text-base bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg hover:shadow-primary/20 transition-all duration-300">
                                        Book Demo
                                    </Button>
                                </Link>
                                <Link href="#product">
                                    <Button size="lg" variant="outline" className="rounded-full px-10 h-14 text-base border-white/10 text-muted-foreground hover:text-foreground hover:bg-secondary/50 bg-transparent">
                                        Learn More
                                    </Button>
                                </Link>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 2. PRODUCT OVERVIEW */}
            <section id="product" className="py-24 bg-card/30 border-y border-white/5">
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div className="order-2 md:order-1 relative">
                            {/* Abstract UI Representation */}
                            <div className="relative rounded-2xl bg-black border border-white/10 p-8 shadow-2xl overflow-hidden aspect-square flex flex-col justify-center">
                                <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-white/5 to-transparent opacity-50"></div>
                                <div className="space-y-4">
                                    <div className="h-4 w-2/3 bg-white/10 rounded animate-pulse" style={{ animationDuration: '3s' }}></div>
                                    <div className="h-4 w-full bg-white/5 rounded animate-pulse" style={{ animationDuration: '4s' }}></div>
                                    <div className="h-4 w-5/6 bg-white/5 rounded animate-pulse" style={{ animationDuration: '2.5s' }}></div>
                                    <div className="flex gap-3 pt-4">
                                        <div className="h-10 w-10 rounded-full bg-white/10"></div>
                                        <div className="space-y-2 flex-1 pt-1">
                                            <div className="h-3 w-1/3 bg-white/10 rounded"></div>
                                            <div className="h-3 w-1/4 bg-white/5 rounded"></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="absolute bottom-6 right-6 px-4 py-2 bg-zinc-900 rounded-lg shadow-sm border border-white/10 text-xs font-medium text-muted-foreground flex items-center gap-2">
                                    <Zap className="w-3 h-3 text-primary" />
                                    Processing Patient Data
                                </div>
                            </div>
                        </div>

                        <div className="order-1 md:order-2 space-y-8">
                            <h2 className="text-3xl md:text-4xl font-heading font-semibold text-foreground leading-tight">
                                Intelligent automation, <br />
                                built for scale.
                            </h2>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                OREN connects to your existing sources—emails, forms, EMPs—and intelligently structures unstructured patient data. It then triggers your clinical workflows automatically, reducing administrative burden by 80%.
                            </p>
                            <div className="space-y-4">
                                {[
                                    "Secure data extraction from any document",
                                    "Real-time synchronization with your EHR",
                                    "Automated patient communication drafts"
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                                        <span className="text-foreground font-medium">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. FEATURES */}
            <section id="features" className="py-24 bg-background">
                <div className="container mx-auto px-6">
                    <div className="text-center max-w-2xl mx-auto mb-20">
                        <h2 className="text-3xl md:text-4xl font-heading font-semibold mb-6 text-foreground">Core Capabilities</h2>
                        <p className="text-muted-foreground text-lg">
                            Engineered for reliability in high-stakes healthcare environments.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { icon: Zap, title: "Workflow Automation", desc: "Trigger actions instantly when new patient data arrives." },
                            { icon: Database, title: "Data Handling", desc: "Parse, clean, and standardize unstructured clinical notes." },
                            { icon: Lock, title: "Secure Integrations", desc: "Connects securely with your existing tech stack." },
                            { icon: Layout, title: "AI Operations", desc: "LLM-assisted triaging and summarizing of patient needs." },
                        ].map((feature, i) => (
                            <div key={i} className="group p-8 rounded-2xl bg-card border border-white/5 shadow-sm hover:border-white/10 hover:shadow-md transition-all duration-300">
                                <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center mb-6 text-foreground group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                                    <feature.icon className="w-6 h-6" />
                                </div>
                                <h3 className="text-lg font-semibold mb-3 text-foreground">{feature.title}</h3>
                                <p className="text-muted-foreground leading-relaxed text-sm">{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. USE CASES */}
            <section className="py-24 bg-card/30 border-y border-white/5">
                <div className="container mx-auto px-6">
                    <div className="mb-16">
                        <h2 className="text-3xl font-heading font-semibold mb-4 text-foreground">Built for scale</h2>
                        <p className="text-muted-foreground">Supporting diverse clinical operations.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { title: "High-Volume Clinics", desc: "Automate intake for 100+ patients daily without adding staff." },
                            { title: "Multi-Location Practices", desc: "Centralize data operations across all your satellite offices." },
                            { title: "Specialty Care", desc: "Handle complex referrals and pre-auth documentation instantly." }
                        ].map((uc, i) => (
                            <div key={i} className="p-8 rounded-2xl bg-background border-l-4 border-primary">
                                <h3 className="text-xl font-semibold mb-3 text-foreground">{uc.title}</h3>
                                <p className="text-muted-foreground text-sm leading-relaxed">{uc.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5. INTEGRATIONS */}
            <section className="py-24 bg-background overflow-hidden">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-8">
                            <h2 className="text-3xl md:text-4xl font-heading font-semibold text-foreground">
                                Works where you work.
                            </h2>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                OREN integrates natively with the tools your clinic already relies on. No rip-and-replace required.
                            </p>
                            <Link href="/onboarding">
                                <Button variant="link" className="px-0 text-primary font-medium hover:text-primary/80">
                                    See all integrations <ArrowRight className="w-4 h-4 ml-2" />
                                </Button>
                            </Link>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            {[
                                { icon: FileBox, name: "Google Drive" },
                                { icon: Mail, name: "Gmail" },
                                { icon: FileText, name: "Notion" },
                                { icon: Calendar, name: "Calendar" },
                            ].map((tool, i) => (
                                <div key={i} className="flex items-center gap-4 p-6 bg-card rounded-xl border border-white/5 shadow-sm">
                                    <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center text-foreground">
                                        <tool.icon className="w-5 h-5" />
                                    </div>
                                    <span className="font-medium text-foreground">{tool.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. HOW IT WORKS */}
            <section className="py-24 bg-card/30 border-y border-white/5">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-20">
                        <h2 className="text-3xl md:text-4xl font-heading font-semibold mb-6 text-foreground">How OREN Works</h2>
                    </div>

                    <div className="relative">
                        {/* Connecting Line */}
                        <div className="hidden md:block absolute top-1/2 left-0 w-full h-px bg-white/10 -z-10 -translate-y-1/2"></div>

                        <div className="grid md:grid-cols-4 gap-8">
                            {[
                                { step: "01", title: "Connect", desc: "Securely link your data sources." },
                                { step: "02", title: "Extract", desc: "AI structures incoming patient data." },
                                { step: "03", title: "Automate", desc: "Workflows trigger automatically." },
                                { step: "04", title: "Insight", desc: "View dashboards and export reports." }
                            ].map((item, i) => (
                                <div key={i} className="bg-background p-6 rounded-2xl border border-white/5 shadow-sm text-center">
                                    <div className="w-12 h-12 mx-auto bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold mb-6 text-lg relative z-10">
                                        {item.step}
                                    </div>
                                    <h3 className="text-lg font-semibold mb-2 text-foreground">{item.title}</h3>
                                    <p className="text-muted-foreground text-sm">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 7. SECURITY & TRUST */}
            <section className="py-20 bg-secondary/20">
                <div className="container mx-auto px-6 text-center max-w-3xl">
                    <Shield className="w-12 h-12 mx-auto mb-6 text-muted-foreground" />
                    <h2 className="text-3xl font-heading font-semibold mb-6 text-foreground">Designed for Trust & Compliance</h2>
                    <p className="text-muted-foreground text-lg leading-relaxed mb-10">
                        Your patient data is encrypted at rest and in transit. OREN enables HIPAA-compliant workflows, ensuring your organization meets the highest standards of data privacy and security.
                    </p>
                    <div className="flex flex-wrap justify-center gap-8 text-sm font-medium text-muted-foreground">
                        <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary" /> End-to-end Encryption</div>
                        <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary" /> Audit Logs</div>
                        <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary" /> Role-Based Access</div>
                    </div>
                </div>
            </section>

            {/* 8. FINAL CTA */}
            <section className="py-32 bg-background">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-4xl md:text-5xl font-heading font-semibold mb-8 text-foreground tracking-tight">
                        Ready to modernize your clinic?
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-12 font-light">
                        Join the forward-thinking healthcare organizations running on OREN.
                    </p>
                    <Link href="/onboarding">
                        <Button size="lg" className="rounded-full px-12 h-16 text-lg bg-primary text-primary-foreground hover:bg-primary/90 shadow-xl hover:shadow-2xl transition-all duration-300">
                            Book Demo
                        </Button>
                    </Link>
                </div>
            </section>

            {/* FOOTER */}
            <footer className="py-16 bg-card border-t border-white/5">
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-4 gap-12 mb-12">
                        <div className="col-span-1 md:col-span-1">
                            <div className="text-xl font-heading font-bold text-foreground mb-4">OREN</div>
                            <p className="text-muted-foreground text-sm leading-relaxed">
                                Infrastructure-grade automation for the modern era.
                            </p>
                        </div>
                        <div>
                            <h4 className="font-semibold text-foreground mb-4">Product</h4>
                            <ul className="space-y-3 text-sm text-muted-foreground">
                                <li><Link href="#features" className="hover:text-foreground transition-colors">Features</Link></li>
                                <li><Link href="#product" className="hover:text-foreground transition-colors">Integrations</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-semibold text-foreground mb-4">Company</h4>
                            <ul className="space-y-3 text-sm text-muted-foreground">
                                <li><Link href="#" className="hover:text-foreground transition-colors">About</Link></li>
                                <li><Link href="#" className="hover:text-foreground transition-colors">Customers</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-semibold text-foreground mb-4">Legal</h4>
                            <ul className="space-y-3 text-sm text-muted-foreground">
                                <li><Link href="#" className="hover:text-foreground transition-colors">Privacy</Link></li>
                                <li><Link href="#" className="hover:text-foreground transition-colors">Terms</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-xs text-muted-foreground">© 2025 OREN. All rights reserved.</p>
                        <div className="flex gap-6">
                            <Globe className="w-4 h-4 text-muted-foreground hover:text-foreground cursor-pointer" />
                            <Share2 className="w-4 h-4 text-muted-foreground hover:text-foreground cursor-pointer" />
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
