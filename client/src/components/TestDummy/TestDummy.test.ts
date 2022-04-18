import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import TestDummy from './TestDummy.vue'

describe("The Test Dummy component", () => {
  const testDummy = mount(TestDummy)

  it("Displays a counter", () => {
    expect(testDummy.text()).toContain('Count = 0')
  })
})