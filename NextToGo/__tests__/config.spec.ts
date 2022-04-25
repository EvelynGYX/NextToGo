import {config} from '../src/Config';

it('describes config', () => {
  expect(config.racingURL).toBe(
    'https://api.neds.com.au/rest/v1/racing/?method=nextraces&count=10',
  );
});
