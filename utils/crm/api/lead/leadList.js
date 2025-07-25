import { LeadEndPoints } from '@utils/crm/api/lead/EndPoints';

export class LeadList {
    constructor(request) {
        this.request = request;
    }

    async getLeadList() {
        const urlData = new LeadEndPoints();
        const urlLeadList = urlData.leadListUrl();
        try {
            const response = await this.request.post(urlLeadList, {
                data: {
                    keyword: '',
                    limit: 0,
                    offset: 0,
                    date_start: '2025-01-01',
                    date_end: '2029-01-01',
                    date_type: 'created',
                    'stage_id': 3483
                }
            });

            console.log(`Запрос отправлен: ${urlLeadList}`);
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