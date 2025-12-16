"use client";

import { Navbar } from "@/components/layout/Navbar";
import { PageHeader } from "@/components/layout/PageHeader";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, Zap, Shield, BarChart3, Bot } from "lucide-react";
import Link from "next/link";

export default function Product() {
    return (
        <div className="min-h-screen font-sans bg-background">
            <Navbar />

            <PageHeader
                title="The Operating System for Modern Clinics"
                description="OREN replaces fragmented tools with a single, intelligent workspace designed for automation."
                badge="Product Overview"
            />

            <section className="py-20">
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-16 items-center mb-32">
                        <div className="space-y-8">
                            <h2 className="text-3xl font-heading font-medium text-foreground">Unified Clinical Intelligence</h2>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                Stop jumping between tabs. OREN connects your communication, documentation, and patient data into one cohesive stream.
                            </p>
                            <ul className="space-y-4">
                                {[
                                    "Centralized Patient Context",
                                    "Automated Document Sorting",
                                    "Intelligent Task Prioritization",
                                    "Seamless EMR Synchronization"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-foreground">
                                        <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                            <Check className="w-3 h-3" />
                                        </div>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <Button size="lg" className="rounded-full px-8 bg-primary text-primary-foreground hover:bg-primary/90">Explore Features <ArrowRight className="ml-2 w-4 h-4" /></Button>
                        </div>
                        <div className="relative">
                            <div className="aspect-square rounded-3xl bg-gradient-to-br from-secondary to-background border border-white/10 shadow-2xl overflow-hidden relative group">
                                {/* Abstract UI representation */}
                                <div className="absolute inset-4 bg-card rounded-2xl shadow-lg p-6 flex flex-col gap-4 transition-transform duration-500 group-hover:scale-[1.02]">
                                    <div className="h-8 w-1/3 bg-secondary rounded-lg" />
                                    <div className="h-4 w-2/3 bg-secondary/50 rounded" />
                                    <div className="flex-1 bg-secondary/20 rounded-xl border border-dashed border-white/10 p-4 flex items-center justify-center">
                                        <Bot className="w-12 h-12 text-primary" />
                                    </div>
                                    <div className="h-12 w-full bg-secondary rounded-xl mt-auto" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { icon: Zap, title: "Instant Extraction", desc: "Upload any document. OREN extracts patient data, dates, and actionable items in seconds." },
                            { icon: Shield, title: "HIPAA Secure", desc: "Enterprise-grade encryption and audit logs ensure your patient data remains protected." },
                            { icon: BarChart3, title: "Practice Insights", desc: "Visualize operational bottlenecks and staff performance with real-time analytics." }
                        ].map((card, i) => (
                            <div key={i} className="p-8 rounded-2xl bg-card hover:bg-secondary/50 transition-colors border border-transparent hover:border-white/10 text-foreground">
                                <card.icon className="w-10 h-10 text-primary mb-6 opacity-80" />
                                <h3 className="text-xl font-medium mb-3">{card.title}</h3>
                                <p className="text-muted-foreground leading-relaxed">{card.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-24 bg-card text-foreground border-t border-white/5">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl md:text-4xl font-heading font-medium mb-8">Ready to modernize?</h2>
                    <Link href="/onboarding">
                        <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-10 h-14 text-lg">
                            Start Free Workspace
                        </Button>
                    </Link>
                </div>
            </section>
        </div>
    );
}
