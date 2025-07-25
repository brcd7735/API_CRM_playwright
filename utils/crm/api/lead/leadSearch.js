import { expect } from '@playwright/test';
import { LeadEndPoints } from '@utils/crm/api/lead/EndPoints';
import { LeadList } from '@utils/crm/api/lead/leadList';

export class LeadSearch {
    constructor(request) {
        this.request = request;
    };

    async searchLead() {
        const urlData = new LeadEndPoints();
        const getListLeads = new LeadList(this.request);

        const responseListData = await getListLeads.getLeadList();
        expect(responseListData).toBeDefined();
        expect(responseListData.status_code).toBe(200);
        const { result: getLeadData } = responseListData?.leads;
        if (!getLeadData?.length) {
            throw new Error('Массив result пуст.');
        }
        const randomIndex = Math.floor(Math.random() * getLeadData.length);
        const randomLead = getLeadData[randomIndex];
        const phone = randomLead.phone;
        const email = randomLead.email;


        const urlSearchLead = urlData.leadSearchUrl();
        try {
            const response = await this.request.post(urlSearchLead, {
                data: {
                    email: email,
                    phone: phone
                }
            });
            const responseSearchLead = await response.json();
            expect(responseSearchLead).toBeDefined();
            expect(responseSearchLead.status_code).toBe(200);
            return responseSearchLead;
        } catch (error) {
            console.error('Ошибка при отправке POST-запроса:', error.message);
            throw error;
        }
    };
}