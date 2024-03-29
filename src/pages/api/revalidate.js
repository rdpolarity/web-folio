
export default async function handler(req, res) {
  // Check for secret to confirm this is a valid request
  if (req.query.secret !== 'rdpolarity') {
    return res.status(401).json({ message: 'Invalid token' })
  }

  try {
    await res.revalidate('/')
    await res.revalidate('/cv')
    return res.json({ revalidated: true })
  } catch (err) {
    return res.status(500).send('Error revalidating')
  }
}