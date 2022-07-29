function buscarPorNombre(item) {
    var idUsuario = 0;
    $.ajax({
        url: '?controller=Home&action=getSesion',
        type: 'post',
        success: function (response) {
            idUsuario = $.parseJSON(response);
        }
    });

    var param = {
        "NOMBRE_P": $("input#buscar").val()
    };

    $.ajax({
        data: param,
        url: '?controller=Home&action=BuscarNombre',
        type: 'post',
        success: function (response) {
            var t = $.parseJSON(response);
            var wrapper = $('.divWrapper');
            $('.divWrapper').empty();
            var fieldHTML = '<span class="text mb-4">' + t.length + ' resultados</span>';
            for (var i = 0; i < t.length; i++) {
                fieldHTML +=
                '<div class="row">' +
                    '<div class="col-md-4">' +
                        '<div class="card mb-4 box-shadow">' +
                            '<img class="card-img-top" data-src="'+ t[i]['IMG'] +'" alt="" style="height: 225px; width: 100%; display: block;" src="'+ t[i]['IMG'] +'" data-holder-rendered="true">' +
                            '<div class="card-body">' +
                                '<p class="card-text">' + t[i]['NOMBRE'] + '</p>' +
                                '<div class="d-flex justify-content-between align-items-center">' +
                                    '<div class="btn-group">' +
                                    '<a class="btn btn-light add-to-cart" onclick="AgregarCarro(' + t[i]['CODIGO'] + ',' + idUsuario + ')" >carrito</a>' +
                                    '<br>' +
                                    '<a class="btn btn-light add-to-cart" onclick="AgregarFav(' + t[i]['CODIGO'] + ',' + idUsuario + ')" >favorito</a>' +
                                    '</div>' +
                                    '<small class="text-muted">$' + t[i]['PRECIO'] + '</small>' +
                                '</div>' +
                            '</div>' +
                        '</div>' +
                    '</div>' +
                '</div>';
            }
            $(wrapper).append(fieldHTML);
        }
    });
}


function eventoPagar(a) {
    var idUsuario = 0;
    var param;
    $.ajax({
        url: '?controller=Home&action=getSesion',
        type: 'post',
        success: function (response) {
            idUsuario = $.parseJSON(response);
        }
    });

    $.ajax({
        url: '?controller=Home&action=Lista_carrito',
        type: 'post',
        success: function (response) {
            var t = $.parseJSON(response);
            for (var i = 0; i < t.length; i++) {
                eventoEliminar(t[i]['CODIGO'], idUsuario);
                console.log("for");
            }
        }
    });
}

function eventoEliminar(codigo, idUsuario) {
    var param = {
        "COD_PROD": codigo,
        "ID_US": idUsuario
    };

    $.ajax({
        data: param,
        url: '?controller=Home&action=eliminarDelCarro',
        type: 'post',
        success: function (response) {
            alert("Producto eliminado");
        }
    });
}

function eventoSumar(name) {
    var precioUnitario;
    var totalPagar;
    var descuento;

    var cant = parseInt($('var#' + name.id).html());
    var precio = parseInt($('var#precio' + name.id).html());
    var total = parseInt($('dd#total').html());

    //suma cant y saca precio unit
    precioUnitario = precio / cant;
    cant++;

    //realiza actualizacion de montos
    total += precioUnitario;
    precio += precioUnitario;
    descuento = total * 0.1;
    totalPagar = total - descuento;

    $("var#" + name.id).html(cant);
    $("var#precio" + name.id).html(precio);
    $("dd#total").html(total);
    $("dd#descuento").html(descuento);
    $("strong#totalPagar").html(totalPagar);
}

function eventoRestar(name) {
    var precioUnitario;
    var totalPagar;
    var descuento;

    var cant = parseInt($('var#' + name.id).html());
    var precio = parseInt($('var#precio' + name.id).html());
    var total = parseInt($('dd#total').html());

    //suma cant y saca precio unit
    precioUnitario = precio / cant;
    if (cant <= 1) {
        alert("Minimo alcanzado")
    } else {
        cant--;
        //realiza actualizacion de montos
        total -= precioUnitario;
        precio -= precioUnitario;
        descuento = total * 0.1;
        totalPagar = total - descuento;

        $("var#" + name.id).html(cant);
        $("var#precio" + name.id).html(precio);
        $("dd#total").html(total);
        $("dd#descuento").html(descuento);
        $("strong#totalPagar").html(totalPagar);

    }
}

function AgregarFav(codigo, idUsuario) {
    var param = {
        "COD_PROD": codigo,
        "ID_US": idUsuario
    };

    $.ajax({
        data: param,
        url: '?controller=Home&action=agregarFav',
        type: 'post',
        success: function (response) {
            alert("Producto añadido a favoritos");
        }
    });
}

function AgregarCarro(codigo, idUsuario) {
    var param = {
        "COD_PROD": codigo,
        "ID_US": idUsuario
    };

    $.ajax({
        data: param,
        url: '?controller=Home&action=agregarCarro',
        type: 'post',
        success: function (response) {
            alert("Producto agregado al carrito");
        }
    });
}

function procesoProductos(item) {
    var idUsuario = 0;
    $.ajax({
        url: '?controller=Home&action=getSesion',
        type: 'post',
        success: function (response) {
            idUsuario = $.parseJSON(response);
        }
    });
    var param = {
        "N_CAT": item.innerHTML
    };
    $.ajax({
        data: param,
        url: '?controller=Home&action=listarProductos',
        type: 'post',
        success: function (response) {
            var t = $.parseJSON(response);
            var wrapper = $('.divWrapper');
            $('.divWrapper').empty();
            var fieldHTML = '<span class="text mb-4">' + t.length + ' resultados</span>';
            for (var i = 0; i < t.length; i++) {
                fieldHTML +=
                '<div class="row">' +
                    '<div class="col-md-4">' +
                        '<div class="card mb-4 box-shadow">' +
                            '<img class="card-img-top" data-src="'+ t[i]['IMG'] +'" alt="" style="height: 225px; width: 100%; display: block;" src="'+ t[i]['IMG'] +'" data-holder-rendered="true">' +
                            '<div class="card-body">' +
                                '<p class="card-text">' + t[i]['NOMBRE'] + '</p>' +
                                '<div class="d-flex justify-content-between align-items-center">' +
                                    '<div class="btn-group">' +
                                    '<a class="btn btn-light add-to-cart" onclick="AgregarCarro(' + t[i]['CODIGO'] + ',' + idUsuario + ')" >carrito</a>' +
                                    '<br>' +
                                    '<a class="btn btn-light add-to-cart" onclick="AgregarFav(' + t[i]['CODIGO'] + ',' + idUsuario + ')" >favorito</a>' +
                                    '</div>' +
                                    '<small class="text-muted">$' + t[i]['PRECIO'] + '</small>' +
                                '</div>' +
                            '</div>' +
                        '</div>' +
                    '</div>' +
                '</div>';
            }
            $(wrapper).append(fieldHTML);
        }
    });
}
/*----------------------------------*/
function ordenar(a) {
    var texto = $('a#aOrdenar').text();
    var param;
    var idUsuario = 0;
    $.ajax({
        url: '?controller=Home&action=getSesion',
        type: 'post',
        success: function (response) {
            idUsuario = $.parseJSON(response);
        }
    });
    if (texto === 'Descendente') {
        $('a#aOrdenar').text('Ascendente');
        param = {
            "orden" : "asc"
        };
    } else {
        $('a#aOrdenar').text('Descendente');
        param = {
            "orden" : "desc"
        };
    }
    $.ajax({
        data: param,
        url: '?controller=Home&action=ordenarProductos',
        type: 'post',
        success: function (response) {
            var t = $.parseJSON(response);

            var temp;
            var wrapper = $('.divWrapper');
            $('.divWrapper').empty();
            var fieldHTML = '<span class="text mb-4">' + t.length + ' resultados</span>';
            for (var i = 0; i < t.length; i++) {
                fieldHTML +=
                '<div class="row">' +
                    '<div class="col-md-4">' +
                        '<div class="card mb-4 box-shadow">' +
                            '<img class="card-img-top" data-src="'+ t[i]['IMG'] +'" alt="" style="height: 225px; width: 100%; display: block;" src="'+ t[i]['IMG'] +'" data-holder-rendered="true">' +
                            '<div class="card-body">' +
                                '<p class="card-text">' + t[i]['NOMBRE'] + '</p>' +
                                '<div class="d-flex justify-content-between align-items-center">' +
                                    '<div class="btn-group">' +
                                    '<a class="btn btn-light add-to-cart" onclick="AgregarCarro(' + t[i]['CODIGO'] + ',' + idUsuario + ')" >carrito</a>' +
                                    '<br>' +
                                    '<a class="btn btn-light add-to-cart" onclick="AgregarFav(' + t[i]['CODIGO'] + ',' + idUsuario + ')" >favorito</a>' +
                                    '</div>' +
                                    '<small class="text-muted">$' + t[i]['PRECIO'] + '</small>' +
                                '</div>' +
                            '</div>' +
                        '</div>' +
                    '</div>' +
                '</div>';
            }
            $(wrapper).append(fieldHTML);
        }
    });
}

function eliminarProducto(a) {
    var param = {
        "idP": $('select#selectProductosE').val()
    };
    $.ajax({
        data: param,
        url: '?controller=Home&action=eliminarProducto',
        type: 'post',
        success: function (response) {
            alert("Producto eliminado");
        }
    });
}

function registrarProducto(a) {
    var param = {
        "nombreProducto": $('input#nombreProducto').val(),
        "precioProducto": $('input#precioProducto').val(),
        "cantidadProducto": $('input#cantidadProducto').val(),
        "descProducto": $('input#descProducto').val(),
        "categoriaProducto": $('select#selectCategorias').val()
    };
    $.ajax({
        data: param,
        url: '?controller=Home&action=insertarProducto',
        type: 'post',
        success: function (response) {
            alert("Producto registrado satisfactoriamente");
        }
    });
}

function mostrarProductoByCat(item) {
    var idUsuario = 0;
    $.ajax({
        url: '?controller=Home&action=getSesion',
        type: 'post',
        success: function (response) {
            idUsuario = $.parseJSON(response);
        }
    });
    var param = {
        "N_CAT": item.innerHTML
    };
    $.ajax({
        data: param,
        url: '?controller=Home&action=listarProductos',
        type: 'post',
        success: function (response) {
            var t = $.parseJSON(response);

            var temp;
            var wrapper = $('.divWrapper');
            var fieldHTML = '<span class="text mb-4">' + t.length + ' resultados</span>';
            for (var i = 0; i < t.length; i++) {
                fieldHTML +=
                '<div class="row">' +
                    '<div class="col-md-4">' +
                        '<div class="card mb-4 box-shadow">' +
                            '<img class="card-img-top" data-src="'+ t[i]['IMG'] +'" alt="" style="height: 225px; width: 100%; display: block;" src="'+ t[i]['IMG'] +'" data-holder-rendered="true">' +
                            '<div class="card-body">' +
                                '<p class="card-text">' + t[i]['NOMBRE'] + '</p>' +
                                '<div class="d-flex justify-content-between align-items-center">' +
                                    '<div class="btn-group">' +
                                    '<a class="btn btn-light add-to-cart" onclick="AgregarCarro(' + t[i]['CODIGO'] + ',' + idUsuario + ')" >carrito</a>' +
                                    '<br>' +
                                    '<a class="btn btn-light add-to-cart" onclick="AgregarFav(' + t[i]['CODIGO'] + ',' + idUsuario + ')" >favorito</a>' +
                                    '</div>' +
                                    '<small class="text-muted">$' + t[i]['PRECIO'] + '</small>' +
                                '</div>' +
                            '</div>' +
                        '</div>' +
                    '</div>' +
                '</div>';
            }
            $(wrapper).append(fieldHTML);

        }
    });
}

/* Se usa para registrar a un usuario, SingInView.php */
function registrarUsuario() {
    var param = {
        "usuario": $('input#usuario').val(),
        "pass": $('input#pass').val(),
        "f_nac": $('input#f_nac').val(),
        "genero": $('select#selectGenero').val(),
        "direccion": $('input#direccion').val()
    };

    $.ajax({
        data: param,
        url: '?controller=Login&action=registrarse',
        type: 'post'
    });
}
