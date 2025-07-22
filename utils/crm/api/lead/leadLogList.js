import {LeadList} from "@utils/crm/api/lead/leadList";

export class LeadLogList {
    constructor(request) {
        this.request = request;
    }

    async getLeadLogs() {
        const leads = new LeadList();
        const getList = await leads.getLeadList();


    }
}