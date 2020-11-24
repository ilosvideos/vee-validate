!function(e,o){"object"==typeof exports&&"undefined"!=typeof module?module.exports=o():"function"==typeof define&&define.amd?define(o):((e=e||self).__vee_validate_locale__pt_PT=e.__vee_validate_locale__pt_PT||{},e.__vee_validate_locale__pt_PT.js=o())}(this,function(){"use strict";var e,o={name:"pt_PT",messages:{after:function(e,o){return"O campo "+e+" deve estar depois do campo "+o[0]},alpha:function(e){return"O campo "+e+" deve conter somente letras"},alpha_dash:function(e){return"O campo "+e+" deve conter letras, números e traços"},alpha_num:function(e){return"O campo "+e+" deve conter somente letras e números"},alpha_spaces:function(e){return"O "+e+" só pode conter caracteres alfabéticos e espaços"},before:function(e,o){return"O campo "+e+" deve estar antes do campo "+o[0]},between:function(e,o){return"O campo "+e+" deve estar entre "+o[0]+" e "+o[1]},confirmed:function(e,o){return"Os campos "+e+" e "+o[0]+" devem ser iguais"},credit_card:function(e){return"O campo "+e+" é inválido"},date_between:function(e,o){return"O campo "+e+" deve estar entre "+o[0]+" e "+o[1]},date_format:function(e,o){return"O campo "+e+" deve estar no formato "+o[0]},decimal:function(e,o){void 0===o&&(o=[]);var n=o[0];return void 0===n&&(n="*"),"O campo "+e+" deve ser numérico e deve conter"+(n&&"*"!==n?" "+n:"")+" casas decimais"},digits:function(e,o){return"O campo "+e+" deve ser numérico e ter "+o[0]+" dígitos"},dimensions:function(e,o){return"O campo "+e+" deve ter "+o[0]+" pixels de largura por "+o[1]+" pixels de altura"},email:function(e){return"O campo "+e+" deve ser um email válido"},excluded:function(e){return"O campo "+e+" deve ser um valor válido"},ext:function(e){return"O campo "+e+" deve ser um ficheiro válido"},image:function(e){return"O campo "+e+" deve ser uma imagem"},included:function(e){return"O campo "+e+" deve ter um valor válido"},ip:function(e){return"O campo "+e+" deve ser um endereço IP válido"},is:function(e){return"O valor inserido no campo "+e+" não é válido"},is_not:function(e){return"O valor inserido no campo "+e+" não é válido"},max:function(e,o){return"O campo "+e+" não deve ter mais que "+o[0]+" caracteres"},max_value:function(e,o){return"O campo "+e+" precisa ser "+o[0]+" ou menor"},mimes:function(e){return"O campo "+e+" deve ser um tipo de ficheiro válido"},min:function(e,o){return"O campo "+e+" deve conter pelo menos "+o[0]+" caracteres"},min_value:function(e,o){return"O campo "+e+" precisa ser "+o[0]+" ou maior"},numeric:function(e){return"O campo "+e+" deve conter apenas números"},regex:function(e){return"O campo "+e+" possui um formato inválido"},required:function(e){return"O campo "+e+" é obrigatório"},size:function(e,o){return"O campo "+e+" deve ser menor que "+function(e){var o=1024,n=0===(e=Number(e)*o)?0:Math.floor(Math.log(e)/Math.log(o));return 1*(e/Math.pow(o,n)).toFixed(2)+" "+["Byte","KB","MB","GB","TB","PB","EB","ZB","YB"][n]}(o[0])},url:function(e){return"O campo "+e+" não é um URL válido"}},attributes:{}};return"undefined"!=typeof VeeValidate&&VeeValidate.Validator.localize(((e={})[o.name]=o,e)),o});