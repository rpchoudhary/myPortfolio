import Link from "next/link"
import Image from "next/image"
import {
  ArrowRight,
  Briefcase,
  Code,
  Download,
  ExternalLink,
  Gitlab,
  GraduationCap,
  Linkedin,
  Mail,
  MapPin,
  Phone,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import SkillProgress from "@/components/skill-progress"

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2 font-bold text-xl">
            <Code className="h-5 w-5" />
            <span>RP Choudhary</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#about" className="text-sm font-medium hover:text-primary">
              About
            </Link>
            <Link href="#skills" className="text-sm font-medium hover:text-primary">
              Skills
            </Link>
            <Link href="#experience" className="text-sm font-medium hover:text-primary">
              Experience
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:text-primary">
              Contact
            </Link>
          </nav>
          <Button asChild>
            <Link href="/resume">
              <Download className="mr-2 h-4 w-4" />
              Resume
            </Link>
          </Button>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-24 md:py-32 lg:py-40">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Hi, I'm <span className="text-primary">RP Choudhary</span>
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    6+ Years  iOS (Objective C, Swift, SwiftUI), 2 Years Flutter And 2 Years Experience In Ionic Hybird
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg" asChild>
                    <Link href="#contact">
                      Get In Touch
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <Link href="/resume">
                      <Download className="mr-2 h-4 w-4" />
                      Download Resume
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative w-80 h-80 rounded-full overflow-hidden border-8 border-primary/20">
                  <Image
                    src="/images/myProfileImg.jpg"
                    alt="RP Choudhary"
                    fill
                    className="object-cover"
                    sizes="320px"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-24 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">About Me</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Passionate Developer</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Creative Developer with proficiency in monitoring software performance tests and revising programs for
                  corrections. Self-motivated with high level of experience over more than 10+ years collaborating and
                  working on multiple application projects.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="flex justify-center">
                <div className="relative w-96 h-96 rounded-lg overflow-hidden">
                  <Image
                    src="/images/myProfileImg.jpg"
                    alt="About RP Choudhary"
                    fill
                    className="object-cover"
                    sizes="384px"
                  />
                </div>
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">Professional Journey</h3>
                  <p className="text-muted-foreground">
                  Passionate and hardworking Senior iOS Developer and Team Lead with a strong focus on building customized, 
                  user-centric interfaces that prioritize accessibility, reachability, and security.
                   Known for an organized and methodical approach to managing multiple concurrent deadlines while delivering high-quality, 
                   scalable solutions. Leverages up-to-date knowledge of the evolving technology landscape to implement best practices in 
                   mobile application development and team leadership.
                  </p>
                  <p className="text-muted-foreground">
                  Leverages up-to-date knowledge of the current technology landscape to promote best practices in web design and development.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" />
                <span className="text-sm">Mansarovar, Jaipur, Rajasthan</span>
                </div>
                <div className="flex items-center gap-2">
                <Briefcase className="h-4 w-4 text-primary" />
                <span className="text-sm">10+ Years Experience</span>
                </div>
                <div className="flex items-center gap-2">
                <GraduationCap className="h-4 w-4 text-primary" />
                <span className="text-sm">BCA, MCA Holder</span>
                </div>
                <div className="flex items-center gap-2">
                <Code className="h-4 w-4 text-primary" />
                <span className="text-sm">iOS, Flutter & Ionic Developer</span>
              </div>
              </div>

              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Skills</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Technical Expertise</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Specialized in iOS(6+ Years Experience), Flutter(2 Years Experience) & Ionic Hybrid(2 Years Experience) development.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Core Technologies</CardTitle>
                  <CardDescription>Primary programming languages and frameworks</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <SkillProgress name="Objective C" level={9.0} />
                  <SkillProgress name="Swift" level={9.5} />
                  <SkillProgress name="SwiftUI" level={8.0} />
                  <SkillProgress name="Flutter" level={9.0} />
                  <SkillProgress name="Ionic Hybrid" level={8.5} />
                  <SkillProgress name="JavaScript" level={8.0} />
                  <SkillProgress name="HTML/CSS" level={8.0} />
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Frameworks & Tools</CardTitle>
                  <CardDescription>Modern development tools and frameworks</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <SkillProgress name="Design Pattern" level={9.5} />
                  <SkillProgress name="Google MAP KIT" level={9.5} />
                  <SkillProgress name="Agora Freamwork" level={9.5} />
                  <SkillProgress name="Payment Getway" level={9.5} />
                  <SkillProgress name="Socket Kit" level={9.5} />
                  <SkillProgress name="REST APIs" level={9.5} />
                  <SkillProgress name="Database" level={9.5} />
                </CardContent>
              </Card>
            </div>
            <div className="mx-auto max-w-5xl">
              <Card>
                <CardHeader>
                  <CardTitle>Additional Skills</CardTitle>
                  <CardDescription>Other technical and professional competencies</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    <Badge>Problem-solving</Badge>
                    <Badge>Team collaboration</Badge>
                    <Badge>API integration</Badge>
                    <Badge>Software development</Badge>
                    <Badge>Product development</Badge>
                    <Badge>Object-oriented programming</Badge>
                    <Badge>Requirements gathering</Badge>
                    <Badge>Front-end development</Badge>
                    <Badge>Performance optimization</Badge>
                    <Badge>App security</Badge>
                    <Badge>Technical support</Badge>
                    <Badge>RESTful APIs</Badge>
                    <Badge>Database management</Badge>
                    <Badge>Coding standards</Badge>
                    <Badge>Web services implement</Badge>
                    <Badge>Code optimization</Badge>
                    <Badge>Full-stack development</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-24 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Experience</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Professional Journey</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Over 8+ years of experience working with leading companies and delivering exceptional App developement & solutions.
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-3xl py-12">
              <div className="space-y-8">
                {/* Current Job */}
                <Card>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle>iOS & Flutter Developer And Team Lead</CardTitle>
                        <CardDescription>Singhtek BizGroup Pvt. Ltd.</CardDescription>
                      </div>
                      <Badge>August 2024 - Present</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                  <ul className="space-y-2 text-sm">
                <li>
                • Led end-to-end development of iOS, Flutter, and Ionic hybrid applications, translating client requirements into robust technical solutions.
                </li>
                <li>
                • Debugged and resolved complex cross-platform issues, significantly improving app stability and performance across iOS and Android.
                </li>
                <li>
                • Collaborated with designers, backend engineers, and QA teams to deliver seamless and feature-rich mobile applications.
              </li>
              <li>
                • Accelerated development cycles by designing reusable components and maintaining shared code libraries for native and hybrid platforms.
              </li>
              </ul>
                  </CardContent>
                </Card>
                {/* Previous Job */}
                <Card>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle>iOS & Flutter Developer And Team Lead(Last Two Years)</CardTitle>
                        <CardDescription>The NineHertz India Pvt. Ltd.</CardDescription>
                      </div>
                      <Badge variant="secondary">May 2016 - August 2024</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                  <ul className="space-y-2 text-sm">
                   <li>
                    • Led the architecture, development, and deployment of high-performance iOS applications using Swift and SwiftUI.
                  </li>
                  <li>
                  • Delivered cross-platform mobile apps using Flutter and Ionic, ensuring consistent user experience across iOS and Android.
                  </li>
                  <li>
                  • Managed end-to-end project lifecycle as Team Lead, including code reviews, sprint planning, and mentoring junior developers.
                  </li>
                  <li>
                  • Optimized mobile app performance, implemented secure coding practices, and ensured App Store compliance for all releases.
                  </li>
                  </ul>

                  </CardContent>
                </Card>

                {/* First Job */}
                <Card>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle>iOS Developer</CardTitle>
                        <CardDescription>Sigmateck Info Solution</CardDescription>
                      </div>
                      <Badge variant="secondary">March 2015 - May 2016</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                  <ul className="space-y-2 text-sm">
                 <li>
                  • Led the development and deployment of scalable iOS applications using Swift and SwiftUI, enhancing performance and user experience.
                </li>
                <li>
                • Collaborated with cross-functional teams including designers, backend developers, and QA to deliver high-quality mobile solutions on time.
                </li> 
                </ul>

                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle>Graphic Designer</CardTitle>
                        <CardDescription>PinkCity Enterprises Sitapura Jaipur</CardDescription>
                      </div>
                      <Badge variant="secondary">October 2012 - March 2015</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li>
                        • I worked on Photoshop and Coral Draw.
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Contact</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Let's Work Together</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Ready to bring your ideas to life? Let's discuss your next project.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Get In Touch</CardTitle>
                  <CardDescription>Feel free to reach out for collaborations or just a friendly hello</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4 text-primary" />
                    <a href="mailto:choudharyrp4@gmail.com" className="hover:text-primary">
                    choudharyrp4@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4 text-primary" />
                    <a href="tel:+91-9783797979" className="hover:text-primary">
                      +91-9783797979
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-primary" />
                    <span>Mansrover Jaipur, Rajasthan(India)</span>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Connect Online</CardTitle>
                  <CardDescription>Find me on these platforms</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button variant="outline" className="w-full justify-start" asChild>
                    <a href="https://www.linkedin.com/in/r-p-choudhary-5936b3130/" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="mr-2 h-4 w-4" />
                      LinkedIn Profile
                      <ExternalLink className="ml-auto h-4 w-4" />
                    </a>
                  </Button>
                  <Button variant="outline" className="w-full justify-start" asChild>
                    <a href="https://github.com/rpchoudhary" target="_blank" rel="noopener noreferrer">
                      <Gitlab className="mr-2 h-4 w-4" />
                      GitLab Profile
                      <ExternalLink className="ml-auto h-4 w-4" />
                    </a>
                  </Button>
                  <Button className="w-full" asChild>
                  <a href="/images/NewUpdateCV_Feb.pdf" download>
                  <Download className="mr-2 h-4 w-4" />
                  Download Resume
                  </a>
                  </Button>
                  <div className="flex items-center gap-2 text-sm">
    <span className="font-semibold text-primary">Drode Driver:</span>
    <a
      href="https://apps.apple.com/in/app/hidaya/id1566553099"
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-600 underline hover:text-blue-800"
    >
      View on App Store
    </a>
  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t py-6">
        <div className="container flex flex-col items-center justify-center gap-4 md:flex-row md:justify-between">
          <div className="flex items-center gap-2 text-sm">
            <Code className="h-4 w-4" />
            <span>© {new Date().getFullYear()} RP Choudhary. All rights reserved.</span>
          </div>
          {
           <div className="flex gap-4">
            <Link href="https://github.com/rpchoudhary" className="text-muted-foreground hover:text-primary">
              <Gitlab className="h-4 w-4" />
              <span className="sr-only">GitLab</span>
            </Link>
            <Link href="https://www.linkedin.com/in/r-p-choudhary-5936b3130/" className="text-muted-foreground hover:text-primary">
              <Linkedin className="h-4 w-4" />
              <span className="sr-only">LinkedIn</span>
            </Link>
          </div> 
          }
        </div>
      </footer>
    </div>
  )
}
