# 🎯 OPEN IN VS CODE - STEP BY STEP

## Complete Guide to Running Your Website

This guide will walk you through opening your AI consultancy website in VS Code and running it live in your browser. Takes about 5 minutes.

---

## STEP 1: Download VS Code (if you don't have it)

Go to https://code.visualstudio.com/ and download for your operating system.

Install it and open it. You should see a welcome screen.

---

## STEP 2: Open the Project in VS Code

### On Mac:

1. Open **Finder**
2. Navigate to: **Applications** → **VS Code**
3. Open VS Code
4. Press **Cmd + O** (Command + O)
5. Navigate to: **Volumes** → **user-data** → **outputs** → **ai-consultancy-website**
6. Click **Open**

### On Windows:

1. Open **File Explorer**
2. Navigate to: **C:\Users\[YourUsername]\AppData\Local\Programs\Microsoft VS Code**
3. Or just click the VS Code shortcut on your desktop
4. Press **Ctrl + K, Ctrl + O** (or go to File → Open Folder)
5. Navigate to the folder path and select **ai-consultancy-website**
6. Click **Select Folder**

### On Linux:

1. Open VS Code
2. Press **Ctrl + K, Ctrl + O**
3. Navigate to the project folder
4. Click **Open**

---

## STEP 3: Open the Terminal in VS Code

Once the folder is open in VS Code:

1. At the top, click **Terminal** menu
2. Click **New Terminal**

You should see a black terminal panel open at the bottom of VS Code.

---

## STEP 4: Install Dependencies

In the terminal that just opened, type:

```bash
npm install
```

Press Enter and wait. You'll see lots of text scrolling. This is downloading all the code libraries your website needs. Takes 2-5 minutes.

You'll know it's done when you see:
```
added XXX packages in XXX seconds
```

---

## STEP 5: Start the Development Server

In the same terminal, type:

```bash
npm run dev
```

Press Enter. You'll see output like:

```
> next dev

  ▲ Next.js 14.0.0
  - Local:        http://localhost:3000
```

This means your website is running!

---

## STEP 6: Open in Your Browser

Now open your web browser (Chrome, Safari, Firefox, Edge, etc.) and go to:

**http://localhost:3000**

🎉 **Your website is live!**

You should see your beautiful dark-themed AI consultancy website with:
- Hero section with CTA button
- Portfolio of projects
- Featured case study
- Services/pricing
- Testimonials
- Contact form
- And more!

---

## STEP 7: Make Changes (Hot Reload)

The awesome part: when you edit any file, your website automatically updates in the browser!

Try it:

1. In VS Code, open **components/Hero.tsx**
2. Find this line: `"Build Custom Automation for Your Business"`
3. Change it to something like: `"Transform Your Business with AI Automation"`
4. Save the file (Cmd+S on Mac, Ctrl+S on Windows)
5. Look at your browser - it updated automatically! No need to refresh.

This is called **hot reload** and it makes development super fast.

---

## STEP 8: Customize Your Content

### Edit the Hero Headline
File: `components/Hero.tsx`
Find: `"Build Custom Automation for Your Business"`
Change to your headline

### Edit Your Projects
File: `components/Portfolio.tsx`
Find the `projects` array and update:
- `title` - Project name
- `description` - What it does
- `metrics` - Key results
- `slug` - URL name

### Edit Services/Pricing
File: `components/Services.tsx`
Find the `services` array and update:
- `title` - Tier name
- `price` - Your price
- `features` - What's included

### Edit Contact Info
File: `app/contact/page.tsx`
Update the email address and form fields

### Change Colors
File: `tailwind.config.js`
Find the `colors` section
Change `orange` from `#ff6b35` to your brand color

---

## STEP 9: Stop and Restart the Server

To stop the server, press **Ctrl+C** in the terminal.

To restart, type:
```bash
npm run dev
```

---

## STEP 10: File Explorer (Left Side)

In VS Code, the left panel shows all your files. Here's what you're looking at:

```
ai-consultancy-website/
├── app/                    ← Pages (home, about, contact, work)
│   ├── page.tsx           ← Home page
│   ├── layout.tsx         ← Wraps all pages (header, footer)
│   ├── globals.css        ← Global styles
│   ├── about/page.tsx     ← About page
│   ├── contact/page.tsx   ← Contact page
│   └── work/
│       ├── page.tsx       ← Portfolio page
│       └── [slug]/page.tsx ← Project detail template
│
├── components/             ← Reusable parts
│   ├── Header.tsx         ← Top navigation
│   ├── Hero.tsx           ← Hero section
│   ├── Portfolio.tsx      ← Projects grid
│   ├── Services.tsx       ← Pricing
│   ├── CTA.tsx            ← Call to action
│   ├── Testimonials.tsx   ← Client testimonials
│   └── Footer.tsx         ← Bottom of page
│
├── package.json           ← Dependencies list
├── tailwind.config.js     ← Colors and styling
├── README.md              ← Full documentation
└── ...more config files
```

Click any file to open it and edit!

---

## STEP 11: Browser DevTools (Optional)

To see your website like visitors do (without editing):

1. Open your browser
2. Press **F12** (or Right-click → Inspect)
3. This opens "Developer Tools"
4. Click the **mobile icon** (top left of DevTools) to see how it looks on phones
5. You can test different screen sizes!

---

## 🚨 Common Issues and Solutions

### "npm command not found"

**Solution:** You need to install Node.js
1. Go to https://nodejs.org/
2. Download the LTS version
3. Install it
4. Restart VS Code
5. Try `npm install` again

### "Port 3000 is already in use"

**Solution:** Something else is using port 3000. Either:

Option A: Kill the process using port 3000
```bash
# On Mac/Linux
lsof -i :3000
kill -9 <PID>

# On Windows
netstat -ano | findstr :3000
taskkill /PID <PID> /F
```

Option B: Use a different port
```bash
npm run dev -- -p 3001
```
Then go to http://localhost:3001

### Changes not showing in browser

1. Hard refresh: **Ctrl+Shift+R** (Windows) or **Cmd+Shift+R** (Mac)
2. Clear cache in DevTools (right-click → Empty Cache and Hard Reload)
3. Stop server (Ctrl+C) and restart (`npm run dev`)

### Module not found errors

```bash
rm -rf node_modules
npm install
npm run dev
```

---

## 🎯 Your First Edits

To get comfortable with the code, try these edits:

### Edit 1: Change the Hero Headline (5 seconds)

1. Open: `components/Hero.tsx`
2. Find: Line 15 with `"Build Custom Automation..."`
3. Change to: `"Your Custom Headline Here"`
4. Save (Cmd+S / Ctrl+S)
5. Watch your browser update

### Edit 2: Change Button Color (10 seconds)

1. Open: `tailwind.config.js`
2. Find: `orange: { 500: '#ff6b35'...`
3. Change `#ff6b35` to `#00d4ff` (cyan blue)
4. Save
5. Watch all orange buttons turn cyan

### Edit 3: Add a New Project (30 seconds)

1. Open: `components/Portfolio.tsx`
2. Find: The `projects` array around line 6
3. Copy the entire first project object (starting with `{id: 1...` ending with `},`)
4. Paste it after the last project
5. Change `id`, `title`, `description`, `metrics`, and `slug` to your new project
6. Save
7. You now have 7 projects showing instead of 6!

---

## ✅ You're All Set!

Your website is ready to customize. Here's what to do next:

1. **Customize the content** - Update all your company info, projects, and services
2. **Add images** - Create a `public/` folder and add your project screenshots
3. **Setup contact form** - Update the email integration (see README.md for details)
4. **Deploy** - When ready, push to Vercel (free) or Netlify
5. **Promote** - Share your new website with prospects!

---

## 📚 Learn More

**Next.js Documentation:** https://nextjs.org/docs  
**Tailwind CSS:** https://tailwindcss.com/docs  
**React:** https://react.dev  
**TypeScript:** https://www.typescriptlang.org/docs/

---

## 🎬 Next Command Cheatsheet

Keep these handy while developing:

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linter (check for errors)
npm run lint
```

---

## 🔥 Pro Tips

**Keyboard Shortcuts in VS Code:**

- **Cmd/Ctrl + P** - Quick file search (type filename)
- **Cmd/Ctrl + /** - Toggle comment on/off
- **Cmd/Ctrl + Shift + F** - Find and replace across all files
- **Cmd/Ctrl + J** - Toggle terminal visibility
- **Cmd/Ctrl + B** - Toggle file explorer
- **Alt + Up/Down** - Move line up or down
- **Cmd/Ctrl + D** - Select word (great for editing multiple at once)

**Browser Shortcuts:**

- **Cmd/Ctrl + Shift + R** - Hard refresh (clear cache)
- **F12** - Open DevTools
- **Cmd/Ctrl + Shift + M** - Toggle mobile view

---

## 🎉 You Did It!

You now have a production-ready AI consultancy website running locally. The hard part (building all this code) is done. Now it's just customizing it with your content.

**Go customize it, make it yours, and start landing those high-ticket consulting clients!**

Questions? Check the README.md for more detailed documentation.

Good luck! 🚀
