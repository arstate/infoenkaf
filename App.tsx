
import React from 'react';
import { LinkItem, SocialItem } from './types';
import { Icons } from './constants';

const App: React.FC = () => {
  // Data dari user
  const WHATSAPP_NUMBER = '6285189522412';
  const PRIMARY_WA_LINK = "https://api.whatsapp.com/send/?phone=6285189522412&text=Halo+Enkaf+Property%2C+saya+tertarik+dengan+unitnya.+Boleh+minta+pricelist+dan+info+detailnya%3F+🏠✨&type=phone_number&app_absent=0";
  
  // URL Foto Profil Baru
  const PROFILE_IMAGE_URL = "https://lh3.googleusercontent.com/pw/AP1GczMzzWx9W8NYdhGKadaz6Y_AKdP0uVXKV72BZ4XsiwzzlZylX6wiaQqd-k9ysb8DhNainUzE0I78M1zFBZe7skJ1cb_LaVQEsmQjxfqjxDOzFmgp4rI=w2400";
  
  // URL Embed Maps dari user: Alam Juanda
  const MAP_EMBED_URL = "https://maps.google.com/maps?q=alam%20juanda&t=&z=14&ie=UTF8&iwloc=&output=embed";
  const MAP_EXTERNAL_LINK = "https://www.google.com/maps/search/alam+juanda";

  const links: LinkItem[] = [
    {
      id: 'wa-pricelist',
      title: 'Request Pricelist Unit',
      subtitle: 'Dapatkan brosur & harga terbaru via WA',
      url: PRIMARY_WA_LINK,
      icon: <Icons.WhatsApp />,
      primary: true
    },
    {
      id: 'catalog',
      title: 'Katalog Rumah Pilihan',
      subtitle: 'Cek koleksi unit di Instagram kami',
      url: 'https://www.instagram.com/enkaf_property/reels/',
      icon: <Icons.Catalog />
    },
    {
      id: 'consultation',
      title: 'Konsultasi KPR Gratis',
      subtitle: 'Bantu proses BI Checking sampai akad',
      url: `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Halo, saya ingin konsultasi mengenai KPR rumah. Mohon bantuannya ya.')}`,
      icon: <Icons.House />
    }
  ];

  const socials: SocialItem[] = [
    { id: 'ig', platform: 'Instagram', url: 'https://instagram.com/enkaf_property', icon: <Icons.Instagram /> },
    { id: 'wa', platform: 'WhatsApp', url: `https://wa.me/${WHATSAPP_NUMBER}`, icon: <Icons.WhatsApp /> }
  ];

  return (
    <div className="min-h-screen text-slate-900 selection:bg-amber-100 overflow-x-hidden relative pb-10">
      {/* Background Decor */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-5%] left-[-5%] w-[400px] h-[400px] rounded-full bg-amber-100/40 blur-[100px]"></div>
        <div className="absolute bottom-[5%] right-[-5%] w-[350px] h-[350px] rounded-full bg-blue-50/40 blur-[80px]"></div>
      </div>

      <main className="app-container relative z-10 px-6 py-12 flex flex-col items-center">
        
        {/* Header Section */}
        <div className="w-full text-center mb-8">
          <div className="relative inline-block mb-6">
            <div className="w-28 h-28 rounded-full p-1 gold-border shadow-lg">
              <div className="w-full h-full rounded-full overflow-hidden bg-white border-4 border-white">
                <img 
                  src={PROFILE_IMAGE_URL} 
                  alt="Enkaf Property Logo" 
                  className="w-full h-full object-contain p-1 transform scale-110 -translate-y-1.5 transition-transform"
                />
              </div>
            </div>
            <div className="absolute bottom-1 right-1 w-7 h-7 bg-green-500 border-4 border-white rounded-full"></div>
          </div>
          
          <h1 className="text-3xl font-extrabold tracking-tight mb-1 text-slate-800">
            ENKAF <span className="gradient-text">PROPERTY</span>
          </h1>
          <div className="flex items-center justify-center space-x-2 mb-4">
            <span className="h-px w-8 bg-slate-300"></span>
            <p className="text-xs text-slate-500 font-bold uppercase tracking-widest">Real Estate Specialist</p>
            <span className="h-px w-8 bg-slate-300"></span>
          </div>
          
          <div className="bg-white/60 border border-white shadow-sm rounded-2xl p-5 text-sm leading-relaxed text-slate-600 max-w-sm mx-auto">
            Mewujudkan impian hunian Anda di <span className="font-bold text-slate-800">Surabaya, Sidoarjo, & Jember</span>. 🏠 Kami bantu proses KPR hingga serah terima kunci! ✨
          </div>
        </div>

        {/* Links Section */}
        <div className="w-full space-y-4 mb-10">
          {links.map((link) => (
            <a
              key={link.id}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`
                group flex items-center p-4 rounded-2xl transition-all duration-300
                ${link.primary 
                  ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-white shadow-md shadow-amber-200 hover:shadow-xl hover:shadow-amber-200 hover:scale-[1.02]' 
                  : 'light-card light-card-hover text-slate-700'
                }
              `}
            >
              <div className={`
                p-3 rounded-xl mr-4 flex items-center justify-center
                ${link.primary ? 'bg-white/20' : 'bg-slate-100 group-hover:bg-amber-50 group-hover:text-amber-600 transition-colors'}
              `}>
                {link.icon}
              </div>
              
              <div className="flex-1">
                <h3 className={`font-bold text-base leading-tight ${link.primary ? 'text-white' : 'text-slate-800'}`}>
                  {link.title}
                </h3>
                <p className={`text-xs mt-0.5 ${link.primary ? 'text-amber-50' : 'text-slate-500'}`}>
                  {link.subtitle}
                </p>
              </div>

              <div className={link.primary ? 'text-white/70' : 'text-slate-300 group-hover:text-amber-400'}>
                <Icons.ChevronRight />
              </div>
            </a>
          ))}
        </div>

        {/* Maps Section */}
        <div className="w-full mb-10">
           <div className="flex items-center space-x-2 mb-3 px-1">
             <div className="p-2 bg-amber-100 rounded-lg text-amber-700">
                <Icons.Map />
             </div>
             <h2 className="text-sm font-bold uppercase tracking-wider text-slate-700">Lokasi Kantor</h2>
           </div>
           
           <div className="light-card rounded-3xl overflow-hidden p-2">
             <div className="rounded-2xl overflow-hidden h-52 w-full bg-slate-100">
                <iframe
                  src={MAP_EMBED_URL}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Enkaf Property Location - Alam Juanda"
                ></iframe>
             </div>
             <div className="p-4 text-center">
                <a 
                  href={MAP_EXTERNAL_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full py-3 bg-slate-50 rounded-xl text-xs font-bold text-amber-700 hover:bg-amber-50 hover:text-amber-800 border border-slate-100 transition-all duration-300 group"
                >
                  Buka di Google Maps 
                  <span className="ml-1 group-hover:translate-x-1 transition-transform">
                    <Icons.ChevronRight />
                  </span>
                </a>
             </div>
           </div>
        </div>

        {/* Social Icons */}
        <div className="flex items-center space-x-6 mb-12">
          {socials.map((social) => (
            <a
              key={social.id}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-4 rounded-2xl text-slate-400 shadow-sm border border-slate-100 hover:text-amber-600 hover:border-amber-200 hover:shadow-md transition-all duration-300"
              aria-label={social.platform}
            >
              <div className="scale-110">
                {social.icon}
              </div>
            </a>
          ))}
        </div>

        {/* Footer */}
        <footer className="mt-auto w-full text-center">
          <p className="text-[10px] tracking-[0.2em] text-slate-400 uppercase font-bold">
            &copy; {new Date().getFullYear()} Enkaf Property Indonesia
          </p>
          <p className="text-[9px] text-slate-400 mt-1 italic">Your Trusted Real Estate Partner</p>
        </footer>
      </main>
    </div>
  );
};

export default App;
