const isObjectInstanceOfInterface = <T>(object: any, keyword: string): object is T => {
  return object instanceof Object && keyword in object;
};

export default isObjectInstanceOfInterface;
