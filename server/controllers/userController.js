const registerUser = async (req, res) => {
  const { name, email, phone, password } = req.body;
  res.json({
    name,
    email,
  });
};

module.exports={registerUser}