import { expect, test } from '@playwright/test'

test('mudance name store', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' })

  await page.getByRole('button', { name: 'Pizza Shop' }).click()
  await page.getByRole('menuitem', { name: 'Perfil da loja' }).click()
  await page.getByLabel('Nome').fill('Will Pizza')
  await page.getByLabel('Descrição').fill('Testing')

  await page.getByRole('button', { name: 'Salvar' }).click()

  await page.waitForLoadState('networkidle')

  const toast = await page.getByText('Perfil atualizado com sucesso')

  expect(toast).toBeVisible()

  await page.getByRole('button', { name: 'Close' }).click()

  await page.waitForTimeout(1000)
  expect(page.getByRole('button', { name: 'Will Pizza' })).toBeVisible()
})
