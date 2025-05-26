export default async function handler(req, res) {
  if (req.method === 'POST') {
    console.log('Webhook recibido:', req.body);

    // Puedes hacer algo con el output, como guardarlo en Firebase, etc.
    const output = req.body.output;
    if (output && output.length > 0) {
      console.log('Output recibido:', output[0]);
    }

    res.status(200).json({ received: true });
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
