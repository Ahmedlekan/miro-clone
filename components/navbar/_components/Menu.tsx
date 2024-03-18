"use client"

import * as React from "react"
import Link from "next/link"
import {PiBookOpenTextLight,PiFileThin,PiSparkleLight,PiTargetLight} from "react-icons/pi";

import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    href: "/docs/primitives/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Progress",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Scroll-area",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Tabs",
    href: "/docs/primitives/tabs",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Tooltip",
    href: "/docs/primitives/tooltip",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
]

export function Menu() {
  return (
    <NavigationMenu className="hidden lg:flex">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>What is mirror</NavigationMenuTrigger>
          <NavigationMenuContent>
            
            <div className="flex">
              <ul className="flex flex-col gap-2 p-2 md:w-[400px] lg:w-[600px] hover:cursor-pointer border-r">
                <p className="my-4 text-sm font-light p-1">Projects</p>
                <div className="flex justify-start items-center gap-4">

                  <div className="flex flex-col gap-4 text-sm font-medium">

                    <div className=" hover:bg-gray-400/10 p-1 rounded-sm">
                        <p>
                          Product Overview
                        </p>
                    </div>
                    <div className=" hover:bg-gray-400/10 p-1 rounded-sm">
                        <p>
                          Visual Project Management
                        </p>
                    </div>
                    <div className=" hover:bg-gray-400/10 p-1 rounded-sm">
                        <p>
                          Diagram and Process Mapping
                        </p>
                    </div>
                    <div className=" hover:bg-gray-400/10 p-1 rounded-sm">
                        <p>
                          Product development and workflow
                        </p>
                    </div>
                    <div className=" hover:bg-gray-400/10 p-1 rounded-sm">
                        <p>
                          Content and Visualization
                        </p>
                    </div>
                  </div>

                  <div className="flex flex-col gap-4 text-sm font-medium">
                    <div className=" hover:bg-gray-400/10 p-1 rounded-sm">
                        <p>
                          Workshop and Asyn Collaboration
                        </p>
                    </div>
                    
                    <div className=" hover:bg-gray-400/10 p-1 rounded-sm">
                        <p>
                          Artificial Inteligience
                        </p>
                    </div>
                    <div className=" hover:bg-gray-400/10 p-1 rounded-sm">
                        <p>
                          App Integration
                        </p>
                    </div>
                    <div className=" hover:bg-gray-400/10 p-1 rounded-sm">
                        <p>
                          Developer Platform
                        </p>
                    </div>
                    <div className=" hover:bg-gray-400/10 p-1 rounded-sm">
                        <p>
                          Simple & Powerful
                        </p>
                    </div>
                  </div>
                </div>
              </ul>
              

              <div>

              <ul className="flex flex-col gap-2 p-2 md:w-[400px] lg:w-[300px] hover:cursor-pointer border-r">
                <p className="my-4 text-sm font-light p-1">What&apos;s new</p>
                <div className="flex justify-start items-center gap-4">

                  <div className="flex flex-col gap-4 text-sm font-medium">
                    <div className="flex justify-start items-center gap-1 hover:bg-gray-400/10 p-1 rounded-sm">
                        <PiBookOpenTextLight className="text-2xl mr-2 text-red-600" />
                        <p>
                          Product Overview
                        </p>
                    </div>
                    <div className="flex justify-start items-center gap-1 hover:bg-gray-400/10 p-1 rounded-sm">
                        <PiBookOpenTextLight className="text-2xl mr-2 text-red-600" />
                        <p>
                          Visual Project Management
                        </p>
                    </div>
                    <div className="flex justify-start items-center gap-1 hover:bg-gray-400/10 p-1 rounded-sm">
                        <PiBookOpenTextLight className="text-2xl mr-2 text-red-600" />
                        <p>
                          Diagram and Process Mapping
                        </p>
                    </div>
                    <div className="flex justify-start items-center gap-1 hover:bg-gray-400/10 p-1 rounded-sm">
                        <PiBookOpenTextLight className="text-2xl mr-2 text-red-600" />
                        <p>
                          Product development and workflow
                        </p>
                    </div>
              
                  </div>

                </div>
              </ul>

              </div>

            </div>

          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        
        <NavigationMenuItem>
          <NavigationMenuTrigger>Solutions</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        
        <NavigationMenuItem>
          <NavigationMenuTrigger>Enterprise</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Link href="/docs" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Pricing
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"