import dayjs from "dayjs";

const form = document.querySelector("form");
const clientName = document.getElementById("client");
const selectedDate = document.getElementById("date")

// Date atual para o input
const inputToday = dayjs(new Date()).format("YYYY-MM-DD");

// Carrega a data atual e a data mínima no input.
selectedDate.value = inputToday;
selectedDate.min = inputToday;

form.onsubmit = (event) => {
    // Previne o comportamento padrão do formulário
    event.preventDefault();

   try {
    // Recuperando o nome do cliente.
    const name = clientName.value.trim();

    if(!name) {
        return alert("Por favor, preencha o campo nome.")
    }

    // Recuperando a data e horário selecionado.
    const hourSelected = document.querySelector('.hour-selected');

    if(!hourSelected) {
        return alert("Por favor, selecione um horário.")
    }

    // Recuperar somente a hora do horário selecionado.
    const [hour] = hourSelected.innerText.split(':');
    
    // Insere a hora na data
    const when = dayjs(selectedDate.value).add(hour, 'hour')
    

    // Gera um ID
    const id = new Date().getTime();

    console.log(
        {
            id,
            name,
            when: when.format('DD/MM/YYYY HH:mm')
        }
    )
   }catch(error) {
    alert("Não foi possível realizar o agendamento.")
    console.log(error)
   }
}