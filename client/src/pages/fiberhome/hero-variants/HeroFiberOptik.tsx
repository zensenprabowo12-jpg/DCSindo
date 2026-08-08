import { motion, useReducedMotion } from "framer-motion";

/**
 * Background hero: serat optik glowing — beberapa "fiber" melengkung dengan
 * kilatan cahaya yang berjalan dari kiri ke kanan.
 */
const FIBERS = [
  { d: "M-60 70 C 260 20, 620 130, 1260 60", width: 2, duration: 6, delay: 0 },
  { d: "M-60 130 C 300 90, 640 190, 1260 120", width: 1.5, duration: 7.5, delay: 1.2 },
  { d: "M-60 200 C 240 260, 700 140, 1260 210", width: 2.5, duration: 5.5, delay: 0.6 },
  { d: "M-60 270 C 320 220, 660 320, 1260 260", width: 1.5, duration: 8, delay: 2.1 },
  { d: "M-60 330 C 280 380, 720 270, 1260 340", width: 2, duration: 6.8, delay: 1.7 },
];

const DASH = 180;
const PATH_LENGTH = 1400;

export default function HeroFiberOptik() {
  const reduce = useReducedMotion();

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      <div className="absolute inset-0 bg-gradient-to-b from-sky-500/10 to-transparent" />
      <svg
        viewBox="0 0 1200 400"
        preserveAspectRatio="none"
        className="w-full h-full"
      >
        <defs>
          <linearGradient id="fh-fiber-glow" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0" />
            <stop offset="50%" stopColor="#7dd3fc" stopOpacity="1" />
            <stop offset="100%" stopColor="#0ea5e9" stopOpacity="0" />
          </linearGradient>
        </defs>

        {FIBERS.map((f) => (
          <g key={f.d}>
            {/* Serat statis */}
            <path
              d={f.d}
              fill="none"
              stroke="#0ea5e9"
              strokeOpacity={0.18}
              strokeWidth={f.width}
            />
            {/* Kilatan cahaya yang berjalan */}
            <motion.path
              d={f.d}
              fill="none"
              stroke="url(#fh-fiber-glow)"
              strokeWidth={f.width * 2}
              strokeLinecap="round"
              strokeDasharray={`${DASH} ${PATH_LENGTH}`}
              initial={{ strokeDashoffset: PATH_LENGTH }}
              animate={reduce ? undefined : { strokeDashoffset: -DASH }}
              transition={{
                duration: f.duration,
                delay: f.delay,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          </g>
        ))}
      </svg>
    </div>
  );
}
