const mail = require('./../models/feedback');

const questions = {
    name: 'ФИО:',
    position: 'Должность:',
    organization: 'Организация:',
    contacts: 'Контакты:',
    side: 'Группа заинтересованных сторон:',
    reliability: 'Достоверность и объективность:',
    decide: 'Повлияло ли на Вашу оценку наличие в отчете заключений независимых аудиторов и заключений о независимом общественном заверении – экспертном (РСПП, РРС) и стейкхолдерском?',
    inform: 'Полнота и существенность информации:',
    struct: 'Структура отчета, удобство поиска нужной информации, стиль изложения:',
    chapters: 'Разделы отчета, которые оказались значимыми и полезными:',
    themes: 'Какие темы, на Ваш взгляд, необходимо включить в следующий отчет?',
    comments: 'Рекомендации и дополнительные комментарии:'
}

exports.sendFeedback = (req, res) => {
    let answers = req.body.answers;

    if (answers.side == 'other') {
        answers.side = req.body.sideOther;
    }

    let emailText = '';

    try {
        const questsKeys = Object.keys(questions);
        const answersKeys = Object.keys(answers);
        
        if (questsKeys.length != answersKeys.length) {
            throw 'err';
        }

        for (let input in answers) {
            let answer = answers[input];
            
            switch (typeof answer) {
                case 'string':
                    answer = answer.replace(/\s/g, '');

                    if (!!!answer) {
                        throw 'err';
                    }

                    emailText += `
                    <div>
                        <strong>${questions[input]}</strong> ${answers[input]}
                    </div>`;

                    break;
                
                case 'object':
                    emailText += `<div>
                        <strong>${questions[input]}</strong>
                        <ul>
                    `;
                    answer.forEach(element => {
                        emailText += `<li>${element}</li>`;
                    });
                    
                    emailText += `
                        </ul>
                    </div>
                    `;

                    break;
            }


        }
    } catch(e) {
        console.log(e);
        res.redirect('/');

        return;
    }

    
    const message = {
        from: `feedback <${require('../../config').email}>`,
        to: '<' + require('../../config').email + '>',
        subject: 'Отзыв о годовом отчете',
        attachment: [
            {
                data: 
                `
                 <html>
                    ${emailText}
                 </html>   
                `,
                alternative: true
            }
        ]
    };
    mail.sendEmail(message);
    
    res.redirect('/feedback');
}