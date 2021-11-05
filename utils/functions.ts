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

  /**
   * Copies an object without reference
   * @param {any} obj - The object that should be copied
   * @return {any}    - The object instance without reference
   */
  public copyObjectWithoutRef = (obj: any): any => {
    return JSON.parse(JSON.stringify(obj));
  };
}

// Export class instance
const UtilFunctions = new Functions();
export default UtilFunctions;
