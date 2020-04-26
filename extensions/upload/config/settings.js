if (process.env.NODE_ENV === 'production') {
  module.exports = {
    provider: 'aws-s3',
    providerOptions: {
      access_key_id: process.env.AWS_ACCESS_KEY_ID,
      secret_access_key: process.env.AWS_SECRET_ACCESS_KEY,
      region: process.env.AWS_REGION,
      params: {
        Bucket: process.env.AWS_BUCKET,
      },
    },
  };
} else {
  // to use the default local provider you can return an empty configuration
  module.exports = {};
}
