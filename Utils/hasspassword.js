import bcrypt from 'bcryptjs';

const hashPassword = async (password) => {
  const salt = 15;

  try {
    const hassPassword = await bcrypt.hash(password, salt);
    return hassPassword;
  } catch (error) {
    console.error(error);
  }
};

const checkPassword = async (password, hassPassword) => {
  try {
    const check = await bcrypt.compare(password, hassPassword);
    return check;
  } catch (error) {
    console.error(error);
  }
};

export { hashPassword, checkPassword };
