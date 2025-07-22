import {DealEndPoints} from "@utils/crm/api/lead/EndPoints";
import {expect} from "@playwright/test";

export class DealGetList {
    constructor(request) {
        this.request = request;
    }

    async getDealList() {
        const urlData = new DealEndPoints();
        const urlDealList = urlData.getlistDeal();
        try {
            const response = await this.request.post(urlDealList, {
                data: {
                    request: {
                        keyword: '',
                        date_start: '2025-01-01',
                        date_end: '2029-01-01',
                        date_type: 'created'
                    }
                }
            });
            const responseDealList = await response.json();
            expect(responseDealList).toBeDefined();
            expect(responseDealList.status_code).toBe(200);
            return responseDealList;
        } catch (error) {
            console.error('Ошибка при отправке POST-запроса:', error.message);
            throw error;
        }
    }
}
