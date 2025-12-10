# AI Automation Consultancy Website

A modern, high-converting landing page and portfolio website for your AI automation consultancy business. Built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion for smooth animations.

## 🎯 What's Included

This is a **complete, production-ready website** featuring:

- **Home Page** - Hero section, portfolio showcase, featured project, services, testimonials, and CTA
- **Work Page** - Full portfolio of all your projects in a grid layout
- **Project Detail Pages** - In-depth case studies for each project
- **Services Page** - 3-tier pricing structure
- **Contact Page** - Contact form with email integration setup
- **About Page** - Your company story and credentials
- **Header & Footer** - Fixed navigation, mobile-responsive menu
- **Dark Theme Design** - Phantom Studio-inspired aesthetic (black background, bold typography)
- **Smooth Animations** - Framer Motion for scroll animations and transitions
- **Fully Responsive** - Works perfectly on desktop, tablet, and mobile
- **SEO Optimized** - Meta tags, Open Graph, structured data ready

## 🚀 Quick Start

### Prerequisites

You need to have these installed on your computer:

- **Node.js** (version 18 or higher) - Download from https://nodejs.org/
- **npm** (comes with Node.js) or **yarn**
- **A code editor** - VS Code is recommended (download from https://code.visualstudio.com/)

### Installation & Running

**Step 1: Navigate to the project folder in your terminal**

```bash
# On Mac/Linux:
cd /mnt/user-data/outputs/ai-consultancy-website

# On Windows Command Prompt:
cd C:\path\to\ai-consultancy-website
```

**Step 2: Install dependencies**

```bash
npm install
```

This will download all the required packages (React, Next.js, Tailwind CSS, etc.). This takes 2-3 minutes.

**Step 3: Run the development server**

```bash
npm run dev
```

You'll see output like:
```
> next dev

  ▲ Next.js 14.0.0
  - Local:        http://localhost:3000
  - Environments: .env.local

✓ Ready in 2.5s
```

**Step 4: Open in your browser**

Click the link or go to: **http://localhost:3000**

Your website is now running! 🎉

### Making Changes

As you edit files, the website automatically updates in your browser (hot reload). No need to restart the server.

## 📁 Project Structure

```
ai-consultancy-website/
├── app/                          # Next.js app directory
│   ├── layout.tsx               # Root layout (Header, Footer)
│   ├── page.tsx                 # Home page
│   ├── globals.css              # Global styles
│   ├── about/
│   │   └── page.tsx             # About page
│   ├── contact/
│   │   └── page.tsx             # Contact page
│   └── work/
│       ├── page.tsx             # Portfolio page
│       └── [slug]/
│           └── page.tsx         # Project detail template
│
├── components/                   # Reusable components
│   ├── Header.tsx              # Navigation header
│   ├── Hero.tsx                # Hero section
│   ├── Portfolio.tsx           # Portfolio grid
│   ├── FeaturedProject.tsx     # Featured case study
│   ├── Services.tsx            # Pricing tiers
│   ├── Testimonials.tsx        # Social proof
│   ├── CTA.tsx                 # Call-to-action section
│   └── Footer.tsx              # Footer
│
├── package.json                # Dependencies
├── tsconfig.json               # TypeScript config
├── tailwind.config.js          # Tailwind CSS config
├── next.config.js              # Next.js config
├── postcss.config.js           # PostCSS config
└── .gitignore                  # Git ignore rules
```

## 🎨 Customization Guide

### Change Your Company Name

1. Open `app/layout.tsx`
2. Find: `title: 'AI Automation Consultancy'`
3. Replace with your company name
4. Also update the Header component in `components/Header.tsx`

### Update the Hero Section

1. Open `components/Hero.tsx`
2. Edit the headline: `"Build Custom Automation for Your Business"`
3. Edit the subheadline text
4. Customize the CTA button text and links

### Update Services/Pricing

1. Open `components/Services.tsx`
2. Modify the `services` array with your pricing tiers
3. Change prices, features, and descriptions
4. The "featured" tier will be highlighted

### Add Your Projects

1. Open `components/Portfolio.tsx`
2. Edit the `projects` array with your actual projects
3. For each project, update:
   - `title` - Project name
   - `description` - Short description
   - `category` - Project category
   - `metrics` - Key result
   - `slug` - URL-friendly name

### Update Colors

1. Open `tailwind.config.js`
2. Find the `colors` section
3. Modify these main colors:
   - `orange` - Your primary CTA color (default: #ff6b35)
   - `cyan` - Alternative accent (default: #00d4ff)
4. Save and colors update everywhere

### Customize Contact Form

1. Open `app/contact/page.tsx`
2. Find the `handleSubmit` function
3. Add your email service integration (Nodemailer, SendGrid, Mailgun, etc.)

## 🔧 Adding Features

### Add a Blog

Create `app/blog/` folder and add blog pages there.

### Add Forms

The contact form is already set up. To make it send emails, integrate with a service like:
- SendGrid
- Mailgun
- Resend (easiest for Next.js)
- Nodemailer

### Add Images

Place images in a `public/` folder (create it at the root level):

```
public/
├── og-image.png
├── logo.png
└── projects/
    ├── email-tool.png
    └── chatbot.png
```

Then reference them: `<img src="/logo.png" />`

## 🚀 Deployment

### Deploy to Vercel (Recommended - Free Tier)

1. Go to https://vercel.com
2. Sign up with GitHub
3. Click "New Project"
4. Select your GitHub repo
5. Click "Deploy"
6. Takes 2-3 minutes

### Deploy to Netlify

1. Go to https://netlify.com
2. Click "Connect from Git"
3. Select your GitHub repo
4. Configure build settings:
   - **Build command:** `npm run build`
   - **Publish directory:** `.next`
5. Click "Deploy"

### Deploy Manually

```bash
# Create production build
npm run build

# Start production server
npm start
```

Then use any hosting (AWS, DigitalOcean, etc.) to upload the built files.

## 📊 Analytics Setup

Add Google Analytics:

1. Create account at https://analytics.google.com
2. Get your Measurement ID
3. Add to `app/layout.tsx`:

```jsx
<script
  dangerouslySetInnerHTML={{
    __html: `window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'YOUR_MEASUREMENT_ID');`,
  }}
/>
```

## 🐛 Troubleshooting

**"Port 3000 is already in use"**
```bash
# Use a different port
npm run dev -- -p 3001
```

**"Module not found" errors**
```bash
# Delete node_modules and reinstall
rm -rf node_modules
npm install
```

**Styles not applying**
```bash
# Restart the dev server (Ctrl+C to stop, npm run dev to restart)
npm run dev
```

**Changes not showing**
- Clear browser cache (Ctrl+Shift+Delete)
- Hard refresh (Ctrl+Shift+R)

## 📞 Need Help?

- Next.js Docs: https://nextjs.org/docs
- Tailwind CSS: https://tailwindcss.com/docs
- Framer Motion: https://www.framer.com/motion/
- TypeScript: https://www.typescriptlang.org/docs/

## 📝 File Descriptions

### Key Component Files

**Header.tsx** - Navigation and logo. Edit company name, menu links, and CTA button here.

**Hero.tsx** - Main headline section. First thing visitors see. Most important for conversion.

**Portfolio.tsx** - Grid of your projects. Shows your work and capabilities.

**Services.tsx** - Your pricing tiers. Three packages: Quick Win, Full Stack, Enterprise.

**CTA.tsx** - Final call-to-action before footer. Converts interested visitors.

**Footer.tsx** - Bottom of page. Links, copyright, social media.

### App Files

**layout.tsx** - Root layout applied to all pages. Add global components here.

**page.tsx** - Home page content (combines all the above components).

**contact/page.tsx** - Contact form page for inquiries.

**about/page.tsx** - Your story and company info.

**work/page.tsx** - Full portfolio grid.

**work/[slug]/page.tsx** - Individual project detail pages.

## 🎯 Next Steps

1. **Customize content** - Update all the text with your actual information
2. **Add your projects** - Update the projects array with real projects
3. **Upload photos** - Add your company photos and project screenshots
4. **Setup contact form** - Integrate with email service
5. **Setup analytics** - Add Google Analytics to track visitors
6. **Deploy** - Push to Vercel, Netlify, or your own server
7. **Promote** - Share link with prospects, add to email signature, post on social media

## 📧 Contact Form Setup (Important!)

The contact form currently logs data to console. To actually receive emails:

### Option 1: Using Resend (Easiest)

```bash
npm install resend
```

Then update `app/contact/page.tsx`:

```jsx
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

const handleSubmit = async (e) => {
  e.preventDefault();
  await resend.emails.send({
    from: 'onboarding@resend.dev',
    to: 'your-email@example.com',
    subject: 'New Contact Form Submission',
    html: `<p>Name: ${formData.name}</p>...`,
  });
};
```

### Option 2: Using SendGrid

```bash
npm install @sendgrid/mail
```

Then integrate in your contact form handler.

## ✅ Launch Checklist

Before going live:

- [ ] Update all company information
- [ ] Add your actual projects with real metrics
- [ ] Add customer testimonials
- [ ] Setup contact form email integration
- [ ] Add Google Analytics
- [ ] Test on mobile devices
- [ ] Setup custom domain
- [ ] Deploy to production
- [ ] Test all forms and links
- [ ] Add to search engines (Google Search Console)
- [ ] Monitor analytics

## 🎉 You're Ready!

This website is ready to convert prospects into clients. Start customizing, deploy it, and promote it.

Good luck! 🚀
