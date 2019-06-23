const emailContent = function () {
    this.getInstructorMail = (recepientName, Username, Password) => {
        const InstructorSuccessfull = "<h2><span style=\"font-family: Georgia, serif; font-size: 34px; letter-spacing: 2px; word-spacing: 1px; color: #000000; font-weight: bold; text-decoration: none; font-style: normal; font-variant: normal; text-transform: none;\"><strong>Student Information System</strong></span></h2>\n" +
            "<p><span style=\"font-family: Georgia, serif; font-size: 25px; letter-spacing: 2px; word-spacing: 1px; color: #000000; font-weight: 400; text-decoration: none; font-style: normal; font-variant: normal; text-transform: none;\">Instructor Successful</span></p>\n" +
            "<hr />\n" +
            "<h2><span style=\"color: #000000; font-family: Georgia;\">Dear " + recepientName + " ,</span></h2>\n" +
            "<p style=\"font-family: Georgia; font-size: 15px; padding-left: 30px;\">You are new Instructor in our System</p>\n" +
            "<p style=\"font-family: Georgia; font-size: 15px; padding-left: 30px;\">Please refer the login credintials below&nbsp;</p>\n" +
            "<p>&nbsp;</p>\n" +
            "<p style=\"font-family: Georgia; font-size: 15px; padding-left: 30px;\">Login Credientials</p>\n" +
            "<p style=\"font-family: Georgia; font-size: 15px; padding-left: 60px;\">Username : " + Username + "&nbsp;</p>\n" +
            "<p style=\"font-family: Georgia; font-size: 15px; padding-left: 60px;\">Password   : " + Password + "&nbsp;&nbsp;<br /><br /></p>\n" +
            "<p style=\"text-align: left;\">&nbsp;</p>\n" +
            "<p style=\"text-align: left;\">&nbsp;</p>\n" +
            "<p>&nbsp;</p>";
        return InstructorSuccessfull
    };
};

module.exports = new emailContent();