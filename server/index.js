let express = require("express");
let cors = require("cors");
require("dotenv").config();
let { GoogleGenerativeAI } = require("@google/generative-ai");
let app = express();
app.use(cors()); // middleware to enable CORS
app.use(express.json()); // middleware to parse JSON bodies

let gemini = new GoogleGenerativeAI(process.env.KEY);
let model = gemini.getGenerativeModel({ model: "gemini-2.5-flash" });


app.post('/ask',
    async (req, res) => {

        let {question} = req.body
        let data = await model.generateContent(question);
        let finalData = data.response.text()
       



        res.send(
             {
            _status:true,
            _message : "chat found..",finalData
            }
        )
    }

)



app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});

    