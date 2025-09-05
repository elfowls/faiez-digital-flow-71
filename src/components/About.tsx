import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const stats = [
    { number: "16", label: "Years Old", subtitle: "Young & Ambitious", color: "from-purple-500 to-pink-500" },
    { number: "1+", label: "Year Experience", subtitle: "Started young, thinking big", color: "from-blue-500 to-cyan-500" },
    { number: "100%", label: "Dedication", subtitle: "Committed to excellence", color: "from-green-500 to-emerald-500" },
    { number: "24/7", label: "Availability", subtitle: "Always ready to help", color: "from-orange-500 to-red-500" }
  ];

  const achievements = [
    { icon: "🏆", title: "Top Performer", desc: "Consistently delivering results" },
    { icon: "⚡", title: "Fast Turnaround", desc: "Quick project completion" },
    { icon: "🎯", title: "Precision Focus", desc: "Targeted B2B strategies" },
    { icon: "🚀", title: "Growth Mindset", desc: "Always learning & improving" }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-hero relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-10 right-20 w-32 h-32 bg-primary/10 rounded-full blur-2xl animate-float"></div>
        <div className="absolute bottom-20 left-20 w-48 h-48 bg-primary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10 container max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8 animate-slide-in-left">
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 bg-gradient-card rounded-full border border-primary/20">
                <span className="text-sm text-muted-foreground">👋 About Me</span>
              </div>
              
              <h2 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Meet <span className="bg-gradient-primary bg-clip-text text-transparent">Faiez</span>
              </h2>
              
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Hey there! I'm Faiez ul Abidin, but everyone just calls me Faiez. 
                  I know what you're thinking - <strong className="text-primary">16 and already in digital marketing?</strong> 
                  But here's the thing: <strong className="text-foreground">age doesn't matter when you're passionate about what you do</strong>.
                </p>
                
                <p>
                  I started my journey in digital marketing a year ago and haven't looked back since. 
                  I specialize in <strong className="text-primary">B2B lead generation</strong> and help businesses scale through 
                  smart automation and data-driven strategies.
                </p>

                <p>
                  My expertise spans across modern tools like Clay, n8n, Zapier, and Make for automation, 
                  plus I'm comfortable with AI integrations, API development, and even Python for 
                  advanced data scraping when needed.
                </p>
              </div>

              <div className="p-6 bg-gradient-card border border-primary/20 rounded-2xl">
                <blockquote className="text-2xl font-bold text-foreground italic">
                  "Cover is not the book - don't judge! 💪"
                </blockquote>
                <p className="text-muted-foreground mt-2">— My philosophy on age and experience</p>
              </div>
            </div>

            {/* Achievement badges */}
            <div className="grid grid-cols-2 gap-4">
              {achievements.map((achievement, index) => (
                <div key={achievement.title} className="flex items-center gap-3 p-4 bg-gradient-card border border-primary/10 rounded-xl hover:border-primary/30 transition-all duration-300 animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  <span className="text-2xl">{achievement.icon}</span>
                  <div>
                    <div className="font-semibold text-foreground text-sm">{achievement.title}</div>
                    <div className="text-xs text-muted-foreground">{achievement.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-6 animate-slide-in-right">
            {stats.map((stat, index) => (
              <Card 
                key={stat.label}
                className="group bg-gradient-card shadow-card hover:shadow-neon transition-all duration-500 hover:scale-110 text-center p-8 border border-primary/10 hover:border-primary/30 relative overflow-hidden"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {/* Background glow effect */}
                <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
                
                <CardContent className="relative z-10 p-0 space-y-4">
                  <div className="text-4xl lg:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                    {stat.number}
                  </div>
                  <div className="space-y-2">
                    <div className="text-lg font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                      {stat.label}
                    </div>
                    <div className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                      {stat.subtitle}
                    </div>
                  </div>
                  
                  {/* Progress ring */}
                  <div className="mx-auto w-16 h-16 relative">
                    <svg className="w-16 h-16 transform -rotate-90" viewBox="0 0 64 64">
                      <circle
                        cx="32"
                        cy="32"
                        r="28"
                        stroke="currentColor"
                        strokeWidth="4"
                        fill="none"
                        className="text-primary/20"
                      />
                      <circle
                        cx="32"
                        cy="32"
                        r="28"
                        stroke="currentColor"
                        strokeWidth="4"
                        fill="none"
                        strokeDasharray="175.92"
                        strokeDashoffset="0"
                        className="text-primary group-hover:animate-pulse"
                        style={{
                          strokeDashoffset: index === 0 ? '44' : index === 1 ? '132' : index === 2 ? '0' : '44',
                          transition: 'stroke-dashoffset 1s ease-in-out'
                        }}
                      />
                    </svg>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;