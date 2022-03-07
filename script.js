$(document).ready(function(){
   $('#btn').bind('click', function(event){
        event.preventDefault();

        var meuCep = $('#cep').mask('00000-000').val();
        var url = 'https://viacep.com.br/ws/'+meuCep+'/json/'; //API cep

       $.ajax({
            url: url,
            type: "GET",
            dataType: "json",

            success:function(data){
                $('#rua').val(data.logradouro);
                $('#bairro').val(data.bairro);
                $('#localidade').val(data.localidade);
                $('#uf').val(data.uf);

            },

            error:function(data){
                if(url !== data.cep){
                    alert('CEP não encontrado!!');
                }
                
            }


       });



   });
});

