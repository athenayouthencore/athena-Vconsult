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
  apiUrl: '',

  /* ---- Studio background image for the doctor's camera (optional) --
     Must be a file inside this website (e.g. 'assets/studio.jpg'),
     NOT a link to another site, otherwise the browser blocks it.      */
  studioImage: '',

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
