document.getElementById('calculadora').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const edad = parseFloat(document.getElementById("edad").value)
    const sexo = document.getElementById("sexo").value
    const peso = parseFloat(document.getElementById("peso").value)
    const altura = parseFloat(document.getElementById("altura").value)
    let alturam, pesoideal, imc, pesop
  
    alturam = altura / 100
    imc = peso / (alturam * alturam)
  
    if (sexo === "" || isNaN(edad) || isNaN(peso) || isNaN(altura)) {
      alert('Por favor ingresar los valores correctos!')
    } else {  
      if (sexo === 'Hombre') {
        pesoideal = altura - 100 - ((altura - 150) / 4)
        pesop = peso - pesoideal
        
        if(imc<18.5){
            document.getElementById("resultado").innerHTML = 
          "<div class='alert alert-warning' role='alert'>" +
          "<strong> Su peso actual es: <span class='badge text-bg-success'>" + peso + " kg</span></strong><br>" +
          "<strong> Su altura es: <span class='badge text-bg-primary'>" + altura + " cm</span></strong><br>" +
          "<strong> Su IMC es: <span class='badge text-bg-secondary'>" + imc.toFixed(2) + " Tiene bajo peso</span></strong><br>" +
          "<strong> Su peso ideal es: <span class='badge text-bg-info'>" + pesoideal.toFixed(2) +   " kg</span></strong><br>" +
          "<strong> Usted debe perder: <span class='badge text-bg-primary'>" + pesop.toFixed(2) + " kg</span></strong>" 
          "</div>"
        }
        else if(imc>=18.5 && imc<=24.9){
            document.getElementById("resultado").innerHTML = 
          "<div class='alert alert-warning' role='alert'>" +
          "<strong> Su peso actual es: <span class='badge text-bg-success'>" + peso + " kg</span></strong><br>" +
          "<strong> Su altura es: <span class='badge text-bg-primary'>" + altura + " cm</span></strong><br>" +
          "<strong> Su IMC es: <span class='badge text-bg-success'>" + imc.toFixed(2) + " Normal</span></strong><br>" +
          "<strong>Su peso ideal es: <span class='badge text-bg-info'>" + pesoideal.toFixed(2) +  "kg</span></strong><br>" +
          "<strong> Usted debe perder: <span class='badge text-bg-primary'>" + pesop.toFixed(2) + " kg</span></strong>" 
          "</div>"
          }
          else if(imc>=25 && imc<=29.9){
            document.getElementById("resultado").innerHTML = 
          "<div class='alert alert-warning' role='alert'>" +
          "<strong> Su peso actual es: <span class='badge text-bg-success'>" + peso + " kg</span></strong><br>" +
          "<strong> Su altura es: <span class='badge text-bg-primary'>" + altura + " cm</span></strong><br>" +
          "<strong> Su IMC es: <span class='badge text-bg-danger'>" + imc.toFixed(2) + " Sobrepeso</span></strong><br>" +
          "<strong> Su peso ideal es: <span class='badge text-bg-info'>" + pesoideal.toFixed(2) + " kg</span></strong><br>" +
          "<strong>Usted debe perder: <span class='badge text-bg-primary'>" + pesop.toFixed(2) + " kg</span></strong>" 
          "</div>"
          }
         else if(imc>=30 && imc<=34.9){
            document.getElementById("resultado").innerHTML = 
            "<div class='alert alert-warning' role='alert'>" +
            "<strong> Su peso actual es: <span class='badge text-bg-success'>" + peso + " kg</span></strong><br>" +
            "<strong> Su altura es: <span class='badge text-bg-primary'>" + altura + " cm</span></strong><br>" +
            "<strong> Su IMC es: <span class='badge text-bg-danger'>" + imc.toFixed(2) + " Obesidad I</span></strong><br>" +
            "<strong> Su peso ideal es: <span class='badge text-bg-info'>" + pesoideal.toFixed(2) + " kg</span></strong><br>" +
            "<strong> Usted debe perder: <span class='badge text-bg-primary'>" + pesop.toFixed(2) + " kg</span></strong>" 
            "</div>"
         }
         else if(imc>=35 && imc<=39.9){
            document.getElementById("resultado").innerHTML = 
            "<div class='alert alert-warning' role='alert'>" +
            "<strong> Su peso actual es: <span class='badge text-bg-success'>" + peso + " kg</span></strong><br>" +
            "<strong> Su altura es: <span class='badge text-bg-primary'>" + altura + " cm</span></strong><br>" +
            "<strong>Su IMC es: <span class='badge text-bg-danger'>" + imc.toFixed(2) + " Obesidad II</span></strong><br>" +
            "<strong> Su peso ideal es: <span class='badge text-bg-info'>" + pesoideal.toFixed(2) + " kg</span></strong><br>" +
            "<strong>Usted debe perder: <span class='badge text-bg-primary'>" + pesop.toFixed(2) + " kg</span></strong>" 
            "</div>"
         }
         else if(imc>=40 && imc<=49.9){
            document.getElementById("resultado").innerHTML = 
            "<div class='alert alert-warning' role='alert'>" +
            "<strong> Su peso actual es: <span class='badge text-bg-success'>" + peso + " kg</span></strong><br>" +
            "<strong>Su altura es: <span class='badge text-bg-primary'>" + altura + " cm</span></strong><br>" +
            "<strong> Su IMC es: <span class='badge text-bg-danger'>" + imc.toFixed(2) + " Obesidad III</span></strong><br>" +
            "<strong Su peso ideal es: <span class='badge text-bg-info'>" + pesoideal.toFixed(2) + " kg</span></strong><br>" +
            "<strong> Usted debe perder: <span class='badge text-bg-primary'>" + pesop.toFixed(2) + " kg</span></strong>" 
            "</div>"
         }
         else if(imc>=50){
            document.getElementById("resultado").innerHTML = 
          "<div class='alert alert-warning' role='alert'>" +
          "<strong>Su peso actual es: <span class='badge text-bg-success'>" + peso + " kg</span></strong><br>" +
          "<strong> Su altura es: <span class='badge text-bg-primary'>" + altura + " cm</span></strong><br>" +
          "<strong> Su IMC es: <span class='badge text-bg-danger'>" + imc.toFixed(2) + " Obesidad IV</span></strong><br>" +
          "<strong> Su peso ideal es: <span class='badge text-bg-info'>" + pesoideal.toFixed(2) + " kg</span></strong><br>" +
          "<strong> Usted debe perder: <span class='badge text-bg-primary'>" + pesop.toFixed(2) + " kg</span></strong>" 
          "</div>"
         }
        
      } else if (sexo === 'Mujer') {
        pesoideal = altura - 100 - ((altura - 150) / 2)
        pesop = peso - pesoideal
  
        if(imc<18.5){
          document.getElementById("resultado").innerHTML = 
        "<div class='alert alert-warning' role='alert'>" +
        "<strong> Su peso actual es: <span class='badge text-bg-success'>" + peso + " kg</span></strong><br>" +
        "<strong> Su altura es: <span class='badge text-bg-primary'>" + altura + " cm</span></strong><br>" +
        "<strong> Su IMC es: <span class='badge text-bg-primary'>" + imc.toFixed(2) + " Tiene bajo peso</span></strong><br>" +
        "<strong> Su peso ideal es: <span class='badge text-bg-info'>" + pesoideal.toFixed(2) +   " kg</span></strong><br>" +
        "<strong> Usted debe perder: <span class='badge text-bg-primary'>" + pesop.toFixed(2) + " kg</span></strong>" 
        "</div>"
      }
      else if(imc>=18.5 && imc<=24.9){
          document.getElementById("resultado").innerHTML = 
        "<div class='alert alert-warning' role='alert'>" +
        "<strong> Su peso actual es: <span class='badge text-bg-success'>" + peso + " kg</span></strong><br>" +
        "<strong> Su altura es: <span class='badge text-bg-primary'>" + altura + " cm</span></strong><br>" +
        "<strong> Su IMC es: <span class='badge text-bg-primary'>" + imc.toFixed(2) + " Normal</span></strong><br>" +
        "<strong> Su peso ideal es: <span class='badge text-bg-info'>" + pesoideal.toFixed(2) +  "kg</span></strong><br>" +
        "<strong> Usted debe perder: <span class='badge text-bg-primary'>" + pesop.toFixed(2) + " kg</span></strong>" 
        "</div>"
        }
        else if(imc>=25 && imc<=29.9){
          document.getElementById("resultado").innerHTML = 
        "<div class='alert alert-warning' role='alert'>" +
        "<strong> Su peso actual es: <span class='badge text-bg-success'>" + peso + " kg</span></strong><br>" +
        "<strong>Su altura es: <span class='badge text-bg-primary'>" + altura + " cm</span></strong><br>" +
        "<strong> Su IMC es: <span class='badge text-bg-danger'>" + imc.toFixed(2) + " Sobrepeso</span></strong><br>" +
        "<strong> Su peso ideal es: <span class='badge text-bg-info'>" + pesoideal.toFixed(2) + " kg</span></strong><br>" +
        "<strong> Usted debe perder: <span class='badge text-bg-primary'>" + pesop.toFixed(2) + " kg</span></strong>" 
        "</div>"
        }
       else if(imc>=30 && imc<=34.9){
          document.getElementById("resultado").innerHTML = 
          "<div class='alert alert-warning' role='alert'>" +
          "<strong> Su peso actual es: <span class='badge text-bg-success'>" + peso + " kg</span></strong><br>" +
          "<strong> Su altura es: <span class='badge text-bg-primary'>" + altura + " cm</span></strong><br>" +
          "<strong> Su IMC es: <span class='badge text-bg-danger'>" + imc.toFixed(2) + " Obesidad I</span></strong><br>" +
          "<strong> Su peso ideal es: <span class='badge text-bg-info'>" + pesoideal.toFixed(2) + " kg</span></strong><br>" +
          "<strong>Usted debe perder: <span class='badge text-bg-primary'>" + pesop.toFixed(2) + " kg</span></strong>" 
          "</div>"
       }
       else if(imc>=35 && imc<=39.9){
          document.getElementById("resultado").innerHTML = 
          "<div class='alert alert-warning' role='alert'>" +
          "<strong> Su peso actual es: <span class='badge text-bg-success'>" + peso + " kg</span></strong><br>" +
          "<strong> Su altura es: <span class='badge text-bg-primary'>" + altura + " cm</span></strong><br>" +
          "<strong> Su IMC es: <span class='badge text-bg-danger'>" + imc.toFixed(2) + " Obesidad II</span></strong><br>" +
          "<strong>Su peso ideal es: <span class='badge text-bg-info'>" + pesoideal.toFixed(2) + " kg</span></strong><br>" +
          "<strong> Usted debe perder: <span class='badge text-bg-primary'>" + pesop.toFixed(2) + " kg</span></strong>" 
          "</div>"
       }
       else if(imc>=40 && imc<=49.9){
          document.getElementById("resultado").innerHTML = 
          "<div class='alert alert-warning' role='alert'>" +
          "<strong> Su peso actual es: <span class='badge text-bg-success'>" + peso + " kg</span></strong><br>" +
          "<strong>Su altura es: <span class='badge text-bg-primary'>" + altura + " cm</span></strong><br>" +
          "<strong> Su IMC es: <span class='badge text-bg-danger'>" + imc.toFixed(2) + " Obesidad III</span></strong><br>" +
          "<strong> Su peso ideal es: <span class='badge text-bg-info'>" + pesoideal.toFixed(2) + " kg</span></strong><br>" +
          "<strong> Usted debe perder: <span class='badge text-bg-primary'>" + pesop.toFixed(2) + " kg</span></strong>" 
          "</div>"
       }
       else if(imc>=50){
          document.getElementById("resultado").innerHTML = 
        "<div class='alert alert-warning' role='alert'>" +
        "<strong> Su peso actual es: <span class='badge text-bg-success'>" + peso + " kg</span></strong><br>" +
        "<strong> Su altura es: <span class='badge text-bg-primary'>" + altura + " cm</span></strong><br>" +
        "<strong> Su IMC es: <span class='badge text-bg-danger'>" + imc.toFixed(2) + " Obesidad IV</span></strong><br>" +
        "<strong> Su peso ideal es: <span class='badge text-bg-info'>" + pesoideal.toFixed(2) + " kg</span></strong><br>" +
        "<strong> Usted debe perder: <span class='badge text-bg-primary'>" + pesop.toFixed(2) + " kg</span></strong>" 
        "</div>"
       }
      
      } else {
        alert('Sexo no reconocido.')
      }
    }
  })
