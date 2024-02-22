

module.exports = async (req, res) => {
 
  const { formData } = req.body; // assuming formData is the name of the input field in your form

  // Add your logic to save the form data to a file, database, or other storage system
  // For example, you can save it to a JSON file like this:
  const fs = require('fs');
  const data = JSON.stringify(formData);
  fs.writeFileSync('./formData.json', data);

  res.status(200).json({ message: 'Form data saved successfully' });
};