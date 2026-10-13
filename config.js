/* =====================================================================
   ATHENA VIDEO CONSULT — SETTINGS
   This is the only file you normally edit on the call page.
   ===================================================================== */
window.ATHENA_CONFIG = {

  /* ---- Branding ---------------------------------------------------- */
  clinicName:    'Athena Youthencore',
  clinicTagline: 'Hair & Skin Studio',
  logoUrl:       '',                 // e.g. 'assets/logo.png'  (leave '' to use the gold wordmark)
  clinicWhatsApp:'917567706000',     // shown on the thank-you screen ("Message us on WhatsApp")
  website:       'https://athenaclinic.co.in',

  /* ---- Backend ------------------------------------------------------
     Paste your Apps Script Web App URL (ends with /exec).
     It supplies: the video library & backdrop playlist (from the Sheet),
     consult details for each link, free TURN relay credentials, and logs.
     If left blank, the page uses the LOCAL lists below.              */
  apiUrl: 'https://script.google.com/macros/s/AKfycbwzlRJRwmisFzpXJvLaFKfbNX_3-81inVIaBDDJNmuUXvT9E9BPGivWEEUsANeWN_Vt/exec',

  /* ---- Premium room photo -------------------------------------------
     Shown full-screen the moment the patient opens the link.
     Upload the photo into an "assets" folder in this GitHub repository.
     roomImage:        wide photo for laptops   (1920 x 1080, JPG, under 600 KB)
     roomImageMobile:  tall photo for phones    (1080 x 1920, JPG, under 500 KB) — optional
     roomFilmsInCall:  true  = once the call opens, the Backdrop Playlist films take over
                       false = keep the room photo behind the call too                     */
  roomImage:       'assets/room.jpg',
  roomImageMobile: 'assets/room-mobile.jpg',
  roomFilmsInCall: true,

  /* ---- Studio background image for the doctor's camera (optional) --
     Must be a file inside this website (e.g. 'assets/studio.jpg'),
     NOT a link to another site, otherwise the browser blocks it.      */
  studioImage: 'assets/room.jpg',
  doctorBackground: 'room',          // 'room' = clinic image behind the doctor (auto on), 'film' = Backdrop films, 'off' = real camera

  /* ---- Backdrop behaviour ------------------------------------------ */
  defaultBackdrop: 'mix',            // 'branding' | 'procedure' | 'marketing' | 'mix' | 'calm'
  backdropClipSeconds: 14,           // each backdrop clip plays this long, then cross-fades

  /* ---- Connection (advanced — leave as is) ------------------------- */
  peerPrefix: 'athena-yhs-vc-',
  peerServer: {},                    // {} = free public PeerJS server. Own server: {host:'..', port:443, path:'/', secure:true}

  /* ---- LOCAL fallback lists (used only when apiUrl is blank) ------- */
  localBackdrops: [
    // { title:'Clinic walkthrough', url:'videos/bg-clinic.mp4', mode:'branding' },
    // { title:'FUE close-up',       url:'videos/bg-fue.mp4',    mode:'procedure' },
  ],
  localLibrary: [
    // { id:'fue', title:'How FUE Hair Transplant Works', category:'Procedures', type:'mp4', url:'videos/fue-explained.mp4', thumb:'', duration:'3:20' },
    // { id:'prp', title:'PRP Therapy Explained',          category:'Procedures', type:'youtube', url:'https://youtu.be/XXXXXXXXXXX' },
  ]
};
