import bcrypt from "bcrypt";

const comparePasswords = async (hashPassword, password)=>{
    const compare = await bcrypt.compare(password, hashPassword);
    return compare;
}

export {comparePasswords}