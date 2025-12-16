import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface PageHeaderProps {
  title: string;
  description: string;
  badge?: string;
  className?: string;
}

export function PageHeader({ title, description, badge, className }: PageHeaderProps) {
  return (
    <div className={cn("relative pt-32 pb-20 overflow-hidden", className)}>
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          {badge && (
            <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-medium text-primary mb-6">
              {badge}
            </div>
          )}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-medium tracking-tight text-foreground mb-6 leading-[1.1]">
            {title}
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed font-light max-w-2xl">
            {description}
          </p>
        </motion.div>
      </div>
      
      {/* Background Decor */}
      <div className="absolute top-0 right-0 -z-10 opacity-30 pointer-events-none">
         <div className="w-[600px] h-[600px] bg-gradient-to-bl from-primary/10 to-transparent rounded-full blur-3xl translate-x-1/3 -translate-y-1/3" />
      </div>
    </div>
  );
}
