<?php
require_once 'public/header.php';
?>

<div class="row">
    <div class="col-md-12">
        <div class="bodyContainer">
            <div class="card" style="width: 30rem;">
                <div class="card-body">
                    <h5 class="card-title">Ingrese su información</h5>
                    <form name ="adivinarEstiloV2" action="">
                        <div class="form-group">
                            <label for="selectSexo">Sexo</label>
                            <br />
                            <select class="custom-select" id="selectSexo" name="selectSexo">
                                <option value="M">Masculino</option>
                                <option value="F">Femenino</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label for="inputPromedioM">Promedio</label>
                            <br />
                            <input type="text" class="form-control" id="inputPromedioM" placeholder="El último">
                        </div>
                        <div class="form-group">
                            <label for="selectRecinto">Recinto</label>
                            <br />
                            <select class="custom-select" id="selectRecinto" name="selectRecinto">
                                <option value="Turrialba">Turrialba</option>
                                <option value="Paraiso">Paraiso</option>
                            </select>
                        </div>
                        <input class="btn btn-primary" value="CALCULAR" onclick="calcularEstilo2()" type="button">
                    </form>
                </div>
            </div>            
        </div>
    </div>
</div>
<?php
require_once 'public/footer.php';
?>