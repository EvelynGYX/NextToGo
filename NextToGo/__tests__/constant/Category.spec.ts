import Category from '../../src/constants/Category';

it('describes Category', () => {
  expect(Category.Horse).toEqual('4a2788f8-e825-4d36-9894-efd4baf1cfae');
  expect(Category.Greyhound).toEqual('9daef0d7-bf3c-4f50-921d-8e818c60fe61');
  expect(Category.Harness).toEqual('161d9be2-e909-4326-8c2c-35ed71fb460b');
});
