import { LeadEndPoints } from '@utils/crm/api/lead/EndPoints';

export class LeadSet {
    constructor(request) {
        this.request = request;
    }


    async createLeadRequest(payload) {
        const urlData = new LeadEndPoints();
        const urlSetLead = urlData.leadSetUrl();

        try {
            const response = await this.request.post(urlSetLead, {
                data: {
                    request: payload,
                },
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            console.log(`Запрос отправлен: ${urlSetLead}`);
            console.log(`Статус ответа: ${response.status()}`);

            const responseData = await response.json();
            console.log('Ответ:', responseData);
            return responseData;

        } catch (error) {
            console.error('Ошибка при отправке POST-запроса:', error.message);
            throw error;
        }
    }

}