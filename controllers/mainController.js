// Landing page
exports.home = (req, res) => {
  res.render('index', { title: 'Inventory Tracker 📦' });
};