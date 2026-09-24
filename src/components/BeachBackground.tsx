export default function BeachBackground() {
  return (
    <div className="beach-scene" aria-hidden="true">
      {/* 1. Distant seagulls flying near sunset */}
      <svg className="beach-birds" viewBox="0 0 320 90" fill="none">
        <path
          className="bird b1"
          d="M 30 35 Q 42 22 55 35 Q 68 22 80 35 Q 68 28 55 39 Q 42 28 30 35 Z"
          fill="#ffc896"
          opacity="0.85"
        />
        <path
          className="bird b2"
          d="M 105 18 Q 114 8 124 18 Q 134 8 143 18 Q 134 13 124 22 Q 114 13 105 18 Z"
          fill="#ffc896"
          opacity="0.75"
        />
        <path
          className="bird b3"
          d="M 165 42 Q 172 34 180 42 Q 188 34 195 42 Q 188 38 180 45 Q 172 38 165 42 Z"
          fill="#ffa86b"
          opacity="0.7"
        />
        <path
          className="bird b4"
          d="M 220 28 Q 226 21 232 28 Q 238 21 245 28 Q 238 25 232 31 Q 226 25 220 28 Z"
          fill="#ffa86b"
          opacity="0.6"
        />
      </svg>

      {/* 2. Ocean, Horizon, Waves, Sand Dunes (Full-width landscape) */}
      <svg
        className="beach-landscape"
        viewBox="0 0 1440 380"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="oceanGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#144d56" stopOpacity="0.9" />
            <stop offset="50%" stopColor="#0f3b42" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#0a2a2f" />
          </linearGradient>

          <linearGradient id="sunGlowOnSea" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#ff9a40" stopOpacity="0" />
            <stop offset="30%" stopColor="#ffb347" stopOpacity="0.3" />
            <stop offset="50%" stopColor="#fff099" stopOpacity="0.75" />
            <stop offset="70%" stopColor="#ffb347" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#ff9a40" stopOpacity="0" />
          </linearGradient>

          <linearGradient id="backDuneGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#9e4b1e" />
            <stop offset="100%" stopColor="#57240a" />
          </linearGradient>

          <linearGradient id="frontDuneGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#ca732a" />
            <stop offset="35%" stopColor="#9e4c19" />
            <stop offset="100%" stopColor="#3d1b09" />
          </linearGradient>

          <linearGradient id="wetSandGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#87441d" />
            <stop offset="100%" stopColor="#481e09" />
          </linearGradient>
        </defs>

        {/* Ocean Body */}
        <rect x="0" y="40" width="1440" height="200" fill="url(#oceanGrad)" />
        <rect x="0" y="40" width="1440" height="160" fill="url(#sunGlowOnSea)" />

        {/* Sun reflection shimmer lines */}
        <g className="sea-shimmer" opacity="0.8">
          <ellipse cx="720" cy="65" rx="80" ry="1.8" fill="#fffbe6" opacity="0.75" />
          <ellipse cx="720" cy="76" rx="125" ry="2.2" fill="#ffea8a" opacity="0.7" />
          <ellipse cx="720" cy="88" rx="170" ry="2.5" fill="#ffd766" opacity="0.6" />
          <ellipse cx="720" cy="102" rx="210" ry="2.8" fill="#ffbf47" opacity="0.5" />
          <ellipse cx="720" cy="118" rx="250" ry="3" fill="#ffa733" opacity="0.45" />
          <ellipse cx="720" cy="135" rx="290" ry="3.5" fill="#ff8c24" opacity="0.35" />
        </g>

        {/* Wave Layer 1 (Distant undulating wave) */}
        <path
          className="wave wave-back"
          d="M 0 100 Q 180 92 360 100 T 720 100 T 1080 100 T 1440 100 L 1440 240 L 0 240 Z"
          fill="#134a52"
          opacity="0.75"
        />

        {/* Wave Layer 2 (Mid wave) */}
        <path
          className="wave wave-mid"
          d="M 0 126 Q 200 116 400 126 T 800 126 T 1200 126 T 1440 126 L 1440 260 L 0 260 Z"
          fill="#0c353b"
          opacity="0.85"
        />

        {/* Wet Sand & Shoreline */}
        <path
          d="M 0 150 Q 360 138 720 148 T 1440 145 L 1440 300 L 0 300 Z"
          fill="url(#wetSandGrad)"
        />

        {/* Wave Layer 3 (Shoreline white foam) */}
        <path
          className="wave wave-foam"
          d="M 0 152 Q 180 142 360 150 T 720 148 T 1080 151 T 1440 147"
          fill="none"
          stroke="#fffaf0"
          strokeWidth="3.5"
          strokeOpacity="0.75"
          strokeLinecap="round"
        />

        {/* Back Sand Dunes */}
        <path
          d="M 0 185 Q 320 155 640 180 T 1240 170 Q 1360 176 1440 182 L 1440 380 L 0 380 Z"
          fill="url(#backDuneGrad)"
        />

        {/* Foreground Beach Sand */}
        <path
          d="M 0 215 Q 360 185 760 210 T 1440 198 L 1440 380 L 0 380 Z"
          fill="url(#frontDuneGrad)"
        />

        {/* Sand Ripple Lines */}
        <path
          d="M 120 245 Q 320 230 540 248 M 800 242 Q 1060 228 1320 245"
          fill="none"
          stroke="#e5893a"
          strokeWidth="1.6"
          opacity="0.35"
          strokeLinecap="round"
        />

        {/* Dune flora / grass tufts */}
        <g fill="#171e11" opacity="0.8">
          <path d="M 60 280 Q 64 250 80 240 Q 73 260 70 280 Z" />
          <path d="M 76 280 Q 82 254 95 248 Q 87 264 85 280 Z" />
          <path d="M 48 280 Q 45 258 35 250 Q 44 263 52 280 Z" />
          <path d="M 1320 270 Q 1315 240 1298 230 Q 1305 250 1308 270 Z" />
          <path d="M 1335 270 Q 1340 246 1355 240 Q 1345 256 1342 270 Z" />
        </g>
      </svg>

      {/* 3. Left Coconut Palms & Surfboard (Preserves natural proportions) */}
      <svg
        className="beach-palm beach-palm-left"
        viewBox="0 0 420 620"
        preserveAspectRatio="xMinYMax meet"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="palmTrunkL" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#1a0f07" />
            <stop offset="45%" stopColor="#341e12" />
            <stop offset="75%" stopColor="#4a2c1b" />
            <stop offset="100%" stopColor="#1e1008" />
          </linearGradient>

          <linearGradient id="palmLeafL" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#1b3d24" />
            <stop offset="55%" stopColor="#0e2817" />
            <stop offset="100%" stopColor="#07170c" />
          </linearGradient>

          <linearGradient id="surfGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#ff4d4d" />
            <stop offset="45%" stopColor="#ffb142" />
            <stop offset="100%" stopColor="#2ed573" />
          </linearGradient>
        </defs>

        {/* Surfboard propped up in the sand */}
        <g transform="translate(180, 350) rotate(14)">
          <ellipse cx="6" cy="115" rx="14" ry="4" fill="#1b0a02" opacity="0.65" />
          <path
            d="M 0 0 C 14 26 16 80 10 118 C 6 120 -6 120 -10 118 C -16 80 -14 26 0 0 Z"
            fill="url(#surfGrad)"
            stroke="#ffffff66"
            strokeWidth="1.4"
          />
          <line x1="0" y1="4" x2="0" y2="116" stroke="#ffffff" strokeWidth="2.2" opacity="0.85" />
          <line x1="-3" y1="18" x2="-3" y2="100" stroke="#10241f" strokeWidth="1" opacity="0.6" />
        </g>

        {/* Secondary Shorter Leaning Palm */}
        <g className="palm-tree palm-left-sec">
          <path
            d="M 25 620 C 40 520, 75 420, 140 320 C 147 320, 152 323, 151 328 C 95 425, 62 525, 48 620 Z"
            fill="url(#palmTrunkL)"
            opacity="0.9"
          />
          <g fill="#1a0e06">
            <circle cx="144" cy="326" r="5" />
            <circle cx="150" cy="328" r="4.5" />
          </g>
          <g className="palm-crown crown-left-sec" transform-origin="147 322">
            <path
              d="M 147 322 C 190 285, 245 285, 298 320 C 265 322, 225 315, 185 328 C 220 342, 255 365, 280 390 C 238 370, 200 350, 147 322 Z"
              fill="#081e11"
            />
            <path
              d="M 147 322 C 172 265, 218 230, 268 218 C 230 248, 195 280, 168 312 Z"
              fill="url(#palmLeafL)"
            />
            <path
              d="M 147 322 C 118 265, 75 235, 20 226 C 60 255, 98 288, 128 314 Z"
              fill="#06160d"
            />
            <path
              d="M 147 322 C 100 302, 50 320, -5 342 C 45 336, 90 334, 147 322 Z"
              fill="#0a2215"
            />
          </g>
        </g>

        {/* Primary Majestic Palm (Tall & Graceful, arching toward center) */}
        <g className="palm-tree palm-left-main">
          {/* Trunk */}
          <path
            d="M 70 620 C 85 470, 120 310, 200 150 C 210 150, 218 154, 217 160 C 145 315, 115 470, 105 620 Z"
            fill="url(#palmTrunkL)"
          />
          {/* Trunk ridges */}
          <path
            d="M 86 540 Q 96 534 107 541 M 92 470 Q 103 464 115 471 M 102 400 Q 114 394 127 402 M 116 330 Q 130 323 144 332 M 138 260 Q 152 253 167 263 M 168 195 Q 183 187 197 198"
            stroke="#e59866"
            strokeWidth="1.3"
            fill="none"
            opacity="0.3"
          />

          {/* Coconuts Cluster */}
          <g fill="#211309" stroke="#120904" strokeWidth="1">
            <circle cx="206" cy="162" r="7" />
            <circle cx="216" cy="165" r="6.5" />
            <circle cx="210" cy="173" r="6" />
            <circle cx="201" cy="169" r="5.5" />
          </g>

          {/* Majestic Palm Fronds Crown */}
          <g className="palm-crown crown-left-main" transform-origin="208 155">
            {/* Frond 1: Arching high right toward center */}
            <path
              d="M 208 155 C 265 110, 335 105, 415 145 C 378 148, 318 135, 265 148 C 322 165, 370 188, 408 208 C 350 192, 298 172, 208 155 Z"
              fill="url(#palmLeafL)"
            />
            {/* Frond 2: Sweeping right */}
            <path
              d="M 208 155 C 275 140, 355 160, 420 225 C 370 210, 312 192, 252 185 C 305 212, 345 245, 378 280 C 320 248, 270 212, 208 155 Z"
              fill="#0a1d12"
            />
            {/* Frond 3: Drooping right */}
            <path
              d="M 208 155 C 255 178, 300 225, 330 305 C 295 260, 255 225, 208 155 Z"
              fill="#06130b"
            />
            {/* Frond 4: High top center */}
            <path
              d="M 208 155 C 220 78, 265 30, 325 12 C 295 35, 258 78, 232 120 C 270 85, 308 60, 350 48 C 308 82, 258 122, 208 155 Z"
              fill="url(#palmLeafL)"
            />
            {/* Frond 5: High top-left */}
            <path
              d="M 208 155 C 185 75, 142 35, 75 22 C 112 50, 155 88, 180 132 C 132 95, 88 72, 40 58 C 95 90, 155 128, 208 155 Z"
              fill="#0a2014"
            />
            {/* Frond 6: Arching far left */}
            <path
              d="M 208 155 C 145 122, 78 132, -5 162 C 55 156, 118 150, 172 165 C 105 178, 50 200, -10 232 C 55 208, 130 185, 208 155 Z"
              fill="url(#palmLeafL)"
            />
            {/* Frond 7: Drooping low left */}
            <path
              d="M 208 155 C 150 170, 95 210, 58 280 C 100 235, 155 205, 208 155 Z"
              fill="#07170e"
            />
          </g>
        </g>
      </svg>

      {/* 4. Right Coconut Palm (Frames the right edge) */}
      <svg
        className="beach-palm beach-palm-right"
        viewBox="0 0 400 580"
        preserveAspectRatio="xMaxYMax meet"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="palmTrunkR" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#1a0f07" />
            <stop offset="45%" stopColor="#341e12" />
            <stop offset="75%" stopColor="#4a2c1b" />
            <stop offset="100%" stopColor="#1e1008" />
          </linearGradient>

          <linearGradient id="palmLeafR" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#1b3d24" />
            <stop offset="55%" stopColor="#0e2817" />
            <stop offset="100%" stopColor="#07170c" />
          </linearGradient>
        </defs>

        <g className="palm-tree palm-right">
          {/* Trunk curving inward from bottom-right */}
          <path
            d="M 360 580 C 345 450, 315 310, 240 170 C 232 170, 225 174, 225 180 C 298 315, 322 450, 335 580 Z"
            fill="url(#palmTrunkR)"
          />
          {/* Trunk ridges */}
          <path
            d="M 345 510 Q 335 504 324 511 M 335 440 Q 324 434 312 441 M 320 370 Q 308 364 294 371 M 300 300 Q 288 293 273 301 M 274 235 Q 260 228 245 237"
            stroke="#e59866"
            strokeWidth="1.2"
            fill="none"
            opacity="0.3"
          />

          {/* Coconuts */}
          <g fill="#211309" stroke="#120904" strokeWidth="1">
            <circle cx="234" cy="182" r="6.5" />
            <circle cx="225" cy="186" r="6" />
            <circle cx="230" cy="193" r="5.5" />
          </g>

          {/* Crown */}
          <g className="palm-crown crown-right" transform-origin="232 175">
            {/* Frond 1: Arching deep left toward center */}
            <path
              d="M 232 175 C 172 125, 95 120, 5 165 C 45 165, 105 150, 162 166 C 102 184, 52 212, 10 232 C 72 214, 135 192, 232 175 Z"
              fill="url(#palmLeafR)"
            />
            {/* Frond 2: Sweeping lower left */}
            <path
              d="M 232 175 C 160 165, 78 188,-2 255 C 55 238, 118 218, 185 210 C 122 240, 78 280, 42 315 C 105 280, 168 244, 232 175 Z"
              fill="#091f13"
            />
            {/* Frond 3: Drooping left */}
            <path
              d="M 232 175 C 178 198, 128 252, 95 325 C 135 275, 185 235, 232 175 Z"
              fill="#06140c"
            />
            {/* Frond 4: Top upward toward center */}
            <path
              d="M 232 175 C 218 95, 172 45, 105 25 C 138 48, 178 92, 206 135 C 168 100, 128 72, 85 58 C 128 95, 178 138, 232 175 Z"
              fill="url(#palmLeafR)"
            />
            {/* Frond 5: High right */}
            <path
              d="M 232 175 C 268 90, 318 52, 385 35 C 345 62, 300 102, 272 148 C 322 112, 368 92, 418 78 C 362 112, 300 152, 232 175 Z"
              fill="#0a2416"
            />
            {/* Frond 6: Far right edge */}
            <path
              d="M 232 175 C 295 145, 362 158, 435 190 C 375 180, 318 175, 262 188 C 325 204, 380 226, 435 258 C 375 235, 302 210, 232 175 Z"
              fill="url(#palmLeafR)"
            />
          </g>
        </g>
      </svg>
    </div>
  );
}
