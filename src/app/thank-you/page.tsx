"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/layout/Navbar";
import { CheckCircle2 } from "lucide-react";

export default function ThankYou() {
    return (
        <div className="min-h-screen font-sans bg-background text-foreground">
            <Navbar />

            <div className="flex flex-col items-center justify-center min-h-[80vh] px-6 text-center">
                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-6 text-primary">
                    <CheckCircle2 className="w-8 h-8" />
                </div>

                <h1 className="text-4xl md:text-5xl font-heading font-semibold mb-6 tracking-tight">
                    Thank you for reaching out.
                </h1>

                <p className="text-xl text-muted-foreground max-w-xl mx-auto mb-10 leading-relaxed font-light">
                    We've received your request. A member of our team will contact you shortly to schedule your personalized demo.
                </p>

                <Link href="/">
                    <Button size="lg" className="rounded-full px-8 h-12 text-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-all">
                        Back to Home
                    </Button>
                </Link>
            </div>
        </div>
    );
}
