const express = require("express");
const router = express.Router();
const { check } = require("express-validator");

const personCtrl = require("../controllers/personCtrl");

router.get('/', personCtrl.getPersons)
router.get('/:id', personCtrl.getPerson)
router.post('/', [
        check('name', 'El nombre indicado debe tener al menos 3 caracteres y no puede incluir números')
            .isLength({ min: 3 })
            .isAlpha(locale = 'es-ES', { ignore: '- /' }),
        check('surname', 'Los apellidos indicados debe tener al menos 3 caracteres y no pueden incluir números')
            .isLength({ min: 3 })
            .isAlpha(locale = 'es-ES', { ignore: '- /' }),
        check('age', 'La edad indicada debe estar comprendida entre 0 y 125')
            .isFloat({ min: 0, max: 125 }),
        check('dni', 'El dni indicado debe contener 9 caracteres alfanuméricos')
            .isLength({ min: 9, max: 9 })
            .isAlphanumeric(),
        check('birthday', 'El cumpleaños indicado debe especificarse en formato aaaa-mm-dd')
            .isISO8601(),
        check('favouriteColour', 'El color favorito indicado debe tener al menos 3 caracteres y no puede incluir números')
            .isLength({ min: 3 })
            .isAlpha(locale = 'es-ES', { ignore: '- /' }),
        check('sex', 'El sexo indicado debe ser uno de los siguientes: Hombre, Mujer, Otro, No especificado')
            .isIn(['Hombre', 'Mujer', 'Otro', 'No especificado'])
      
    
], personCtrl.registerPerson)
router.put('/:id', personCtrl.editPerson)
router.delete('/:id', personCtrl.deletePerson)



module.exports = router;

