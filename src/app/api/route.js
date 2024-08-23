import { ImageResponse } from 'next/og'
 
export async function GET(request) {
  const searchParams = request.nextUrl.searchParams
  const title = searchParams.get('title')
  const subtitle = searchParams.get('subtitle')

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          textAlign: 'center',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'sans-serif',
          backgroundColor: '#111',
        }}
      >
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          color: '#fff',
        }}>

          <div style={{
            fontSize: '76px',
            fontWeight: 'bold',
          }}>
            {title ? `${title}'s` : "Create"}
          </div>

          <div style={{
            fontSize: '48px',
            fontWeight: 'lighter',
            opacity: 0.6,
          }}>
            {`${subtitle || "Your Resume Website"}`}
          </div>

        </div>
      </div>
    ),
    {
      width: 1200,
      height: 600,
    }
  )
}