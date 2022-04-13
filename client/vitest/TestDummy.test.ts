import { mount } from '@vue/test-utils'
import TestDummy from '../components/TestDummy/TestDummy.vue'
import { describe, it, expect } from 'vitest'

describe("TestDummy", () => {
  const testDummy = mount(TestDummy)
  
  it('Displays a counter with a number', () => {
    expect(testDummy.text()).toContain('Count: 0')
  })

  it('Has a button which increments the number when clicked', async () => {
    const button = testDummy.get('button')
    expect(button.text()).toContain('Increase')
    expect(button.text()).toContain('by 1')
    
    await button.trigger('click')
    expect(testDummy.text()).toContain('Count: 1')
  })
})