export async function getRaceHistory(title) {
  try {
    const res = await fetch(
      `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(title)}`,
      {

      }
    )
    if (!res.ok) {
      console.warn('Wikipedia article not found:', title)
      return null
    }
    const data = await res.json()
    return data
  } catch (error) {
    console.error('Error fetching race history:', error)
    return null
  }
}