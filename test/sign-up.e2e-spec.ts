import { expect, test } from '@playwright/test'

test('sign-up success', async ({ page }) => {
  await page.goto('/signup', { waitUntil: 'networkidle' })

  await page.getByLabel('Nome do estabelecimento').fill('Pizza shop')
  await page.getByLabel('Seu nome').fill('Will')
  await page.getByLabel('Seu telefone').fill('78784848484')
  await page.getByLabel('Seu e-mail').fill('example@teste.com')

  await page.getByRole('button', { name: 'Acessar painel' }).click()

  const toast = await page.getByText('Cadastrado com sucesso')

  await expect(toast).toBeVisible()
})

test('sign-up invalid', async ({ page }) => {
  await page.goto('/signup', { waitUntil: 'networkidle' })

  await page.getByLabel('Nome do estabelecimento').fill('Invalid Name')
  await page.getByLabel('Seu nome').fill('Will')
  await page.getByLabel('Seu telefone').fill('78784848484')
  await page.getByLabel('Seu e-mail').fill('example@teste.com')

  await page.getByRole('button', { name: 'Acessar painel' }).click()

  const toast = await page.getByText('Credenciais inválidas')

  await expect(toast).toBeVisible()

  // await page.waitForTimeout(2000)
})

test('navigate to up login', async ({ page }) => {
  await page.goto('/signup', { waitUntil: 'networkidle' })

  await page.getByRole('link', { name: 'Login' }).click()

  await expect(page.url()).toContain('/signin')
})
