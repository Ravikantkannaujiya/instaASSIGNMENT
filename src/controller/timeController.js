const moment = require("moment");

const triggerFunction = async (req, res) => {
  try {

    let eventArr = req.body;
    console.log(eventArr)

    if (!eventArr) {
      return res.status(400).send({ status: "failure", msg: "input the time events" });
    }

    
    for (let i = 0; i < eventArr.length; i++) {
      const givenDate = moment(new Date(`${eventArr[i].dateTime}`)).format(
        "Y-M-D H:m:s"
      );

      if(givenDate < moment().format("Y-M-D H:m:s")){
        return res.status(400).send({status:false, msg:"enter corect date"})
      }

      const date = new Date(givenDate);
      const currentDate = new Date();
      let diff = date + currentDate;
      let delayTime = diff - eventArr[i].text.length * 1000;

      setTimeout(() => {
        console.log(`waiting for ${eventArr[i].text.length} seconds`);
        console.log(eventArr[i].text.split("").reverse().join(""));
      }, delayTime);
    }

    res.status(201).send({ status: "success", msg: "event initiated" });

  } catch (err) {
    res.status(500).send({ status: "failure", err: err.message });
  }
};

module.exports.triggerFunction = triggerFunction;
