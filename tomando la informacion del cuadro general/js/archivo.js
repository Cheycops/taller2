
    var alumnosmatriculados =[
      {rut:"1-9",
      nombre:"Pedro",
      apellido:"Pérez",
      cod_curso:"AE600",
      descripcion:"Algoritmos y estructuras de datos"},
      {rut:"2-7",
      nombre:"Juan",
      apellido:"Jara",
      cod_curso:"BS253",
      descripcion:"Bases de Datos"},
      {rut:"2-7",
      nombre:"Juan",
      apellido:"Jara",
      cod_curso:"AE600",
      descripcion:"Algoritmos y estructuras de datos"},
      {rut:"3-5",
      nombre:"Diego",
      apellido:"Díaz",
      cod_curso:"BS253",
      descripcion:"Bases de Datos"},
      {rut:"4-4",
      nombre:"Maria",
      apellido:"Martinez",
      cod_curso:"BS253",
      descripcion:"Bases de Datos"},
    ]
function alumnomatricula() {
   for (let i = 0; i < alumnosmatriculados.length; i++) {
        console.log ("Alumnos matriculados","---->","rut:",alumnosmatriculados[i].rut,
        "nombre:",alumnosmatriculados[i].nombre,
        "apellido:",alumnosmatriculados[i].apellido,
        "cod_curso:",alumnosmatriculados[i].cod_curso,
        "descripcion:",alumnosmatriculados[i].descripcion);
 }
}
    function alumno() {
      for (let i = 0 ;  i < alumnosmatriculados.length; i++) {
      console.log("Alumnos","---->","rut:",alumnosmatriculados[i].rut,
      "nombre:",alumnosmatriculados[i].nombre,
      "apellido:",alumnosmatriculados[i].apellido);
    }
   }
function matricula() {
   for (let i = 0; i < alumnosmatriculados.length; i++) {
      console.log("matricula","---->","rut:",alumnosmatriculados[i].rut,
      "cod_curso:",alumnosmatriculados[i].cod_curso);
}
} 
function curso(){
   for (let i = 0; i < 2; i++) {
      console.log ("cursos","---->","cod_curso:",alumnosmatriculados[i].cod_curso,
      "descripcion:",alumnosmatriculados[i].descripcion);
}
}
