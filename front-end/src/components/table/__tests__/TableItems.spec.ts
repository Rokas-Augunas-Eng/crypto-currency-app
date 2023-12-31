import { expect, it, describe } from 'vitest';
import { mount } from '@vue/test-utils';
import TableItems from '@/components/table/TableItems.vue';

const items = {
  id: 1,
  symbol: '$',
  logo: 'logo',
  name: 'Ethereum',
  quote: {
    USD: {
      price: 2500.5678,
      volume_24h: 987654321,
      percent_change_24h: -0.45,
    },
  },
};

describe('TableItems', () => {
  it('displays the cryptocurrency name', () => {
    const wrapper = mount(TableItems, {
      propsData: { items },
    });

    expect(wrapper.find('.table-data:nth-child(2)').text()).toBe(items.name);
  });

  it('displays the percentage change', () => {
    const wrapper = mount(TableItems, {
      propsData: { items },
    });

    expect(wrapper.find('.table-data:nth-child(5)').text()).toBe(
      `${items.quote.USD.percent_change_24h}%`
    );
  });
});
