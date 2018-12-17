var express = require('express')
, router = express.Router();

router.use('/sach', require('./sach'));
router.use('/taikhoan', require('./taikhoan'));
router.use('/datonline', require('./datonline'));
router.use('/docgia', require('./docgia'));
router.use('/yeucau',require('./yeucau'));
router.use('/baiviet',require('./baiviet'));
router.use('/chitiet',require('./chitiet'));
module.exports = router;