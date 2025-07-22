import {LeadEndPoints} from "@utils/crm/api/lead/EndPoints";
import {expect} from "@playwright/test";

export class LeadGet{
    constructor(request){
        this.request = request;
    }

    async leadGet(leadId) {
        const urlData = new LeadEndPoints();
        const url = urlData.leadGetUrl();

        try {
            const response = await this.request.post(url, {
                data: {
                    lead_id: leadId,
                }
            });

            console.log(`Запрос отправлен: ${url}`);
            console.log(`Статус ответа: ${response.status()}`);

            const responseData = await response.json();
            console.log('Ответ:', responseData);
            expect(responseData).toBeDefined();
            return responseData;
        } catch (error) {
            console.error('Ошибка при отправке POST-запроса:', error.message);
            throw error;
        }
    };
}