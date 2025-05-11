const fetch = require('node-fetch');

module.exports = async (req, res) => {
  const { captchaResponse, placeID, gameInstanceId } = req.body;

  // Vérifie le captcha avec hCaptcha
  const hcaptchaSecret = 'ES_983f1b8e2df949b2a07b6d39d15140a2'; // Remplace par ta clé secrète
  const verifyUrl = `https://hcaptcha.com/siteverify`;

  try {
    const response = await fetch(verifyUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: `response=${captchaResponse}&secret=${hcaptchaSecret}`
    });
    const data = await response.json();

    if (data.success) {
      res.json({ success: true, placeID, gameInstanceId });
    } else {
      res.status(400).json({ success: false, error: 'Captcha invalide' });
    }
  } catch (error) {
    console.error('Erreur lors de la vérification:', error);
    res.status(500).json({ success: false, error: 'Erreur serveur' });
  }
};
