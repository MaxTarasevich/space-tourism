

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      'dark':'#0B0D17',
      'purple':'#D0D6F9',
      'grey':{
        40:'rgba(151, 151, 151, 0.45)',
        65:'rgba(151, 151, 151, 0.65)'
        },
      'white':{
        10:'rgba(255, 255, 255, 0.1)',
        40:'rgba(255, 255, 255, 0.04)',
        50:'rgba(255, 255, 255, 0.5)',
        100:'#FFFFFF'}
    },
    fontFamily: {
      'Bellefair': ['Bellefair'],
      'BarlowCond': ['Barlow Condensed'],
      'Barlow': ['Barlow']
    },
    fontSize: {
      'head1': ['150px' , {
        lineHeight:'1.15',
      }],
      'head2': '100px',
      'head3': '56px',
      'head4': '32px',
      'head5': ['28px', {
        letterSpacing: '4.72px',
      }],
      'head5-tab': ['20px', {
        letterSpacing: '3.38px',
      }],
      'subhead1': '28px',
      'subhead2':  ['14px', {
        letterSpacing: '2.36px',
      }],
      'nav':['16px', {
        letterSpacing: '2.7px',
      }],
      'body':['18px',{
        lineHeight:'32px',
      }]
    },
    letterSpacing: {
      btn: '2px',
      'body':'1.5px'
    },
    extend: {
      backgroundImage: {
      'home-bg-lg': "url('../public/assets/home/background-home-desktop.jpg')",
      'home-bg-md': "url('../public/assets/home/background-home-tablet.jpg')",
      'home-bg-sm': "url('../public/assets/home/background-home-mobile.jpg')",
      'crew-bg-lg': "url('../public/assets/crew/background-crew-desktop.jpg')",
      'crew-bg-md': "url('../public/assets/crew/background-crew-tablet.jpg')",
      'crew-bg-sm': "url('../public/assets/crew/background-crew-mobile.jpg')",
      'destination-bg-lg': "url('../public/assets/destination/background-destination-desktop.jpg')",
      'destination-bg-md': "url('../public/assets/destination/background-destination-tablet.jpg')",
      'destination-bg-sm': "url('../public/assets/destination/background-destination-mobile.jpg')",
      'technology-bg-lg': "url('../public/assets/technology/background-technology-desktop.jpg')",
      'technology-bg-md': "url('../public/assets/technology/background-technology-tablet.jpg')",
      'technology-bg-sm': "url('../public/assets/technology/background-technology-mobile.jpg')",
    },
   
  },
  },
  plugins: [],
}
