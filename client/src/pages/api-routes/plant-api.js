const axios = require("axios");
const router = require("express").Router();

router.get("/search", (res) => {
  axios
    .get("http://harvesthelper.herokuapp.com/api/v1/plants?api_key=9bbe0cb9fc09ec115e66e1a2908a4d9e")
    .then(({ data: { results } }) => res.json(results))
    .catch(err => res.status(422).json(err));
    
});

module.exports = router;
