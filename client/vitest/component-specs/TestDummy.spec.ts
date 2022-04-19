import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import TestDummy from 'src/components/TestDummy/TestDummy.vue'

describe("The Test Dummy component", async () => {
  const testDummy = mount(TestDummy)
  const button = await testDummy.get('button')
  const label = await testDummy.get('h1')

  it("Displays a counter", () => {
    expect(label).toBeTruthy()
    expect(label.text()).toContain('Count = 0')
  })

  it("Has a button to increment the count", () => {
    expect(button).toBeTruthy()
    expect(button.text()).toContain('Add 1')
  })

  it("Increments the count by 1 when the button is pressed", async () => {
    await button.trigger('click')
    expect(label.text()).toContain('Count = 1')
  })
})