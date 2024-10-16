import bcrypt from 'bcrypt'

/**
 * Authenticator class for managing password hashing and verification.
 */
class Authenticator {

  /**
   * Creates an instance of the Authenticator class.
   * @param {number} saltRounds - The number of salt rounds for hashing (default is 10).
   */
  constructor(saltRounds = 10) {
    this.saltRounds = saltRounds
  }

  /**
   * Hashes a given password using bcrypt.
   * @param {string} password - The password to hash.
   * @returns {Promise<string>} - A promise that resolves to the hashed password.
   */
  async hash(password) {
    const salt = await bcrypt.genSalt(this.saltRounds)
    const hash = await bcrypt.hash(password, salt)
    return hash
  }

  /**
   * Checks if a given password matches a stored password digest.
   * @param {string} password - The password to check.
   * @param {string} password_digest - The stored password digest to compare against.
   * @returns {Promise<boolean>} - A promise that resolves to true if the password matches, otherwise false.
   */
  async check(password, password_digest) {
    const match = await bcrypt.compare(password, password_digest)
    return match
  }

}

export default Authenticator