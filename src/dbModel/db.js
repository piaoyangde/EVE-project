//引入mongoose
const mongoose = require('mongoose');
mongoose.connect('mongodb://132.232.215.149:27017/qs-lawyer', {useNewUrlParser: true,useUnifiedTopology: true});


//定义Schema
var UserSchema = mongoose.Schema({
    name: {type: String,default: '',required: true, trim: true},
    identity: {type: String,default: '',required: true,trim: true},
    phone: {type: String,required: true,trim: true},
    duty: {type: String,default: '执业律师',enum: ['执业律师', '实习律师', '行政人员']},
    role: {type: String,default: '普通用户',enum: ['普通用户', '管理用户', '超级用户']}
})
var CaseSchema = mongoose.Schema({
    caseName:{type:String,required:true,trim:true},
    caseType:{type:String,trim:true,default:'民事案件',enum:['民事案件','刑事案件','行政案件','非诉案件']},
    caseReason:{type:String,required:true,trim:true},
    delegation:{type:String,required:true,trim:true},
    linkman:{type:String,trim:true},
    telephone:{type:String,trim:true},
    getTime:{type:Date,default:Date.now}
})


//创建数据模型
var UserModel = mongoose.model('User', UserSchema, 'userInfo');
var CaseModel = mongoose.model('Case', CaseSchema, 'caseInfo');


//查询测试:
// UserModel.find({},(err,res)=>{
//     if(err){
//         console.log('错误了',err)
//         return;
//     }
//     console.log('正确了',res);
// })


//暴露数据模型
export {
    UserModel,
    CaseModel
}