const express = require('express');
const router = express.Router();
const {basicDetailController} = require('../controller/section/basicDetatilsCotroller');
const {educationController} = require('../controller/section/educationController');
const {experienceController} = require('../controller/section/experienceController');
const {skillController} = require('../controller/section/skillController');
const {projectController} = require('../controller/section/projectController');
const {achievementController} = require('../controller/section/achievementController');
const {certificationController} = require('../controller/section/certificationController');
const {langaugeController} = require('../controller/section/langauageController')

// router.route('/bascidetails').post(basicDetailController);
// router.route('/educations').post(educationController);
// router.route('/experiences').post(experienceController);
// router.route('/skills').post(skillController);
// router.route('/projects').post(projectController);
// router.route('/achievements').post(achievementController);
router.route('/certificates').post(certificationController);
router.route('/languages').post(langaugeController);

module.exports = router;