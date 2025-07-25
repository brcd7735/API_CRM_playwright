import { DealEndPoints } from '@utils/crm/api/lead/EndPoints';
import { DealGetList } from '@utils/crm/api/deal/dealGetList';
import { expect } from '@playwright/test';

export class DealGetById {
    constructor(request) {
        this.request = request;
    }

    async getDealById(dealId = null) {
        const urlData = new DealEndPoints();
        const urlGetDealById = urlData.getDealById();
        const getDealList = new DealGetList(this.request);

        try {
            const response = await getDealList.getDealList();
            expect(response).toBeDefined();
            expect(response.status_code).toBe(200);
            let id;
            if (dealId !== null) {
                id = dealId;
                console.log(`Используется переданный dealId: ${id}`);
            } else {
                const getDealId = response?.all_ids;
                const randomIndex = Math.floor(Math.random() * getDealId.length);
                id = getDealId[randomIndex];
            }
            const dealById = await this.request.post(urlGetDealById, {
                data: {
                    deal_id: id,
                }
            });
            const responseDealById = await dealById.json();
            expect(responseDealById).toBeDefined();
            expect(responseDealById.status_code).toBe(200);
            return responseDealById;
        } catch (error) {
            console.error('Ошибка при отправке POST-запроса:', error.message);
            throw error;
        }
    }
}