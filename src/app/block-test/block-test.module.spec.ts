import { BlockTestModule } from './block-test.module';

describe('BlockTestModule', () => {
  let blockTestModule: BlockTestModule;

  beforeEach(() => {
    blockTestModule = new BlockTestModule();
  });

  it('should create an instance', () => {
    expect(blockTestModule).toBeTruthy();
  });
});
