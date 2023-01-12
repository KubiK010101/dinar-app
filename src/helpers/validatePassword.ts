import passwordValidator from 'password-validator';
import { useTranslation } from 'react-i18next';
const schema = new passwordValidator();

type ValidationsTypes = 'min' | 'max';
type SchemaType = {
  validation: ValidationsTypes;
  arguments: number;
  message: string;
};
schema
  .is()
  .min(8) // Minimum length 8
  .is()
  .max(100) // Maximum length 100
  .is()
  .not()
  .oneOf(['Passw0rd', 'Password123']); // Blacklist these values

export const validatePassword = ({ password, email }: { password: string; email?: string }) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { t } = useTranslation();
  const schemaValidation = schema.validate(password, { details: true });
  const validations: Array<SchemaType> = Array.isArray(schemaValidation) ? schemaValidation : [];
  const isValid = (type: ValidationsTypes) => !validations.find(row => row.validation === type);
  const isSameEmail = email?.split('@').find(text => password.includes(text)) ? true : false;
  console.log('isSameEmailisSameEmail', email, email?.split('@'));
  const conditions: { isValid: boolean; message: string }[] = [
    { isValid: isValid('min'), message: t('validateRegisterPassword.short') },
    { isValid: !isSameEmail, message: t('validateRegisterPassword.sameMail') },
  ];
  const count = conditions.reduce((prev, curr) => prev + (curr.isValid ? 1 : 0), 0);

  return {
    conditions: !password ? [] : conditions,
    isValid: count === 2,
    strength: (1 / 2) * count,
  };
};
