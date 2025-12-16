"use client";

import { Navbar } from "@/components/layout/Navbar";
import { PageHeader } from "@/components/layout/PageHeader";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Book, FileText, Code } from "lucide-react";

export default function Docs() {
    return (
        <div className="min-h-screen font-sans bg-background">
            <Navbar />

            <PageHeader
                title="Documentation"
                description="Everything you need to integrate and extend OREN."
                badge="Resources"
            />

            <section className="py-24 bg-background">
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="p-8 rounded-2xl bg-card border border-white/5">
                            <Book className="w-8 h-8 text-primary mb-4" />
                            <h3 className="text-xl font-semibold text-foreground mb-2">Guides</h3>
                            <p className="text-muted-foreground mb-4">Step-by-step tutorials to set up your clinic.</p>
                            <Button variant="link" className="p-0 text-primary">Read Guides &rarr;</Button>
                        </div>
                        <div className="p-8 rounded-2xl bg-card border border-white/5">
                            <Code className="w-8 h-8 text-primary mb-4" />
                            <h3 className="text-xl font-semibold text-foreground mb-2">API Reference</h3>
                            <p className="text-muted-foreground mb-4">Detailed endpoints and object schemas.</p>
                            <Button variant="link" className="p-0 text-primary">View API &rarr;</Button>
                        </div>
                        <div className="p-8 rounded-2xl bg-card border border-white/5">
                            <FileText className="w-8 h-8 text-primary mb-4" />
                            <h3 className="text-xl font-semibold text-foreground mb-2">Changelog</h3>
                            <p className="text-muted-foreground mb-4">Latest updates and improvements.</p>
                            <Button variant="link" className="p-0 text-primary">See Updates &rarr;</Button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
