// 🧠 HOW TO USE:
// 1. Replace every "https://YOUR-BUNNY-CDN.pullzone.net/..." with your own CDN Pull Zone URL.
// 2. Organize your folders like: /sex/, /trap_lore/, /food/, etc.
// 3. You can change the video titles or time slots however you want.
// 4. To stream 24/7, keep filling out the times so content loops!

const schedule = {
  black_bunnies: {
    slots: {
      "00:00": {
        title: "Video 1",
        url: "https://YOUR-BUNNY-CDN.pullzone.net/your-folder/video1.mp4" // Replace this with your BunnyCDN video URL
      },
      "00:10": {
        title: "Video 2",
        url: "https://YOUR-BUNNY-CDN.pullzone.net/your-folder/video2.mp4"
      },
      // Add more times + videos as needed
    }
  },

  trap_lore: {
    slots: {
      "00:00": {
        title: "TrapLore - Part 1",
        url: "https://YOUR-BUNNY-CDN.pullzone.net/trap_lore/video1.mp4"
      },
      "00:10": {
        title: "TrapLore - Part 2",
        url: "https://YOUR-BUNNY-CDN.pullzone.net/trap_lore/video2.mp4"
      }
    }
  },

  street_fights: {
    slots: {
      "00:00": {
        title: "Street Fights - Clip 1",
        url: "https://YOUR-BUNNY-CDN.pullzone.net/street_fights/clip1.mp4"
      }
    }
  },

  hoodvlogs: {
    slots: {
      "00:00": {
        title: "HoodVlogs - Clip 1",
        url: "https://YOUR-BUNNY-CDN.pullzone.net/hoodvlogs/video1.mp4"
      }
    }
  },

  police_tv: {
    slots: {
      "00:00": {
        title: "PoliceTV - Clip 1",
        url: "https://YOUR-BUNNY-CDN.pullzone.net/police/clip1.mp4"
      }
    }
  },

  food_channel: {
    slots: {
      "00:00": {
        title: "Food Channel - Clip 1",
        url: "https://YOUR-BUNNY-CDN.pullzone.net/food/video1.mp4"
      }
    }
  }
};

export default schedule;
