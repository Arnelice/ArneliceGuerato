function validarCPF( cpf ){
    var vcpf = cpf.value;
    var filtro = /^\d{3}.\d{3}.\d{3}-\d{2}$/i;
    
    if(!filtro.test(vcpf))
    {
        
        return false;
    }
   
    vcpf = remove(vcpf, ".");
    vcpf = remove(vcpf, "-");
    
    if(vcpf.length != 11 || vcpf == "00000000000" || vcpf == "11111111111" ||
        vcpf == "22222222222" || vcpf == "33333333333" || vcpf == "44444444444" ||
        vcpf == "55555555555" || vcpf == "66666666666" || vcpf == "77777777777" ||
        vcpf == "88888888888" || vcpf == "99999999999")
    {
        
        return false;
   }

    soma = 0;
    for(i = 0; i < 9; i++)
    {
        soma += parseInt(vcpf.charAt(i)) * (10 - i);
    }
    
    resto = 11 - (soma % 11);
    if(resto == 10 || resto == 11)
    {
        resto = 0;
    }
        
    soma = 0;
    for(i = 0; i < 10; i ++)
    {
        soma += parseInt(vcpf.charAt(i)) * (11 - i);
    }
    resto = 11 - (soma % 11);
    if(resto == 10 || resto == 11)
    {
        resto = 0;
    }
    
    if(resto != parseInt(vcpf.charAt(10))){
        
    }
    
    return true;
 }
 
function remove(str, sub) {
    i = str.indexOf(sub);
    r = "";
    if (i == -1) return str;
    {
        r += str.substring(0,i) + remove(str.substring(i + sub.length), sub);
    }
    
    return r;
}

function mascara(o,f){
    v_obj=o
    v_fun=f
    setTimeout("execmascara()",1)
}

function execmascara(){
    v_obj.value=v_fun(v_obj.value)
}

function cpf_mask(v){
    v=v.replace(/\D/g,"")                 
    v=v.replace(/(\d{3})(\d)/,"$1.$2")    
    v=v.replace(/(\d{3})(\d)/,"$1.$2")    
    v=v.replace(/(\d{3})(\d)/,"$1-$2")   
    return v
}

function validarRG( RG ){
    var vrg = rg.value;
    var filtro = /^\d{2}.\d{3}.\d{3}-\d{1}$/i;

    if(!filtro.test(vrg))
    {
        
        return false;
    }

    vrg = remove(vrg, ".");
    vrg = remove(vrg, "-");

    if(vrg.length != 9 || vrg == "000000000" || vrg == "111111111" ||
        vrg == "222222222" || vrg == "333333333" || vrg == "444444444" ||
        vrg == "555555555" || vrg == "666666666" || vrg == "777777777" ||
        vrg == "888888888" || vrg == "999999999")

    {
        
        return false;
   }

    soma = 0;
    for(i = 0; i < 8; i++)
    {
        soma += parseInt(vrg.charAt(i)) * (9 - i);    
    }

    resto = 9 - (soma % 9);
    if(resto == 8 || resto == 9)
    {
        resto = 0;
    }
        
    soma = 0;
    for(i = 0; i < 9; i ++)
    {
        soma += parseInt(vrg.charAt(i)) * (9 - i);
    }
    resto = 9 - (soma % 9);
    if(resto == 8 || resto == 9)
    {
        resto = 0;
    }
    
    if(resto != parseInt(vrg.charAt(8))){
        
    }
    
    return true;
 }

 function remove(str, sub) {
    i = str.indexOf(sub);
    r = "";
    if (i == -1) return str;
    {
        r += str.substring(0,i) + remove(str.substring(i + sub.length), sub);
    }
    
    return r;
}

function mascara(o,f){
    v_obj=o
    v_fun=f
    setTimeout("execmascara()",1)
}

function execmascara(){
    v_obj.value=v_fun(v_obj.value)
}

function rg_mask(v){
    v=v.replace(/\D/g,"");                 
    v=v.replace(/^(\d{2})(\d)/g,"$1.$2");  
    v=v.replace(/(\d{3})(\d)/g,"$1.$2");   
    v=v.replace(/(\d{3})(\d)/g,"$1-$2");   
    return v
}

//Validar só numero
function somenteNumeros(num) {
    var er = /[^0-9.]/;
    er.lastIndex = 0;
    var campo = num;
    if (er.test(campo.value)) {
      campo.value = "";
    }
}

