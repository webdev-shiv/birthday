// =========================================================================
//  BIRTHDAY WEBSITE CONFIGURATION FILE
//  Easily edit all text, letters, photos, reasons, and wishes here!
// =========================================================================

export const CONFIG = {
  // Couple Names
  recipient: {
    name: "Mannu",
    nickname: "Meri Jaan, Madam Ji",
    title: "Happy Birthday, Mannu! ❤️",
  },
  sender: {
    name: "Shivam",
    signature: "Forever yours, Shivam",
  },

  // Audio configuration
  audio: {
    title: "Mannu's Birthday Song ❤️",
    // Uses the custom song file copied from song.mp4
    customMp3Url: "/song.mp3",
    defaultVolume: 0.7,
  },

  // Dedicated Heartfelt Letter for Mannu (from letter.md)
  letter: {
    title: "Dil Ki Baat — Only for You ❤️",
    salutation: "Happy Birthday, meri Mannu. ❤️",
    paragraphs: [
      "Pata hai, kabhi-kabhi mujhe samajh nahi aata ki main tumhe kaise bataun ki tum mere liye kitni special ho. Kuch feelings aisi hoti hain na, jinhe words mein explain karna bahut mushkil hota hai, aur tum mere liye unhi feelings mein se ek ho.",
      "Tum meri life ka woh hissa ho jiske aane se bahut si cheezein aur bhi beautiful lagne lagi hain. Tumhari smile, tumhari baatein, tumhara gussa karna, tumhara mujhe pareshan karna aur phir khud hi mujhe mana lena — tumhari har chhoti si baat mere liye special hai. Kabhi tumse ladna, kabhi tumhe tang karna, kabhi bina kisi reason ke tumhe yaad karna aur kabhi bas tumse baat karte rehna… ye sab meri life ke woh moments hain jinhe main kabhi khona nahi chahta.",
      "Mannu, main nahi jaanta ki aane wala waqt hamare liye kya lekar aayega, lekin main itna zaroor jaanta hoon ki main tumhare saath bahut saari beautiful memories banana chahta hoon. Main tumhare saath hasna chahta hoon, tumhare bure dinon mein tumhara saath dena chahta hoon, tumhari achievements par tumse zyada khush hona chahta hoon aur jab kabhi tumhe lage ki sab kuch theek nahi hai, tab tumhara woh insaan banna chahta hoon jiske paas aakar tum apni saari pareshaniyan bhool sako.",
      "Main ye nahi kehta ki main hamesha perfect rahunga. Mujhse galtiyan hongi, kabhi main tumhe samajhne mein der karunga, aur kabhi shayad apni feelings sahi se express nahi kar paunga. Lekin meri ek wish hai hum chahe kitna bhi argue karein, ek-doosre ko samajhne ki koshish kabhi band na karein. Kyunki mere liye tumse jeetna important nahi hai, tumhare saath rehna important hai.",
      "Aaj tumhara birthday hai, aur main bas ye chahta hoon ki tumhari life mein itni khushiyan aayein ki tumhari aankhon mein kabhi aansu aayein bhi, toh sirf khushi ke. Tumhare saare dreams poore ho, tumhe woh sab mile jiske liye tum mehnat karti ho, aur tum kabhi apni worth par doubt na karo. Tum bahut precious ho, Mannu, aur main chahta hoon ki tum khud ko bhi utna hi pyaar do jitna tum deserve karti ho.",
      "Aur haan, madam ji , birthday par thoda extra nakhra allowed hai. Aaj tumhari saari wishes important hain, tumhari saari baatein sunni hain aur tumhari smile sabse zyada important hai. Bas hamesha aise hi rehna apni cute si smile ke saath, apne pagalpan ke saath aur apne uss unique tareeke ke saath jo tumhe meri Mannu banata hai.",
      "Thank you meri life mein aane ke liye, mujhe apni duniya ka ek hissa banane ke liye aur mujhe woh moments dene ke liye jo mere liye bahut maayne rakhte hain.",
      "Happy Birthday once again, Meri Jaan, Meri Mannu. ❤️",
      "I hope this new year of your life brings you endless happiness, peace, success and all the love your heart deserves.",
      "Aur agar mujhe tumhare liye ek hi wish maangni ho, toh main yahi maangunga ki tum hamesha khush raho, chahe life mein kuch bhi ho. Aur agar kabhi tumhari smile kho jaaye, toh mujhe mauka mile use wapas laane ka.",
      "I love you, Mannu. More than I can explain, and in more ways than these words could ever express.",
      "Happy Birthday, my girl. You will always have a very special place in my heart. ❤️"
    ],
    closing: "Forever and always yours,",
    signature: "Shivam",
  },
  get starterLetter() { return this.letter; },
  get deepLetter() { return this.letter; },

  // SECTION 3: Reasons Why I Love You, Mannu
  reasonsSpecial: [
    {
      id: 1,
      tag: "Reason #01",
      tagline: "Meri Favourite Smile",
      icon: "✨",
      title: "Your Magical Smile",
      shortDescription: "Tumhari smile meri saari tension bhula deti hai.",
      fullDescription: "Jab tum smile karti ho na, toh chahe mera din kitna bhi kharab kyun na ho, sab kuch thoda better lagne lagta hai. Tumhari hasi sunna, tumhe khush dekhna aur tumhari smile ki wajah banna meri favourite feelings mein se ek hai.",
      quote: "Teri smile meri favourite cheez hai, Mannu. Bas aise hi hamesha hansti rehna.",
      color: "from-pink-100 to-rose-200",
    },
    {
      id: 2,
      tag: "Reason #02",
      tagline: "Cute Si Pagli",
      icon: "🌸",
      title: "Your Caring Heart (And Cute Anger)",
      shortDescription: "Dil se soft, upar se thodi gusse wali.",
      fullDescription: "Tumhara chhoti-chhoti baaton par care karna, meri fikar karna, mujhse naraz ho jaana aur phir apne cute se tareeke se mujhe mana lena — tumhari ye saari little things mujhe tumse aur zyada pyaar karwa deti hain.",
      quote: "Tera gussa bhi pyaara hai, teri care bhi. Sach kahun toh mujhe meri ye pagal si Mannu bahut pyaari hai.",
      color: "from-purple-100 to-pink-200",
    },
    {
      id: 3,
      tag: "Reason #03",
      tagline: "Little Things, Big Love",
      icon: "💫",
      title: "How You Brighten Ordinary Moments",
      shortDescription: "Tumhare saath normal moments bhi special ban jaate hain.",
      fullDescription: "Tumse random baatein karna, bina kisi reason ke hasna, chhoti si baat par tease karna aur late-night conversations mein waqt ka pata hi na chalna — tumhare saath simple moments bhi meri favourite memories ban jaate hain.",
      quote: "Tere saath bitaya hua har chhota sa moment mere liye bahut special hai, Mannu.",
      color: "from-amber-100 to-pink-200",
    },
    {
      id: 4,
      tag: "Reason #04",
      tagline: "My Person, Always",
      icon: "🏡",
      title: "My Safe Space & Best Friend",
      shortDescription: "Tumhare saath main bas khud jaisa reh sakta hoon.",
      fullDescription: "Tumse main apni silly baatein share kar sakta hoon, apni problems bata sakta hoon aur bina pretend kiye apna real self reh sakta hoon. Tum meri girlfriend hi nahi, meri best friend aur woh insaan bhi ho jiske saath main apni duniya share karna chahta hoon.",
      quote: "Duniya mein kitne bhi log kyun na hon, Mannu, tumhari jagah mere dil mein hamesha special rahegi.",
      color: "from-rose-100 to-purple-200",
    },
  ],

  // Scrapbook Photo Gallery: "Our Little Memories" (Using your personal photos!)
  memories: [
    {
      id: "mem-1",
      title: "Initial Spark ✨",
      caption: "Jahan se hamari kahani ka pehla sitara chamka tha... Teri ek jhalak aur mera dil haar baitha.",
      date: "The Beginning",
      tilt: "-2.5deg",
      tapeColor: "#fed7aa",
      image: "/memories/initial-spark.jpg",
      fallbackGradient: "linear-gradient(135deg, #fbcfe8 0%, #f472b6 100%)",
      sticker: "✨",
      location: "Where It All Started",
    },
    {
      id: "mem-2",
      title: "Our First Date ☕",
      caption: "Pehli mulaqaat ki woh pyari si nervousness aur tera muskura ke baat karna... waqt jaise wahin ruk gaya tha.",
      date: "Day One",
      tilt: "3deg",
      tapeColor: "#fbcfe8",
      image: "/memories/first-date.jpg",
      fallbackGradient: "linear-gradient(135deg, #e9d5ff 0%, #c084fc 100%)",
      sticker: "💫",
      location: "Our Special Place",
    },
    {
      id: "mem-3",
      title: "Spicy Mirchi 🌶️",
      caption: "Thoda teekha gussa, dher saara nakhra aur woh cute si smile jo sirf meri Mannu ka signature style hai!",
      date: "Café Nights",
      tilt: "-3.5deg",
      tapeColor: "#fecdd3",
      image: "/memories/spicy-mirchi.jpg",
      fallbackGradient: "linear-gradient(135deg, #fecdd3 0%, #fb7185 100%)",
      sticker: "🌶️",
      location: "Warm Lights & Sweet Drama",
    },
    {
      id: "mem-4",
      title: "Pause Life Moment 🌿",
      caption: "Jab tere kareeb hone se saari duniya ka shor tham gaya... bas tu, main aur hazaaron ankahe lamhe.",
      date: "Timeless Magic",
      tilt: "2.5deg",
      tapeColor: "#bae6fd",
      image: "/memories/pause-life-moment.jpg",
      fallbackGradient: "linear-gradient(135deg, #ddd6fe 0%, #818cf8 100%)",
      sticker: "🍃",
      location: "Under The Quiet Trees",
    },
    {
      id: "mem-5",
      title: "Our Partner in Crime 🏆",
      caption: "Sirf dil ke nahi, har dream aur hackathon ke partner... Teri cute si pout aur meri sabse badi jeet!",
      date: "Hackathon Day",
      tilt: "-2deg",
      tapeColor: "#fef08a",
      image: "/memories/our-partner.jpg",
      fallbackGradient: "linear-gradient(135deg, #fef08a 0%, #f59e0b 100%)",
      sticker: "👓",
      location: "Coding & Dream Team",
    },
    {
      id: "mem-6",
      title: "Build Together 🏗️",
      caption: "Haath thaam kar nayi manzilon ki taraf badhna... Zindagi ki har nayi shuruat tere hi saath banani hai.",
      date: "Step by Step",
      tilt: "3.5deg",
      tapeColor: "#bbf7d0",
      image: "/memories/build-together.jpg",
      fallbackGradient: "linear-gradient(135deg, #bbf7d0 0%, #34d399 100%)",
      sticker: "🤝",
      location: "Side by Side Forever",
    },
  ],

  // SECTION 1: Birthday Wishes for My Mannu
  wishesSection: {
    heading: "Birthday Wishes for My Mannu",
    subtitle: "Meri taraf se tumhare liye chaar chhoti si wishes, kyunki tum meri duniya ka sabse beautiful hissa ho.",
  },
  birthdayWishes: [
    {
      id: "wish-1",
      emoji: "🌟",
      title: "Endless Radiance",
      tag: "Dreams & Glory",
      wish: "Meri Mannu, tumhari smile hamesha aise hi chamakti rahe, tumhare saare dreams poore hon aur tumhe life mein woh sab mile jo tum deserve karti ho. Kabhi khud par doubt mat karna, kyunki tum jitna khud ko samajhti ho, usse kahin zyada special ho. Hamesha aise hi shine karti rehna, meri sunshine.",
      interactiveMessage: "Kabhi mat bhoolna, tum meri life ki sabse beautiful smiles mein se ek ki wajah ho, meri sunshine.",
    },
    {
      id: "wish-2",
      emoji: "🌸",
      title: "Sukoon Bhari Zindagi",
      tag: "Peace of Mind",
      wish: "Meri jaan, meri wish hai ki tumhari life se saari pareshaniyan door ho jaayein aur tumhara har din ek beautiful smile ke saath start ho. Jab bhi life difficult lage, tumhe himmat mile, dil ko sukoon mile aur tumhare paas hamesha khush rehne ki koi na koi wajah ho.",
      interactiveMessage: "Duniya chahe kitni bhi difficult ho, I hope tumhe mere saath hamesha sukoon mile.",
    },
    {
      id: "wish-3",
      emoji: "💖",
      title: "Sirf Tumhara Pyaar",
      tag: "Pure Love",
      wish: "Mannu, main chahta hoon ki tumhe meri chhoti-chhoti baaton mein bhi pyaar nazar aaye, meri presence mein sukoon mile aur bina kuch kahe bhi tum meri feelings samajh sako. Waqt kitna bhi badal jaaye, main har baar tumhe choose karne ki ek nayi wajah dhoondhna chahta hoon. Agar dobara choose karne ka mauka mile, toh bhi main tumhe hi choose karunga, meri jaan.",
      interactiveMessage: "Har baar, har naye din mein, meri choice tum hi rahogi.",
    },
    {
      id: "wish-4",
      emoji: "🦋",
      title: "Tumhare Saare Dreams",
      tag: "All Your Dreams",
      wish: "Meri princess, tumne apne dil mein jo bhi dreams sambhaal kar rakhe hain, iss saal woh sab tumhe reality bante hue dikhein. Jab dar lage toh courage mile, jab thak jao toh strength mile aur tumhari har chhoti-badi achievement tumhare chehre par smile laaye. Aur haan, tum kuch bhi achieve karo, main hamesha tumhare liye sabse zyada khush hone walon mein se ek rahunga.",
      interactiveMessage: "Tum bas apne dreams ke peeche bhaagti rehna, meri jaan. Main hamesha tumhe cheer karunga.",
    },
  ],

  // SECTION 2: Main Birthday Message and Promise
  finalSurprise: {
    badge: "The Grand Finale ✨",
    cakePrompt: "Mannu, tap the candles to blow them out and make a secret wish! 🎂🕯️",
    cakeSuccess: "Your wish is now sealed with love! ✨🎉",
    mainHeading: "Happy Birthday, Meri Jaan! ❤️",
    description: "Tum meri life ki sabse beautiful story ka woh hissa ho jise main kabhi end nahi karna chahta. Thank you meri life mein aane ke liye, meri silly baaton par hasne ke liye, mere saath apni khushiyan share karne ke liye aur meri duniya ko itna special banane ke liye.",
    romanticQuote: "Promise me, Mannu, ki tum aise hi hansti rahogi, thoda sa pagalpan karti rahogi aur meri life ko apni presence se beautiful banati rahogi.",
    promiseTitle: "Ek Promise, Sirf Tumhare Liye! 💖",
    promiseMessage: "Main tumhe aaj bhi cherish karunga, kal bhi choose karunga aur har aane wale kal mein tumhare saath beautiful memories banana chahunga. — Shivam ❤️",
    primaryBtn: "I Promise! Always Yours 💖",
    secondaryBtn: "Pakka Promise, Shivam! 🥰",
  },
};
