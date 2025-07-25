import { expect } from '@playwright/test';
import { LeadEndPoints } from '@utils/crm/api/lead/EndPoints';
import { LeadSet } from '@utils/crm/api/lead/leadSet';
import { randomEmployee } from '@utils/base/dataGenerator';
import { DealGetById } from '@utils/crm/api/deal/dealGetById';
import { generateLeadCreatePayload } from '@utils/base/leadDataGenerator';

export class LeadStart {
    constructor(request) {
        this.request = request;
    }

    async leadInWork() {
        const urlData = new LeadEndPoints();
        const createLead = new LeadSet(this.request);
        const getDeal = new DealGetById(this.request);

        const payload = generateLeadCreatePayload();
        const responseLeadSet = await createLead.createLeadRequest(payload);
        expect(responseLeadSet).toBeDefined();
        expect(responseLeadSet.status_code).toBe(200);
        const LeadId = responseLeadSet?.id;
        const urlStartLead = urlData.leadStartUrl();
        try {
            const response = await this.request.post(urlStartLead, {
                data: {
                    lead_id: LeadId,
                    user_id: 9134,
                    employee_id: randomEmployee()
                }
            });
            const responseData = await response.json();
            expect(responseData).toBeDefined();
            expect(responseData.status_code).toBe(200);
            const dealId = responseData.result.deal_id;
            const checkCreatedDeal = await getDeal.getDealById(dealId);
            expect(checkCreatedDeal).toBeDefined();
            expect(checkCreatedDeal.status_code).toBe(200);
            return checkCreatedDeal;
        } catch (error) {
            console.error('Ошибка при отправке POST-запроса:', error.message);
            throw error;
        }
    }
}