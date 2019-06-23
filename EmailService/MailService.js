const mailService = require('nodemailer');
const Content = require('./EmailContent');

const EmailService = function () {
    this.sendMail = (recipient, Name, MailSubject, Type, data) => {
        return new Promise((response, reject) => {
            this.transporter = mailService.createTransport({
                service: 'gmail',
                auth: {
                    type: 'OAuth2',
                    user: 'woodcreakuniversity@gmail.com',
                    clientId: '822033626361-jfdn6b8qmjqcddkgsblqq9r04vrirg2c.apps.googleusercontent.com',
                    clientSecret: 'AC0cLyylHM_8OK9Sfs87oGY6',
                    refreshToken: '1/REGhQ7Paxm1hnseMy2GCM8RJ1oug1G34uJaU_L3EJ1ExIY1y4Llg14YDa2ajWvjj',
                    accessToken: 'ya29.GlsoBxTDyiw-hGV9oI4T1AKUCpMIoYVPm_6VycPP7_rFyym45plUmdAgHCaRpOQ4ZQP9PFQtx7GMBV1QtrKpFCzCBNEmsDz2_OfoXTdjCre2s9CN7YO9gphBGIxz',
                },
            });


            this.getMailMessage = function(){
                var message = "";
                if(Type === "Instructor Registration"){
                    message = Content.getInstructorMail(Name, data.name, data.code);
                }
                return message
            };

            this.mailOptions = {
                from: 'anusampath9470@gmail.com',
                to: recipient.toString(),
                subject: MailSubject.toString(),
                html : this.getMailMessage()
            };

            this.transporter.sendMail(this.mailOptions, function (err, res) {
                if (err) {
                    reject({status : 500, message : err});
                    console.log(err)
                } else {
                    response({status : 200, message : 'Email Sent Successfully'});
                    console.log('Email Sent Successfully')
                }
            });
        })
    }
};

module.exports = new EmailService();