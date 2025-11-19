# Quick Start Guide - The Peniel Academy Utawala Website

## ✅ Your Website is Ready!

The website is now **running** at: **http://localhost:3000**

## 🎉 What's Included

Your website has:
- ✅ Stunning hero section with animations
- ✅ About Us with Mission, Vision, and Faith statement
- ✅ Programs section (Early Years, Middle School, Junior School)
- ✅ Core Competencies & Values grids
- ✅ Interactive image gallery
- ✅ Contact & Enrollment section
- ✅ Fully responsive design
- ✅ Modern gradients and animations

## 📸 Next Steps: Add Your Images

1. Navigate to `public/assets/` folder
2. Add your school images with these names:
   - `hero-banner.jpg` - Main banner (graduation/band/students)
   - `band.jpg` - School band performance
   - `graduation.jpg` - Graduation ceremony
   - `director.jpg` - School director photo
   - `teachers.jpg` - Teachers photo
   - `students-activities.jpg` - Students doing activities

3. The website will automatically use these images!

## 🚀 How to Run

### Start Development Server
```bash
pnpm dev
```
View at: http://localhost:3000

### Build for Production
```bash
pnpm build
pnpm start
```

### Stop the Server
Press `Ctrl + C` in the terminal

## 🎨 Customization Tips

### Change Colors
Edit `app/page.tsx` and look for color classes like:
- `from-blue-600` (change blue)
- `from-purple-600` (change purple)
- `from-pink-500` (change pink)

### Edit Content
All content is in `app/page.tsx`:
- Hero text: Lines 20-50
- About Us: Lines 66-135
- Programs: Lines 138-190
- Competencies: Lines 193-224
- Values: Lines 228-260
- Gallery: Lines 267-323
- Contact: Lines 326-380

### Add More Images to Gallery
In `app/page.tsx`, find `galleryImages` array (line 7) and add more images:
```typescript
{ src: "/assets/your-image.jpg", alt: "Description", caption: "Caption" }
```

## 📱 View on Mobile

1. Make sure your phone is on the same WiFi network
2. Visit: **http://192.168.100.251:3000** on your phone
3. The website is fully responsive!

## 🌐 Deploy to Internet (Free)

### Option 1: Vercel (Recommended - 5 minutes)
1. Push code to GitHub
2. Visit https://vercel.com/new
3. Import your repository
4. Done! You'll get a free `.vercel.app` domain

### Option 2: Netlify
1. Push code to GitHub
2. Visit https://app.netlify.com/
3. Import your repository
4. Done! You'll get a free `.netlify.app` domain

## 🆘 Need Help?

### Website Not Loading?
- Check terminal for errors
- Make sure port 3000 is not in use
- Try `pnpm dev` again

### Images Not Showing?
- Make sure images are in `public/assets/` folder
- Check file names match exactly
- Image formats: `.jpg`, `.jpeg`, `.png`, `.webp`

### Want to Change Something?
- All code is in `app/page.tsx`
- Styles are in `app/globals.css`
- Use Tailwind CSS classes for styling

## 📞 Website Contact Info

Currently showing:
- **Phone**: 0726 682 492
- **Email**: info@tpau.sc.ke
- **Location**: Utawala, Off Bypass, Benedicta, Nairobi

To change, edit lines 326-380 in `app/page.tsx`.

---

**"I can do everything through Christ who strengthens me." — Philippians 4:13**

Enjoy your new website! 🎓✨
