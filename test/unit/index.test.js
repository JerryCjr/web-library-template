import { main, testAsyncFunc } from '../../src/index.ts';

describe('index_test', function () {
  before(function () {
    // 在本区块的所有测试用例之前执行
  });

  after(function () {
    // 在本区块的所有测试用例之后执行
  });

  beforeEach(function () {
    // 在本区块的每个测试用例之前执行
  });

  afterEach(function () {
    // 在本区块的每个测试用例之后执行
  });

  it('should_be_return_correctly', async () => {
    let text = await main();
    let test = await testAsyncFunc();
    // let text = main();
    expect(text).to.be.equal('Hello world!');
    expect(test).to.be.equal(1);
  });
});
