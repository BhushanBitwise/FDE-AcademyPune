import { MessageSquare } from 'lucide-react';

export default function WhatsAppFloat() {
  const whatsappNumber = "918080152238";
  const defaultMessage = encodeURIComponent(
    "Hello FDE Academy, I would like to know more about your Forward Deployed Engineering and Applied AI programs."
  );
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${defaultMessage}`;

  return (
    <aside aria-label="WhatsApp admissions chat" className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 group">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 p-2.5 sm:px-4 sm:py-3 bg-[#171A18] text-[#FFFFFF] rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.25)] border border-[#2D332F] hover:border-[#C9F04A] hover:bg-[#1E2320] transition-all duration-300 group-hover:scale-105"
        aria-label="Direct WhatsApp Chat with Admissions Advisor"
      >
        <div className="w-8 h-8 rounded-full bg-[#25D366] flex items-center justify-center text-white shrink-0 shadow-sm animate-pulse">
          <MessageSquare className="w-4 h-4 fill-white" />
        </div>
        <div className="hidden sm:flex flex-col text-left pr-1">
          <span className="text-[10px] uppercase font-mono tracking-wider text-[#C9F04A] font-semibold leading-none">
            Admissions Chat
          </span>
          <span className="text-xs font-semibold text-white tracking-tight mt-0.5">
            +91 80801 52238
          </span>
        </div>
      </a>
    </aside>
  );
}
