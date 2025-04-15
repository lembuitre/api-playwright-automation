import { test, expect } from '@playwright/test';

test('API Test Assurity', async({request}) => {
    
    const response = await request.get('https://api.tmsandbox.co.nz/v1/Categories/6327/Details.json?catalogue=false');

    expect(response.status()).toBe(200);
    
    const text = await response.text();
    
    //To check if Name = Carbon credits
    expect(text).toContain('"Name":"Carbon credits"');
    
    //To check if CanRelist = true
    expect(text).toContain('"CanRelist":true')

    //The Promotions element with Name = "Gallery" has a Description that contains the text "Good position in category
    
     //To check if the 'Promotions' array exists and has contents
    const regex = /"Promotions"\s*:\s*\[([\s\S]*?)\]/;
    const promotionsCheck = text.match(regex);
    expect(promotionsCheck).not.toBeNull();

    //To check if Name = "Gallery" has a Description that contains the text "Good position in category
    expect(text).toContain('"Name":"Gallery"');
    expect(text).toContain('"Description":"Good position in category"');

    console.log(await response.json());

});