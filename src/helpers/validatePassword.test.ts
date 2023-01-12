import { validatePassword } from './validatePassword';
jest.mock('react-i18next', () => ({
  // this mock makes sure any components using the translate hook can use it without a warning being shown
  useTranslation: () => {
    return {
      t: (str: string) => str,
      i18n: {
        changeLanguage: () => new Promise(() => {}),
      },
    };
  },
}));
describe('test validatePassword function', () => {
  it('formatTime method to be defined', () => {
    expect(validatePassword).toBeDefined();
  });
  it('check if no password should return an amty conditions', () => {
    const result = validatePassword({
      password: '',
      email: 'nvestorind30@testers.dinar.sa',
    });
    expect(result.conditions).toEqual([]);
  });
  it('check if function validation is fine ', () => {
    const result = validatePassword({
      password: 'Dinartest1%',
      email: 'Investorind30@testers.dinar.sa',
    });
    expect(result.isValid).toBeTruthy();
  });
});
