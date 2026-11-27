// All wedding content lives here. Edit this file to change names, dates, events or photos.
// All visible text is in Hindi.

// Names & greeting (envelope label, header)
export const Tt = {
  names: 'ध्रुव संग वंदना',
  greeting: 'आयुष्मान ध्रुव कुमार संग आयुष्मति वंदना — हमारे शुभ विवाह में आपकी प्रतीक्षा रहेगी।',
}

// Wedding hashtag shown near the end of the page
export const Hashtag = '#ध्रुवसंगवंदना'

// Countdown target (wedding: Friday 11 Dec 2026, 8:00 PM IST)
export const kp = '2026-12-11T20:00:00+05:30'
// Date shown under the scratch card
export const zc = 'शुक्रवार, 11 दिसंबर 2026'
// Date shown once revealed (short form)
export const xp = '11 दिसंबर 2026'
// Venue line
export const Ic = 'एन. एच. गार्डन, बैकुंठपुर'
// WhatsApp number (country code, no +)
export const ms = { whatsapp: '918319651960', email: '' }

// Section photos
export const Pe = {
  hero: '/images/couple-portrait.jpeg',
  story: '/images/couple-stage.jpeg',
  schedule: '/images/couple-portrait.jpeg',
  party: '/images/couple-stage.jpeg',
  ornTop: '/images/orn-top.webp',
  ornBottom: '/images/orn-bottom.webp',
}

// Section titles
export const Titles = {
  story: 'निमंत्रण',
  schedule: 'कार्यक्रम',
  party: 'परिवार',
}

// "निमंत्रण" section
export const Rr = {
  heading: 'निमंत्रण',
  subheading: 'सादर आमंत्रण',
  paragraphs: [
    '॥ श्री गणेशाय नमः ॥',
    'श्री रामचरित द्विवेदी एवं श्रीमती उमा द्विवेदी के सुपुत्र<br><strong>आयुष्मान ध्रुव कुमार</strong>',
    'संग',
    'स्व. श्री सुशील कुमार शुक्ला एवं श्रीमती शान्ति देवी की सुपुत्री<br><strong>आयुष्मति वंदना</strong>',
    'के शुभ विवाह के पावन अवसर पर आप सपरिवार सादर आमंत्रित हैं। कृपया पधारकर नवदंपति को अपना आशीर्वाद प्रदान करें।',
  ],
  closing: 'आपकी उपस्थिति ही हमारी शोभा है। ❤️💍',
}

// Schedule. Events with the same `dateHeading` are grouped under one date.
export const Sp = [
  {
    name: 'उपनयन संस्कार, हल्दी, मेंहदी 🌼💛',
    dateHeading: 'गुरुवार, 10 दिसंबर 2026',
    start: 'गुरुवार',
    end: null,
    startISO: '2026-12-10T10:00:00.000+05:30',
    endISO: '2026-12-10T22:00:00.000+05:30',
    location: 'जायसवाल कॉम्प्लेक्स, राम मंदिर के सामने, मनेन्द्रगढ़',
    dressCode: null,
    html: '<p>विवाह उत्सव का शुभारंभ — उपनयन संस्कार, हल्दी एवं मेंहदी की रस्में। हल्दी की रौनक, मेंहदी के रंग और अपनों के आशीर्वाद के साथ इस सुंदर सफ़र की शुरुआत में हमारे साथ शामिल हों। 💛✨</p>',
    showMap: true,
    venueName: 'जायसवाल कॉम्प्लेक्स',
    venueAddress: 'राम मंदिर के सामने, मनेन्द्रगढ़',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=Jaiswal+Complex+Ram+Mandir+Manendragarh+Chhattisgarh',
    whereToStay: false,
  },
  {
    name: 'बारात प्रस्थान 🐎',
    dateHeading: 'शुक्रवार, 11 दिसंबर 2026',
    start: 'दोपहर 2:00 बजे',
    end: null,
    startISO: '2026-12-11T14:00:00.000+05:30',
    endISO: null,
    location: 'निज निवास, श्री राम मंदिर',
    dressCode: null,
    html: '<p>बारात हमारे निज निवास <strong>श्री राम मंदिर</strong> से दोपहर 2:00 बजे बैकुंठपुर के लिए प्रस्थान करेगी।</p>',
    hideLocation: true,
    showMap: false,
    whereToStay: false,
  },
  {
    name: 'शुभ विवाह 💍',
    dateHeading: 'शुक्रवार, 11 दिसंबर 2026',
    start: 'रात्रि 8:00 बजे से',
    end: null,
    startISO: '2026-12-11T20:00:00.000+05:30',
    endISO: '2026-12-11T23:59:00.000+05:30',
    location: 'एन. एच. गार्डन, बैकुंठपुर, कोरिया, छत्तीसगढ़',
    dressCode: 'पारंपरिक वेशभूषा',
    html: '<p>शुभ विवाह समारोह एवं प्रीतिभोज। आपकी गरिमामयी उपस्थिति प्रार्थनीय है।</p>',
    showMap: true,
    venueName: 'एन. एच. गार्डन',
    venueAddress: 'बैकुंठपुर, कोरिया, छत्तीसगढ़',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=N+H+Garden+Baikunthpur+Koriya+Chhattisgarh',
    whereToStay: true,
  },
]

// "परिवार" section. Cards without a photo show a monogram.
export const tt = [
  {
    name: 'वर पक्ष परिवार',
    title: 'द्विवेदी परिवार',
    photo: '/images/family/family-groom.jpg',
    ratio: 1536 / 1024,
    pos: '50% 30%',
    html: '<p>स्नेह और आशीर्वाद से भरा हमारा परिवार, जो इस मंगल अवसर पर आपका हार्दिक स्वागत करता है। ❤️</p>',
  },
  {
    name: 'वधू की माता',
    title: 'श्रीमती शान्ति देवी',
    photo: '/images/family/bride-mother.jpg',
    ratio: 4 / 5,
    pos: '50% 30%',
    html: '',
  },
  {
    name: 'वधू के भाई',
    title: 'वधू पक्ष',
    photo: '/images/family/bride-brother.jpg',
    ratio: 1600 / 1064,
    pos: '50% 30%',
    html: '',
  },
  {
    name: 'श्री रामचरित द्विवेदी एवं श्रीमती उमा द्विवेदी',
    title: 'वर पक्ष · वर के माता-पिता',
    monogram: 'ध्रुव',
    html: '<p>आयुष्मान ध्रुव कुमार के माता-पिता, जो हर्ष एवं स्नेह के साथ आपको इस मंगल अवसर पर आमंत्रित करते हैं। ❤️</p>',
  },
  {
    name: 'स्व. श्री सुशील कुमार शुक्ला एवं श्रीमती शान्ति देवी',
    title: 'वधू पक्ष · वधू के माता-पिता',
    monogram: 'वंदना',
    html: '<p>आयुष्मति वंदना के माता-पिता। आपकी उपस्थिति एवं आशीर्वाद इस पावन बंधन को और भी विशेष बना देंगे। ✨</p>',
  },
  {
    name: 'श्री रामचरित द्विवेदी',
    title: 'निवेदक · संपर्क',
    monogram: '☎',
    html: '<p>किसी भी जानकारी के लिए संपर्क करें:</p><p><a href="tel:+918319651960">+91 83196 51960</a><br><a href="tel:+919425583677">+91 94255 83677</a></p>',
  },
]

// Moments gallery (desktop columns; mobile splits into two columns automatically)
export const Oc = [
  [{ src: '/images/couple-portrait.jpeg', tall: true }],
  [{ src: '/images/couple-stage.jpeg' }],
  [{ src: '/images/family/family-groom.jpg' }],
]
