"use client";

import { Navbar } from "@/components/layout/Navbar";
import { PageHeader } from "@/components/layout/PageHeader";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Zap, Database, Lock, Layout } from "lucide-react";

export default function Features() {
    return (
        <div className="min-h-screen font-sans bg-background">
            <Navbar />

            <PageHeader
                title="Core Capabilities"
                description="Engineered for reliability in high-stakes healthcare environments. OREN provides the tools you need to automate confidently."
                badge="Features"
            />

            <section className="py-24 bg-background">
                <div className="container mx-auto px-6">
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

            <section className="py-24 bg-card text-foreground border-t border-white/5">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl md:text-4xl font-heading font-medium mb-8">Ready to see it in action?</h2>
                    <Link href="/onboarding">
                        <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-10 h-14 text-lg">
                            Book Demo
                        </Button>
                    </Link>
                </div>
            </section>
        </div>
    );
}
