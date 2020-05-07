import * as _bcrypt from 'bcrypt';

const saltRounds = 10;

/**
 * Realiza a criptografia da senha
 */
export const bcrypt = (value): string => {
    return _bcrypt.hashSync(value, saltRounds);
};

/**
 * Realiza a comparação da senha criptografada
 */
export const compareHash = (value, hash): boolean => {
    return _bcrypt.compareSync(value, hash);
};