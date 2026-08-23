describe('API', () => {

    it('should use "filled" as default variant');

    it('should use "primary" as default color');

    it('should use "md" as default size');

    it('should use "button" as default type');

    it('should not be disabled');

    it('should not be loading');

});

describe('Accessibility', () => {

    it('should render a native button');

    it('should apply disabled attribute');

    it('should set aria-busy while loading');

    it('should expose type attribute');

});

describe('Content projection', () => {

    it('should render projected label');

    it('should render projected prefix');

    it('should render projected suffix');

});

describe('Interaction', () => {

    it('should emit click');

    it('should not emit click when disabled');

    it('should not emit click while loading');

});

describe('Rendering', () => {

    it('should expose data-size');

    it('should expose data-color');

    it('should expose data-variant');

    it('should expose data-loading');

});

describe('Regression', () => {

  it('should preserve button width while loading');

  it('should keep projected content in the DOM');

});
