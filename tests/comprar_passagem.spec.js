import { test, expect } from '@playwright/test';

//Funcoes ou metodos (testes)
test('Comprar Passagem com sucesso', async ({ page }) => {
  // Abrir o navegador
  await page.goto('https://blazedemo.com');

  await page.locator('select[name="fromPort"]').selectOption('São Paolo');
  await page.locator('select[name="toPort"]').selectOption('London');
  await page.locator('.btn-primary').click();

  // transição de página
  // verificar o endereço da pagina e texto âncora
  await expect(page).toHaveURL('https://blazedemo.com/reserve.php');
  await expect(page.locator('h3')).toContainText('Flights from São Paolo to London:');

  // selecionar o botao com base nas informações
  await page.getByRole('row', { name: 'Choose this flight \t9696\tAer Lingus\t5:27 AM\t8:22 PM\t$200.98' }).getByRole('button', { name: 'Choose This Flight' }).click();

  // transição de página
  await expect(page).toHaveURL(/purchase\.php/);
  await expect(page.locator('h2')).toHaveText('Your flight from TLV to SFO has been reserved.');

  // preencher primeiro nome
  await page.locator('#inputName').fill('Safira');
  await page.locator('#cardType').selectOption('amex');
  await page.locator('#rememberMe').check();
  await page.locator('.btn-primary').click();

  // transição de pagina
  await expect(page).toHaveURL(/confirmation\.php/);
  await expect(page.locator('h1')).toHaveText('Thank you for your purchase today!');

  // verificar o preço da passagem
  await expect(page.getByRole('row', { name: '555 USD' })).toBeVisible();
});