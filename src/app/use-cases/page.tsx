"use client";

import { Navbar } from "@/components/layout/Navbar";
import { PageHeader } from "@/components/layout/PageHeader";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function UseCases() {
    return (
        <div className="min-h-screen font-sans bg-background">
            <Navbar />

            <PageHeader
                title="Built for Scale"
                description="Supporting diverse clinical operations from single practices to large hospital networks."
                badge="Use Cases"
            />

            <section className="py-24 bg-card/30 border-y border-white/5">
                <div className="container mx-auto px-6">
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

            <section className="py-24 bg-background text-foreground">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl md:text-4xl font-heading font-medium mb-8">Modernize your workflow today.</h2>
                    <Link href="/onboarding">
                        <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-10 h-14 text-lg">
                            Get Started
                        </Button>
                    </Link>
                </div>
            </section>
        </div>
    );
}
