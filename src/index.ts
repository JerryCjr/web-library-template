const testAsyncFunc = async (): Promise<number> => {
  return Promise.resolve(1);
};
async function main(): Promise<string> {
  const text = 'Hello world!';
  return Promise.resolve(text);
}
export { main, testAsyncFunc };
