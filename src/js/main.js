/**
 * --------------------------------------------------------------------------
 * Info bootstrap
 * Pacote front-end da informata
 *
 * @author Tassiano Alencar <tassiano.alencar@icloud.com>
 * @version 1.0.0 (Siga o padrão de versionamento https://semver.org)
 * --------------------------------------------------------------------------
 */
const $ = require('jquery');
const bootstrap = require('bootstrap');
const { iAlerta } = require('./info-alert');
const { iDataTables } = require('./info-datatables');

(() => {

  window.informata = {};

  $(document).on('click', '.btn-primary', () => {
    iAlerta.simples('Mensagem');
    iDataTables.init();
  });

})();
