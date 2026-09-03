export default function Logo() {
  return (
    <div className="flex items-center space-x-2">
      <div className="relative w-10 h-10">
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
          {/* Left circle - Technology/Engineering */}
          <circle cx="35" cy="50" r="28" fill="none" stroke="#0d47a1" strokeWidth="8"/>
          <g transform="translate(35, 50)">
            {/* Gear icon */}
            <circle cx="0" cy="0" r="8" fill="#0d47a1"/>
            <path d="M 0,-16 L 2,-12 L 6,-14 L 4,-10 L 8,-8 L 3,-6 L 5,-2 L 0,-4 L -5,-2 L -3,-6 L -8,-8 L -6,-14 L -2,-12 Z" fill="none" stroke="#0d47a1" strokeWidth="1.5"/>
            
            {/* Circuit lines */}
            <circle cx="-8" cy="0" r="1.5" fill="#0d47a1"/>
            <circle cx="-4" cy="-6" r="1.5" fill="#0d47a1"/>
            <circle cx="0" cy="-8" r="1.5" fill="#0d47a1"/>
            <line x1="0" y1="0" x2="-8" y2="0" stroke="#0d47a1" strokeWidth="1"/>
            <line x1="0" y1="0" x2="-4" y2="-6" stroke="#0d47a1" strokeWidth="1"/>
            <line x1="0" y1="0" x2="0" y2="-8" stroke="#0d47a1" strokeWidth="1"/>
          </g>
          
          {/* Right circle - Medicine/Health */}
          <circle cx="65" cy="50" r="28" fill="none" stroke="#22a447" strokeWidth="8"/>
          <g transform="translate(65, 50)">
            {/* Heartbeat line */}
            <line x1="-12" y1="0" x2="-6" y2="0" stroke="#22a447" strokeWidth="2"/>
            <polyline points="-6,0 -4,-6 -2,6 0,-4 2,0" fill="none" stroke="#22a447" strokeWidth="2"/>
            <line x1="2" y1="0" x2="12" y2="0" stroke="#22a447" strokeWidth="2"/>
          </g>
          
          {/* Connecting line (infinity) */}
          <path d="M 63,50 Q 50,30 50,50 Q 50,70 63,50" fill="none" stroke="#0d47a1" strokeWidth="6" opacity="0.5"/>
          <path d="M 37,50 Q 50,70 50,50 Q 50,30 37,50" fill="none" stroke="#22a447" strokeWidth="6" opacity="0.5"/>
        </svg>
      </div>
      <div className="hidden sm:block">
        <div className="text-sm font-bold text-[#0d47a1] leading-tight">GLOBAL</div>
        <div className="text-sm font-bold text-[#0d47a1] leading-tight">REVIEWS PRESS</div>
      </div>
    </div>
  );
}
