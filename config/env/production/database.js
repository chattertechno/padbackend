module.exports = ({ env }) => ({
    connection: {
      client: 'mysql',
      connection: {
        host: env('DATABASE_HOST', '191.96.56.52'),
        port: env.int('DATABASE_PORT', 3306),
        database: env('DATABASE_NAME', 'u526627070_backend'),
        user: env('DATABASE_USERNAME', 'u526627070_backend'),
        password: env('DATABASE_PASSWORD', 'Backend11!'),
        ssl: env.bool('DATABASE_SSL', true),
      },
    },
  });
  