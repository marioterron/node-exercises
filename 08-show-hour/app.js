var strftime = require('strftime') // not required in browsers
    var es_ES = {
        days: ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'],
        shortDays: ['dom', 'lun', 'mar', 'mie', 'jue', 'vie', 'sab'],
        months: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Cctubre', 'Noviembre', 'Diciembre'],
        shortMonths: ['ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sep', 'oct', 'nov', 'dic'],
        AM: 'AM',
        PM: 'PM',
        am: 'am',
        pm: 'pm',
    }
    var strftimeES = strftime.localize(es_ES)
    console.log(strftimeES('%A de %d %B de %Y, %H:%M:%S')) // => mayo 09, 2017 18:21:08
