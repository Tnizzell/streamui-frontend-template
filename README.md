# 🚀 StreamUI Starter Kit (Frontend)

**Deploy your own streaming site in 2 clicks. No backend. No login. No hassle.**

This is the **frontend-only** version of StreamUI — a lightweight streaming site template you can deploy instantly. It runs 100% on the frontend. Just plug in your video links, and you're live.

---

## 🔧 What's Included

- ✅ Channel Switcher
- ✅ Auto-playing video player
- ✅ “Up Next” autoplay with countdown
- ✅ Supports `.mp4` and `.m3u8` streams
- ✅ Mobile responsive UI
- ✅ No login or backend required

---

## ⚡ Deploy Your Own

> You must be logged into GitHub + Vercel.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository=https://github.com/Tnizzell/streamui-frontend-template)

1. Click the button
2. Choose a project name (optional)
3. Hit deploy — that’s it!

---

## 🎞 Connect Your Own Videos

Open `/data/scheduleData.js` and update the URLs:

```js
url: "https://your-bunnycdn.pullzone.net/folder/video.mp4"


📺 Add or Edit Channels

Go to /data/channelData.js and:

Add new channel objects

Set premium: true if you want it locked (logic not active in this version)

Update thumbnails/ in the /public folder to match
-----------------------------------------------------------------
🧠 Heads Up
This is the template version of StreamUI.
It does not include:

Supabase login

Premium paywalls

Stripe payments

Backend database

For all that, get the full version.
----------------------------------------------
🧩 Version
v0.0.1 – Gumroad Drop
No backend. No database. No stress.


Need help? DM @tnizzell or read the BunnyCDN docs.