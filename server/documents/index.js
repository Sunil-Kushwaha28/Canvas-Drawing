module.exports = ({name, image}) => {
   
    return `
        <!doctype html>
        <html>
           <head>
              <meta charset="utf-8">
              <title>PDF Result Template</title>
              <style>
                 .pdf-box{
                   display: flex;
                   align-items: center;
                   justify-content: center;
                 }
              </style>
           </head>
           <body>
              <div className="pdf_box">
              <img src=${image} alt=${name} width="100%" height="100%">
              </div>
           </body>
        </html>
        `;
    };