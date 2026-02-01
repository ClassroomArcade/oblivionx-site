<div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
  {/* Download button */}
  <button
    style={{
      padding: '14px 28px',
      borderRadius: '12px',
      background: '#7c5cff',
      color: '#fff',
      fontWeight: 700,
      fontSize: '1rem',
      boxShadow: '0 8px 30px rgba(124,92,255,0.4)',
      cursor: 'pointer',
      transition: 'transform 0.2s ease, box-shadow 0.2s ease',
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.transform = 'scale(1.05)'
      e.currentTarget.style.boxShadow = '0 12px 40px rgba(124,92,255,0.6)'
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.transform = 'scale(1)'
      e.currentTarget.style.boxShadow = '0 8px 30px rgba(124,92,255,0.4)'
    }}
    onClick={() => router.push('/download')}
  >
    Download
  </button>

  {/* Learn More button */}
  <button
    style={{
      padding: '14px 28px',
      borderRadius: '12px',
      border: '2px solid rgba(255,255,255,0.15)',
      background: 'transparent',
      color: '#e8e9f0',
      fontWeight: 700,
      fontSize: '1rem',
      cursor: 'pointer',
      transition: 'background 0.2s ease, color 0.2s ease',
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.background = 'rgba(124,92,255,0.15)'
      e.currentTarget.style.color = '#7c5cff'
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.background = 'transparent'
      e.currentTarget.style.color = '#e8e9f0'
    }}
    onClick={() => router.push('/features')}
  >
    Learn More
  </button>

  {/* ✅ Feedback button */}
  <button
    style={{
      padding: '14px 28px',
      borderRadius: '12px',
      border: '2px solid rgba(124,92,255,0.4)',
      background: 'transparent',
      color: '#7c5cff',
      fontWeight: 700,
      fontSize: '1rem',
      cursor: 'pointer',
      transition: 'transform 0.2s ease, box-shadow 0.2s ease, background 0.2s ease',
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.background = 'rgba(124,92,255,0.15)'
      e.currentTarget.style.transform = 'scale(1.05)'
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.background = 'transparent'
      e.currentTarget.style.transform = 'scale(1)'
    }}
    onClick={() => router.push('/feedback')} // Navigate to your feedback page
  >
    Give Feedback
  </button>
</div>
