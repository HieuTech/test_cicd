let code =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InJvc2FzdW9uZy50ZWNoQGdtYWlsLmNvbSIsInBhc3MiOiJweHJvIG1vcHQgb3lnYSBodGF5IiwiaWF0IjoxNzA1MjgzMjc0LCJleHAiOjE3MTM5MjMyNzR9.30woAKZacDB6iEJZnAIQiFw1Hhyx-RiIkaiRsEKDEPQ";

  export function sendEmail(subjectEmail,customerName,content){
    axios.post("https://mail.miao.io.vn/email", {
        to:"rosasuong.tech@gmail.com",
        subject: subjectEmail,
        html: `Xin chào ${customerName}
        
        ${content}
        `
    },{
        headers:{
            code
        }
    })
    .then(res =>{
        alert(res.data.data.message)
    })
    
  }