const axios = require('axios');
const cheerio = require('cheerio');

const tracking_get = async (req, res) => {
  const { code } = req.params;
  const { data } = await axios.get(
    `https://www.linkcorreios.com.br/?id=${code}`,
  );

  const $ = cheerio.load(data);
  const listElements = $('.singlepost .linha_status');
  const history = [];

  if (listElements.html()) {
    listElements.each((i, e) => {
      const status = $(e).children().first().text().replace('Status: ', '');
      const completeDate = $(e).children('li:nth-child(2)').text().split('|');
      const date = completeDate[0].split(':')[1].trim();
      let hour = completeDate[1].split(':');
      hour.shift();
      hour = hour.join(':').trim();

      const obj = {
        status,
        data: date,
        hora: hour,
      };

      if ($(e).children().length === 3) {
        obj.local = $(e).children().last().text().split(':')[1].trim();
      } else {
        obj.origem = $(e)
          .children('li:nth-child(3)')
          .text()
          .split(':')[1]
          .trim();
        obj.destino = $(e).children().last().text().split(':')[1].trim();
      }

      history.push(obj);
    });

    res.status(200).json(history);
  } else {
    res.status(404).json({
      status: 'error',
      message:
        'Rastreamento não disponível - Código errado ou rastreamento ainda não disponível no sistema dos Correios',
    });
  }
};

module.exports = { tracking_get };
