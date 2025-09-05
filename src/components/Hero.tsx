import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, Phone } from "lucide-react";
import profileImage from "/lovable-uploads/8316b308-ead0-4b44-9d19-1148f01a4646.png";

const Hero = () => {
  return (
    <section className="min-h-screen bg-gradient-secondary relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-primary rounded-full opacity-20 blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-primary rounded-full opacity-10 blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative z-10 container max-w-7xl mx-auto px-4 py-20 flex items-center min-h-screen">
        <div className="grid lg:grid-cols-2 gap-16 items-center w-full">
          {/* Content */}
          <div className="space-y-8 animate-slide-in-left">
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 bg-gradient-card rounded-full border border-primary/20 animate-pulse-glow">
                <div className="w-2 h-2 bg-primary rounded-full mr-3 animate-pulse"></div>
                <span className="text-sm text-muted-foreground">Marketing Manager @ Elf Owls • Helping 7 clients with GTM</span>
              </div>
              
              <h1 className="text-6xl lg:text-7xl font-bold text-foreground leading-tight">
                Hey, I'm{" "}
                <span className="bg-gradient-primary bg-clip-text text-transparent drop-shadow-glow">
                  Faiez
                </span>
              </h1>
              
              <div className="space-y-4">
                <h2 className="text-3xl lg:text-4xl font-semibold text-primary">
                  Digital Marketing Prodigy
                </h2>
                <p className="text-xl text-muted-foreground leading-relaxed max-w-xl">
                  At just 16, I'm revolutionizing B2B lead generation through cutting-edge automation, 
                  AI integration, and data-driven strategies. Age is just a number when passion drives results.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-gradient-primary hover:shadow-neon transition-all duration-500 text-lg px-8 py-6 font-semibold transform hover:scale-105"
              >
                <Mail className="mr-2 h-5 w-5" />
                Let's Work Together
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground hover:shadow-glow transition-all duration-500 text-lg px-8 py-6 font-semibold transform hover:scale-105"
              >
                <Phone className="mr-2 h-5 w-5" />
                WhatsApp Me
              </Button>
            </div>

            <div className="flex flex-wrap items-center gap-8 text-sm text-muted-foreground pt-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-gradient-primary rounded-full animate-pulse-glow"></div>
                <span>1+ Years Experience</span>
              </div>
              <div className="flex items-center gap-2">
                <span>🇵🇰</span>
                <span>Based in Pakistan</span>
              </div>
              <div className="flex items-center gap-2">
                <span>⚡</span>
                <span>Quick Turnaround</span>
              </div>
            </div>
          </div>

          {/* Profile Image with enhanced styling */}
          <div className="flex justify-center lg:justify-end animate-slide-in-right">
            <div className="relative group">
              {/* Outer glow effect */}
              <div className="absolute -inset-4 bg-gradient-primary rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500 animate-pulse-glow"></div>
              
              {/* Image container */}
              <Card className="relative p-2 bg-gradient-card shadow-neon hover:shadow-glow transition-all duration-700 transform hover:scale-105 border border-primary/20">
                <div className="relative overflow-hidden rounded-xl">
                  <img
                    src={profileImage}
                    alt="Faiez ul Abidin - Digital Marketing Expert"
                    className="w-80 h-80 lg:w-96 lg:h-96 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
                </div>
              </Card>
              
              {/* Floating badges */}
              <div className="absolute -top-4 -right-4 bg-gradient-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold shadow-neon animate-float">
                16 yo 🚀
              </div>
              <div className="absolute -bottom-4 -left-4 bg-gradient-card border border-primary/20 text-foreground px-4 py-2 rounded-full text-sm font-semibold shadow-glow animate-float" style={{ animationDelay: '0.5s' }}>
                B2B Expert 💼
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;