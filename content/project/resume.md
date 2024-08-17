---
slug: react_resume
title: My React based resume Site
startDate: 2024-06-27
endDate: 2024-06-27
blurb: Creating a react resume site
skills: 
    - React
    - Typescript
company: Myself
---

# My stamp on the internet

This very website you are reading is my resume website I built with react. I got frustrated with tailoring my resume for different applications so I thought I would create a whole website where I could document all my work in one place, in one repo. Its also a good exercise to refresh myself using react.

If you want to look at my source code you for my resume, (yes my resume site is pubic), you can find it here: [Github Repo!](https://github.com/PurpleReverie/react_resume)

## Overview

This website is built entirely with react, and hosted via githubs pages. This website serves as my Resume when I want to advertise my skills as a developer, but also I chose to store my blog content here. As a blog you would imagine it needs a CMS, but I got around this by setting up a compile system to take Markdown and yaml files and create "manifest" embedded into the react app. I did this because I don't want all my blog content loaded in the react app when people visit the site, but I also want to be able to write my blog entries in the same repo as my website react code. While this means I can't update the blog dynamically (I have to redeploy the site I add a blog or project entry), thats fine for me as I want it all hosted in github pages. A cms backend would be too much hosting costs at this point in time.

You can find my compile scripts under `./automation` in the github repo if you want an example of what how it works.

This is convenient because it means I can write my blog entries in markdown, and when I redeploy my resume, its just updates.

Not only do I have a compile system for my blog entries, but if I want to write postmortems of specific projects I have a dedicated channel for projects. And I also have a dedicated channel for individual work experience entires.

So for now for me its viable Resume / Blog site.

Next step is to look into Static site generates so that all the blogs get indexed properly.