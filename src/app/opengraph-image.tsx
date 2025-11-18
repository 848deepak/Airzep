import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'AIRZEP - Logistics Technology Reimagined'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #000000 0%, #1a1a2e 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '80px',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <h1
            style={{
              fontSize: '80px',
              fontWeight: 'bold',
              color: 'white',
              textAlign: 'center',
              marginBottom: '30px',
              letterSpacing: '-2px',
            }}
          >
            AIRZEP
          </h1>
          <p
            style={{
              fontSize: '36px',
              color: '#94a3b8',
              textAlign: 'center',
              maxWidth: '900px',
              lineHeight: 1.4,
            }}
          >
            Logistics Technology Reimagined
          </p>
          <p
            style={{
              fontSize: '24px',
              color: '#3b82f6',
              textAlign: 'center',
              marginTop: '30px',
            }}
          >
            Distributed Robotics • Edge AI • Fleet Operating Systems
          </p>
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
