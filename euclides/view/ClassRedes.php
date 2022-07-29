<?php
require_once 'public/header.php';
?>
<div class="row">
    <div class="col-md-12">
        <div class="bodyContainer">
            <div class="card" style="width: 30rem;">
                    <div class="card-body">
                        <h5 class="card-title">Ingrese la información de la red</h5>
                        <form name ="adivinarRedes" action="">
                            <div class="form-group">
                                <label for="selectReability">Fiabilidad</label>
                                <br />
                                <select class="custom-select" id="selectReability" name="selectReability">
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <label for="selectLinks">Enlaces</label>
                                <br />
                                <select class="custom-select" id="selectLinks" name="selectLinks">
                                    <option value="7">7</option>
                                    <option value="8">8</option>
                                    <option value="9">9</option>
                                    <option value="10">10</option>
                                    <option value="11">11</option>
                                    <option value="12">12</option>
                                    <option value="13">13</option>
                                    <option value="14">14</option>
                                    <option value="15">15</option>
                                    <option value="16">16</option>
                                    <option value="17">17</option>
                                    <option value="18">18</option>
                                    <option value="19">19</option>
                                    <option value="20">20</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <label for="selectCapacity">Capacidad</label>
                                <br />
                                <select class="custom-select" id="selectCapacity" name="selectCapacity">
                                    <option value="1">Baja</option>
                                    <option value="2">Media</option>
                                    <option value="3">Alta</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <label for="selectCost">Costo</label>
                                <br />
                                <select class="custom-select" id="selectCost" name="selectCost">
                                    <option value="1">Bajo</option>
                                    <option value="2">Medio</option>
                                    <option value="3">Alto</option>
                                </select>
                            </div>
                            <input class="btn btn-primary" value="CALCULAR" onclick="calcularRedes()" type="button">
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<?php
require_once 'public/footer.php';
?>