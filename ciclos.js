function execute(){
    v1=document.f_ciclos.v1.value
    v2=document.f_ciclos.v2.value
    if (v1.length==0){
        alert("Indique un primer valor")
        document.f_ciclos.v1.style.background="red"
    }else{
        if (v1<1 || v1>10){
            alert("el primer numero debe estar entre 1 y 10")
            document.f_ciclos.v1.style.background="red"
            
        }else{
            valor1= parseInt(v1)
            document.f_ciclos.v1.style.background="blue"
            
            if (v2.length==0){
                alert("Indique un segundo valor")
                document.f_ciclos.v2.style.background="red"
                
            }else{
                if (v2<1 || v2>5){
                    alert("el segundo numero debe estar entre 1 y 5")
                    document.f_ciclos.v2.style.background="red"
                    
                }else{
                    valor2= parseInt(v2)
                    document.f_ciclos.v2.style.background="blue"
                    
                }
            }
        }
    }
    potencia=valor1**valor2
    ctrl =1
    procedimiento = ""
    while (ctrl<=valor2){
        if (ctrl==valor2){
        procedimiento = valor1 + procedimiento}
        else{
        procedimiento = procedimiento+"*"+valor1
        }
        ctrl++  
    }
    document.f_ciclos.resultado.value=potencia  
    document.f_ciclos.Mostrarprocedimiento.value=procedimiento

}
