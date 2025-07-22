import {InfoCrmEndPoints} from "@utils/crm/api/lead/EndPoints";

export class MainData{
    constructor(request){
        this.request = request;
    }

    async GetMainDataCrm() {
        const urlData = new InfoCrmEndPoints()
        const url = urlData.mainDataUrl();

        try {
            const response = await this.request.get(url, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            console.log(`Запрос отправлен: ${url}`);
            console.log(`Статус ответа: ${response.status()}`);

            const responseData = await response.json();
            console.log('Ответ:', responseData);

            return responseData;
        } catch (error) {
            console.error('Ошибка при отправке GET-запроса:', error.message);
            throw error;
        }
    }
}