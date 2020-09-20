const path = require('path')
const multer = require('multer')
const moment = require('moment') // Пакет для работы с Датой

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, path.resolve(__dirname, '../../static')) // or '../..', 'static'
  },
  filename(req, file, cb) {
    cb(null, `${moment().format('DDMMYYYY-HHmmss_SSS')}-${file.originalname}`)
  }
})


const fileFilter = (req, file, cb) => {
  if (file.mimetype === 'image/png' || file.mimetype === 'image/jpeg') {
    cb(null, true)
  } else {
    cb(null, false)
  }
}

module.exports = multer({ // Плагин для upload
  storage, fileFilter, limits: {fileSize: 1024 * 1024 * 5}
})