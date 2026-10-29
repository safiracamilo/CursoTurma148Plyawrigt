import { test, expect } from '@playwright/test';

//Funcoes ou metodos (testes)
test('Comprar Passagem com sucesso', async ({ page }) => {
  // Abrir o navegador
  await page.goto('https://blazedemo.com/login');

  //await page.locator('select[name="email"]').selectOption('São Paolo');
 await page.locator('#email').fill('safira@email.com');
 await page.locator('#password').fill('safira123');
 await page.locator('.btn-primary').click();
 await page.goto('https://blazedemo.com/login');
  });