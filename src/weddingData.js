// All wedding content lives here. Edit this file to change names, dates, events or photos.

// Names & greeting (envelope label, header, menu, RSVP page)
export const Tt = {
  names: 'Dhruv & Vandana',
  greeting: 'ध्रुव कुमार संग वंदना — We can’t wait to celebrate our big day with you in Baikunthpur.',
}

// Wedding hashtag shown near the end of the page
export const Hashtag = '#DhruvWedsVandana'

// Countdown target (wedding: Friday 11 Dec 2026, 8:00 PM IST)
export const kp = '2026-12-11T20:00:00+05:30'
// Date shown under the scratch card and on the RSVP page
export const zc = 'Friday, December 11, 2026'
// Date shown in the floating pill once revealed
export const xp = 'December 11th, 2026'
// Venue line
export const Ic = 'N H Garden, Baikunthpur'
// WhatsApp number that receives RSVPs (country code, no +)
export const ms = { whatsapp: '918319651960', email: '' }

// Section photos
export const Pe = {
  hero: '/images/couple-portrait.jpeg',
  story: '/images/couple-stage.jpeg',
  schedule: '/images/couple-selfie.jpeg',
  party: '/images/couple-portrait.jpeg',
  ornTop: '/images/orn-top.webp',
  ornBottom: '/images/orn-bottom.webp',
}

// "Invitation" section (replaces "Our Story")
export const Rr = {
  heading: 'Invitation',
  subheading: 'सादर आमंत्रण',
  paragraphs: [
    '॥ श्री गणेशाय नमः ॥',
    'श्री रामचरित द्विवेदी एवं श्रीमती उमा द्विवेदी के सुपुत्र<br><strong>आयुष्मान ध्रुव कुमार</strong>',
    'संग',
    'स्व. श्री सुशील कुमार शुक्ला एवं श्रीमती शान्ति देवी की सुपुत्री<br><strong>आयुष्मति वंदना</strong>',
    'के शुभ विवाह के पावन अवसर पर आप सपरिवार सादर आमंत्रित हैं। कृपया पधारकर नवदंपति को अपना आशीर्वाद प्रदान करें।',
    'Together with our families, we joyfully invite you to celebrate our wedding and bless us as we begin this beautiful journey together.',
  ],
  closing: 'आपकी उपस्थिति ही हमारी शोभा है। ❤️💍',
}

const VENUE = 'N H Garden, Baikunthpur, Koriya, Chhattisgarh'

// Schedule (events with the same date are grouped under one heading)
export const Sp = [
  {
    name: 'उपनयन संस्कार, हल्दी, मेंहदी 🌼💛',
    dateHeading: 'Thursday, December 10, 2026',
    start: 'गुरुवार · Upanayan, Haldi & Mehendi',
    end: null,
    startISO: '2026-12-10T10:00:00.000+05:30',
    endISO: '2026-12-10T22:00:00.000+05:30',
    location: 'Baikunthpur, Koriya, Chhattisgarh',
    dressCode: null,
    html: '<p>विवाह उत्सव का शुभारंभ — उपनयन संस्कार, हल्दी एवं मेंहदी की रस्में। हल्दी की रौनक, मेंहदी के रंग और अपनों के आशीर्वाद के साथ इस सुंदर सफ़र की शुरुआत में हमारे साथ शामिल हों। 💛✨</p>',
    hideLocation: true,
    showMap: false,
    whereToStay: false,
  },
  {
    name: 'बारात प्रस्थान 🐎',
    dateHeading: 'Friday, December 11, 2026 2:00 PM',
    start: '2:00 PM',
    end: null,
    startISO: '2026-12-11T14:00:00.000+05:30',
    endISO: null,
    location: 'Shri Ram Mandir, Baikunthpur',
    dressCode: null,
    html: '<p>बारात हमारे निज निवास <strong>श्री राम मंदिर</strong> से दोपहर 2:00 बजे बैकुंठपुर के लिए प्रस्थान करेगी।</p>',
    hideLocation: true,
    showMap: false,
    whereToStay: false,
  },
  {
    name: 'शुभ विवाह · Wedding 💍',
    dateHeading: 'Friday, December 11, 2026 8:00 PM',
    start: '8:00 PM Onwards',
    end: null,
    startISO: '2026-12-11T20:00:00.000+05:30',
    endISO: '2026-12-11T23:59:00.000+05:30',
    location: VENUE,
    dressCode: 'Traditional Attire',
    html: '<p>शुभ विवाह समारोह एवं प्रीतिभोज। आपकी गरिमामयी उपस्थिति प्रार्थनीय है।</p><p>We’re getting married! Join us for the ceremony, dinner and celebrations.</p>',
    showMap: true,
    venueName: "N H Garden",
    venueAddress: "Park in Baikunthpur, Koriya, Chhattisgarh",
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=N+H+Garden+Baikunthpur+Koriya+Chhattisgarh',
    whereToStay: true,
  },
]

// "Family" section (replaces "Wedding Party"). Cards without a photo show a monogram.
export const tt = [
  {
    name: 'Groom’s Family',
    title: 'वर पक्ष · द्विवेदी परिवार',
    photo: '/images/family/family-groom.jpg',
    ratio: 1536 / 1024,
    pos: '50% 30%',
    html: '<p>स्नेह और आशीर्वाद से भरा हमारा परिवार, जो इस मंगल अवसर पर आपका हार्दिक स्वागत करता है। ❤️</p>',
  },
  {
    name: 'Bride’s Brother',
    title: 'वधू के भाई',
    photo: '/images/family/bride-brother.jpg',
    ratio: 1600 / 1064,
    pos: '50% 30%',
    html: '',
  },
  {
    name: 'Groom’s Sister',
    title: 'वर की बहन',
    photo: '/images/family/groom-sister.jpg',
    ratio: 4 / 5,
    pos: '50% 45%',
    html: '',
  },
  {
    name: 'श्री रामचरित द्विवेदी & श्रीमती उमा द्विवेदी',
    title: 'वर पक्ष · Groom’s Parents',
    monogram: 'ध्रुव',
    html: '<p>आयुष्मान ध्रुव कुमार के माता-पिता, जो हर्ष एवं स्नेह के साथ आपको इस मंगल अवसर पर आमंत्रित करते हैं। ❤️</p>',
  },
  {
    name: 'स्व. श्री सुशील कुमार शुक्ला & श्रीमती शान्ति देवी',
    title: 'वधू पक्ष · Bride’s Parents',
    monogram: 'वंदना',
    html: '<p>आयुष्मति वंदना के माता-पिता। आपकी उपस्थिति एवं आशीर्वाद इस पावन बंधन को और भी विशेष बना देंगे। ✨</p>',
  },
  {
    name: 'श्री रामचरित द्विवेदी',
    title: 'निवेदक · Contact',
    monogram: '☎',
    html: '<p>किसी भी जानकारी के लिए संपर्क करें:</p><p><a href="tel:+918319651960">+91 83196 51960</a><br><a href="tel:+919425583677">+91 94255 83677</a></p>',
  },
]

// Moments gallery (desktop columns; mobile splits into two columns automatically)
export const Oc = [
  [{ src: '/images/couple-portrait.jpeg', tall: true }],
  [{ src: '/images/couple-stage.jpeg' }],
  [{ src: '/images/couple-selfie.jpeg', tall: true }],
]
