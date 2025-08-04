import { ImageResponse } from 'next/og'
 
export const runtime = 'edge'
 
export const alt = 'Boss Hudsawat - Full Stack Developer & Tech Speaker'
export const contentType = 'image/png'
export const size = {
  width: 1200,
  height: 630,
}
 
export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #1DA1F2 0%, #0D8BD9 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '40px',
          color: 'white',
          fontFamily: 'system-ui, sans-serif',
        }}
      >
        {/* Background pattern */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'radial-gradient(circle at 75% 75%, rgba(255,255,255,0.1) 0%, transparent 50%)',
          }}
        />
        
        {/* Main content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            zIndex: 1,
          }}
        >
          {/* Profile image placeholder */}
          <div
            style={{
              width: '120px',
              height: '120px',
              borderRadius: '50%',
              background: 'rgba(255,255,255,0.2)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '30px',
              border: '4px solid rgba(255,255,255,0.3)',
            }}
          >
            <span style={{ fontSize: '48px', fontWeight: 'bold' }}>BH</span>
          </div>
          
          {/* Name */}
          <h1
            style={{
              fontSize: '64px',
              fontWeight: 'bold',
              margin: '0 0 20px 0',
              textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
            }}
          >
            Boss Hudsawat
          </h1>
          
          {/* Title */}
          <h2
            style={{
              fontSize: '32px',
              fontWeight: '600',
              margin: '0 0 15px 0',
              opacity: 0.9,
            }}
          >
            Full Stack Developer & Tech Speaker
          </h2>
          
          {/* Description */}
          <p
            style={{
              fontSize: '24px',
              margin: '0',
              opacity: 0.8,
              maxWidth: '800px',
              lineHeight: '1.4',
            }}
          >
            Passionate about technology, robotics, and sharing knowledge
          </p>
          
          {/* Twitter handle */}
          <p
            style={{
              fontSize: '20px',
              margin: '20px 0 0 0',
              opacity: 0.7,
              fontWeight: '500',
            }}
          >
            @bosshudsawat
          </p>
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
} 