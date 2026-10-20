import { afterEach, test } from 'node:test'
import assert from 'node:assert/strict'
import { submitContact } from '../src/contact.js'

const originalFetch = globalThis.fetch
afterEach(() => { globalThis.fetch = originalFetch })
const form = { name: ' Sam ', email: ' sam@example.com ', phone: ' 555-0100 ', message: ' Hello ', _honey: '' }

test('submits website source, phone and honeypot without credentials or arbitrary recipients', async () => {
  globalThis.fetch = async (url, options) => {
    assert.match(url, /\/functions\/v1\/send-marketing-contact$/)
    assert.deepEqual(JSON.parse(options.body), {
      source: 'keytrain-website', name: 'Sam', email: 'sam@example.com',
      phone: '555-0100', message: 'Hello', website: '',
    })
    assert.equal(options.headers.Authorization, undefined)
    return Response.json({ ok: true })
  }
  await submitContact(form)
})

for (const body of [{}, { ok: false }, { success: true }, null]) {
  test(`rejects unconfirmed success: ${JSON.stringify(body)}`, async () => {
    globalThis.fetch = async () => Response.json(body)
    await assert.rejects(submitContact(form), /Could not send/)
  })
}

test('rejects malformed responses', async () => {
  globalThis.fetch = async () => new Response('<html>unexpected page</html>')
  await assert.rejects(submitContact(form), /Could not send/)
})

test('reports rate limits instead of claiming success', async () => {
  globalThis.fetch = async () => Response.json({ error: 'Too many messages. Please wait.' }, { status: 429 })
  await assert.rejects(submitContact(form), /Too many messages/)
})

test('rejects network failures', async () => {
  globalThis.fetch = async () => { throw new Error('Network unavailable') }
  await assert.rejects(submitContact(form), /Network unavailable/)
})
