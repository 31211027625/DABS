import validator from "validator"
// API for adding doctor
const addDoctor = async (req,res )=>{
    try {

        const {name, email, password,speaciality,degree, experience,about,fees,address } = req.body
        const imageFile = req.file

        if (!name || !email ||!password ||!speaciality ||!degree ||!experience ||!about ||!fees ||!address)
            return res.json({success:false,message:"Missing Details"})
        
        if (!validator.isEmail(email)) {

        }

    } catch (error){

    }
}
export {addDoctor}