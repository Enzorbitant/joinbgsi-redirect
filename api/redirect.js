module.exports = (req, res) => {
  console.log('Query:', req.query); // Ajout pour debug
  const { placeID, gameInstanceId } = req.query;
  if (placeID && gameInstanceId) {
    res.redirect(`roblox://placeID=${placeID}&gameInstanceId=${gameInstanceId}`);
  } else {
    res.redirect('https://www.roblox.com/games/85896571713843');
  }
};
