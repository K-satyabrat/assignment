const mongoose = require("mongoose");

const configurationSchema = new mongoose.Schema({
  configurationId: {
    type: String,
    required: true,
    unique: true
  },
  data: {
    type: [[String]],
    required: true
  },
  remark: {
    type: String,
    default: ""
  }
});

const Configuration = mongoose.model("Configdata", configurationSchema);

module.exports = Configuration;