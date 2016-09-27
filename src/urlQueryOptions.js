function createUrlQueryOptions() {
  // default options
  return {
    // add in `props.params` from react-router to the url object
    addRouterParams: true,

    // use this history if no history is specified
    history: undefined,

    // reads in location from react-router-redux if available and passes it
    // to the reducer in the urlQueryMiddleware
    readRoutingFromStore: true,
  };
}

export default createUrlQueryOptions();
