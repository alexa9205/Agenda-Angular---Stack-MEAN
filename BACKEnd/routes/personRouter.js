const express = require("express");
const router = express.Router();
const { check } = require("express-validator");

const personCtrl = require("../controllers/personCtrl");
const valid_user = [
    check('Nombre', 'El nombre indicado debe tener al menos 3 caracteres y no puede incluir números')
        .isLength({ min: 3 })
        .isAlpha(locale = 'es-ES', { ignore: '- /' }),
    check('Apellidos', 'Los apellidos indicados debe tener al menos 3 caracteres y no pueden incluir números')
        .isLength({ min: 3 })
        .isAlpha(locale = 'es-ES', { ignore: '- /' }),
    check('Edad', 'La edad indicada debe estar comprendida entre 0 y 125')
        .isFloat({ min: 0, max: 125 }),
    check('Dni', 'El dni indicado debe contener 9 caracteres alfanuméricos')
        .isLength({ min: 9, max: 9 })
        .isAlphanumeric(),
    check('Cumpleanos', 'El cumpleaños indicado debe especificarse en formato aaaa-mm-dd')
        .isISO8601(),
    check('ColorFav', 'El color favorito indicado debe tener al menos 3 caracteres y no puede incluir números')
        .isLength({ min: 3 })
        .isAlpha(locale = 'es-ES', { ignore: '- /' }),
    check('Sexo', 'El sexo indicado debe ser uno de los siguientes: Hombre, Mujer, Otro, No especificado')
        .isIn(['Hombre', 'Mujer', 'Otro', 'No especificado'])
  ];

router.get('/', personCtrl.getPersons)
router.post('/', valid_user, personCtrl.createPerson)
router.put('/:id', valid_user, personCtrl.editPerson)
router.delete('/:id', personCtrl.deletePerson)



module.exports = router;

