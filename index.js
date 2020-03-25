const express = require('express');
const app = express();

const answers = ['option2', 'option3'];

app.use(require('body-parser').json());

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', '*');
    if(req.method === 'OPTIONS'){
      res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
      return res.status(200).json({});
    }
    next();
});
  
app.post('/submit', (req, res) => {
    const {studentName, options} = req.body;
    console.log(options, studentName);
    let score = 0;
    for (let i = 0;i < answers.length;i++) {
        if(answers[i].localeCompare(options[i])) {
            score++;
        }
    }

    res.json({studentName, score});
})

app.listen(3000, () => console.log("listening on port 3000"));