🚀 StreamUI Starter Kit (Frontend)
Deploy your own streaming site in 2 clicks. No backend. No login. No hassle.

This is the frontend-only version of StreamUI — a fully working streaming template where users can flip through channels, play videos from your own CDN, and customize the vibe however they want.

🔧 What’s Inside
✅ Channel Switcher

✅ Auto-playing video player

✅ Optional HLS .m3u8 and .mp4 support

✅ Up next auto-loader

✅ Clean responsive layout

✅ No backend, no auth, no paywalls

🔌 Plug in your own BunnyCDN or public video links

🛠 How To Deploy
Log in to your GitHub account

Click this button to deploy on Vercel:


That’s it. Vercel will clone the project and deploy the site for you.

🎞 How To Add Your Own Content
Go to /data/scheduleData.js and update the file like this:

js
Copy
Edit
url: "https://your-bunny-cdn.pullzone.net/your-folder/your-video.mp4"
Change the title, the time slots, or even add more channels in /data/channelData.js.

Make sure you have thumbnails in /public/thumbnails/ like:

Copy
Edit
trap.jpg
food.jpg
fight.jpg
🧠 Want to Add Login or Premium Stuff?
This template is frontend-only, made to be super simple and deployable instantly.
If you want login, subscriptions, paywalls, or chat — that’s part of the full-stack version.

📦 Version
v0.0.1 – Lightweight Edition
Zero backend. Zero tracking. Zero config.
Just drop it, click, and go live.