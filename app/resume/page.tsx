"use client"

import { useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import {
  ArrowLeft,
  Briefcase,
  Calendar,
  Code,
  Download,
  Gitlab,
  GraduationCap,
  Home,
  Linkedin,
  Mail,
  MapPin,
  Phone,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import SkillProgress from "@/components/skill-progress"
import "./print.css" // Import the print styles

export default function ResumePage() {
  useEffect(() => {
    // Additional print handling if needed
    const handlePrint = () => {
      // Add print-specific class to the grid container
      const gridContainer = document.querySelector(".resume-grid")
      if (gridContainer) {
        gridContainer.classList.add("print-grid")
      }

      // Add card-content class to all CardContent elements
      const cardContents = document.querySelectorAll(".card-content-wrapper")
      cardContents.forEach((content) => {
        content.classList.add("card-content")
      })
    }

    // Add event listener for beforeprint
    window.addEventListener("beforeprint", handlePrint)

    return () => {
      window.removeEventListener("beforeprint", handlePrint)
    }
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-muted/20">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2 font-bold text-xl">
            <Code className="h-5 w-5" />
            <span>RP Choudhary</span>
          </Link>
          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm" asChild className="no-print">
              <Link href="/">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Portfolio
              </Link>
            </Button>
              <Button className="w-full" asChild>
                  <a href="/images/NewUpdateCV_Feb.pdf" download>
                  <Download className="mr-2 h-4 w-4" />
                  Download Resume
                  </a>
                  </Button>
          </div>
        </div>
      </header>

      <main className="flex-1 py-12 print:py-0">
        <div className="container px-4 md:px-6 print:px-0 print:mx-0 print:max-w-none">
          {/* Use the original grid layout for web, print-grid class will be added via JS for print */}
          <div className="grid gap-8 lg:grid-cols-3 resume-grid">
            {/* Sidebar */}
            <div className="space-y-6">
              {/* Profile */}
              <Card className="w-full">
                <CardContent className="p-6 card-content-wrapper">
                  <div className="flex flex-col items-center text-center">
                    <div className="relative w-32 h-32 rounded-full overflow-hidden mb-4 border-4 border-primary/20">
                      <Image
                        src="/images/myProfileImg.jpg"
                        alt="RP Choudhary"
                        fill
                        className="object-cover"
                        sizes="128px"
                        priority
                      />
                    </div>
                    <h1 className="text-2xl font-bold">RP Choudhary</h1>
                    <p className="text-muted-foreground">iOS, Flutter & Ionic Hybird Developer</p>

                    <div className="w-full mt-6 space-y-3">
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-primary flex-shrink-0" />
                        <span className="text-sm">Mansrover, Jaipur, Rajasthan(India)</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                        <a href="tel:+919783797979" className="text-sm hover:text-primary">
                          +91-9783797979
                        </a>
                      </div>
                      <div className="flex items-center gap-2">
                        <Mail className="h-4 w-4 text-primary flex-shrink-0" />
                        <a href="mailto:msofficial48@gmail.com" className="text-sm hover:text-primary">
                          choudharyrp4@gmail.com
                        </a>
                      </div>
                      <div className="flex items-center gap-2">
                        <Linkedin className="h-4 w-4 text-primary flex-shrink-0" />
                        <a
                          href="https://www.linkedin.com/in/r-p-choudhary-5936b3130/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm hover:text-primary"
                        >
                          https://www.linkedin.com/in/r-p-choudhary-5936b3130/
                        </a>
                      </div>
                      <div className="flex items-center gap-2">
                        <Gitlab className="h-4 w-4 text-primary flex-shrink-0" />
                        <a
                          href="https://github.com/rpchoudhary"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm hover:text-primary"
                        >
                          https://github.com/rpchoudhary
                        </a>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Skills */}
              <Card className="w-full">
                <CardContent className="p-6 card-content-wrapper">
                  <h2 className="text-xl font-bold mb-4">Technical Skills</h2>
                  <div className="space-y-4">
                  <SkillProgress name="Objective C" level={9.0} />
                  <SkillProgress name="Swift" level={9.5} />
                  <SkillProgress name="SwiftUI" level={8.0} />
                  <SkillProgress name="Flutter" level={9.0} />
                  <SkillProgress name="Ionic Hybrid" level={8.5} />
                  <SkillProgress name="JavaScript" level={8.0} />
                  <SkillProgress name="HTML/CSS" level={8.0} />
                  </div>
                </CardContent>
              </Card>

              {/* Education */}
              <Card className="w-full">
                <CardContent className="p-6 card-content-wrapper">
                  <h2 className="text-xl font-bold mb-4">Education</h2>
                  <div className="space-y-4">
                    <div className="flex gap-3">
                      <GraduationCap className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <h3 className="font-medium">Master of Computer Application</h3>
                        <p className="text-sm text-muted-foreground">Indira Ghandi University Jaipur, Delhi</p>
                        <p className="text-sm text-primary mt-1">Passed in 2016</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Additional Skills */}
              <Card className="w-full">
                <CardContent className="p-6 card-content-wrapper">
                  <h2 className="text-xl font-bold mb-4">Additional Skills</h2>
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
                    <Badge>Code optimization</Badge>
                    <Badge>iOS, Flutter And Ionic Hybrid development</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">
              {/* Professional Summary */}
              <Card className="w-full">
                <CardContent className="p-6 card-content-wrapper">
                  <h2 className="text-xl font-bold mb-4">Professional Summary</h2>
                  <div className="space-y-4">
                   <p>
                  Creative and results-driven Mobile App Developer with 10+ years of experience in designing, developing, 
                  and maintaining high-performance applications across iOS, Flutter, and Ionic hybrid platforms. 
                  Skilled in identifying performance bottlenecks, optimizing code, and delivering seamless user experiences. 
                  Strong problem-solving and organizational abilities, with a deep understanding of modern mobile development principles.
                  </p>
                  <p>
                  Self-motivated and dedicated professional with a proven track record of leading and contributing to multiple cross-platform projects.
                   Passionate about building customized, accessible, and secure mobile interfaces tailored to user needs. Known 
                   for a disciplined approach to meeting concurrent deadlines, and for staying ahead of the curve with active knowledge of 
                   evolving mobile technologies and development best practices.
                  </p>
                </div>
                </CardContent>
              </Card>

              {/* Work Experience */}
              <Card className="w-full">
                <CardContent className="p-6 card-content-wrapper">
                  <h2 className="text-xl font-bold mb-6">Work Experience</h2>

                  {/* Current Job */}
                  <div className="relative pl-8 pb-8 border-l border-primary/30 last:border-0 last:pb-0">
                    <div className="absolute left-0 top-0 -translate-x-1/2 w-4 h-4 rounded-full bg-primary"></div>
                    <div className="space-y-3">
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1">
                        <h3 className="font-bold text-lg">Senior iOS & Flutter Developer And Team Lead</h3>
                        <div className="flex items-center gap-1.5">
                          <Calendar className="h-4 w-4 text-primary" />
                          <span className="text-sm text-muted-foreground">August 2024 - Present</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Briefcase className="h-4 w-4 text-primary" />
                        <span className="text-sm font-medium">Singhtek BizGroup Pvt. Ltd. Jaipur Rajasthan</span>
                      </div>
                      <ul className="space-y-2 mt-2">
                        <li className="flex gap-2">
                          <span className="text-primary font-bold">•</span>
                          <span>
                            Worked closely with clients to gather requirements and translate them into technical
                            specifications for implementation.
                          </span>
                        </li>
                        <li className="flex gap-2">
                          <span className="text-primary font-bold">•</span>
                          <span>
                            Continuously updated skills through training courses, workshops, and self-study—staying
                            current on industry trends and emerging technologies.
                          </span>
                        </li>
                        <li className="flex gap-2">
                          <span className="text-primary font-bold">•</span>
                          <span>Debugged complex software issues, leading to a more stable product release.</span>
                        </li>
                        <li className="flex gap-2">
                          <span className="text-primary font-bold">•</span>
                          <span>
                            Collaborated with cross-functional teams to ensure seamless integration of new features.
                          </span>
                        </li>
                        <li className="flex gap-2">
                          <span className="text-primary font-bold">•</span>
                          <span>Reduced development time by creating reusable code libraries for future projects.</span>
                        </li>
                        <li className="flex gap-2">
                          <span className="text-primary font-bold">•</span>
                          <span>Updated old code bases to modern development standards, improving functionality.</span>
                        </li>
                        <li className="flex gap-2">
                          <span className="text-primary font-bold">•</span>
                          <span>
                            Adapted quickly to new technologies and programming languages, enhancing overall team
                            productivity.
                          </span>
                        </li>
                        <li className="flex gap-2">
                          <span className="text-primary font-bold">•</span>
                          <span>
                            Participated in regular code reviews, ensuring high-quality standards were consistently met
                            across all development efforts.
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* Previous Job */}
                  <div className="relative pl-8 pb-8 border-l border-primary/30 last:border-0 last:pb-0">
                    <div className="absolute left-0 top-0 -translate-x-1/2 w-4 h-4 rounded-full bg-primary"></div>
                    <div className="space-y-3">
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1">
                        <h3 className="font-bold text-lg">Senior iOS, Flutter & Ionic Developer And Team Lead (Last Three Years)</h3>
                        <div className="flex items-center gap-1.5">
                          <Calendar className="h-4 w-4 text-primary" />
                          <span className="text-sm text-muted-foreground">May 2016 - August 2024</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Briefcase className="h-4 w-4 text-primary" />
                        <span className="text-sm font-medium">The NineHertz India Pvt. Ltd. Jaipur, Rajasthan</span>
                      </div>
                      <ul className="space-y-2 mt-2">
  <li className="flex gap-2">
    <span className="text-primary font-bold">•</span>
    <span>Designed, developed, and deployed high-performance iOS, Flutter, and Ionic applications across diverse industries.</span>
  </li>
  <li className="flex gap-2">
    <span className="text-primary font-bold">•</span>
    <span>
      Ensured smooth cross-platform performance and responsiveness by optimizing app architecture and code reusability.
    </span>
  </li>
  <li className="flex gap-2">
    <span className="text-primary font-bold">•</span>
    <span>
      Integrated RESTful APIs, Firebase, and third-party SDKs to deliver real-time data syncing and seamless app functionality.
    </span>
  </li>
  <li className="flex gap-2">
    <span className="text-primary font-bold">•</span>
    <span>Led teams and managed app lifecycles from planning to App Store and Play Store deployment.</span>
  </li>
  <li className="flex gap-2">
    <span className="text-primary font-bold">•</span>
    <span>
      Maintained and upgraded legacy applications while implementing the latest frameworks and tools like SwiftUI, GetX, and Bloc.
    </span>
  </li>
  <li className="flex gap-2">
    <span className="text-primary font-bold">•</span>
    <span>
      Conducted code reviews and mentored junior developers to maintain clean architecture and coding standards across platforms.
    </span>
  </li>
  <li className="flex gap-2">
    <span className="text-primary font-bold">•</span>
    <span>
      Created reusable UI components and libraries to accelerate development speed and ensure design consistency.
    </span>
  </li>
  <li className="flex gap-2">
    <span className="text-primary font-bold">•</span>
    <span>
      Implemented robust security practices, user authentication flows, and data encryption for app safety and compliance.
    </span>
  </li>
  <li className="flex gap-2">
    <span className="text-primary font-bold">•</span>
    <span>
      Delivered regular updates and performance enhancements to maintain app quality and user satisfaction post-launch.
    </span>
  </li>
</ul>

                    </div>
                  </div>

                  {/* First Job */}
                  <div className="relative pl-8 pb-0 last:border-0 last:pb-0">
                    <div className="absolute left-0 top-0 -translate-x-1/2 w-4 h-4 rounded-full bg-primary"></div>
                    <div className="space-y-3">
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1">
                        <h3 className="font-bold text-lg">Ios Developer</h3>
                        <div className="flex items-center gap-1.5">
                          <Calendar className="h-4 w-4 text-primary" />
                          <span className="text-sm text-muted-foreground">March 2015 - May 2016</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Briefcase className="h-4 w-4 text-primary" />
                        <span className="text-sm font-medium">Sigmateck Info Solution Jaipur</span>
                      </div>
                      <ul className="space-y-2 mt-2">
  <li className="flex gap-2">
    <span className="text-primary font-bold">•</span>
    <span>
      Assisted in the development of iOS applications using Swift and UIKit, focusing on clean UI design and smooth user interactions.
    </span>
  </li>
  <li className="flex gap-2">
    <span className="text-primary font-bold">•</span>
    <span>
      Collaborated with senior developers to integrate RESTful APIs and troubleshoot issues during development and testing.
    </span>
  </li>
</ul>

                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <footer className="border-t py-6 mt-12">
        <div className="container flex flex-col items-center justify-center gap-4 md:flex-row md:justify-between">
          <div className="flex items-center gap-2 text-sm">
            <Code className="h-4 w-4" />
            <span>© {new Date().getFullYear()} RP Choudhary. All rights reserved.</span>
          </div>
          <div className="flex gap-4">
            <Link href="/" className="text-sm text-muted-foreground hover:text-primary">
              <Home className="h-4 w-4" />
              <span className="sr-only">Home</span>
            </Link>
            <Link href="https://github.com/rpchoudhary" className="text-muted-foreground hover:text-primary">
              <Gitlab className="h-4 w-4" />
              <span className="sr-only">GitLab</span>
            </Link>
            <Link href="https://www.linkedin.com/in/r-p-choudhary-5936b3130/" className="text-muted-foreground hover:text-primary">
              <Linkedin className="h-4 w-4" />
              <span className="sr-only">LinkedIn</span>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
