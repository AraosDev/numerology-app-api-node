const express = require('express');
const router = express.Router();
const getLifeNumber = require('../logic functions/LifePathFunctions');
const getDestinyNumberFromName = require('../logic functions/DestinyPathFunctions');
const LifePathBenefits = require('../Json files/LifePathConfig');
const DestinyNumberBenefits = require('../Json files/DestinyConfig');

router.get('/:name/:dob', (req,res)=>{
    const dob = req.params.dob;
    const name = req.params.name;
    const lifenumber = getLifeNumber(dob);
    const destinynumber = getDestinyNumberFromName(name);
    const lifeNumberBenefits = {"type": "lifenumber", "number": lifenumber, "benefits": LifePathBenefits[lifenumber]};
    const destinyNumberBenefits = {"type": "destinynumber", "number": destinynumber, "benefits": DestinyNumberBenefits[destinynumber]};
    res.json({status: 200, lifeNumberBenefits, destinyNumberBenefits})
})

module.exports = router;
