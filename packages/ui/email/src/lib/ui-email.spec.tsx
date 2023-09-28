import { render } from '@testing-library/react';

import UiEmail from './ui-email';

describe('UiEmail', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UiEmail />);
    expect(baseElement).toBeTruthy();
  });
});
