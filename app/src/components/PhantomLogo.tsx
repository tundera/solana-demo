import { createIcon, IconProps } from '@chakra-ui/react'
import { motion } from 'framer-motion'

export const PhantomLogo = motion<IconProps>(
  createIcon({
    displayName: 'PhantomLogo',
    viewBox: '0 0 128 128',
    path: [
      <circle cx="64" cy="64" r="64" fill="url(#paint0_linear)" key="circle" />,
      <path
        d="M110.584 64.9142H99.142C99.142 41.7651 80.173 23 56.7724 23C33.6612 23 14.8716 41.3057 14.4118 64.0583C13.936 87.577 36.241 108 60.0186 108H63.0094C83.9723 108 112.069 91.7667 116.459 71.9874C117.27 68.3413 114.358 64.9142 110.584 64.9142ZM39.7689 65.9454C39.7689 69.0411 37.2095 71.5729 34.0802 71.5729C30.9509 71.5729 28.3916 69.0399 28.3916 65.9454V56.8414C28.3916 53.7457 30.9509 51.2139 34.0802 51.2139C37.2095 51.2139 39.7689 53.7457 39.7689 56.8414V65.9454ZM59.5224 65.9454C59.5224 69.0411 56.9631 71.5729 53.8338 71.5729C50.7045 71.5729 48.1451 69.0399 48.1451 65.9454V56.8414C48.1451 53.7457 50.7056 51.2139 53.8338 51.2139C56.9631 51.2139 59.5224 53.7457 59.5224 56.8414V65.9454Z"
        fill="url(#paint1_linear)"
        key="path"
      />,
      <defs key="defs">
        <linearGradient
          id="paint0_linear"
          x1="64"
          y1="0"
          x2="64"
          y2="128"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#534BB1" />
          <stop offset="1" stopColor="#551BF9" />
        </linearGradient>
        <linearGradient
          id="paint1_linear"
          x1="65.4998"
          y1="23"
          x2="65.4998"
          y2="108"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" />
          <stop offset="1" stopColor="white" stopOpacity="0.82" />
        </linearGradient>
      </defs>,
    ],
  }),
)
