const swal = require('sweetalert');

/**
 * --------------------------------------------------------------------------
 * Info Alert
 * Alerta padrão para o sistema da informata;
 *
 * Plugins usados
 * https://sweetalert.js.org/docs/
 *
 * @author Tassiano Alencar <tassiano.alencar@icloud.com>
 * @version 1.0.0 (Siga o padrão de versionamento https://semver.org)
 * @requires sweetalert
 * @example iAlerta.sucesso('Mensagem');
 * --------------------------------------------------------------------------
 */
const iAlerta = (() => ({
  simples(message) {
    swal({
      buttons: false,
      text: message
    });
  },

  erro(message) {
    swal({
      icon: 'error',
      text: message,
      title: 'Ops, algo deu errado'
    });
  },

  sucesso(message, options = {}) {
    const optionsDefault = {
      button: {
        className: '',
        closeModal: true,
        text: 'OK',
        value: true,
        visible: true
      },
      icon: 'success',
      text: message,
      title: 'Sucesso'
    };

    swal(Object.assign(optionsDefault, options));
  }

}))();

export {
  iAlerta
};
