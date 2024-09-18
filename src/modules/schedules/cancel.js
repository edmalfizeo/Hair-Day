import { scheduleCancel } from "../../services/schedule-cancel";
import { schedulesDay } from "./load";  

const periods = document.querySelectorAll('.period');

// Gera evento de click para cada lista (manhã, tarde e noite)
periods.forEach((period) => {
    // Captura o evento de click na lista.
    period.addEventListener("click", async (event) => {
        if(event.target.classList.contains("cancel-icon")){
            const item = event.target.closest("li");
            
            // Captura o id do agendamento.
            const id = item.dataset.id
            console.log(id)
            
            
            // Verifica se o id foi capturado.
            if(id) {
                // Exibe um alerta de confirmação.
                const isConfirm = confirm("Deseja realmente cancelar o agendamento?");

                // Verifica se o usuário confirmou o cancelamento.
                if(isConfirm) {
                    // Faz a requisição de cancelamento do agendamento.
                    await scheduleCancel(id);
                    // Recarrega a lista de agendamentos.
                    schedulesDay();
                }
            }
        }
        
})
})