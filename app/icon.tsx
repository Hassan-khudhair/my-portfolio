import { ImageResponse } from 'next/og';

export const size = { width: 512, height: 512 };
export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #9333ea 0%, #ec4899 50%, #06b6d4 100%)',
          borderRadius: 96,
        }}
      >
        <span
          style={{
            color: 'white',
            fontSize: 190,
            fontWeight: 900,
            fontFamily: 'Arial, sans-serif',
            letterSpacing: -8,
            lineHeight: 1,
            marginTop: 16,
          }}
        >
          {'</>'}
        </span>
      </div>
    ),
    { width: 512, height: 512 }
  );
}
