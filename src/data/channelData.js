// 🧠 HOW TO USE:
// 1. Each channel `id` must match the key in your schedule.js (e.g., 'trap_lore').
// 2. `label` is what shows up in the UI.
// 3. `description` gives users context on the channel.
// 4. `thumbnail` should point to a valid image in your /public/thumbnails folder.
// 5. Set `premium: true` if you want to lock the channel behind a paywall (optional, works if logic is wired in).

const channels = [
  {
    id: 'trap_lore',
    label: 'TrapLore',
    description: 'Documentaries & deep dives into rap culture',
    thumbnail: '/thumbnails/trap.jpg',
    premium: false
  },
  {
    id: 'hoodvlogs',
    label: 'HoodVlogs',
    description: 'Raw street-level footage and local action',
    thumbnail: '/thumbnails/hood.jpg',
    premium: false
  },
  {
    id: 'food_channel',
    label: 'Food Channel',
    description: 'Street eats, food vlogs, and taste tests',
    thumbnail: '/thumbnails/food.jpg',
    premium: false
  },
  {
    id: 'police_tv',
    label: 'Police TV',
    description: 'Chases, stings, and crime footage compilations',
    thumbnail: '/thumbnails/police.jpg',
    premium: false
  },
  {
    id: 'black_bunnies',
    label: 'Black Bunnies',
    description: '🔥 NSFW channel for mature audiences only',
    thumbnail: '/thumbnails/nsfw.jpg',
    premium: true
  },
  {
    id: 'white_soft',
    label: 'SoftWhite Underbelly',
    description: 'Interviews with real people & raw stories',
    thumbnail: '/thumbnails/soft.jpg',
    premium: false
  },
  {
    id: 'earth_tv',
    label: 'EarthTV',
    description: 'Nature cams, Earth views, and calm visuals',
    thumbnail: '/thumbnails/earth.jpg',
    premium: false
  },
  {
    id: 'fight_night',
    label: 'Fight Night',
    description: 'Street fights, gym matches, and combat sports',
    thumbnail: '/thumbnails/fight.jpg',
    premium: true
  },
  {
    id: 'anime_replay',
    label: 'Anime Replays',
    description: 'Old-school episodes and AMV edits',
    thumbnail: '/thumbnails/anime.jpg',
    premium: false
  },
  {
    id: 'chaos_loop',
    label: 'Chaos Loop',
    description: 'Unfiltered chaos — TikTok clips, fails, & loops',
    thumbnail: '/thumbnails/chaos.jpg',
    premium: false
  },
  {
    id: 'car_crash_tv',
    label: 'Car Crash TV',
    description: 'Dashcams, road rage, and wild wrecks',
    thumbnail: '/thumbnails/car.jpg',
    premium: false
  },
  {
    id: 'gymfails',
    label: 'Gym Fails',
    description: 'Workout disasters and form breakdowns',
    thumbnail: '/thumbnails/gym.jpg',
    premium: false
  },
  {
    id: 'late_night',
    label: 'Late Night',
    description: 'Weird infomercials, cursed media, and low-light vibes',
    thumbnail: '/thumbnails/late.jpg',
    premium: true
  },
  {
    id: 'vintage_vault',
    label: 'Vintage Vault',
    description: 'Old commercials, retro clips, and analog weirdness',
    thumbnail: '/thumbnails/vintage.jpg',
    premium: false
  },
  {
    id: 'alien_signal',
    label: 'Alien Signal',
    description: 'Static, analog blips, lore drops, and ARG content',
    thumbnail: '/thumbnails/alien.jpg',
    premium: true
  },
  {
    id: 'music_loop',
    label: 'Music Loop',
    description: 'Endless music videos, beat edits, and remixes',
    thumbnail: '/thumbnails/music.jpg',
    premium: false
  },
  {
    id: 'stunt_zone',
    label: 'Stunt Zone',
    description: 'ATVs, dirt bikes, and rooftop flips',
    thumbnail: '/thumbnails/stunt.jpg',
    premium: false
  },
  {
    id: 'theory_tv',
    label: 'Theory TV',
    description: 'Conspiracies, decode docs, and thought holes',
    thumbnail: '/thumbnails/theory.jpg',
    premium: true
  }
  
];

export default channels;
