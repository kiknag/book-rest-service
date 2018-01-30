// Landing page
exports.home = (req, res) => {
  res.json({
    title: 'Storage'
  })
  // res.render('index', { title: 'Inventory Tracker 📦' });
};