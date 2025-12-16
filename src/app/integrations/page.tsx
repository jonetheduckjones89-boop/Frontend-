"use client";

import { Navbar } from "@/components/layout/Navbar";
import { PageHeader } from "@/components/layout/PageHeader";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FileBox, Mail, FileText, Calendar, ArrowRight } from "lucide-react";

export default function Integrations() {
    return (
        <div className="min-h-screen font-sans bg-background">
            <Navbar />

            <PageHeader
                title="Works where you work"
                description="OREN integrates natively with the tools your clinic already relies on. No rip-and-replace required."
                badge="Integrations"
            />

            <section className="py-24 bg-background">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { icon: FileBox, name: "Google Drive" },
                            { icon: Mail, name: "Gmail" },
                            { icon: FileText, name: "Notion" },
                            { icon: Calendar, name: "Google Calendar" },
                            { icon: Mail, name: "Outlook" },
                            { icon: FileText, name: "DrChrono" },
                            { icon: FileBox, name: "Dropbox" },
                            { icon: Calendar, name: "Cal.com" },
                        ].map((tool, i) => (
                            <div key={i} className="flex items-center gap-4 p-6 bg-card rounded-xl border border-white/5 shadow-sm hover:border-white/20 transition-all">
                                <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center text-foreground">
                                    <tool.icon className="w-5 h-5" />
                                </div>
                                <span className="font-medium text-foreground">{tool.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-24 bg-secondary/10 text-foreground border-t border-white/5">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl md:text-4xl font-heading font-medium mb-8">Don't see your tool?</h2>
                    <p className="text-muted-foreground mb-8">We build custom integrations for enterprise partners.</p>
                    <Link href="/onboarding">
                        <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-10 h-14 text-lg">
                            Contact Sales
                        </Button>
                    </Link>
                </div>
            </section>
        </div>
    );
}
