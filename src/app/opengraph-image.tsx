import { ImageResponse } from 'next/og'
import { join } from 'node:path'
import { readFileSync } from 'node:fs'

export const alt = 'Boss Hudsawat - Full Stack Developer & Tech Speaker'
export const contentType = 'image/png'
export const size = {
  width: 1200,
  height: 630,
}

export default async function Image() {
  // Read the profile image from the filesystem
  const profileImageDetails = join(process.cwd(), 'public/img/boss-3.jpg')
  const profileImageSrc = readFileSync(profileImageDetails).buffer

  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#000',
          backgroundImage: 'radial-gradient(circle at 25px 25px, #1a1a1a 2%, transparent 0%), radial-gradient(circle at 75px 75px, #1a1a1a 2%, transparent 0%)',
          backgroundSize: '100px 100px',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#000',
            border: '1px solid #333',
            borderRadius: '20px',
            padding: '60px 80px',
            boxShadow: '0 20px 50px rgba(0,0,0,0.5)',
            position: 'relative',
          }}
        >
          {/* Decorative Glow */}
          <div
            style={{
              position: 'absolute',
              top: '-50%',
              left: '50%',
              transform: 'translate(-50%, 0)',
              width: '200px',
              height: '200px',
              background: '#667eea',
              filter: 'blur(100px)',
              borderRadius: '50%',
              opacity: 0.5,
              zIndex: -1,
            }}
          />

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: '30px',
            }}
          >
            {/* @ts-ignore */}
            <img
              src={profileImageSrc}
              width="100"
              height="100"
              style={{
                borderRadius: '50%',
                marginRight: '30px',
                border: '4px solid #fff',
                objectFit: 'cover',
              }}
            />
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <div
                style={{
                  fontSize: '60px',
                  fontWeight: 'bold',
                  background: 'linear-gradient(to right, #fff, #aaa)',
                  backgroundClip: 'text',
                  color: 'transparent',
                  lineHeight: 1.1,
                }}
              >
                Boss Hudsawat
              </div>
              <div
                style={{
                  fontSize: '28px',
                  color: '#888',
                  marginTop: '5px',
                  fontWeight: 500,
                }}
              >
                bosshudsawat.com
              </div>
            </div>
          </div>

          <div
            style={{
              fontSize: '36px',
              color: '#ddd',
              textAlign: 'center',
              lineHeight: 1.4,
              maxWidth: '800px',
              fontWeight: 400,
            }}
          >
            Full Stack Developer <span style={{ color: '#667eea', margin: '0 15px' }}>&bull;</span> Tech Speaker <span style={{ color: '#667eea', margin: '0 15px' }}>&bull;</span> Robotics
          </div>

          <div
            style={{
              marginTop: '40px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '20px',
            }}
          >
            {['Tech Speaker', 'Web Development', 'Software Engineer'].map((tag) => (
              <div
                key={tag}
                style={{
                  backgroundColor: '#1a1a1a',
                  border: '1px solid #333',
                  color: '#bbb',
                  padding: '10px 20px',
                  borderRadius: '30px',
                  fontSize: '20px',
                }}
              >
                {tag}
              </div>
            ))}

          </div>

        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}