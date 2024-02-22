import { Schema, model } from 'mongoose'

const schema = new Schema({
  group: {
    type: String,
    required: [true, '缺少類別'],
    enum: {
      values: ['公休', '活動', '其他'],
      message: '標題分類錯誤'
    }
  },
  title: {
    type: String,
    required: [true, '缺少標題']
  },
  content: {
    type: String,
    required: [true, '缺少內容']
  },
  poText: {
    type: Boolean,
    required: [true, '缺少貼文上架狀態']
  }
}, {
  timestamps: true,
  versionKey: false
})

export default model('news', schema)
