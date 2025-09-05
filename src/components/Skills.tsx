import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skillCategories = [
    {
      title: "Automation & Integration",
      skills: ["Clay", "n8n", "Zapier", "Make", "API Integrations"],
      icon: "🔗",
      description: "Building seamless workflows and integrations",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "Campaign Management",
      skills: ["Campaign Setup", "Campaign Management", "Lead Generation", "B2B Marketing"],
      icon: "📊",
      description: "End-to-end campaign optimization",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "Data & AI",
      skills: ["Data Scraping", "Python", "AI Implementation", "Advanced Analytics"],
      icon: "🤖",
      description: "Leveraging data and AI for growth",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      title: "Technical Skills",
      skills: ["API Development", "Web Scraping", "Marketing Automation", "CRM Integration"],
      icon: "⚡",
      description: "Technical solutions for marketing challenges",
      gradient: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section className="py-20 px-4 bg-background relative">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-40 h-40 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-20 w-60 h-60 bg-primary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 container max-w-6xl mx-auto">
        <div className="text-center space-y-6 mb-16 animate-fade-in-up">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-card rounded-full border border-primary/20">
            <span className="text-sm text-muted-foreground">💼 My Expertise</span>
          </div>
          <h2 className="text-5xl lg:text-6xl font-bold text-foreground">
            Skills & <span className="bg-gradient-primary bg-clip-text text-transparent">Technologies</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Specialized in modern marketing technology and automation tools that drive real business results
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <Card 
              key={category.title}
              className="group bg-gradient-card shadow-card hover:shadow-neon transition-all duration-500 hover:scale-105 animate-fade-in-up border border-primary/10 hover:border-primary/30 relative overflow-hidden"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Hover effect background */}
              <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
              
              <CardHeader className="relative z-10">
                <div className="flex items-center gap-4">
                  <div className="p-4 bg-gradient-primary rounded-2xl text-primary-foreground shadow-glow group-hover:shadow-neon transition-all duration-500 transform group-hover:scale-110">
                    <span className="text-2xl">{category.icon}</span>
                  </div>
                  <div className="space-y-2">
                    <CardTitle className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                      {category.title}
                    </CardTitle>
                    <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                      {category.description}
                    </p>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="relative z-10">
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skill}
                      variant="secondary"
                      className="bg-gradient-hero border border-primary/20 text-foreground hover:bg-gradient-primary hover:text-primary-foreground hover:border-primary/50 transition-all duration-300 cursor-default transform hover:scale-110 px-3 py-1 text-sm font-medium shadow-sm hover:shadow-glow"
                      style={{ animationDelay: `${(index * 0.2) + (skillIndex * 0.1)}s` }}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
                
                {/* Progress indicator */}
                <div className="mt-6 pt-4 border-t border-primary/10">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Proficiency</span>
                    <span className="text-primary font-semibold">Expert</span>
                  </div>
                  <div className="mt-2 h-2 bg-gradient-hero rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-primary rounded-full w-full transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-1000 ease-out"></div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Achievement cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          {[
            { number: "50+", label: "Projects", icon: "🚀" },
            { number: "100%", label: "Success Rate", icon: "🎯" },
            { number: "24/7", label: "Support", icon: "⏰" },
            { number: "1yr", label: "Experience", icon: "📈" }
          ].map((stat, index) => (
            <Card key={stat.label} className="bg-gradient-card border border-primary/10 hover:border-primary/30 transition-all duration-300 hover:scale-105 animate-fade-in-up" style={{ animationDelay: `${0.8 + (index * 0.1)}s` }}>
              <CardContent className="p-6 text-center space-y-2">
                <div className="text-2xl">{stat.icon}</div>
                <div className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">{stat.number}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;