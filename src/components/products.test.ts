import { mount } from '@vue/test-utils'
import { expect, test } from 'vitest'
import ProductCard from './ProductCard.vue'

test("mount ProductCard component", () => {
  expect(ProductCard).toBeTruthy();
  const wrapper = mount(ProductCard,{
    props:{
      data: {},
      hideCartButton: false
    },
  });

  expect(wrapper.props().hideCartButton).toBe(false);
})