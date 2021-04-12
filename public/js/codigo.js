async function carregar(){
    $("#container").css('display', 'none')
    
    const data = await $.get('/api/tarefa');

    if(!data) return alert("Oops");

    $("tbody").html(
      data.reduce((str, elem)=>{
        return str + 
        `<tr onclick="editar(${elem.id})">
          <td>${elem.id}</td>
          <td>${elem.titulo || '---'}</td>
          <td>${elem.status ? 'Concluído' : 'Em andamento' }</td>
          <td>${elem.updated_at || '---'}</td>
        </tr>`
      }, "")
    );


    $("#edicao").css('display', 'none');
    $("#tarefas").css('display', 'block');
    $("#container").css('display', 'flex');
}

async function editar(id){
    $("input[name='id']").val(id);
    
    $("#titulo").val("");
    $("#descricao").val("");
    $("#status").val(0);

    if(id != null){
       let {titulo, descricao, status} = await $.get(`/api/tarefa/${id}`);
       $("#titulo").val(titulo);
       $("#descricao").val(descricao);
       $("#status").val(status);
    }

    $(".deletar").css('display', id != null ? 'inline-block' : 'none');

    $("#tarefas").css('display', 'none');
    $("#edicao").css('display', 'flex');
}

function enviar(event){
    let id =  $("#edicao input[name='id']").val();
    let data = $("#edicao *").serialize();
    
    let type = id != "" ? 'put' : 'post';
    let url =  id != "" ? `api/tarefa/${id}` : 'api/tarefa';

    $.ajax({url , type, data}).then(carregar);
}

function deletar(){
    let id =  $("#edicao input[name='id']").val();

    $.ajax({url : `api/tarefa/${id}` , type : 'delete'}).then(carregar);
}

$(document).ready(carregar);