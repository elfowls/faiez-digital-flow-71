import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone } from "lucide-react";

const Contact = () => {
  const contactMethods = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      value: "hi@faiezulabidin.com",
      link: "mailto:hi@faiezulabidin.com",
      description: "Best for detailed project discussions"
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "WhatsApp / Mobile",
      value: "+92 300 1520209",
      link: "https://wa.me/923001520209",
      description: "Quick calls and instant messaging"
    }
  ];

  return (
    <section className="py-20 px-4 bg-background">
      <div className="container max-w-4xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
            Let's <span className="bg-gradient-primary bg-clip-text text-transparent">Connect</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to scale your business with smart digital marketing? 
            Let's discuss how I can help you generate more B2B leads.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {contactMethods.map((method, index) => (
            <Card 
              key={method.title}
              className="bg-gradient-card shadow-card hover:shadow-elegant transition-all duration-300 hover:scale-105 animate-fade-in border-0"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-gradient-primary rounded-lg text-primary-foreground">
                    {method.icon}
                  </div>
                  <div>
                    <CardTitle className="text-xl font-semibold text-foreground">
                      {method.title}
                    </CardTitle>
                    <p className="text-sm text-muted-foreground">
                      {method.description}
                    </p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-lg font-mono text-foreground">
                    {method.value}
                  </p>
                  <Button 
                    asChild 
                    className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-300"
                  >
                    <a href={method.link} target="_blank" rel="noopener noreferrer">
                      Contact via {method.title}
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Card className="bg-gradient-card shadow-elegant p-8 border-0 animate-fade-in">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-foreground">
                Ready to Get Started?
              </h3>
              <p className="text-muted-foreground">
                Whether you need lead generation, marketing automation, or custom integrations, 
                I'm here to help your business grow.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  asChild 
                  size="lg"
                  className="bg-gradient-primary hover:shadow-glow transition-all duration-300"
                >
                  <a href="mailto:hi@faiezulabidin.com">
                    <Mail className="mr-2 h-5 w-5" />
                    Send Email
                  </a>
                </Button>
                <Button 
                  asChild
                  variant="outline" 
                  size="lg"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                >
                  <a href="https://wa.me/923001520209" target="_blank" rel="noopener noreferrer">
                    <Phone className="mr-2 h-5 w-5" />
                    WhatsApp Now
                  </a>
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;