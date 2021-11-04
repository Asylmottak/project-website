/**
 * Class for providing helper functions
 */
class Functions {
  /**
   * Redirects user to provided url
   * @param {string} url - The url that the user should be redirected
   */
  public redirect = (url: string): void => {
    window.location.href = url; // Redirect user to url
  };
}

// Export class instance
const UtilFunctions = new Functions();
export default UtilFunctions;
