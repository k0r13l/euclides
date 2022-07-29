<?php
require_once 'public/header.php';
?>

<div class="row">
    <div class="col-md-12">
        <div class="bodyContainer">
            <div class="card" style="width: 30rem;">
                <div class="card-body">
                    <h5 class="card-title">Ingrese su información</h5>
                    <form name ="adivinarProfesor" action="">
                    <label for="selectEdad">Ingrese su rango de edad</label>
                    <br/>
                    <select class="custom-select" id="selectEdad" name="selectEdad">
                        <option value="1">Edad <= 30</option>
                        <option value="2">Edad > 30 y <= 55</option>
                        <option value="3">Edad > 55</option>
                    </select>
                    <div class="form-group">
                        <label for="selectGenero">Género con el que se identifica</label>
                        <br/>
                        <select class="custom-select" id="selectGenero" name="selectGenero">
                            <option value="1">Femenino</option>
                            <option value="2">Masculino</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="selectAutoEvaluacion">Su autoevaluación</label>
                        <br/>
                        <select class="custom-select" id="selectAutoEvaluacion" name="selectAutoEvaluacion">
                            <option value="1">Principiante</option>
                            <option value="2">Intermedio</option>
                            <option value="3">Avanzado</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="selectCantEnsenado">¿Cuántas veces ha impartido el curso?</label>
                        <br/>
                        <select class="custom-select" id="selectCantEnsenado" name="selectCantEnsenado">
                            <option value="1">Nunca</option>
                            <option value="2">De 1 a 5</option>
                            <option value="3">Más de 5</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="selectDisciplina">Su disciplina</label>
                        <br/>
                        <select class="custom-select" id="selectDisciplina" name="selectDisciplina">
                            <option value="1">Toma de desiciones</option>
                            <option value="2">Diseño de redes</option>
                            <option value="3">Otro</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="selectHabilidadPC">Su habilidad con las computadoras</label>
                        <br/>
                        <select class="custom-select" id="selectHabilidadPC" name="selectHabilidadPC">
                            <option value="1">Baja</option>
                            <option value="2">Promedio</option>
                            <option value="3">Alta</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="selectHabilidadWebTec">Experiencia con tecnologías basadas en la web</label>
                        <br/>
                        <select class="custom-select" id="selectHabilidadWebTec" name="selectHabilidadWebTec">
                            <option value="1">Nunca</option>
                            <option value="2">A veces</option>
                            <option value="3">Seguido</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="selectHabilidadWeb">Experiencia con el uso de páginas web</label>
                        <br/>
                        <select class="custom-select" id="selectHabilidadWeb" name="selectHabilidadWeb">
                            <option value="1">Nunca</option>
                            <option value="2">A veces</option>
                            <option value="3">Seguido</option>
                        </select>
                    </div>
                    <input class="btn btn-primary" value="Aproximar" onclick="calcularProfesor()" type="button">
                </form>    
                </div>
            </div>
        </div>
</div>
<?php
require_once 'public/footer.php';
?>