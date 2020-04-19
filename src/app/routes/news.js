const dbConnection = require('../../config/dbConnection');

module.exports = app => {

  const connection = dbConnection();

  app.get('/', (req, res) => {
    connection.query('SELECT * FROM news', (err, result) => {
      console.log(result);
      res.render('news/news', {
        news: result
      });
    });
  });

  app.post('/add', (req, res) => {
    const { title, news } = req.body;
    connection.query('INSERT INTO news SET ? ',
      {
        title,
        news
      }
    , (err, result) => {
      res.redirect('/');
    });
  });
  app.post('/del', (req, res) => {
    const {id, title, news } = req.body;

    console.log("id:",id," title: ",title," news: ",news);
    if(id != ""){
      console.log("ID entre");
      connection.query(`DELETE FROM news where id_news = ${id};` , (err, result) => {
        res.redirect('/');
      });
    }else if (title != ""){
      console.log("title entre");
      connection.query(`DELETE FROM news where title = '${title}';` , (err, result) => {
        res.redirect('/');
      });
    }else if (news != ""){
      connection.query(`DELETE FROM news where news = '${news}';` , (err, result) => {
        res.redirect('/');
      });
    }
  });
};
