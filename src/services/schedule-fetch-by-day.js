import { apiConfig } from "./api-config";
import dayjs from "dayjs";
export async function scheduleFetchByDay({ date }) {
    try {
        const response = await fetch(`${apiConfig.baseUrl}/schedules`);

        // Converte a resposta em JSON
        const data = await response.json();

        // Filtra os agendamentos pela data
        const dailySchedules = data.filter((schedule) => {
            const scheduleDate = dayjs(schedule.date).format("YYYY-MM-DD");
            return scheduleDate === date;
        });

        return dailySchedules;
    } catch (error) {
        console.log(error)
        alert("Não foi possível carregar a agenda.")
    }
}