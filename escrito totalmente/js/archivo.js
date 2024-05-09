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
var alumno =[
      {rut:"1-9",
      nombre:"Pedro",
      apellido:"Pérez",
      },
      {rut:"2-7",
      nombre:"Juan",
      apellido:"Jara",
      },
      {rut:"3-5",
      nombre:"Diego",
      apellido:"Díaz",
      },
      {rut:"4-4",
      nombre:"Maria",
      apellido:"Martinez",
   }
    ]

var matricula =[
      {rut:"1-9",
      cod_curso:"AE600"
      },
      {rut:"2-7",
      cod_curso:"BS253"
      },
      {rut:"2-7",
      cod_curso:"AE600"},
      {rut:"3-5",
      cod_curso:"BS253"},
      {rut:"4-4",
      cod_curso:"BS253"},
    ]
var curso =[
      {cod_curso:"AE600",
      descripcion:"Algoritmos y estructuras de datos"},
      {cod_curso:"BS253",
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

   let html = `<table class="tabla">
        <tr><th>RUT</th><th>NOMBRE</th><th>APELLIDO</th><th>COD.CURSO</th><th>DESCRIPCION</th></tr>
        <tr><td>${alumnosmatriculados[0].rut}</td><td>${alumnosmatriculados[0].nombre}</td><td>${alumnosmatriculados[0].apellido}</td><td>${alumnosmatriculados[0].cod_curso}</td><td>${alumnosmatriculados[0].descripcion}</td></tr>
        <tr><td>${alumnosmatriculados[1].rut}</td><td>${alumnosmatriculados[1].nombre}</td><td>${alumnosmatriculados[1].apellido}</td><td>${alumnosmatriculados[1].cod_curso}</td><td>${alumnosmatriculados[1].descripcion}</td></tr>
        <tr><td>${alumnosmatriculados[2].rut}</td><td>${alumnosmatriculados[2].nombre}</td><td>${alumnosmatriculados[2].apellido}</td><td>${alumnosmatriculados[2].cod_curso}</td><td>${alumnosmatriculados[2].descripcion}</td></tr>
        <tr><td>${alumnosmatriculados[3].rut}</td><td>${alumnosmatriculados[3].nombre}</td><td>${alumnosmatriculados[3].apellido}</td><td>${alumnosmatriculados[3].cod_curso}</td><td>${alumnosmatriculados[3].descripcion}</td></tr>
        <tr><td>${alumnosmatriculados[4].rut}</td><td>${alumnosmatriculados[4].nombre}</td><td>${alumnosmatriculados[4].apellido}</td><td>${alumnosmatriculados[4].cod_curso}</td><td>${alumnosmatriculados[4].descripcion}</td></tr>
      </table>`
  document.getElementById("charContent").innerHTML = html

}
    function Alumnos() {
      for (let i = 0 ;  i < alumno.length; i++) {
      console.log("Alumnos","---->","rut:",alumno[i].rut,
      "nombre:",alumno[i].nombre,
      "apellido:",alumno[i].apellido);
    }
    
    let html = `
      <table class="tabla">
        <tr><th>RUT</th><th>NOMBRE</th><th>APELLIDO</th></tr>
        <tr><td>${alumno[0].rut}</td><td>${alumno[0].nombre}</td><td>${alumno[0].apellido}</td></tr>
        <tr><td>${alumno[1].rut}</td><td>${alumno[1].nombre}</td><td>${alumno[1].apellido}</td></tr>
        <tr><td>${alumno[2].rut}</td><td>${alumno[2].nombre}</td><td>${alumno[2].apellido}</td></tr>
        <tr><td>${alumno[3].rut}</td><td>${alumno[3].nombre}</td><td>${alumno[3].apellido}</td></tr>
      </table>`
  document.getElementById("charContent").innerHTML = html 
   }
function matriculados() {
   for (let i = 0; i < matricula.length; i++) {
      console.log("matricula","---->","rut:",matricula[i].rut,
      "cod_curso:",matricula[i].cod_curso);
}
   let html = `
      <table class="tabla">
         <tr><th>RUT</th><th>COD.CURSO</th></tr>
         <tr><td>${matricula[0].rut}</td><td>${matricula[0].cod_curso}</td></tr>
         <tr><td>${matricula[1].rut}</td><td>${matricula[1].cod_curso}</td></tr>
         <tr><td>${matricula[2].rut}</td><td>${matricula[2].cod_curso}</td></tr>
         <tr><td>${matricula[3].rut}</td><td>${matricula[3].cod_curso}</td></tr>
         <tr><td>${matricula[4].rut}</td><td>${matricula[4].cod_curso}</td></tr>
      </table>`
document.getElementById("charContent").innerHTML = html
} 
function cursos(){
   for (let i = 0; i < curso.length; i++) {
      console.log ("cursos","---->","cod_curso:",curso[i].cod_curso,
      "descripcion:",curso[i].descripcion);
   }
   let html = `
     <table class="tabla">
       <tr><th>COD.CURSO</th><th>DESCRIPCION</th></tr>
       <tr><td>${curso[0].cod_curso}</td><td>${curso[0].descripcion}</td></tr>
       <tr><td>${curso[1].cod_curso}</td><td>${curso[1].descripcion}</td></tr>
      </table>`
 document.getElementById("charContent").innerHTML = html
}
