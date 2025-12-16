"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";

export default function Onboarding() {
    const router = useRouter();
    const [formData, setFormData] = useState({
        companyName: "",
        website: "",
        email: "",
        clinicType: "",
        currentTools: "",
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [errors, setErrors] = useState<Record<string, string>>({});

    const validateForm = () => {
        const newErrors: Record<string, string> = {};

        if (!formData.companyName.trim()) {
            newErrors.companyName = "Organization name is required";
        }

        if (!formData.website.trim()) {
            newErrors.website = "Website is required";
        } else if (!formData.website.match(/^https?:\/\/.+/)) {
            newErrors.website = "Please enter a valid URL (starting with http:// or https://)";
        }

        if (!formData.email.trim()) {
            newErrors.email = "Work email is required";
        } else if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
            newErrors.email = "Please enter a valid email address";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        setIsSubmitting(true);

        try {
            const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

            // Fallback if env var is missing during dev (though it should be there)
            const apiUrl = baseUrl ? `${baseUrl}/api/lead` : '/api/lead';

            const response = await fetch(apiUrl, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    clinic_name: formData.companyName,
                    website: formData.website,
                    email: formData.email,
                    clinic_type: formData.clinicType,
                }),
            });

            if (!response.ok) {
                throw new Error("Failed to submit");
            }

            router.push("/thank-you");
        } catch (error) {
            console.error("Submission error:", error);
            setErrors({ submit: "Something went wrong. Please try again." });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen bg-background flex items-center justify-center p-6 font-sans">
            <div className="w-full max-w-5xl bg-card rounded-[32px] shadow-2xl border border-white/5 overflow-hidden flex flex-col md:flex-row min-h-[80vh]">

                {/* Left Side - Brand & Value */}
                <div className="w-full md:w-2/5 bg-secondary text-foreground p-12 flex flex-col justify-between relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-primary/20 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>

                    <div className="relative z-10">
                        <Link href="/" className="text-2xl font-heading font-semibold tracking-tight mb-16 block text-foreground hover:opacity-90 transition-opacity">
                            OREN
                        </Link>
                        <h2 className="text-4xl font-medium mb-6 text-foreground leading-tight">Intelligent automation for modern clinics.</h2>
                        <div className="space-y-4">
                            <div className="flex items-start gap-4">
                                <div className="w-6 h-6 rounded-full bg-background flex items-center justify-center mt-1 shrink-0 text-primary">
                                    <Check className="w-3 h-3" />
                                </div>
                                <p className="text-muted-foreground font-light leading-relaxed">Automate patient data workflows</p>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="w-6 h-6 rounded-full bg-background flex items-center justify-center mt-1 shrink-0 text-primary">
                                    <Check className="w-3 h-3" />
                                </div>
                                <p className="text-muted-foreground font-light leading-relaxed">Secure, HIPAA-ready infrastructure</p>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="w-6 h-6 rounded-full bg-background flex items-center justify-center mt-1 shrink-0 text-primary">
                                    <Check className="w-3 h-3" />
                                </div>
                                <p className="text-muted-foreground font-light leading-relaxed">Seamless integration with existing tools</p>
                            </div>
                        </div>
                    </div>

                    <div className="relative z-10 mt-12 text-sm text-muted-foreground font-medium">
                        <p>Trusted by high-volume healthcare organizations.</p>
                    </div>
                </div>

                {/* Right Side - Form */}
                <div className="w-full md:w-3/5 p-10 md:p-16 overflow-y-auto bg-background/50">
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="max-w-md mx-auto space-y-8"
                    >
                        <div>
                            <h3 className="text-2xl font-semibold text-foreground mb-2">Get Started</h3>
                            <p className="text-muted-foreground">Tell us about your organization to book a demo.</p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="space-y-4">
                                <div>
                                    <Label htmlFor="company-name" className="text-foreground font-medium ml-1 mb-1.5 block">Organization Name</Label>
                                    <Input
                                        id="company-name"
                                        placeholder="e.g. Pacific Health Group"
                                        className="h-12 bg-secondary/50 border-white/10 focus:border-primary focus:ring-0 rounded-xl text-foreground placeholder:text-muted-foreground/50"
                                        value={formData.companyName}
                                        onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                                        disabled={isSubmitting}
                                    />
                                    {errors.companyName && <p className="text-sm text-red-500 mt-1 ml-1">{errors.companyName}</p>}
                                </div>

                                <div>
                                    <Label htmlFor="website" className="text-foreground font-medium ml-1 mb-1.5 block">Website</Label>
                                    <Input
                                        id="website"
                                        placeholder="https://..."
                                        className="h-12 bg-secondary/50 border-white/10 focus:border-primary focus:ring-0 rounded-xl text-foreground placeholder:text-muted-foreground/50"
                                        value={formData.website}
                                        onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                                        disabled={isSubmitting}
                                    />
                                    {errors.website && <p className="text-sm text-red-500 mt-1 ml-1">{errors.website}</p>}
                                </div>

                                <div>
                                    <Label htmlFor="clinic-type" className="text-foreground font-medium ml-1 mb-1.5 block">Clinic Type</Label>
                                    <Input
                                        id="clinic-type"
                                        placeholder="e.g. Dermatology, Multi-specialty..."
                                        className="h-12 bg-secondary/50 border-white/10 focus:border-primary focus:ring-0 rounded-xl text-foreground placeholder:text-muted-foreground/50"
                                        value={formData.clinicType}
                                        onChange={(e) => setFormData({ ...formData, clinicType: e.target.value })}
                                        disabled={isSubmitting}
                                    />
                                </div>

                                <div>
                                    <Label htmlFor="email" className="text-foreground font-medium ml-1 mb-1.5 block">Work Email</Label>
                                    <Input
                                        id="email"
                                        type="email"
                                        placeholder="name@organization.com"
                                        className="h-12 bg-secondary/50 border-white/10 focus:border-primary focus:ring-0 rounded-xl text-foreground placeholder:text-muted-foreground/50"
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        disabled={isSubmitting}
                                    />
                                    {errors.email && <p className="text-sm text-red-500 mt-1 ml-1">{errors.email}</p>}
                                </div>

                                <div className="pt-2">
                                    <Label htmlFor="current-tools" className="text-foreground font-medium ml-1 mb-1.5 block">Current Tools (Optional)</Label>
                                    <Textarea
                                        id="current-tools"
                                        placeholder="What EMR/EHR or software do you currently use?"
                                        className="min-h-[80px] bg-secondary/50 border-white/10 focus:border-primary focus:ring-0 rounded-xl resize-none text-foreground placeholder:text-muted-foreground/50"
                                        value={formData.currentTools}
                                        onChange={(e) => setFormData({ ...formData, currentTools: e.target.value })}
                                        disabled={isSubmitting}
                                    />
                                </div>
                            </div>

                            {errors.submit && <p className="text-sm text-red-500">{errors.submit}</p>}

                            <div className="flex items-center justify-between pt-4">
                                <Link href="/">
                                    <Button variant="ghost" type="button" disabled={isSubmitting} className="text-muted-foreground hover:text-foreground hover:bg-transparent px-0 font-normal">Back to Home</Button>
                                </Link>
                                <Button
                                    type="submit"
                                    className="px-8 h-12 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all duration-300 font-medium"
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? "Processing..." : "Book Demo"}
                                    {!isSubmitting && <ArrowRight className="ml-2 w-4 h-4" />}
                                </Button>
                            </div>
                        </form>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
