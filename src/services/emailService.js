require("dotenv").config();
import nodemailer from "nodemailer";

let sendSimpleEmail = async (dataSend) => {
    let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        auth: {
            user: process.env.EMAIL_APP,
            pass: process.env.EMAIL_APP_PASSWORD,
        },
    });

    let info = await transporter.sendMail({
        from: `"CuongGaim" <cuonggaim@gmail.com>`,
        to: dataSend.receiverEmail,
        subject: "Thông tin đặt lịch khám bệnh",
        html: `
        <h3> Xin chào ${dataSend.patientName} ! </h3>
        <p> Bạn nhận được email này vì đặt lịch khám bệnh online </p>
        <p> Thông tin đặt lịch khám bệnh online </p>
        <div><b> Thời gian: ${dataSend.time} </b></div>
        <div><b> Bác sĩ: ${dataSend.doctorName} </b></div>
    
        <p> 
            Nếu các thông tin trên là đúng sự thật, vui lòng click
            vào đường link bên dưới để xác nhận và hoàn tất
            thủ tục đặt lịch khám bệnh
        </p>
        <div>
            <a href=${dataSend.redirectLink} target="_blank"> Click here </a>
        </div>
    
        <div> Xin chân thành cảm ơn </div>
        `,
    });
};

module.exports = {
    sendSimpleEmail: sendSimpleEmail,
};
