import { apiConfig } from "./api-config";

export async function scheduleNew({id, name, when}) {
    try {
        await fetch(`${apiConfig.baseUrl}/schedules`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                id,
                name,
                when,
            }),
        })

        alert('Consulta agendada com sucesso!');
    } catch(error) {
        console.error(error);
        alert('Erro ao agendar consulta');
    }

}