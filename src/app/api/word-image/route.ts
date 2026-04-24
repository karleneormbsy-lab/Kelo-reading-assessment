import { NextRequest, NextResponse } from 'next/server'

// Unsplash Source API — free, no auth required for simple use
// For production, use Unsplash official API with CLIENT_ID for higher rate limits
const UNSPLASH_ACCESS_KEY = process.env.UNSPLASH_ACCESS_KEY ?? ''

// Pixabay fallback — free API
const PIXABAY_KEY = process.env.PIXABAY_API_KEY ?? ''

// Manual overrides for common phonics words (guaranteed good images)
const WORD_IMAGE_OVERRIDES: Record<string, string> = {
  ship:   'https://images.unsplash.com/photo-1577703836895-9e0bb99bfeb3?w=400&q=80',
  shop:   'https://images.unsplash.com/photo-1580913428735-bd3c269d6a82?w=400&q=80',
  fish:   'https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?w=400&q=80',
  shell:  'https://images.unsplash.com/photo-1519046904884-53103b34b206?w=400&q=80',
  star:   'https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?w=400&q=80',
  cat:    'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=400&q=80',
  dog:    'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=400&q=80',
  bird:   'https://images.unsplash.com/photo-1444464666168-49d633b86797?w=400&q=80',
  cake:   'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&q=80',
  bike:   'https://images.unsplash.com/photo-1485965120184-e220f721d03e?w=400&q=80',
  boat:   'https://images.unsplash.com/photo-1534008897995-27a23e859048?w=400&q=80',
  rain:   'https://images.unsplash.com/photo-1433863448220-78aaa064ff47?w=400&q=80',
  train:  'https://images.unsplash.com/photo-1474487548417-781cb71495f3?w=400&q=80',
  tree:   'https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?w=400&q=80',
  frog:   'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
  drum:   'https://images.unsplash.com/photo-1519892300165-cb5542fb47c7?w=400&q=80',
  flag:   'https://images.unsplash.com/photo-1523292562811-8fa7962a78c8?w=400&q=80',
  clock:  'https://images.unsplash.com/photo-1501139083538-0139583c060f?w=400&q=80',
  cloud:  'https://images.unsplash.com/photo-1501630834273-4b5604d2ee31?w=400&q=80',
  farm:   'https://images.unsplash.com/photo-1500595046743-cd271d694d30?w=400&q=80',
  corn:   'https://images.unsplash.com/photo-1551754655-cd27e38d2076?w=400&q=80',
  wish:   'https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=400&q=80',
}

export async function GET(req: NextRequest) {
  const word = req.nextUrl.searchParams.get('word')?.toLowerCase().trim()
  if (!word) return NextResponse.json({ error: 'word required' }, { status: 400 })

  // 1. Check manual overrides first
  if (WORD_IMAGE_OVERRIDES[word]) {
    return NextResponse.json({
      url:    WORD_IMAGE_OVERRIDES[word],
      alt:    word,
      credit: 'Unsplash',
    }, {
      headers: { 'Cache-Control': 'public, max-age=604800' }, // 7 days
    })
  }

  // 2. Try Unsplash API
  if (UNSPLASH_ACCESS_KEY) {
    try {
      const res  = await fetch(
        `https://api.unsplash.com/search/photos?query=${encodeURIComponent(word)}&per_page=1&orientation=squarish`,
        { headers: { Authorization: `Client-ID ${UNSPLASH_ACCESS_KEY}` } }
      )
      const data = await res.json()
      const photo = data.results?.[0]
      if (photo) {
        return NextResponse.json({
          url:    photo.urls.small,
          alt:    photo.alt_description ?? word,
          credit: `Photo by ${photo.user.name} on Unsplash`,
        }, {
          headers: { 'Cache-Control': 'public, max-age=604800' },
        })
      }
    } catch { /* fall through */ }
  }

  // 3. Try Pixabay fallback
  if (PIXABAY_KEY) {
    try {
      const res  = await fetch(
        `https://pixabay.com/api/?key=${PIXABAY_KEY}&q=${encodeURIComponent(word)}&image_type=photo&per_page=3&safesearch=true`
      )
      const data = await res.json()
      const hit  = data.hits?.[0]
      if (hit) {
        return NextResponse.json({
          url:    hit.webformatURL,
          alt:    word,
          credit: 'Pixabay',
        }, {
          headers: { 'Cache-Control': 'public, max-age=604800' },
        })
      }
    } catch { /* fall through */ }
  }

  // 4. Fallback — Unsplash Source (no-auth, random relevant image)
  const fallbackUrl = `https://source.unsplash.com/200x200/?${encodeURIComponent(word)}`
  return NextResponse.json({
    url:    fallbackUrl,
    alt:    word,
    credit: 'Unsplash',
  }, {
    headers: { 'Cache-Control': 'public, max-age=3600' },
  })
}
