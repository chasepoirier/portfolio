import express from 'express'
import sgMail from '@sendgrid/mail'

const router = express.Router()

router.post('/get_in_touch', async (req, res) => {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY)
  const { data } = req.body
  const msg = {
    to: 'chase.n.poirier@gmail.com',
    from: 'chase.n.poirier@gmail.email',
    subject: `${data.name} wants to get in touch with you`,
    text: `From: ${data.email} message: ${data.message}`
  }

  try {
    const result = await sgMail.send(msg)
    res.json({ result: true })
  } catch (error) {
    res.json({ error })
  }
})

export default router
