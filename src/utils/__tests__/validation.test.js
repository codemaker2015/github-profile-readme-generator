import { isGitHubUsernameValid, isMediumUsernameValid, isTwitterUsernameValid } from '../validation';

describe('validation', () => {
  it('isGitHubUsernameValid', () => {
    expect(isGitHubUsernameValid('Lorem ipsum dolor sit amet, consectetur adipiscing elit')).toBe(false);
    expect(isGitHubUsernameValid('codemaker2015')).toBe(true);
  });

  it('isMediumUsernameValid', () => {
    expect(isMediumUsernameValid('codemaker2015')).toBe(false);
    expect(isMediumUsernameValid('@codemaker2015')).toBe(true);
  });

  it('isTwitterUsernameValid', () => {
    expect(isTwitterUsernameValid('Lorem ipsum dolor sit amet, consectetur adipiscing elit')).toBe(false);
    expect(isTwitterUsernameValid('codemaker2015')).toBe(true);
  });
});
