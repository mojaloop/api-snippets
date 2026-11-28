const XLifecycle = {
  type: 'string',
  enum: ['development', 'staging', 'production'],
  description: 'The lifecycle stage of the API.',
};

module.exports = function xLifecyclePlugin() {
  return {
    id: 'x-lifecycle',
    typeExtension: {
      oas3(types) {
        return {
          ...types,
          Info: {
            ...types.Info,
            properties: {
              ...types.Info.properties,
              'x-lifecycle': XLifecycle,
            },
          },
        };
      },
    },
  };
};
