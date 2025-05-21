const fs = require('fs');
const https = require('https');
const path = require('path');

const images = [
  { url: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80', filename: 'about-image.jpg' },
  { url: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80', filename: 'work1.jpg' },
  { url: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80', filename: 'work2.jpg' },
  { url: 'https://images.unsplash.com/photo-1508921912186-1d1a45ebb3c1?auto=format&fit=crop&w=600&q=80', filename: 'work3.jpg' },
  { url: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80', filename: 'work4.jpg' },
  { url: 'https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=600&q=80', filename: 'work5.jpg' },
  { url: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80', filename: 'work6.jpg' },
  { url: 'https://randomuser.me/api/portraits/men/32.jpg', filename: 'avatar1.jpg' },
  { url: 'https://randomuser.me/api/portraits/women/44.jpg', filename: 'avatar2.jpg' },
  { url: 'https://randomuser.me/api/portraits/men/54.jpg', filename: 'avatar3.jpg' },
  { url: 'https://randomuser.me/api/portraits/women/68.jpg', filename: 'avatar4.jpg' },
  { url: 'https://randomuser.me/api/portraits/men/85.jpg', filename: 'avatar5.jpg' },
  { url: 'https://randomuser.me/api/portraits/men/32.jpg', filename: 'team1.jpg' },
  { url: 'https://randomuser.me/api/portraits/women/44.jpg', filename: 'team2.jpg' },
  { url: 'https://randomuser.me/api/portraits/men/54.jpg', filename: 'team3.jpg' },
  { url: 'https://upload.wikimedia.org/wikipedia/commons/a/ab/Logo_TV_2015.png', filename: 'client1.png' },
  { url: 'https://seeklogo.com/images/M/microsoft-logo-4BA5F3A5E3-seeklogo.com.png', filename: 'client2.png' },
  { url: 'https://seeklogo.com/images/I/ibm-logo-6C1B4C6E13-seeklogo.com.png', filename: 'client3.png' },
  { url: 'https://seeklogo.com/images/G/google-2015-logo-65BBD07B01-seeklogo.com.png', filename: 'client4.png' },
  { url: 'https://seeklogo.com/images/N/netflix-n-logo-0F1ED3EBEB-seeklogo.com.png', filename: 'client5.png' },
  { url: 'https://seeklogo.com/images/S/spotify-logo-33F7A5F7B7-seeklogo.com.png', filename: 'client6.png' },
  { url: 'https://seeklogo.com/images/S/stack-overflow-logo-7615C7E5A8-seeklogo.com.png', filename: 'client7.png' },
  { url: 'https://seeklogo.com/images/Y/youtube-icon-logo-05A6F8958B-seeklogo.com.png', filename: 'client8.png' },
  { url: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80', filename: 'case-study1.jpg' },
  { url: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=600&q=80', filename: 'case-study2.jpg' },
  { url: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=600&q=80', filename: 'cta-image.png' },
  { url: 'https://www.svgrepo.com/show/276264/hexagon-pattern.svg', filename: 'hex-bg.svg' },
  { url: 'https://www.svgrepo.com/show/303157/hexagon.svg', filename: 'logo.svg' },
];

const publicDir = path.join(__dirname, 'public');
if (!fs.existsSync(publicDir)) fs.mkdirSync(publicDir);

function downloadImage(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    https.get(url, (response) => {
      if (response.statusCode !== 200) {
        reject(`Failed to get '${url}' (${response.statusCode})`);
        return;
      }
      response.pipe(file);
      file.on('finish', () => file.close(resolve));
    }).on('error', (err) => {
      fs.unlink(dest, () => reject(err.message));
    });
  });
}

(async () => {
  for (const img of images) {
    const dest = path.join(publicDir, img.filename);
    if (fs.existsSync(dest)) {
      console.log(`Already exists: ${img.filename}`);
      continue;
    }
    try {
      console.log(`Downloading ${img.filename}...`);
      await downloadImage(img.url, dest);
      console.log(`Saved: ${img.filename}`);
    } catch (err) {
      console.error(`Error downloading ${img.filename}: ${err}`);
    }
  }
  console.log('All images downloaded!');
})(); 