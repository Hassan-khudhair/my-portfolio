import { ImageResponse } from 'next/og';

// iOS Safari uses 180×180 for the home screen icon
export const size = { width: 180, height: 180 };
export const contentType = 'image/png';

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #9333ea 0%, #ec4899 100%)',
        }}
      >
        <span
          style={{
            color: 'white',
            fontSize: 70,
            fontWeight: 900,
            fontFamily: 'Arial, sans-serif',
            letterSpacing: -3,
            lineHeight: 1,
          }}
        >
          {'</>'}
        </span>
      </div>
    ),
    { width: 180, height: 180 }
  );
}
