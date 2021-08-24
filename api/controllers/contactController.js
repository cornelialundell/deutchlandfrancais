const Question = require('../models/Question');

const contactSubmit = async (req, res) => {
    try {
        const {title, message } = req.body;

        if(!title || !message) {
            return res.status(400).json({message: 'Snälla fyll i alla fälten ditt dumma hor'});
        }

        const newQuestion = new Question({
            title, 
            message
        })

        const savedQuestion = await newQuestion.save();
        console.log(savedQuestion)
        res.status(200).send()
    }
    catch (error) {
        console.error(error)
    }
}



module.exports = contactSubmit