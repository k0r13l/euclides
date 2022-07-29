/**
 * Por efectos de comodidad se comenta solo la primer función
 * porque los demás son similares
 */

function calcularEstilo() {
    ec = parseInt(document.estilo.c5.value) + parseInt(document.estilo.c9.value) + parseInt(document.estilo.c13.value) + parseInt(document.estilo.c17.value) + parseInt(document.estilo.c25.value) + parseInt(document.estilo.c29.value);
    or = parseInt(document.estilo.c2.value) + parseInt(document.estilo.c10.value) + parseInt(document.estilo.c22.value) + parseInt(document.estilo.c26.value) + parseInt(document.estilo.c30.value) + parseInt(document.estilo.c34.value);
    ca = parseInt(document.estilo.c7.value) + parseInt(document.estilo.c11.value) + parseInt(document.estilo.c15.value) + parseInt(document.estilo.c19.value) + parseInt(document.estilo.c31.value) + parseInt(document.estilo.c35.value);
    ea = parseInt(document.estilo.c4.value) + parseInt(document.estilo.c12.value) + parseInt(document.estilo.c24.value) + parseInt(document.estilo.c28.value) + parseInt(document.estilo.c32.value) + parseInt(document.estilo.c36.value);

    $.ajax({
        /* Llamado a la función del servidor que devuelve la información */
        url: '?controller=Home&action=getData',
        type: 'post',
        success: function(response) {
            /* Convierte la respuesta del servidor en un list de JS */
            let data = JSON.parse(response);

            let ej1 = ["", ca, ec, ea, or, ""];

            let resultados = [];
            let suma = 0;

            /* Ciclo que itera sobre todos los registros que llegan del servidor */
            data.forEach(element => {
                /* Algoritmo de euclides */
                suma += Math.sqrt(Math.pow(parseInt(element.CA) - ej1[1], 2));
                suma += Math.sqrt(Math.pow(parseInt(element.EC) - ej1[2], 2));
                suma += Math.sqrt(Math.pow(parseInt(element.EA) - ej1[3], 2));
                suma += Math.sqrt(Math.pow(parseInt(element.ORT) - ej1[4], 2));

                /* Vector con todos los resultados del algoritmo de euclides */
                resultados.push({
                    valor: suma,
                    estilo: element.ESTILO
                });
                suma = 0;
            });
            /* Ordena los resultados de menor a mayor para escoger luego el más cercano */
            resultados.sort(((a, b) => a.valor - b.valor));
            alert("Su estilo es " + resultados[0].estilo);
        }
    });
}

function calcularRecinto() {
    /* Se obtienen los datos ingresados por el usuario */
    var estiloAprendizaje = $('#selectEstilosA option:selected').val();
    var sexo = $('#selectSexo option:selected').val();
    var promedio = $('#inputPromedioM').val();

    /**  
     * Se transforman los valores de texto a número 
     * para que puedan ser usados en el algoritmo 
     * */
    switch (estiloAprendizaje) {
        case 'Acomodador':
            estiloAprendizaje = 1;
            break;
        case 'Asimilador':
            estiloAprendizaje = 2;
            break;
        case 'Convergente':
            estiloAprendizaje = 3;
            break;
        case 'Divergente':
            estiloAprendizaje = 4;
            break;
    }

    switch (sexo) {
        case 'M':
            sexo = 1;
            break;
        case 'F':
            sexo = 2;
            break;
    }
    let ej1 = [estiloAprendizaje, sexo, promedio];
    $.ajax({
        url: '?controller=Home&action=getDataEj2',
        type: 'post',
        success: function(response) {
            let data = JSON.parse(response);
            let resultados = [];
            let suma = 0;

            data.forEach(element => {
                switch (element[0]) {
                    case 'ACOMODADOR':
                        element[0] = 1;
                        break;
                    case 'ASIMILADOR':
                        element[0] = 2;
                        break;
                    case 'CONVERGENTE':
                        element[0] = 3;
                        break;
                    case 'DIVERGENTE':
                        element[0] = 4;
                        break;
                }

                switch (element[1]) {
                    case 'M':
                        element[1] = 1;
                        break;
                    case 'F':
                        element[1] = 2;
                        break;
                }

                element[2] = parseFloat(element[2]);

                suma += Math.sqrt(Math.pow(element[0] - ej1[0], 2));
                suma += Math.sqrt(Math.pow(element[1] - ej1[1], 2));
                suma += Math.sqrt(Math.pow(element[2] - ej1[2], 2));

                resultados.push({
                    valor: suma,
                    recinto: element.RECINTO
                });
                suma = 0;
            });
            resultados.sort(((a, b) => a.valor - b.valor));
            alert('Su recinto es: ' + resultados[0].recinto);
        }
    });
}

function calcularSexo() {
    var estiloAprendizaje = $('#selectEstilosA option:selected').val();
    var recinto = $('#selectRecinto option:selected').val();
    var promedio = $('#inputPromedioM').val();

    switch (estiloAprendizaje) {
        case 'Acomodador':
            estiloAprendizaje = 1;
            break;
        case 'Asimilador':
            estiloAprendizaje = 2;
            break;
        case 'Convergente':
            estiloAprendizaje = 3;
            break;
        case 'Divergente':
            estiloAprendizaje = 4;
            break;
    }

    switch (recinto) {
        case 'Turrialba':
            recinto = 1;
            break;
        case 'Paraiso':
            recinto = 2;
            break;
    }

    let ej1 = [estiloAprendizaje, recinto, parseFloat(promedio)];

    $.ajax({
        url: '?controller=Home&action=getDataEj2',
        type: 'post',
        success: function(response) {
            let data = JSON.parse(response);
            let resultados = [];
            let suma = 0;
            data.forEach(element => {
                switch (element.ESTILO) {
                    case 'ACOMODADOR':
                        element.ESTILO = 1;
                        break;
                    case 'ASIMILADOR':
                        element.ESTILO = 2;
                        break;
                    case 'CONVERGENTE':
                        element.ESTILO = 3;
                        break;
                    case 'DIVERGENTE':
                        element.ESTILO = 4;
                        break;
                }

                switch (element.RECINTO) {
                    case 'Turrialba':
                        element.RECINTO = 1;
                        break;
                    case 'Paraiso':
                        element.RECINTO = 2;
                        break;
                }

                switch (element.SEXO) {
                    case 'M':
                        element.SEXO = 'Masculino';
                        break;
                    case 'F':
                        element.SEXO = 'Femenino';
                        break;
                }

                element.PROMEDIO = parseFloat(element.PROMEDIO);

                suma += Math.sqrt(Math.pow(element.ESTILO - ej1[0], 2));
                suma += Math.sqrt(Math.pow(element.RECINTO - ej1[1], 2));
                suma += Math.sqrt(Math.pow(element.PROMEDIO - ej1[2], 2));
                resultados.push({
                    valor: suma,
                    sexo: element.SEXO
                });
                suma = 0;
            });
            resultados.sort(((a, b) => a.valor - b.valor));
            alert('Su sexo es: ' + resultados[0].sexo);
        }
    });
}

function calcularEstilo2() {
    var sexo = $('#selectSexo option:selected').val();
    var recinto = $('#selectRecinto option:selected').val();
    var promedio = $('#inputPromedioM').val();

    switch (sexo) {
        case 'M':
            sexo = 1;
            break;
        case 'F':
            sexo = 2;
            break;
    }

    switch (recinto) {
        case 'Turrialba':
            recinto = 1;
            break;
        case 'Paraiso':
            recinto = 2;
            break;
    }

    let ej1 = [sexo, recinto, parseFloat(promedio)];

    $.ajax({
        url: '?controller=Home&action=getDataEj2',
        type: 'post',
        success: function(response) {
            let data = JSON.parse(response);
            let resultados = [];
            let suma = 0;
            data.forEach(element => {
                switch (element.RECINTO) {
                    case 'Turrialba':
                        element.RECINTO = 1;
                        break;
                    case 'Paraiso':
                        element.RECINTO = 2;
                        break;
                }

                switch (element.SEXO) {
                    case 'M':
                        element.SEXO = 1;
                        break;
                    case 'F':
                        element.SEXO = 2;
                        break;
                }

                element.PROMEDIO = parseFloat(element.PROMEDIO);

                suma += Math.sqrt(Math.pow(element.SEXO - ej1[0], 2));
                suma += Math.sqrt(Math.pow(element.RECINTO - ej1[1], 2));
                suma += Math.sqrt(Math.pow(element.PROMEDIO - ej1[2], 2));

                resultados.push({
                    valor: suma,
                    estilo: element.ESTILO
                });
                suma = 0;
            });
            resultados.sort(((a, b) => a.valor - b.valor));
            alert('Su estilo es: ' + resultados[0].estilo);
        }
    });
}

function calcularProfesor() {
    let edad = $('#selectEdad option:selected').val();
    let genero = $('#selectGenero option:selected').val();
    let autoevaluacion = $('#selectAutoEvaluacion').val();
    let cantEnsenado = $('#selectCantEnsenado option:selected').val();
    let disciplina = $('#selectDisciplina option:selected').val();
    let habilidadPC = $('#selectHabilidadPC option:selected').val();
    let habilidadWebTec = $('#selectHabilidadWebTec option:selected').val();
    let habilidadWebSite = $('#selectHabilidadWeb option:selected').val();

    let ej1 = [parseInt(edad),
        parseInt(genero),
        parseInt(autoevaluacion),
        parseInt(cantEnsenado),
        parseInt(disciplina),
        parseInt(habilidadPC),
        parseInt(habilidadWebTec),
        parseInt(habilidadWebSite)
    ];

    $.ajax({
        url: '?controller=Home&action=getDataProfesor',
        type: 'post',
        success: function(response) {
            let data = JSON.parse(response);
            let resultados = [];
            let suma = 0;

            data.forEach(element => {
                if (element.B == null || element.B == NaN) {
                    element.B = 0;
                } else {
                    switch (element.B) {
                        case 'F':
                            element.B = 1;
                            break;
                        case 'M':
                            element.B = 2;
                            break;
                    }
                }

                switch (element.C) {
                    case 'B':
                        element.C = 1;
                        break;
                    case 'I':
                        element.C = 2;
                        break;
                    case 'H':
                        element.C = 3;
                }

                /* Disciplina */
                switch (element.E) {
                    case 'DM':
                        element.E = 1;
                        break;
                    case 'ND':
                        element.E = 2;
                        break;
                    case 'O':
                        element.E = 3;
                        break;
                }

                /* Habilidad con las computadoras */
                switch (element.F) {
                    case 'L':
                        element.F = 1;
                        break;
                    case 'A':
                        element.F = 2;
                        break;
                    case 'H':
                        element.F = 3;
                        break;
                }

                /* Experiencia con las tecnologías basadas en la web */
                switch (element.G) {
                    case 'N':
                        element.G = 1;
                        break;
                    case 'S':
                        element.G = 2;
                        break;
                    case 'O':
                        element.G = 3;
                        break;
                }

                /* Experiencia usando un sitio web */
                switch (element.H) {
                    case 'N':
                        element.H = 1;
                        break;
                    case 'S':
                        element.H = 2;
                        break;
                    case 'O':
                        element.H = 3;
                        break;
                }

                suma += Math.sqrt(Math.pow(element.A - ej1[0], 2));
                suma += Math.sqrt(Math.pow(element.B - ej1[1], 2));
                suma += Math.sqrt(Math.pow(element.C - ej1[2], 2));
                suma += Math.sqrt(Math.pow(element.D - ej1[3], 2));
                suma += Math.sqrt(Math.pow(element.E - ej1[4], 2));
                suma += Math.sqrt(Math.pow(element.F - ej1[5], 2));
                suma += Math.sqrt(Math.pow(element.G - ej1[6], 2));
                suma += Math.sqrt(Math.pow(element.H - ej1[7], 2));

                resultados.push({
                    valor: suma,
                    tipo: element.CLASS
                });
                suma = 0;
            });
            resultados.sort(((a, b) => a.valor - b.valor));
            alert('Su tipo es: ' + resultados[0].tipo);
        }
    });
}

function calcularRedes() {
    let fiabilidad = $('#selectReability option:selected').val();
    let enlaces = $('#selectLinks option:selected').val();
    let capacidad = $('#selectCapacity option:selected').val();
    let costo = $('#selectCost option:selected').val();

    let ej1 = [
        parseInt(fiabilidad),
        parseInt(enlaces),
        parseInt(capacidad),
        parseInt(costo)
    ];

    $.ajax({
        url: '?controller=Home&action=getDataRedes',
        type: 'post',
        success: function(response) {
            let data = JSON.parse(response);
            let resultados = [];
            let suma = 0;

            data.forEach(element => {
                switch (element.CA) {
                    case 'Low':
                        element.CA = 1;
                        break;
                    case 'Medium':
                        element.CA = 2;
                        break;
                    case 'High':
                        element.CA = 3;
                        break;
                }

                switch (element.CO) {
                    case 'Low':
                        element.CO = 1;
                        break;
                    case 'Medium':
                        element.CO = 2;
                        break;
                    case 'High':
                        element.CO = 3;
                        break;
                }

                suma += Math.sqrt(Math.pow(element.RELIABILITY - ej1[0], 2));
                suma += Math.sqrt(Math.pow(element.LINKS - ej1[1], 2));
                suma += Math.sqrt(Math.pow(element.CA - ej1[2], 2));
                suma += Math.sqrt(Math.pow(element.CO - ej1[3], 2));

                resultados.push({
                    valor: suma,
                    CLASS: element.CLASS
                });
                suma = 0;
            });
            resultados.sort(((a, b) => a.valor - b.valor));
            alert('Su clase es: ' + resultados[0].CLASS);
        }
    });
}