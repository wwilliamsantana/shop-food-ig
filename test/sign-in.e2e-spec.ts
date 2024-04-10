import { expect, test } from '@playwright/test'

test('sign-in success', async ({ page }) => {
  await page.goto('/signin', { waitUntil: 'networkidle' })

  await page.getByLabel('Seu e-mail').fill('john@example.com')

  await page.getByRole('button', { name: 'Acessar painel' }).click()

  const toast = page.getByText(
    'Enviamos um link de autenticação para seu email',
  )

  expect(toast).toBeVisible()

  await page.waitForTimeout(2000)
})

test('sign-in invalid', async ({ page }) => {
  await page.goto('/signin', { waitUntil: 'networkidle' })

  await page.getByLabel('Seu e-mail').fill('will@example.com')

  await page.getByRole('button', { name: 'Acessar painel' }).click()

  const toast = await page.getByText('Tente novamente')

  expect(toast).toBeVisible()

  await page.waitForTimeout(2000)
})

test('navigate to up new establishment', async ({ page }) => {
  await page.goto('/signin', { waitUntil: 'networkidle' })

  await page.getByRole('link', { name: 'Novo estabelecimento' }).click()

  expect(page.url()).toContain('/signup')
})
