/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['*'],
  theme: {
    extend: {
      fontFamily:{
        'rubik':'Rubik',
        'bangla':'Durbar',
        'bangla-2':'Charukola Unicode',
        'bangla-3':'Mukti',
      },
      colors:{
        'primary':'#525FE1',
        'primary-text':'#0B132A',
        'secondary-text':'#4F5665',
        'yellow':'#FFCF59',
      },
      backgroundImage:{
        'stats-bg':"url('../assest/images/stats.svg')",
        'bg-prime' : "url(),linear-gradient(93.74deg, rgb(82, 95, 225) -3.597%,rgb(46, 56, 153) 102.415%)",
        'gradient' : "url('../assest/images/background.png')"
      }
    },
  },
  plugins: [require("daisyui")],
}

