const express = require('express');

const router = express.Router()

const userRegisterController= require('../controller/userRegister');
const userLoginController = require('../controller/userLogin');
const userDetailsController = require('../controller/userDetails');
const authToken = require('../middleware/authToken');
const userLogout = require('../controller/userLogout');
const createCampaign = require('../controller/createCampaign');
const campaignDetailsController = require('../controller/campaignDetails');
const getCategoryCampaign = require('../controller/getCategoryCampaign');
const getCampaignDetails = require('../controller/getCampaignDetails');
const getCampaignDetailsByUser = require('../controller/getCampaignDetailByUser');
const deleteCampaign = require('../controller/deleteCampaign');
const updateCampaignController = require('../controller/updateCampaignController');
const storyUpdate = require('../controller/storyUpdate');
const getStoryUpdateController = require('../controller/getStoryUpdateController');
const deleteStory = require('../controller/deleteStoryController');
const getCategoryWiseCampaign = require('../controller/getCategoryWiseCampaign');
const allUsers = require('../controller/allUsers');
const updateUser = require('../controller/updateUser');
const contactAdmin = require('../controller/contactAdmin');
const AllContacts = require('../controller/allContacts');
const addBank = require('../controller/addBank');
const getBankDetail = require('../controller/getBankDetail');
const deleteBank = require('../controller/deleteBank');
const makeDonation = require('../controller/makeDonation');
const allBankDetails = require('../controller/allBankDetails');
const getDonationDetail = require('../controller/getDonationDetail');
const campaignUser = require('../controller/campaignUser');
const withdraw = require('../controller/withdraw');
const changePassword = require('../controller/changePassword');

router.post("/Register",userRegisterController);
router.post("/Login",userLoginController);
router.get("/user-details",authToken,userDetailsController);
router.get("/userLogout",userLogout);
router.post("/createCampaign",createCampaign);

router.get("/campaignDetails",campaignDetailsController);

router.get("/get-categoryCampaign",getCategoryCampaign);

router.post("/campaign-details",getCampaignDetails);

router.post("/campaign-details-user",getCampaignDetailsByUser);

router.post("/delete-campaign",deleteCampaign);

router.post("/update-campaign",updateCampaignController);

router.post("/story-update",storyUpdate);

router.post("/get-storyUpdate",getStoryUpdateController);

router.post("/delete-story",deleteStory);

router.post("/category-campaign",getCategoryWiseCampaign);

router.get('/all-users',allUsers);

router.post('/update-user',updateUser);

router.post('/contact-detail',authToken,contactAdmin);

router.get('/all-contacts',AllContacts);

router.post('/add-bank',addBank);

router.post('/bank-detail',getBankDetail);

router.post('/delete-bank',deleteBank);

router.post('/make-donation',makeDonation);

router.get('/all-bank-detail',allBankDetails);

router.post('/donation-detail',getDonationDetail);

router.post('/campaign-user',campaignUser);

router.post('/Withdraw',withdraw);

router.post('/change-password',changePassword);






module.exports = router;





// const express = require("express");
// const router = express.Router();

// const userRegisterController = require("../controller/userRegister");
// const userLoginController = require("../controller/userLogin");
// const userDetailsController = require("../controller/userDetails");
// const authToken = require("../middleware/authToken");
// const userLogout = require("../controller/userLogout");
// const createCampaign = require("../controller/createCampaign");
// const campaignDetailsController = require("../controller/campaignDetails");
// const getCategoryCampaign = require("../controller/getCategoryCampaign");
// const getCampaignDetails = require("../controller/getCampaignDetails");
// const getCampaignDetailsByUser = require("../controller/getCampaignDetailByUser");
// const deleteCampaign = require("../controller/deleteCampaign");
// const updateCampaignController = require("../controller/updateCampaignController");
// const storyUpdate = require("../controller/storyUpdate");
// const getStoryUpdateController = require("../controller/getStoryUpdateController");
// const deleteStory = require("../controller/deleteStoryController");
// const getCategoryWiseCampaign = require("../controller/getCategoryWiseCampaign");
// const allUsers = require("../controller/allUsers");
// const updateUser = require("../controller/updateUser");
// const contactAdmin = require("../controller/contactAdmin");
// const AllContacts = require("../controller/allContacts");
// const addBank = require("../controller/addBank");
// const getBankDetail = require("../controller/getBankDetail");
// const deleteBank = require("../controller/deleteBank");
// const makeDonation = require("../controller/makeDonation");
// const allBankDetails = require("../controller/allBankDetails");
// const getDonationDetail = require("../controller/getDonationDetail");
// const campaignUser = require("../controller/campaignUser");
// const withdraw = require("../controller/withdraw");
// const changePassword = require("../controller/changePassword");

// router.post("/register", userRegisterController);
// router.post("/login", userLoginController);
// router.get("/user-details", authToken, userDetailsController);
// router.get("/user-logout", userLogout);

// router.post("/create-campaign", createCampaign);
// router.get("/campaign-details", campaignDetailsController);
// router.get("/get-category-campaign", getCategoryCampaign);
// router.post("/campaign-detail", getCampaignDetails);
// router.post("/campaign-user-detail", getCampaignDetailsByUser);
// router.post("/delete-campaign", deleteCampaign);
// router.post("/update-campaign", updateCampaignController);

// router.post("/story-update", storyUpdate);
// router.post("/get-story-update", getStoryUpdateController);
// router.post("/delete-story", deleteStory);

// router.post("/category-campaign", getCategoryWiseCampaign);

// router.get("/all-users", allUsers);
// router.post("/update-user", updateUser);

// router.post("/contact-detail", authToken, contactAdmin);
// router.get("/all-contacts", AllContacts);

// router.post("/add-bank", addBank);
// router.post("/bank-detail", getBankDetail);
// router.post("/delete-bank", deleteBank);
// router.post("/make-donation", makeDonation);
// router.get("/all-bank-detail", allBankDetails);
// router.post("/donation-detail", getDonationDetail);

// router.post("/campaign-user", campaignUser);
// router.post("/withdraw", withdraw);
// router.post("/change-password", changePassword);

// module.exports = router;
