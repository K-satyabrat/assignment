const Configuration = require("../models/configurationModel");

// GET configuration
const getConfiguration = async (req, res) => {
  const { id } = req.params;
  console.log("ID:", id);
  try {
    const config = await Configuration.findOne({ configurationId: id });

    if (!config) {
      return res.status(404).json({ message: "Configuration not found" });
    }

    return res.status(200).json(config.data);
  } catch (error) {
    console.error("Error fetching configuration:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

// UPDATE remark
const updateRemark = async (req, res) => {
  const { id } = req.params;
  const { remark } = req.body;

  try {
    const config = await Configuration.findOneAndUpdate(
      { configurationId: id },
      { remark },
      { new: true }
    );

    if (!config) {
      return res.status(404).json({ message: "Configuration not found" });
    }

    return res.status(201).json({ message: "success" });
  } catch (error) {
    console.error("Error updating remark:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = {
  getConfiguration,
  updateRemark,
};
