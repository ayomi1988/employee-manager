import * as EmpServices from "../store/EmpServices";
import * as api from "../api/api"
// @ponicode
describe("Testing EmpServices", () => {
    test("EmpServices.getAllEmployeeAPI", async () => {
        let result: any = await EmpServices.getAllEmployeeAPI()
        let object: any = [{ _id: "63fd4cfd066244d52f759ccb", first_name: "Suwandana1", last_name: "Fernand1o", email: "aryana@yaho1o.com", number: "+94771277681", gender: "F", photo: "https://cdn.pixabay.com/photo/2018/08/26/23/55/woman-3633737__480.jpg", __v: 0 }, { _id: "63fde693279165c38ac5a525", first_name: "Shevoli", last_name: "Fernand1o", email: "aryana@yaho1o.com", number: "+94771277681", gender: "F", photo: "https://cdn.pixabay.com/photo/2018/08/26/23/55/woman-3633737__480.jpg", __v: 0 }, { _id: "63fdef46279165c38ac5a559", first_name: "Sinendri", last_name: "Fernando", email: "fviran@gmail.com", number: "+94716388833", gender: "F", photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbnhvB5mOyuyQ-a4R980CZEsNCJakr_ye-n0Mvqsb8SA&s", __v: 0 }, { _id: "63fdf034279165c38ac5a55e", first_name: "Madushika", last_name: "Fernando", email: "fviran@gmail.com", number: "+94716388833", gender: "M", photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbnhvB5mOyuyQ-a4R980CZEsNCJakr_ye-n0Mvqsb8SA&s", __v: 0 }, { _id: "63ff3652fc34bd3fbb17a230", first_name: "Ayomiii", last_name: "Perera", email: "ayotest@gmail.com", number: "+94767654354", gender: "M", photo: "picture disply", __v: 0 }, { _id: "63ff36b6e5a7fdc7974d88cb", first_name: "Ayomiii", last_name: "Perera", email: "ayotest@gmail.com", number: "+94767654354", gender: "M", photo: "picture disply", __v: 0 }, { _id: "63ff3ab9a13294fa0a74d8a3", first_name: "Hasitha1", last_name: "Chandula", email: "hasitha.chandula@gmail.com", number: "+94768038988", gender: "M", photo: "sdsd", __v: 0 }, { _id: "63ff3b1ca13294fa0a74d8b8", first_name: "Hasitha", last_name: "Chandula", email: "hasitha.chandula@gmail.com", number: "+94768038988", gender: "M", photo: "sdsdsd", __v: 0 }, { _id: "6406cdb28fc8945d012bfa1b", first_name: "dfgfdgdfg", last_name: "dfgdfgdf", email: "dfgdfg@sddas.com", number: "+94767654354", gender: "F", photo: "csfsadfdsfsdf", __v: 0 }, { _id: "640867b04945ccd8ef224209", first_name: "Ayomi", last_name: "Fernand1o", email: "aryana@yaho1o.com", number: "94771277681", gender: "F", photo: "https://cdn.pixabay.com/photo/2018/08/26/23/55/woman-3633737__480.jpg", __v: 0 }, { _id: "640875224945ccd8ef224218", first_name: "Ayomi", last_name: "Fernand1o", email: "aryana@yaho1o.com", number: "94771277681", gender: "F", photo: "https://cdn.pixabay.com/photo/2018/08/26/23/55/woman-3633737__480.jpg", __v: 0 }, { _id: "6408a01c20fcbdf4251369f8", first_name: "Ayomi", last_name: "Fernand1o", email: "aryana@yaho1o.com", number: "94771277681", gender: "F", photo: "https://cdn.pixabay.com/photo/2018/08/26/23/55/woman-3633737__480.jpg", __v: 0 }, { _id: "640b3249a6ea498d1f4337bd", first_name: "ayoooo", last_name: "pereraa", email: "ahahha@alksld.com", number: "+94767654354", gender: "F", photo: "sdfsdfsdfsdfsdf", __v: 0 }, { _id: "640b3c68797e20765025b59e", first_name: "testttt", last_name: "sdfsdf", email: "sdfsd@sdad.com", number: "+94767654354", gender: "F", photo: "fsdfdfsdf", __v: 0 }, { _id: "640b3ca3797e20765025b5a6", first_name: "aaaaaf", last_name: "ssssss", email: "sssss@sss.com", number: "+94767654354", gender: "F", photo: "fsdfsdfsdf", __v: 0 }]
        expect(result).toEqual(object)
    })


    test("EmpServices.getEmployeByIdAPI", async () => {
        let result: any = await EmpServices.getEmployeByIdAPI("/api/employees/")
        let object: any = [{ _id: "63fd4cfd066244d52f759ccb", first_name: "Suwandana1", last_name: "Fernand1o", email: "aryana@yaho1o.com", number: "+94771277681", gender: "F", photo: "https://cdn.pixabay.com/photo/2018/08/26/23/55/woman-3633737__480.jpg", __v: 0 }, { _id: "63fde693279165c38ac5a525", first_name: "Shevoli", last_name: "Fernand1o", email: "aryana@yaho1o.com", number: "+94771277681", gender: "F", photo: "https://cdn.pixabay.com/photo/2018/08/26/23/55/woman-3633737__480.jpg", __v: 0 }, { _id: "63fdef46279165c38ac5a559", first_name: "Sinendri", last_name: "Fernando", email: "fviran@gmail.com", number: "+94716388833", gender: "F", photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbnhvB5mOyuyQ-a4R980CZEsNCJakr_ye-n0Mvqsb8SA&s", __v: 0 }, { _id: "63fdf034279165c38ac5a55e", first_name: "Madushika", last_name: "Fernando", email: "fviran@gmail.com", number: "+94716388833", gender: "M", photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbnhvB5mOyuyQ-a4R980CZEsNCJakr_ye-n0Mvqsb8SA&s", __v: 0 }, { _id: "63ff3652fc34bd3fbb17a230", first_name: "Ayomiii", last_name: "Perera", email: "ayotest@gmail.com", number: "+94767654354", gender: "M", photo: "picture disply", __v: 0 }, { _id: "63ff36b6e5a7fdc7974d88cb", first_name: "Ayomiii", last_name: "Perera", email: "ayotest@gmail.com", number: "+94767654354", gender: "M", photo: "picture disply", __v: 0 }, { _id: "63ff3ab9a13294fa0a74d8a3", first_name: "Hasitha1", last_name: "Chandula", email: "hasitha.chandula@gmail.com", number: "+94768038988", gender: "M", photo: "sdsd", __v: 0 }, { _id: "63ff3b1ca13294fa0a74d8b8", first_name: "Hasitha", last_name: "Chandula", email: "hasitha.chandula@gmail.com", number: "+94768038988", gender: "M", photo: "sdsdsd", __v: 0 }, { _id: "6406cdb28fc8945d012bfa1b", first_name: "dfgfdgdfg", last_name: "dfgdfgdf", email: "dfgdfg@sddas.com", number: "+94767654354", gender: "F", photo: "csfsadfdsfsdf", __v: 0 }, { _id: "640867b04945ccd8ef224209", first_name: "Ayomi", last_name: "Fernand1o", email: "aryana@yaho1o.com", number: "94771277681", gender: "F", photo: "https://cdn.pixabay.com/photo/2018/08/26/23/55/woman-3633737__480.jpg", __v: 0 }, { _id: "640875224945ccd8ef224218", first_name: "Ayomi", last_name: "Fernand1o", email: "aryana@yaho1o.com", number: "94771277681", gender: "F", photo: "https://cdn.pixabay.com/photo/2018/08/26/23/55/woman-3633737__480.jpg", __v: 0 }, { _id: "6408a01c20fcbdf4251369f8", first_name: "Ayomi", last_name: "Fernand1o", email: "aryana@yaho1o.com", number: "94771277681", gender: "F", photo: "https://cdn.pixabay.com/photo/2018/08/26/23/55/woman-3633737__480.jpg", __v: 0 }, { _id: "640b3249a6ea498d1f4337bd", first_name: "ayoooo", last_name: "pereraa", email: "ahahha@alksld.com", number: "+94767654354", gender: "F", photo: "sdfsdfsdfsdfsdf", __v: 0 }, { _id: "640b3c68797e20765025b59e", first_name: "testttt", last_name: "sdfsdf", email: "sdfsd@sdad.com", number: "+94767654354", gender: "F", photo: "fsdfdfsdf", __v: 0 }, { _id: "640b3ca3797e20765025b5a6", first_name: "aaaaaf", last_name: "ssssss", email: "sssss@sss.com", number: "+94767654354", gender: "F", photo: "fsdfsdfsdf", __v: 0 }]
        expect(result).toEqual(object)
    })
})



